import { Component, OnInit } from '@angular/core';
import { Cell } from '../cell';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent extends Cell implements OnInit {

  constructor() {
    super(1,1);
  }

  ngOnInit(): void {
  }

}
