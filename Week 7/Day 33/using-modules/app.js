require('react');

require('./private_modules/a');

module.paths.push("private_modules");
require('b');
