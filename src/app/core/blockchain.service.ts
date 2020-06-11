import { Injectable } from '@angular/core';

import { Blockchain } from 'node-blockchain/src/blockchain';
import * as elliptic from 'elliptic';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  public blockchainInstance = new Blockchain();
  public walletKeys = [];

  constructor() {
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.miningPendingTransactions('my-wallet-address');

    this.generateWalletKeys();

  }

  getBlocks() {
    return this.blockchainInstance.chain;
  }

  private generateWalletKeys() {
    const ec = new elliptic.ec('secp256k1');
    const key = ec.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex')
    });
  }
}
