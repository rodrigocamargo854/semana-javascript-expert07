const { GestureDescription, Finger, FingerCurl } = window.fp

const ScrollDownGesture = new GestureDescription('scroll-down') // ✊️
const ScrollUpGesture = new GestureDescription('scroll-up') // 🖐
const RockGesture = new GestureDescription('rock'); // 🤘


// Scroll Down
// -----------------------------------------------------------------------------

// thumb: half curled
// accept no curl with a bit lower confidence
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5)

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  ScrollDownGesture.addCurl(finger, FingerCurl.FullCurl, 1.0)
  ScrollDownGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9)
}


// ScrollUp
// -----------------------------------------------------------------------------

// no finger should be curled
for (let finger of Finger.all) {
  ScrollUpGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
}


// RockGesture
//------------------------------------------------------------------------------
  
// index : stretched out
RockGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
// pinky: stretched out
RockGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// Middle: curled
RockGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
RockGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

// Ring: curled
RockGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
RockGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

const knownGestures = [
  ScrollDownGesture,
  ScrollUpGesture,
  RockGesture
]

const gestureStrings = {
  'scroll-up': '🖐',
  'scroll-down': '✊️',
  'rock': '🤘'
}

export {
  knownGestures,
  gestureStrings,
  RockGesture
}