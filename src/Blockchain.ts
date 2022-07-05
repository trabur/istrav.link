// requirements
import Block from './Block'

// create a JavaScript class to represent a Blockchain
export default class Blockchain {
  blockchain: Array<Block>;

  constructor() {
    this.blockchain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, 0, "A", "0");
  }

  getTheLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }
  
  addNewBlock(newBlock: Block) {
    newBlock.previousHash = this.getTheLatestBlock().hash;
    newBlock.hash = newBlock.generateHash();
    this.blockchain.push(newBlock);
  }

  // testing the integrity of the chain
  validateChainIntegrity() {
    for (let i = 1; i < this.blockchain.length; i++) {
      const currentBlock = this.blockchain[i];
      const previousBlock = this.blockchain[i-1];
      if (currentBlock.hash !== currentBlock.generateHash()) {
        return false;
      }
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
      return true;
    }
  }
} 
