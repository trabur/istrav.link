// shared lib
// import { StringOfLength, stringOfLength } from '../lib/StringOfLength';

// requirements
import Blockchain from "./Blockchain";
import Block from "./Block";

/*
LINK:
- ID = reference // block chain id
- HASH = random string // hash sum of the BLOCK
*/

// create a JavaScript class to represent a Link
export default class Link {
  id: string;
  hash: string;

  constructor(blockchain: Blockchain, block: Block) {
    this.id = blockchain.id;
    this.hash = block.hash;
  }

  toString() {
    return JSON.stringify(this)
  }
}