import "../../styles/components/_button.scss"

interface Button{
    text: string;
    link: string;
}

export const WhiteButton = ({text, link}: Button,) => {
    return (
        <a  href={`mailto:${link}`}>
            <button className="white-button">
                {text}
            </button>
        </a>
    )
}

export const GreenButton = ({text, link}: Button) => {
    return (
        <a  href={`mailto:${link}`}>
            <button className="green-button">
                {text}
            </button>
        </a>
    )
}
export const BlackButton = ({text, link}: Button) => {
    return (
        <a  href={`mailto:${link}`}>
            <button className="black-button">
                {text}
            </button>
        </a>
    )
}

