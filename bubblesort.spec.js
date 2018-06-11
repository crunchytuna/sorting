describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array with single element', function() {
    expect(bubbleSort([8])).toEqual([8]);
  });

  it('handles an array that is already sorted', function() {
    expect(bubbleSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('correctly sorts a mixed array', function() {
    expect(bubbleSort([2, 5, 1, 3, 4])).toEqual([1, 2, 3, 4, 5]);
  });

  it('handles arrays that are reversed order', function() {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});
