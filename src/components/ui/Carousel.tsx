"use client"
import { IconArrowNarrowRight } from "@tabler/icons-react"
import type React from "react"
import { useState, useRef, useId, useEffect } from "react"
import "../../styles/components/_carousel.scss"

interface SlideData {
    title: string
    button: string
    src: string
}

interface SlideProps {
    slide: SlideData
    index: number
    current: number
    handleSlideClick: (index: number) => void
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
    const imageRef = useRef<HTMLDivElement>(null)

    const xRef = useRef(0)
    const yRef = useRef(0)
    const frameRef = useRef<number | null>(null)

    useEffect(() => {
        const animate = () => {
        if (!imageRef.current) return

        const x = xRef.current
        const y = yRef.current

        imageRef.current.style.setProperty("--x", `${x}px`)
        imageRef.current.style.setProperty("--y", `${y}px`)

        frameRef.current = requestAnimationFrame(animate)
        }

        frameRef.current = requestAnimationFrame(animate)

        return () => {
        if (frameRef.current) {
            cancelAnimationFrame(frameRef.current)
        }
        }
    }, [])

    const handleMouseMove = (event: React.MouseEvent) => {
        const el = imageRef.current
        if (!el) return

        const r = el.getBoundingClientRect()
        xRef.current = event.clientX - (r.left + Math.floor(r.width / 2))
        yRef.current = event.clientY - (r.top + Math.floor(r.height / 2))
    }

    const handleMouseLeave = () => {
        xRef.current = 0
        yRef.current = 0
    }

    const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.style.opacity = "1"
    }

    const { src, button, title } = slide
    const isActive = current === index

    return (
        <div className="slide">
            <li
                className={`slide__container ${isActive ? "slide__container--active" : "slide__container--inactive"}`}
                onClick={() => handleSlideClick(index)}
            >
                <div className="slide__wrapper">
                <div
                    ref={imageRef}
                    className="slide__image-section"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                    transform: isActive ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)" : "none",
                    }}
                >
                    <img
                    className={`slide__image ${isActive ? "slide__image--active" : "slide__image--inactive"}`}
                    alt={title}
                    src={src || "/placeholder.svg"}
                    onLoad={imageLoaded}
                    loading="eager"
                    decoding="sync"
                    />
                </div>

                <div className="slide__content-section">
                    <article className={`slide__content ${isActive ? "slide__content--active" : "slide__content--inactive"}`}>
                    <h2 className="slide__title">{title}</h2>
                    <button className="slide__button">{button}</button>
                    </article>
                </div>
                </div>
            </li>
        </div>
    )
}

interface CarouselControlProps {
  type: string
  title: string
  handleClick: () => void
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => {
  return (
    <button
      className={`carousel-control ${type === "previous" ? "carousel-control--previous" : ""}`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="carousel-control__icon" />
    </button>
  )
}

interface CarouselProps {
  slides: SlideData[]
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  const handlePreviousClick = () => {
    const previous = current - 1
    setCurrent(previous < 0 ? slides.length - 1 : previous)
  }

  const handleNextClick = () => {
    const next = current + 1
    setCurrent(next === slides.length ? 0 : next)
  }

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index)
    }
  }

  const id = useId()

  return (
    <div className="carousel" aria-labelledby={`carousel-heading-${id}`}>
      <ul
        className="carousel__slides"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide key={index} slide={slide} index={index} current={current} handleSlideClick={handleSlideClick} />
        ))}
      </ul>

      <div className="carousel__controls">
        <CarouselControl type="previous" title="Go to previous slide" handleClick={handlePreviousClick} />
        <CarouselControl type="next" title="Go to next slide" handleClick={handleNextClick} />
      </div>
    </div>
  )
}
