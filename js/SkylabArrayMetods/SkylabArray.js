class SkylabArray {
  constructor(...values) {
    let index = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const element of values) {
      this[index] = element;
      index++;
    }
  }
}

module.exports = SkylabArray;
