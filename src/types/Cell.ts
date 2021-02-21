export type Cell = {
    readonly isOpened: boolean;
    readonly hasMine: boolean;
    readonly surroundingMines: number;
    readonly isFlagged: boolean;
}
