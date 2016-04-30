console.log('subloader.js:', '__dirname:', __dirname);

var path = require('path'),
    extPath = path.join(
      path.dirname(require.resolve('buffertools')),
      'build', 'Release', 'buffertools.node'
    );

console.log('subloader.js:', 'requiring:', extPath);
require(extPath);
