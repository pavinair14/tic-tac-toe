import { useGameState } from "../state/gameState"

export const Board = () => {
    const { board, makeMove, winner } = useGameState(state => state);

    return (
        <div className="grid grid-cols-3 gap-2">
            {board.map((row, rowIndex) => (
                <button key={rowIndex}
                    className="w-20 h-20 text-5xl border bg-sky-950 cursor-pointer text-white rounded border-sky-800 flex items-center justify-center hover:bg-sky-900 disabled:bg-slate-600"
                    onClick={() => makeMove(rowIndex)}
                    disabled={winner !== null}
                >
                    {row}
                </button>
            ))}
        </div>
    )
}