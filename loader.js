console.log('loader.js:', '__dirname:', __dirname);

var path = require('path'),
    extPath = path.join(
      path.dirname(require.resolve('buffertools')),
      'build', 'Release', 'buffertools.node'
    );

console.log('loader.js:', 'requiring:', extPath);
require(extPath);
require(path.resolve('./subloader'));
