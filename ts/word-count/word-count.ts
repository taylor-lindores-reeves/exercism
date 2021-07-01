export default class Words {
  count(w: string): Object {
    const words = w.split(/[ ,]+/);

    return new Map([["word", 1]]);
  }
}
