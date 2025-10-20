import { useGameState } from "../state/gameState"

export const GameStatus = () => {
    const { winner, currentPlayer, restartGame } = useGameState(state => state);

    return (
        <div>
            {winner ? (
                <h2 className="text-2xl text-sky-950 py-5 text-center font-medium">
                    {winner === 'Draw' ? "It's a Draw!" : `Winner: ${winner}`}
                </h2>
            ) : (
                <h2 className="text-2xl text-center py-5 font-medium">Current Player: {currentPlayer}</h2>
            )}
            <button onClick={restartGame} className="px-4 py-2 w-fit bg-sky-950 text-white text-2xl rounded cursor-pointer mr-5">Restart Game</button>
            <button onClick={() => window.location.reload()} className="px-7 py-2 w-fit bg-sky-950 text-white text-2xl rounded cursor-pointer ">Reset</button>
        </div>
    )
}