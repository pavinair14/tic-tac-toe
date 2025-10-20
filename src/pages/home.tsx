import { useNavigate } from "react-router"
import { PlayerSelection } from "../components/playerSelection"
import { useGameState } from "../state/gameState";

export const Home = () => {
    const navigate = useNavigate();
    const { aiPlayer } = useGameState(state => state);

    return (
        <div>
            <h1 className="text-sky-950"> Tic Tac Toe</h1>
            <PlayerSelection />
            <br />
            <button onClick={() => navigate("/game")} disabled={aiPlayer === null}>Let's start</button>
        </div>
    )
}