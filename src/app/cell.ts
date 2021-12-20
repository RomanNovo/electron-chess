import { Piece } from "./piece";

export enum CellColors {
  "black",
  "white",
}



export class Cell {
  column;
  row;
  color?: CellColors;
  piece?:Piece;

  constructor(column, row, attributes?) {
    this.column = column;
    this.row = row;
    this.color = (row + column) % 2 ? CellColors.black : CellColors.white;
  }
}
