export interface Block {
  hash: string;
  nonce: number;
  previousHash: number;
  timestamp: number;
  transactions: string | Transaction[];
}

export interface Transaction {
  amount: number;
  fromAddress: null | string;
  toAddress: string;
}
