// import that secure hash algorithm from the crypto-js package
import * as sha256 from 'crypto-js/sha256';

// requirements
import Secret from './Secret';

/*
BLOCK:
- INDEX = number // position in the chain
- TIMESTAMP = timestamp // when block was added to the chain sometime after previous hash
- DATA = "the private thing" // SECRET up to 1MB chars
- PREVIOUS_HASH = "48y3fuhfo437hf3fuh..." // sum of previous block
- HASH = "4fg30q87fgublfa839..." // sum of current block
*/

// create a JavaScript class to represent a Block
export default class Block {
  index: number;
  timestamp: number;
  data: string;
  previousHash: string;
  hash: string;

  constructor(index: number, timestamp: number, data: Secret, previousHash: string | undefined) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data.toString();
    this.previousHash = previousHash || "0";
    this.hash = this.generateHash();
  }

  generateHash() {
    return sha256(`${this.index}:${this.timestamp}:${this.previousHash}:${this.data}`).toString()
  }
}