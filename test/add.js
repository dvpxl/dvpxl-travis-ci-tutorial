var assert = require('chai').assert;

describe('Array', function() {
  describe('#indexOf', function() {
    it('should return -1 if not found in array', function() {
      assert.equal(-1, [1,2,3].indexOf(0));
      assert.equal(-1, [1,2,3].indexOf(-1));
      
    });
  });
});


