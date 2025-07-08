import "../../styles/components/_button.scss"

interface Button{
    text: string;
}

export const WhiteButton = ({text}: Button) => {
    return (
        <button className="white-button">
            {text}
        </button>
    )
}

export const GreenButton = ({text}: Button) => {
    return (
        <button className="green-button">
            {text}
        </button>
    )
}
export const BlackButton = ({text}: Button) => {
    return (
        <button className="black-button">
            {text}
        </button>
    )
}

