var assert = require('assert');

describe('loading the same native extension twice', function() {
  describe('from two different paths', function() {
    it('should error', function() {
      try {
        require('C:\\projects\\node_modules\\node-6-native-ext-bug\\node_modules\\buffertools\\build\\Release\\buffertools.node');
        require('s:\\node_modules\\node-6-native-ext-bug\\node_modules\\buffertools\\build\\Release\\buffertools.node');
        assert.ok(false);
      } catch (e) {
        assert.ok(true);
      }
    });
  });
});
