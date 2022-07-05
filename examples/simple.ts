import { Block, Blockchain } from '../src/index'

let isTravCoin = new Blockchain();
console.log("mining isTrav coin in progress...");

let secret1 = JSON.stringify({ 
  sender: "Frank Joseph",
  recipient: "LogRocket",
  quantity: 25
})

let secret2 = JSON.stringify({ 
  sender: "Frank Joseph",
  recipient: "LogRocket",
  quantity: 25
})

let secret3 = JSON.stringify({ 
  sender: "Frank Joseph",
  recipient: "LogRocket",
  quantity: 25
})

isTravCoin.addNewBlock(
  new Block(
    1, // index
    1000, // when
    secret1, // data
    undefined // previous hash
  )
);

isTravCoin.addNewBlock(
  new Block(2, 2000, secret2, undefined)
);
isTravCoin.addNewBlock(
  new Block(3, 3000, secret3, undefined)
);

console.log(JSON.stringify(isTravCoin, null, 5))
