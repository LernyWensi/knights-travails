# Knights Travails

This project is a part of [The Odin Project's JavaScript course](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript).

# Knight's Moves

This project is a TypeScript implementation of a solution to the Knight's Tour problem on a chessboard. It provides a function to calculate the shortest path a knight can take to move from one position to another on an 8x8 chessboard.

The Knight's Moves project includes several key types and functions: `Coord`, `Path`, `Move`, and the main function `knightMoves`. The `Coord` type represents a coordinate on the chessboard, while `Path` is an array of coordinates representing the knight's path. The Move type encapsulates a coordinate and the path taken to reach it.

# Examples

-   **Usage**

```typescript
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
```

-   **Implementation**

```typescript
type Coord = { x: number; y: number };
type Path = Coord[];
type Move = { coord: Coord; path: Path };

const isValidCoord = ({ x, y }: Coord): boolean => x >= 0 && x < 8 && y >= 0 && y < 8;
const Coord = (x: number, y: number): Coord => ({ x, y });
const Move = (coord: Coord, path: Path): Move | undefined => (isValidCoord(coord) ? { coord, path } : undefined);

// prettier-ignore
const OFFSETS: Coord[] = [
    { x:  2, y: -1 }, { x:  2, y: 1 },
    { x: -2, y: -1 }, { x: -2, y: 1 },
    { x:  1, y: -2 }, { x:  1, y: 2 },
    { x: -1, y: -2 }, { x: -1, y: 2 },
];

const getPossibleMoves = (from: Move): Move[] =>
    OFFSETS.reduce<Move[]>((moves, offset) => {
        const coord = Coord(from.coord.x + offset.x, from.coord.y + offset.y);
        const move = Move(coord, from.path.concat(coord));
        if (move) moves.push(move);
        return moves;
    }, []);

const findShortestPath = (from: Coord, to: Coord): Path | undefined => {
    if (!isValidCoord(from) || !isValidCoord(from)) return undefined;

    const queue = [Move(from, [from])];
    const visited = new Set<string>();

    while (queue.length > 0) {
        const move = queue.shift()!;

        if (move.coord.x === to.x && move.coord.y === to.y) return move.path;

        const key = `${move.coord.x}${move.coord.y}`;
        if (visited.has(key)) continue;
        else visited.add(key);

        queue.push(...getPossibleMoves(move));
    }

    return undefined;
};

const knightMoves = (from: Coord, to: Coord): void => {
    const path = findShortestPath(from, to);

    if (!path) {
        console.log('Initial coordinates are incorrect.\nValid coordinates in a range between 0 and 7.');
    } else {
        console.log(`You made it in ${path.length} moves!\nHere's your path:`);
        path.forEach((move) => console.log(`x: ${move.x}, y: ${move.y}`));
    }
};
```
