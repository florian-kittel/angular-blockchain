import { Component, OnInit, Input } from '@angular/core';
import { Block } from './block.interface';

@Component({
  selector: 'app-block-view',
  templateUrl: './block-view.component.html',
  styleUrls: ['./block-view.component.scss']
})
export class BlockViewComponent implements OnInit {

  @Input() public block: Block;

  constructor() { }

  ngOnInit(): void {
  }

  getColorCode(hash) {
    if (!hash) {
      return '000000';
    }

    return String(hash).substring(0, 6);
  }

}
