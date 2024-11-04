export { Coord, knightMoves };

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
