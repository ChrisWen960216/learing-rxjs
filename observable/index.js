/**
 * Created By ChrisWen
 *  2018/11/07
 */

class IteratorFromArray {
  constructor(arr) {
    this._array = arr;
    this._cursor = 0;
  }

  next() {
    const ele = this._cursor < this._array.length
      ? { value: this._array[this._cursor += 1], done: false }
      : { done: true };
    return ele;
  }

  map(callback) {
    const iterator = new IteratorFromArray(this._array);
    return {
      next: () => {
        const { done, value } = iterator.next();
        return {
          done,
          value: done ? null : callback(value),
        };
      },
    };
  }
}

const iterator = new IteratorFromArray([1, 2, 3]);
const newIterator = iterator.map(value => value + 3);

console.log(newIterator.next());
console.log(newIterator.next());
console.log(newIterator.next());
