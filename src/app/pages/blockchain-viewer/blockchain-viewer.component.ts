import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../../core/blockchain.service';
import { Block } from '../../shared/component.interfaces';

@Component({
  selector: 'app-blockchain-viewer',
  templateUrl: './blockchain-viewer.component.html',
  styleUrls: ['./blockchain-viewer.component.scss']
})
export class BlockchainViewerComponent implements OnInit {

  public blocks = [];
  public selectedBlock = '';
  public selectedBlockIndex = null;

  public transactions = [];

  constructor(private blockchainService: BlockchainService) {
    this.blocks = blockchainService.getBlocks();
  }

  ngOnInit(): void {
    console.log(this.blockchainService.blockchainInstance);
  }

  showTransactions(block: Block, index: number) {
    this.selectedBlock = block.hash;
    this.selectedBlockIndex = index;

    if (typeof block.transactions === 'string') {
      this.transactions = [];
      return;
    }

    this.transactions = block.transactions;
  }

}
