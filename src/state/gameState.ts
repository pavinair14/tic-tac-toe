import { create } from "zustand";
import { getWinner } from "../utils/gameLogic";
import { findBestMove } from "../utils/aiLogic";

export type Player = "X" | "O" | null;
export type CellValue = Player | null;


type GameStateType = {
    board: CellValue[];
    currentPlayer: Player;
    aiPlayer: Player | null;
    winner: null | Player | 'Draw';
    vsAI: boolean;
    setPlayer: (player: Player) => void
    setVsAI: (value: boolean) => void
    makeMove: (index: number) => void
    restartGame: () => void
}

export const useGameState = create<GameStateType>((set, get) => ({
    board: Array(9).fill(null),
    currentPlayer: null,
    aiPlayer: null,
    vsAI: false,
    winner: null,
    setPlayer: (player) => set({
        currentPlayer: player,
        aiPlayer: player === 'X' ? 'O' : 'X'
    }),
    setVsAI: (value) => set({ vsAI: value }),
    makeMove: (index) => {
        const { board, aiPlayer, vsAI, currentPlayer } = get();

        const newBoard = [...board];
        newBoard[index] = currentPlayer;

        const winner = getWinner(newBoard);
        if (winner) {
            return set({ board: newBoard, winner });
        }

        const nextPlayer = currentPlayer === "X" ? "O" : "X";
        set({ board: newBoard, currentPlayer: nextPlayer });


        // AI move only if vs AI and AI's turn
        if (vsAI && nextPlayer === aiPlayer) {
            setTimeout(() => {
                const aiMove = findBestMove(newBoard, aiPlayer);
                get().makeMove(aiMove);
            }, 300);
        }
    },
    restartGame: () => set({ board: Array(9).fill(null), currentPlayer: "X", winner: null }),
}));