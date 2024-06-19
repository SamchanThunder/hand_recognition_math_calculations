import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const one = new GestureDescription('one');
export const two = new GestureDescription('two');
export const three = new GestureDescription('three');
export const four = new GestureDescription('four');
export const five = new GestureDescription('five');
export const six = new GestureDescription('six');
export const seven = new GestureDescription('seven');
export const eight = new GestureDescription('eight');
export const nine = new GestureDescription('nine');

//**one
// thumb:
one.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
one.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);
one.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
one.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
one.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

// index:
one.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
one.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
one.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
one.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
one.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
one.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// middle:
one.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
one.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// ring:
one.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
one.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky:
one.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
one.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

//**two
// thumb:
two.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
two.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);
two.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
two.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
two.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

// index:
two.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
two.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
two.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
two.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
two.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
two.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// middle:
two.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
two.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
two.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
two.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
two.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
two.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

// ring:
two.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
two.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky:
two.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
two.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

//three
three.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
three.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
three.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
three.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
three.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

// index:
three.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
three.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
three.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
three.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
three.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
three.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// middle:
three.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
three.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
three.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
three.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
three.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
three.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

// ring:
three.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
three.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
three.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
three.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
three.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);
three.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

// pinky:
three.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
three.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

//four
// thumb
four.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1);
four.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);
four.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
four.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
four.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

// index:
four.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
four.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
four.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
four.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
four.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
four.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// middle:
four.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
four.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
four.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
four.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
four.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
four.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

// ring:
four.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
four.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
four.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
four.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
four.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);
four.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

// pinky:
four.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
four.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
four.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
four.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
four.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);
four.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);

//five 
// thumb
five.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
five.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
five.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
five.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

// index:
five.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
five.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.9);

// middle:
five.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
five.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// ring:
five.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
five.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky:
five.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
five.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

//six
// thumb
six.addCurl(Finger.Thumb, FingerCurl.NoCurl, .5);
six.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
six.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
six.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

// index:
six.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
six.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
six.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
six.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
six.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
six.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// middle:
six.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
six.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// ring:
six.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
six.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky:
six.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
six.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

//seven
// thumb
seven.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
seven.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
seven.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
seven.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

// index:
seven.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
seven.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
seven.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
seven.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
seven.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
seven.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// middle:
seven.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
seven.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
seven.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
seven.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
seven.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
seven.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

// ring:
seven.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
seven.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky:
seven.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
seven.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

//eight
// thumb
eight.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
eight.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
eight.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
eight.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

// index:
eight.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
eight.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
eight.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
eight.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
eight.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
eight.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// middle:
eight.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
eight.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
eight.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
eight.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
eight.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
eight.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

// ring:
eight.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
eight.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
eight.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
eight.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
eight.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);
eight.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

// pinky:
eight.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.5);
eight.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.5);

//nine
nine.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
nine.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
nine.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
nine.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

// index:
nine.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
nine.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
nine.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
nine.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
nine.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
nine.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// middle:
nine.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
nine.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
nine.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
nine.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
nine.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
nine.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

// ring:
nine.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
nine.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
nine.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
nine.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
nine.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);
nine.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

// pinky:
nine.addCurl(Finger.Pinky, FingerCurl.NoCurl, 2);
nine.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
nine.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
nine.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
nine.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);
nine.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);