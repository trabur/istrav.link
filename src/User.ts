// shared lib
import { StringOfLength, stringOfLength } from '../lib/StringOfLength';

// create a JavaScript class to represent a User
export default class User {
  username: StringOfLength<1,64>;

  constructor(username: string) {
    this.username = stringOfLength(username, 1, 64)
  }
}