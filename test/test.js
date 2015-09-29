var assert = require('assert');
var mylib = require('../');

describe('example', function() {

  it('should work', function() {
    assert.equal(mylib.add(1, 3), 4);
  });

});