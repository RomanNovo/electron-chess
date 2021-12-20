import { Component, OnInit } from '@angular/core';
import { Cell } from '../cell';

@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.scss']
})
export class MainboardComponent implements OnInit {

  fieldMatrix = [];

  constructor() {
    for(let c = 0;c<8;c++)
      for(let r = 0;r<8;r++){
        this.fieldMatrix[r][c] = new Cell(c,r)
      }
  }

  public getCell(str: string){
    const tmpArr = str.split('');
    let columnIndex = tmpArr[0].toUpperCase().charCodeAt(0) -  'A'.charCodeAt(0)
    let rowIndex = tmpArr[1]
    return this.fieldMatrix[rowIndex][columnIndex]
    return {rowIndex, columnIndex}
  }

  ngOnInit(): void {
  }

}
