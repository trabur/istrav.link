// shared lib
import { StringOfLength, stringOfLength } from '../lib/StringOfLength';

// requirements
import User from './User';

/*
SECRET:
- MESSAGE = "the private thing" // up to 2MB chars
- SENDER = username // up to 64 chars
- RECIPIENT = username // up to 64 chars
*/

// create a JavaScript class to represent a Secret
export default class Secret {
  message: StringOfLength<1,1572864>; // 1.5MB
  sender: StringOfLength<1,64>;
  recipient: StringOfLength<1,64>;

  constructor(message: string, sender: User, recipient: User) {
    this.message = stringOfLength(message, 1, 1572864);
    this.sender = stringOfLength(sender.username, 1, 64);
    this.recipient = stringOfLength(recipient.username, 1, 64);
  }

  toString() {
    return JSON.stringify(this)
  }
}