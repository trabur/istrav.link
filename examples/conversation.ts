import { Block, Blockchain, Link, User, Secret } from '../src/index'

let people = [
  new User('joe'),
  new User('john')
]

// code
let joe = people[0]
let john = people[1]
joe.sendMessage(john, 'hello there')
john.sendMessage(joe, 'hello back')
john.sendMessage(joe, 'hello back 2')

// reports
console.log(joe.messagesWith(john))
// -or-
// console.log(john.messagesWith(joe))

console.log('channels', joe.channels)