import { useNavigate } from "react-router"
import { useGameState } from "../state/gameState";
import { useState } from "react";

export const Home = () => {
    const navigate = useNavigate();
    const { setPlayer, setVsAI, vsAI, aiPlayer, currentPlayer } = useGameState(state => state);
    const [isPlayerChosen, setIsPlayerChosen] = useState<null | Boolean>(null);

    const chooseVSAI = (isAIChosen: boolean) => {
        setIsPlayerChosen(true);
        setVsAI(isAIChosen);
    }


    return (
        <div className="flex flex-col items-center justify-center">
            <div>
                <p className="text-3xl font-medium">Choose number of players:</p>
                <div className="flex py-5 justify-center">
                    <button className={`px-4 py-2 w-20 h-20 bg-sky-950 text-white text-2xl rounded mr-4 cursor-pointer ${isPlayerChosen && !vsAI ? 'bg-slate-600' : "bg-sky-950"}`} onClick={() => chooseVSAI(true)}>1</button>
                    <button className={`px-4 py-2 w-20 h-20 text-white text-2xl rounded cursor-pointer ${vsAI && isPlayerChosen ? 'bg-slate-600' : 'bg-sky-950'}`} onClick={() => chooseVSAI(false)}>2</button>
                </div>
            </div>

            <h2 className={`text-4xl text-sky-950 ${vsAI ? "visible" : "invisible"}`}>You will be playing against AI !!</h2>

            {isPlayerChosen && <>
                <div>
                    <p className="text-3xl font-medium mt-4">Choose your player:</p>
                    <div className="flex py-5 justify-center">
                        <button className="px-4 py-2 w-20 h-20 bg-sky-950 text-white text-2xl rounded mr-4 cursor-pointer" onClick={() => setPlayer("X")}>X</button>
                        <button className="px-4 py-2 w-20 h-20 bg-sky-950 text-white text-2xl rounded cursor-pointer" onClick={() => setPlayer("O")}>O</button>
                    </div>
                </div>

                {currentPlayer !== null && <p className="text-2xl text-sky-950 pb-4">You are player {currentPlayer}</p>}

                <button
                    className={`px-4 py-2 w-fit p-4 bg-sky-950 text-white text-2xl rounded cursor-pointer disabled:bg-slate-600`}
                    onClick={() => navigate("/game")}
                    disabled={aiPlayer === null}
                >
                    Let's begin
                </button>
            </>}
        </div>
    )
}