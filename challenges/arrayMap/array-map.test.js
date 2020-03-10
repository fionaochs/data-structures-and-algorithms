const {
  mappingFunction
} = require('./array-map.js');

describe('validator module', () => {
  describe('basic validation', () => {
    it('mappingFunction returns array with function applied to every index', () => {
      expect(mappingFunction([1, 2, 3], (num) => num * 2)).toEqual([2, 4, 6]);
    });
  });
});
