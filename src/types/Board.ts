import {Cell} from "./Cell";

export type Board = {
    readonly width: number;
    readonly height: number;
    readonly cells: ReadonlyArray<Cell>;
}
