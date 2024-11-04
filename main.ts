import { Coord, knightMoves } from './knights-travails';

knightMoves(Coord(10, 10), Coord(10, 10));

// Output:
//
// Initial coordinates are incorrect.
// Valid coordinates in a range between 0 and 7.

knightMoves(Coord(3, 3), Coord(0, 6));

// Output:
//
// You made it in 3 moves!
// Here's your path:
// x: 3, y: 3
// x: 1, y: 4
// x: 0, y: 6

knightMoves(Coord(0, 0), Coord(1, 2));

// Output:
//
// You made it in 2 moves!
// Here's your path:
// x: 0, y: 0
// x: 1, y: 2

knightMoves(Coord(0, 0), Coord(3, 3));

// Output:
//
// You made it in 3 moves!
// Here's your path:
// x: 0, y: 0
// x: 2, y: 1
// x: 3, y: 3

knightMoves(Coord(3, 3), Coord(0, 0));

// Output:
//
// You made it in 3 moves!
// Here's your path:
// x: 3, y: 3
// x: 1, y: 2
// x: 0, y: 0

knightMoves(Coord(0, 0), Coord(7, 7));

// Output:
//
// You made it in 7 moves!
// Here's your path:
// x: 0, y: 0
// x: 2, y: 1
// x: 4, y: 0
// x: 6, y: 1
// x: 7, y: 3
// x: 6, y: 5
// x: 7, y: 7
