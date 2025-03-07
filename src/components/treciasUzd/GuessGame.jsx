import { useEffect, useRef, useState } from "react"
import GuessForm from "./GuessForm";
import Message from "./Message";

export default function GuessGame() {
    const [random, setRandom] = useState(-1)
    const [status, setStatus] = useState("")
    const [attempts, setAttempts] = useState(0)

    const guessNumber = value => {
        if(value > random) setStatus("Actual number is lower than guessed number")
        else if(value < random) setStatus("Actual number is higher than guessed number")
        else setStatus("Correct!")

        setAttempts(attempt => attempt + 1)
    }

    useEffect(() => {
        generateRandomNumber()
    }, [])

    const resetGame = () => {
        generateRandomNumber();
        setAttempts(0)
        setStatus("")
    }

    const generateRandomNumber = () => {
        const newRandom = Math.floor(Math.random() * 100) + 1
        console.log(newRandom)
        setRandom(newRandom)
    }


    return (
        <>
            <h2>Guessing game</h2>
            <GuessForm guessNumber={guessNumber}></GuessForm>
            <Message gameStatus={{'status': status, 'attempts': attempts}}></Message>
            <button onClick={() => resetGame()}>Reset game</button>
        </>
    )
}