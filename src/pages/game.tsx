import { useNavigate } from "react-router";
import { Board } from "../components/board"
import { GameStatus } from "../components/gameStatus"
import { useEffect } from "react";
import { useGameState } from "../state/gameState";

export const Game = () => {
    const navigate = useNavigate();
    const { aiPlayer } = useGameState(state => state);

    useEffect(() => {
        // if AI not set => means player didn’t go through selection
        if (!aiPlayer) navigate('/', { replace: true });
    }, [aiPlayer, navigate]);

    return (
        <div className="flex flex-col items-center">
            <Board />
            <GameStatus />
        </div>
    )
}