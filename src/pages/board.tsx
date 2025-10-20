import { useGameState } from "../state/gameState"

export const Board = () => {

    const { board, makeMove, winner } = useGameState(state => state);


    return (
        <div className="grid grid-cols-3 gap-2">
            {board.map((row, rowIndex) => {

                return (
                    <button key={rowIndex}
                        className="w-20 h-20 text-5xl border border-gray-400 flex items-center justify-center hover:bg-gray-100"
                        onClick={() => makeMove(rowIndex)}
                        disabled={winner !== null}
                    >
                        {row}
                    </button>
                )
            })}
        </div>
    )
}