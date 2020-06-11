import { Component, OnInit } from '@angular/core';
import { KeystoreService } from '../../core/keystore.service';
import { Keys } from '../../core/keys.interface';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  public keys = {} as Keys;

  constructor(private keystoreService: KeystoreService) { }

  ngOnInit(): void {
    this.keys = this.keystoreService.getKeys();
  }

  geneateNewWallet() {
    this.keys = this.keystoreService.generateKeys();
    console.log(this.keys);
  }
}
