'use strict';

const kreezUtils = require('./_lib');

exports['test loading'] = function (test) {
	test.doesNotThrow(function () {
		require('./_lib');
	});

	test.done();
};

exports['to String'] = (test) => {

  test.equal('3', kreezUtils.type.toString(3));
  test.equal('vasya', kreezUtils.type.toString('vasya'));
  test.equal('true', kreezUtils.type.toString(true));
  test.equal('false', kreezUtils.type.toString(false));
  test.equal('', kreezUtils.type.toString([]));
  test.equal('1,2,3', kreezUtils.type.toString([ 1, 2, 3 ]));
  test.equal('[object Object]', kreezUtils.type.toString({}));
  test.equal('null', kreezUtils.type.toString(null));
  test.equal('undefined', kreezUtils.type.toString(undefined));
  test.equal(',', kreezUtils.type.toString([ , ,  ]));
  test.equal('21,text,,,[object Object]', kreezUtils.type.toString([ 21, 'text', null, [], {} ]));

  test.done();
};

exports['to Number'] = (test) => {

  test.equal(3, kreezUtils.type.toNumber(3));
  test.ok(isNaN(kreezUtils.type.toNumber('vasya')), 'string');
  test.equal(1, kreezUtils.type.toNumber(true));
  test.equal(0, kreezUtils.type.toNumber(false));
  test.equal(0, kreezUtils.type.toNumber([]), 'Array');
  test.ok(isNaN(kreezUtils.type.toNumber([ 1, 2, 3 ])), 'Number Array');
  test.ok(isNaN(kreezUtils.type.toNumber({})), '[object]');
  test.equal(0, kreezUtils.type.toNumber(null), 'null');
  test.ok(isNaN(kreezUtils.type.toNumber(undefined)), 'undefined');
  test.ok(isNaN(kreezUtils.type.toNumber([ , ,  ])), 'Empty Array');
  test.ok(isNaN(kreezUtils.type.toNumber([ 21, 'text', null, [], {} ])), 'Difference Type Array');

  test.done();
};

exports['to Boolean'] = (test) => {

  test.equal(true, kreezUtils.type.toBoolean(3));
  test.equal(true, kreezUtils.type.toBoolean('vasya'));
  test.equal(true, kreezUtils.type.toBoolean(true));
  test.equal(false, kreezUtils.type.toBoolean(false));
  test.equal(true, kreezUtils.type.toBoolean([]));
  test.equal(true, kreezUtils.type.toBoolean([1, 2, 3]));
  test.equal(true, kreezUtils.type.toBoolean({}));
  test.equal(false, kreezUtils.type.toBoolean(null));
  test.equal(false, kreezUtils.type.toBoolean(undefined));
  test.equal(true, kreezUtils.type.toBoolean([ , ,  ]));
  test.equal(true, kreezUtils.type.toBoolean([ 21, 'text', null, [], {} ]));

  test.done();
};

exports['to Array'] = (test) => {

  test.ok([ 3 ], kreezUtils.type.toArray(3), '[ 3 ]');
  test.ok([ 'vasya' ], kreezUtils.type.toArray('vasya'), '[ "vasya" ]');
  test.ok([ true ], kreezUtils.type.toArray(true), '[ true ]');
  test.ok([ false ], kreezUtils.type.toArray(false), '[ false ]');
  test.ok([ [] ], kreezUtils.type.toArray([]), '[[]]');
  test.ok([ [ 1, 2, 3] ], kreezUtils.type.toArray([ 1, 2, 3 ]), 'Number Array');
  test.ok([{}], kreezUtils.type.toArray({}), 'object');
  test.ok([ null ], kreezUtils.type.toArray(null), 'null');
  test.ok([ undefined ], kreezUtils.type.toArray(undefined), 'undefined');
  test.ok([ [, ] ], kreezUtils.type.toArray([ , ,  ]), 'Empty Array');
  test.ok([ [ 21, 'text', null, [], {} ] ], kreezUtils.type.toArray([ 21, 'text', null, [], {} ]), 'Difference Type Array');

  test.done();
};
