import { Certificate } from "crypto";
import { Cell } from "./cell";

export enum PieceTypes {
  "king",
  "pawn",
  "knight",
  "bishop",
  "queen",
  "rook",
}

export class Movement {
  public static getAvailableCells(type: PieceTypes, cell: Cell) {
    let accessableCells = []
    switch (type) {
      case PieceTypes.king:
        for(let c = cell.column-1;c<=cell.column+1;c++)
        for(let r = cell.row-1;r<=cell.row+1;r++){
          if(r==cell.row && c ==cell.column){
            continue;
          }
          accessableCells.push(new Cell(c,r))
        }
        break;
      case PieceTypes.pawn:
        break;
      case PieceTypes.knight:
        break;
      case PieceTypes.bishop:
        break;
      case PieceTypes.queen:
        break;
      case PieceTypes.rook:
        break;
    }
  }
}
