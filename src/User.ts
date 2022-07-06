// shared lib
import { StringOfLength, stringOfLength } from '../lib/StringOfLength';

// requirements
import Block from './Block';
import Blockchain from './Blockchain';
import Secret from './Secret';

// create a JavaScript class to represent a User
export default class User {
  username: StringOfLength<1,64>;
  friendsList: Array<User> = []
  channels: Array<Blockchain> = []

  constructor(username: string) {
    this.username = stringOfLength(username, 1, 64)
  }

  addFriend (user: User) {
    this.friendsList.push(user)
  }

  removeFriend (user: User) {
    this.friendsList = this.friendsList.filter((friend) => {
      return friend.username !== user.username
    })
  }

  sendMessage (to: User, value: string) {
    // params
    let key = `@${this.username}->@${to.username}`

    // block data
    let secret = new Secret(
      value,
      this,
      to
    )

    // channel
    let blockchain = this.channels.filter((channel) => {
      return key === channel.id
    })[0]

    if (!blockchain) {
      // bc doesn't exist
      blockchain = new Blockchain(key)
      this.channels.push(blockchain)
    }

    // add message to blockchain
    let latest = blockchain.getTheLatestBlock()
    blockchain.addNewBlock(
      new Block(
        latest.index + 1,
        new Date().getTime(),
        secret,
        latest.hash
      )
    )

    // make sure user recieves secret
    to.recieveMessage(this, secret)
  }

  recieveMessage (from: User, value: Secret) {
    // params
    let key = `@${from.username}->@${this.username}`

    // channel
    let blockchain = this.channels.filter((channel) => {
      return key === channel.id
    })[0]

    if (!blockchain) {
      // bc doesn't exist
      blockchain = new Blockchain(key)
      this.channels.push(blockchain)
    }

    // add message to blockchain
    let latest = blockchain.getTheLatestBlock()
    blockchain.addNewBlock(
      new Block(
        latest.index + 1,
        new Date().getTime(),
        value,
        latest.hash
      )
    )
  }

  messagesFrom (user: User) {
    let channel = this.channels.filter((blockchain) => {
      return blockchain.id === `@${user.username}->@${this.username}`
    })[0]
    if (channel) {
      return channel.blockchain
    } else {
      return []
    }
  }

  messagesTo (user: User) {
    let channel = this.channels.filter((blockchain) => {
      return blockchain.id === `@${this.username}->@${user.username}`
    })[0]
    if (channel) {
      return channel.blockchain
    } else {
      return []
    }
  }

  messagesWith(user: User) {
    let conversation: Array<Block> = []
    conversation.push(...this.messagesFrom(user))
    conversation.push(...this.messagesTo(user))
    conversation = conversation.sort(({ timestamp: a }, { timestamp: b }) => a-b);
    return conversation
  }

  addChannel (blockchain: Blockchain) {
    this.channels.push(blockchain)
  }

  removeChannel (blockchain: Blockchain) {
    this.channels = this.channels.filter((channel) => {
      return channel.id !== blockchain.id
    })
  }
}