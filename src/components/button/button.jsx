import "./button.css"

const Button = (props) => {
    return <button className="button-form" type="submit">
        {props.innerText}
    </button>
}

export default Button;