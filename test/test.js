var assert = require('assert'),
    path = require('path'),
    spawn = require('child_process').spawn,
    cli = path.join(__dirname, '..', 'loader.js'),
    eol = require('os').EOL,
    extPath = path.join(
      path.dirname(require.resolve('buffertools')),
      'build', 'Release', 'buffertools.node'
    );

describe('native modules from subset drive', function() {
  it('should not error with spawn', function(done) {
    console.log('Currently in:', __dirname);
    console.log('Spawning:', 'node', cli);

    var bin = spawn('node', [cli]);

    bin.stdout.on('data', function(data) {
      console.log(data.toString().trim());
    });

    bin.stderr.on('data', function(data) {
      console.log('stderr', eol, data.toString().trim());
      assert.ok(false);
    });

    bin.once('close', function() {
      done();
    });
  });
});
