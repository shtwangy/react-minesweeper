import {Board, Cell} from "../types";

export function initBoard(width: number, height: number): Board {
    return {
        width,
        height,
        cells: new Array<Cell>(width * height).fill({
            isOpened: false,
            hasMine: false,
            surroundingMines: 0,
            isFlagged: false,
        }),
    };
}
