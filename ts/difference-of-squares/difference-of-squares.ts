export default class Squares {
  squareOfSum: number;
  sumOfSquares: number;
  difference: number;

  constructor(n: number) {
    const range = [...Array(n + 1).keys()];

    // prettier-ignore
    this.squareOfSum = Math.pow(range.reduce((a, b) => a + b), 2);

    this.sumOfSquares = range.reduce((a, b) => (a += Math.pow(b, 2)));

    this.difference = this.squareOfSum - this.sumOfSquares;
  }
}
