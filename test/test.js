console.log('test.js:', '__dirname:', __dirname);

var assert = require('assert'),
    path = require('path'),
    spawn = require('cross-spawn-async'),
    cli = path.join(__dirname, '..', 'loader'),
    eol = require('os').EOL,
    extPath = path.join(
      path.dirname(require.resolve('buffertools')),
      'build', 'Release', 'buffertools.node'
    );

describe('native modules from subset drive', function() {
  it('should not error with spawn', function(done) {
    console.log('cli', cli);

    var bin = spawn('node', [cli]);

    bin.stdout.on('data', function(data) {
      console.log('stdout', eol, data.toString());
    });

    bin.stderr.on('data', function(data) {
      console.log('stderr', eol, data.toString());
      assert.ok(false);
    });

    bin.once('close', function() {
      done();
    });
  });
});
