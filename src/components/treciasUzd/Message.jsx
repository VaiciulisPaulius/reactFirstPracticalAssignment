export default function Message({gameStatus}) {
    return (
        <>
            <p>{gameStatus.status}</p>
            <p>Attempts: {gameStatus.attempts}</p>
        </>
    )
}