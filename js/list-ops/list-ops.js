//
// This is only a SKELETON file for the 'List - Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values) {
    this.values = values || [];
  }

  append(newList) {
    return new List([...this.values, ...newList.values]);
  }

  concat(newList) {
    const arr = [];

    for (var i = 0; i < newList.values.length; i++) {
      newList.values[i].values.forEach(i => arr.push(i));
    }

    return new List([...this.values, ...arr]);
  }

  filter(vals) {
    const arr = [];

    this.values.forEach(value => {
      if (vals(value)) {
        arr.push(value);
      }
    });

    return new List([...arr]);
  }

  length() {
    let i = 1;

    for (let a = 0; a < i; a++) {
      if (this.values[a]) {
        i++;
      }
    }

    return i - 1;
  }

  map(mapFunc) {
    let i = 1;
    let newList = [];

    for (let a = 0; a < i; a++) {
      if (this.values[a]) {
        i++;
        newList.push(mapFunc(this.values[a]));
      }
    }

    return new List([...newList]);
  }

  foldl(fn, acc) {
    let i = 1;

    for (let a = 0; a < i; a++) {
      if (this.values[a]) {
        i++;
        acc = fn(acc, this.values[a]);
      }
    }

    // I really, really struggled to understand this one!
    // So I'm leaving some code below to help me understand it a bit better. If ever I need to I will refer to this.

    // let example = [1, 2, 3, 4];

    // example.reduce((acc, el) => {
    //   console.log(`${acc} / ${el}`);
    //   acc = el / acc;
    //   console.log(`Accumulator: ${acc}`);
    //   return acc;
    // }, 24);

    return acc;
  }

  foldr(fn, init) {
    let acc = init;
    let length = this.length(this.values);

    if (length) {
      length--;
      for (let a = length; a >= 0; a--) {
        acc = fn(acc, this.values[a]);
      }
      return acc;
    } else {
      return acc;
    }
  }

  reverse() {
    let length = this.length(this.values);
    const newArr = [];
    length--;

    for (let a = length; a >= 0; a--) {
      newArr.push(this.values[a]);
    }

    return new List([...newArr]);
  }
}
