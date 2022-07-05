// shared lib
import { StringOfLength, stringOfLength } from '../lib/StringOfLength';

/*
SECRET:
- OTP = timestamp // when sender submitted secret
- MESSAGE = "the private thing" // up to 2MB chars
- SENDER = username // up to 64 chars
- RECIPIENT = username // up to 64 chars
*/

// create a JavaScript class to represent a Secret
export default class Secret {
  otp: number;
  message: StringOfLength<1,1572864>; // 1.5MB
  sender: StringOfLength<1,64>;
  recipient: StringOfLength<1,64>;

  constructor(otp: number, message: string, sender: string, recipient: string) {
    this.otp = otp;
    this.message = stringOfLength(message, 1, 1572864);
    this.sender = stringOfLength(sender, 1, 64);
    this.recipient = stringOfLength(recipient, 1, 64);
  }
}