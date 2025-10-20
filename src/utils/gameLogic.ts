import type { CellValue, Player } from "../state/gameState";

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]           // diagonals
];

export const getWinner = (board: (Player | null)[]) => {
    for (const [a, b, c] of winningCombos) {

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]; // Winner
        }
    }
    //checks if all boxes are filled if yes it's draw otherwise returns null
    return board.every(cell => cell !== null) ? 'Draw' : null;
}


export const getEmptyCells = (board: CellValue[]): number[] => (
    board
        .map((v, i) => (v === null ? i : null))
        .filter((v): v is number => v !== null)
)