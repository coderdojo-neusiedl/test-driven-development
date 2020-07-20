/* global coderdojo*/

var assert = require('assert').strict;
require('../src/Example');

describe('Example', () => {
	
   it('my first test', () => {
		assert.notEqual(new coderdojo.Example(), undefined);
	});
});  