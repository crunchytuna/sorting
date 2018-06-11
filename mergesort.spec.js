describe('split', function() {
  it('handles an empty array', function() {
    expect(split([])).toEqual([[], []]);
  });

  it('is able to split an array into two halves', function() {
    expect(split([2, 4])).toEqual([[2], [4]]);
  });

  it('splits odd arrays "even to the right"', function() {
    expect(split([1, 2, 3])).toEqual([[1], [2, 3]]);
  });
});

describe('merge', function() {
  it('accept 2 sorted arrays and merge into 1 sorted array', function() {
    expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge([2, 4, 6], [1, 3, 5])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge([3, 4, 5], [1, 2, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('can merge 2 empty arrays into one', function() {
    expect(merge([], [])).toEqual([]);
  });
  it('can merge asymetrical arrays', function() {
    expect(merge([3, 4, 5], [2, 6])).toEqual([2, 3, 4, 5, 6]);
  });
});
