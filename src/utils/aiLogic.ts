
import type { CellValue, Player } from '../state/gameState';
import { getWinner, getEmptyCells } from './gameLogic';

// AI logic using minimax
export function findBestMove(board: CellValue[], ai: Player): number {
    const human = ai === 'X' ? 'O' : 'X';
    const emptyIndexes = getEmptyCells(board);
    let bestMove = emptyIndexes[0];
    let bestOutcome = -Infinity;

    for (const move of emptyIndexes) {
        const newBoard = [...board];
        newBoard[move] = ai;
        const outcome = simulate(newBoard, false, ai, human);
        if (outcome > bestOutcome) {
            bestOutcome = outcome;
            bestMove = move;
        }
    }

    return bestMove;
}

function simulate(board: CellValue[], isAITurn: boolean, ai: Player, human: Player): number {
    const winner = getWinner(board);
    if (winner === ai) return 1;
    if (winner === human) return -1;
    if (winner === 'Draw') return 0;

    const current = isAITurn ? ai : human;
    const outcomes = getEmptyCells(board).map((i) => {
        const nextBoard = [...board];
        nextBoard[i] = current;
        return simulate(nextBoard, !isAITurn, ai, human);
    });

    return isAITurn ? Math.max(...outcomes) : Math.min(...outcomes);
}
