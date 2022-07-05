import { Block, Blockchain, Link, Secret } from '../src/index'

let blockchains = [
  new Blockchain("@username"),
  new Blockchain("/platform/"),
]

let secrets = [
  new Secret(
    1, // one time pad
    "hello there", // encrypt/decrypt
    "Joe", // from
    "John" // to
  ),
  new Secret(2, "hello back", "John", "Joe"),
  new Secret(3, "goodbye", "Joe", "John"),
  new Secret(4, "ok, cya", "John", "Joe"),
  new Secret(1, "test", "a", "b"),
  new Secret(2, "123", "b", "a"),
]

let blocks = [
  new Block(
    1, // index
    1000, // when
    secrets[0], // data
    undefined // previous hash
  ),
  new Block(2, 2000, secrets[1], undefined),
  new Block(3, 3000, secrets[2], undefined),
  new Block(4, 4000, secrets[3], undefined),
  new Block(1, 1000, secrets[4], undefined),
  new Block(2, 2000, secrets[5], undefined),
]

let links = [
  new Link(
    blockchains[0], // for bc id
    blocks[0] // for block hash
  ),
  new Link(
    blockchains[0],
    blocks[1]
  ),
  new Link(
    blockchains[0],
    blocks[2]
  ),
  new Link(
    blockchains[0],
    blocks[3]
  ),
  new Link(
    blockchains[1],
    blocks[4]
  ),
  new Link(
    blockchains[1],
    blocks[5]
  ),
]

// reports
console.log('blocks', JSON.stringify(blocks, null, 2))
console.log('links', JSON.stringify(links, null, 2))
console.log('blockchains', JSON.stringify(blockchains, null, 2))

// join together
blockchains.forEach((blockchain, index) => {
  blockchain.loadMatching(links, blocks)
})
console.log('join', JSON.stringify(blockchains, null, 2))