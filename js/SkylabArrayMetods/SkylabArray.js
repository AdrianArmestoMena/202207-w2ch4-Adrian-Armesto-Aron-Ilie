class SkylabArray {
  constructor(...values) {
    let index = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const element of values) {
      this[index] = element;
      index++;
      this.lenght = Number(index);
    }
  }

  some(functionParameter) {
    let conditionCounter = 0;
    let index = 0;
    do {
      if (functionParameter(this[index]) === true) {
        conditionCounter++;
      }
      index++;
    } while (this[index] !== this.lenght);

    if (conditionCounter > 0) {
      return true;
    }
    return false;
  }

  push(adElement) {
    const nextindex = Number(this.lenght - 1);
    this[nextindex] = adElement;
    this.lenght = Number(this.lenght) + 1;
  }
}
module.exports = SkylabArray;
