console.log('Executing:', __filename);

var path = require('path'),
    extPath = path.join(
      path.dirname(require.resolve('buffertools')),
      'build', 'Release', 'buffertools.node'
    );

console.log('Requiring:', extPath);
require(extPath);
