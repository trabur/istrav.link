// requirements
import Block from './Block'
import Link from './Link'
import Secret from './Secret'
import User from './User'

/*
CHAIN:
- A machine that produces information // SECRET(LINK, BLOCK) // generate fake and genuine data
- A machine that encodes information // ENIGMA(1,112,064 chars x 7 spherical-rotor) = CODE
- A machine that shreds information // XOR(KEY, CODE) for [parity1, parity2] then destroy key & code copy
- A machine that transfers information // DB[parity1, parity2, ...] = astro sized shared database over websockets using TCP/IP
- A machine that assembles information // MATCH(parity1, parity2) for XOR(KEY, CODE) then destroy parity copies
- A machine that decodes information // DEIGMA(1,112,064 chars x 7 spherical-rotor) = CODE
- A machine that consumes information // SECRET(LINK, BLOCK) // obtain fake and genuine data
*/

// create a JavaScript class to represent a Blockchain
export default class Blockchain {
  id: string;
  blockchain: Array<Block>;

  constructor(id) {
    this.id = id
    this.blockchain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    let users = [
      new User("A"),
      new User("B"),
    ]
    let data = new Secret(0, "1", users[0], users[1])
    return new Block(0, 0, data, "0");
  }

  getTheLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  // for when we just have a list of blocks and a list of links
  loadMatching(links: Array<Link>, blocks: Array<Block>) {
    // find links by blockchain id
    let bcLinks = links.filter((link) => {
      return link.id === this.id
    })
    // find blocks in links
    bcLinks.forEach((link, index) => {
      // match sums
      let linkBlock = blocks.filter((block) => {
        return link.hash === block.hash
      })[0]
      // connect
      if (linkBlock) {
        this.addNewBlock(linkBlock)
      }
    })
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
