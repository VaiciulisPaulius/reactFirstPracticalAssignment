import { useRef } from "react";

export default function GuessForm({ guessNumber }) {
    const inputRef = useRef()

    const guess = e => {
        e.preventDefault()

        const value = inputRef.current.value;
        guessNumber(value)
    }


    return (
        <form onSubmit={e => guess(e)}>
            <input type="number" ref={inputRef}></input>
            <button type="submit">Guess</button>
        </form>
    )
}