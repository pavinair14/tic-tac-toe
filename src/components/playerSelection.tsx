import { useGameState, type Player } from "../state/gameState"

export const PlayerSelection = () => {
    const { setPlayer, setVsAI, vsAI } = useGameState(state => state);

    const choosePlayer = (player: Player) => {
        setPlayer(player)
    }

    const chooseVSAI = (isAIChosen: boolean) => {
        setVsAI(isAIChosen)
    }

    return (
        <div>
            <h2>Choose number of players:</h2>
            <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => chooseVSAI(true)}>1</button>
            <button className="px-4 py-2 bg-purple-500 text-white rounded" onClick={() => chooseVSAI(false)}>2</button>
            {vsAI && <h2>You will be playing against AI</h2>}
            <h2>Choose your player:</h2>
            <button onClick={() => choosePlayer("X")}>X</button>
            <button onClick={() => choosePlayer("O")}>O</button>
        </div>
    )
}