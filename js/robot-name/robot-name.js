// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

const state = {
  names: {}
};

export class Robot {
  constructor() {
    this.i_name = this.i_name;
  }

  get name() {
    const randomLetters = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 2)
      .toUpperCase();

    let numberArray = [];
    const rP1 = Math.random()
      .toString()
      .slice(3, 4);
    const rP2 = Math.random()
      .toString()
      .slice(5, 6);
    const rP3 = Math.random()
      .toString()
      .slice(7, 8);
    const randomNumberSelect = Math.random()
      .toString()
      .slice(2);

    numberArray.push(randomNumberSelect[rP1]);
    numberArray.push(randomNumberSelect[rP2]);
    numberArray.push(randomNumberSelect[rP3]);
    newNumberArray = numberArray.join("");
    const outPut = randomLetters + newNumberArray;

    return outPut;
  }
}

Robot.releaseNames = () => {
  state.names = {};
};
