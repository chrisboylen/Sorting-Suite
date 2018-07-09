import chai from 'chai';
import { expect, assert } from 'chai';
import bubbleSort from '../lib/bubble-sort.js';

describe('bubbleSort()', () => {
  it('Should be a function', () => {

    expect(bubbleSort).to.exist;
  })

  it('Should sort an array of 11 numbers from least to greatest', () => {
    let array = [1, 0, 11, 3, 2, 8, 10, 5, 7, 4, 9, 6];

    let expectedState = array.sort();
    let actualState = bubbleSort(array);

    expect(expectedState).to.deep.equal(actualState);
  })
})