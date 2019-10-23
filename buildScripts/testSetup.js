//register babel to transpile before running tests
require('babel-register')();

//disable webpack features
require.extensions['.css'] = function() {};
