const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {

  test('return an array', () => {
    expect(shuffle()).toEqual([])
  })

  test('return array with same length as arg', () => {

    const testShuffle = [1, 2, 3]

    expect(shuffle([1, 2, 3])).toContainEqual(testShuffle.length)
  })

  test('shuffle the contents of the returned array', () => {

    const testShuffle = [1, 2, 3]

    expect(shuffle([1, 2, 3])).not.toContainEqual(testShuffle)

  })



});
