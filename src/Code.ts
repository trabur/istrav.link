import * as turf from '@turf/turf'

// shared lib
// import { StringOfLength, stringOfLength } from '../lib/StringOfLength';

/*
LINK:
- ID = reference // block chain id
- HASH = random string // hash sum of the BLOCK
*/

class Point {
  long: number;
  lat: number;

  constructor (array) {
    this.long = array[0];
    this.lat = array[1];
  }
}

// create a JavaScript class to represent a Code
export default class Code {
  validUnicode: number = 144697; // 144,697 characters
  validPoints: number = 1112064; // 1,112,064 character codes
  // kernel
  key: string; // unique charCode alphabet
  setting: Array<number>; // current charCode order
  // onion = [overlay, overlay, etc...]
  overlayKeys: Array<string>; // unique charCode alphabet for each overlay
  overlaySettings: Array<Array<number>>; // current charCode order for each overlay
  // spin
  clockwise: boolean = true; // cw = make counters go up by +1
  // state
  counter: number; // current charCode order offset
  overlayCounters: Array<number>; // current charCode order offset for each overlay
  // turf
  randomPoints: Array<Point> // x and y points on a sphere

  constructor(direction: boolean, primaryKey: string, secondaryKeys: Array<string>, points: Array<Point>) {
    this.clockwise = direction
    this.key = primaryKey
    this.randomPoints = points || this.generatePoints()
    this.defaultOrder()
    this.orderBy(this.key)
  }
  
  numberToChar (number: number) {
    return String.fromCharCode(number);  // "A"
  }
  
  charToNumber (char: string) {
    return `${char}`.charCodeAt(0); // 65
  }

  numberOfOverlays() {
    return this.overlayKeys.length
  }

  // enigma
  // deigma
  signal (message) {
    // go through overlays by
    // move from right to left, reflect at kernel, move from left to right
    // finally rotate

    let process = message.split('')
    let light = []
    process.forEach((char) => {
      // for each button press in the message submitted
      let charCode = this.charToNumber(char)
      let a = this.moveFromRightToLeft(charCode)
      let b = this.reflector(a)
      let c = this.moveFromLeftToRight(b)
      light.push(c)
      this.rotate(1)
    })
    return light.join('')
  }

  // layers
  pass (charCode: number, startOverlayIndex: number, endOverlayIndex: number) {
    // find current charCode order
    let start: Array<number> = this.overlaySettings[startOverlayIndex]
    let end: Array<number> = this.overlaySettings[endOverlayIndex]

    // find current charCode position in array of numbers
    let startInput: number = start.findIndex((cc) => {
      return charCode === cc // matching char codes
    })
    let endOutput: number = end.findIndex((cc) => {
      return charCode === cc // matching char codes
    })

    // switch
    let first: Point = this.randomPoints[startInput]
    let second: Point = this.randomPoints[endOutput]

    var targetPoint = turf.point([first.lat, first.long]);
    var points = turf.featureCollection([
        turf.point([28.973865, 41.011122]),
        turf.point([28.948459, 41.024204]),
        turf.point([28.938674, 41.013324])
    ]);

    var nearest = turf.nearestPoint(targetPoint, points);

    return wiring
  }

  // layers
  moveFromRightToLeft (charCode: number) {
    // wiring
    this.overlaySettings.reverse().forEach((layer, index) => {
      this.pass(charCode, index, index + 1)
    })

    // flip back to original
    this.overlaySettings.reverse()

    return 'a'
  }

  // kernel
  reflector (charCode: number) {
    // run an XOR between charCode and overlayIndex
    return charCode
  }
  
  // layers
  moveFromLeftToRight (charCode: number) {
    // wiring
    this.overlaySettings.forEach((layer, index) => {
      charCode = this.pass(charCode, index, index + 1)
    })
    return charCode
  }

  // layers
  rotate (numberOfTimes: number) {
    // lets say there are 7 overlays total = X
    // rotate the inner layer once per X outer layer rotations
    // if there are 3 overlays then rotate inside every 3 outside rotations
    // refer to align for pivot points
    this.counter = this.counter++
  }

  // cherry pick
  sortCharToFront (list: Array<number>, code: number) {
    return list.sort((x, y) => {
      return x == code ? -1 : y == code ? 1 : 0; }
    );
  }

  // kernel
  // an array of numbers from 1 to X valid points
  defaultOrder () {
    let config: Array<number> = []
    // generate settings for init configuration
    for (let i = 1; i <= this.validPoints; i++) {
      config.push(i)
    }

    // main
    this.configure(config)
  }

  // kernel
  // shift settings chars around that match a certain key
  orderBy (key: string) {
    let update = this.setting
    // loop through each char in the key while switching 
    // char points within the settings from X to the beginning 0
    let chars = key.split('')
    chars.forEach((char, index) => {
      update = this.sortCharToFront(update, this.charToNumber(char))
    })

    // main
    this.configure(update)
  }

  // kernel
  // apply
  configure (settings: Array<number>) {
    this.setting = settings
  }

  // layers
  // apply
  configOverlay (layer: number, settings: Array<number>) {
    this.overlaySettings[layer] = settings
  }

  randomPoint () {
    return new Point(turf.randomPosition([-180, -90, 180, 90])) // random position: [longitude, latitude]
  }

  generatePoints () {
    for (let i = 1; i >= this.validPoints; i++) {
      this.randomPoints.push(this.randomPoint())
    }
  }

  getPoints () {
    return this.randomPoints
  }
}