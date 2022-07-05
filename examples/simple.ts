import { Block, Blockchain } from '../src/index'

let logCoin = new Blockchain();
console.log("mining logcoin in progress...");

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

logCoin.addNewBlock(
  new Block(
    1, // index
    1000, // when
    secret1, // data
    undefined // previous hash
  )
);

logCoin.addNewBlock(
  new Block(2, 2000, secret2, undefined)
);
logCoin.addNewBlock(
  new Block(3, 3000, secret3, undefined)
);

console.log(JSON.stringify(logCoin, null, 5))
