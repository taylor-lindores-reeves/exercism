//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  kind() {
    const sides = [this.side1, this.side2, this.side3];
    let l = true;

    // Check length of each side and ensure more than 0
    for (let i = 0; i < sides.length; i++) {
      if (sides[i] <= 0) {
        l = false;
      }
    }

    // If true, go ahead
    if (l) {
      // the sum of the length of any two sides must be greater than or equal to the length of the third side
      const max = Math.max(...sides);
      const indexOfMax = sides.indexOf(max);

      let newArr = [];

      for (let i = 0; i < sides.length; i++) {
        if (i !== indexOfMax) {
          newArr.push(sides[i]);
        }
      }

      const sum = newArr.reduce((acc, init) => {
        return acc + init;
      });

      if (sum < max) {
        throw new Error("illegal");
      }

      for (let i = 0; i < sides.length; i++) {
        // 3. EQUILATERAL check of all values are equal
        if (sides[i] === sides[i + 1] && sides[i] === sides[i + 2]) {
          return "equilateral";
        }

        // 4. ISOSCELES check of 2 values out of three are equal
        if (sides[i] === sides[i + 1] || sides[i] === sides[i + 2]) {
          return "isosceles";
        }
      }

      // 5. SCALENE check if all values are different
      const arr = sides.filter((i, index) => {
        return sides.indexOf(i) === index;
      });

      if (arr.length === 3) {
        return "scalene";
      }
    } else {
      // 7. throw error if side values are false and/or negative
      throw new Error("illegal");
    }
  }
}
