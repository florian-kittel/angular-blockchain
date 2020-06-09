import { Component, OnInit, Input } from '@angular/core';
import { Block } from '../component.interfaces';

@Component({
  selector: 'app-block-view',
  templateUrl: './block-view.component.html',
  styleUrls: ['./block-view.component.scss']
})
export class BlockViewComponent implements OnInit {

  @Input() public block: Block;
  @Input() public index: number;
  @Input() public set selectedBlock(blockHash) {
    this.isSelectedBlock = blockHash === this.block.hash;
  }

  public get selectedBlock() {
    return this.block.hash;
  }

  public isSelectedBlock = false;
  public shadowType = 'shadow-sm';

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
