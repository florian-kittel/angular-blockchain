import { Injectable } from '@angular/core';
import { ec as EC } from 'elliptic';

import { Keygenerator } from 'node-blockchain/src/keygenerator';
import { Keys } from './keys.interface';

@Injectable({
  providedIn: 'root'
})
export class KeystoreService {
  public hasKeys = false;
  public walletIdentifier = 'myCoin:keys';

  private ec: any;
  private keys: Keys;

  constructor() {
    this.ec = new EC('secp256k1');
    this.keys = JSON.parse(localStorage.getItem(this.walletIdentifier)) || {} as Keys;

    if (this.keys.publicKey) {
      this.hasKeys = true;
    }
  }

  generateKeys() {
    if (!this.hasKeys) {

      const keygenerator = new Keygenerator();
      const keys = keygenerator.generate();

      localStorage.setItem(this.walletIdentifier, JSON.stringify(keys));
      this.hasKeys = true;

      return keys;
    } else {
      return this.keys;
    }
  }

  getKeys() {
    return this.keys;
  }

  getPublicKey() {
    return this.keys.publicKey;
  }

  getPrivateKey() {
    return this.keys.publicKey;
  }
}
