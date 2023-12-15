class Params {
  constructor(
    public readonly x: number,
    public xCoord: number,
    public yCoord: number,
    private _sportsName: string,
    private _celevrityCrush: string,
    protected _targetTravelDestination: string
  ) {}
}

const p = new Params(1, 23, 34, 'Badminton', 'Juliaane Hough', 'Norway');

function moveRight(point: Params) {
  point.xCoord += 1;
}

moveRight(p);

console.log(p);
