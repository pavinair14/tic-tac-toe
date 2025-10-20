import { useNavigate } from "react-router";
import { useGameState } from "../state/gameState"

export const GameStatus = () => {
    const { winner, currentPlayer, restartGame } = useGameState(state => state);
    const navigate = useNavigate();

    return (
        <div>
            {winner ? (
                <h2 className="text-2xl">
                    {winner === 'Draw' ? "It's a Draw!" : `Winner: ${winner}`}
                </h2>
            ) : (
                <h2 className="text-2xl">Current Player: {currentPlayer}</h2>
            )}
            <button onClick={restartGame} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">Restart</button>
            <button onClick={() => {
                restartGame();
                navigate("/");
            }} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">Reset</button>
        </div>
    )
}