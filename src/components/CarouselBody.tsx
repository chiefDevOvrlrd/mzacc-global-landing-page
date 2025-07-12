"use client"

import Carousel from "./ui/Carousel";

export default function CarouselDemo() {
  const slideData = [
    {
      title: "🔭 OUR VISION",
      note: "To become Africa’s most impactful tech ecosystem, building solutions that transcend borders, empower people, and scale globally — one innovation at a time.",
    },
    {
      title: "🚀 OUR MISSION",
      note: "To solve global and local problems through intelligent systems, digital infrastructure, ethical leadership, and collaborative platforms — with sustainability, inclusivity, and excellence at our core.",
    },
  ]

  return (
    <div className="demo-container">
      <Carousel slides={slideData} />
    </div>
  )
}

//
// 
// 
//