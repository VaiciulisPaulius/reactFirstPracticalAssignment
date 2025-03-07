function Button({name, callback, argument}) {

    return (
        <button onClick={() => callback(argument)}>{name}</button>
    )
}

export default Button