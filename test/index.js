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
  test.equal('1,2,3', kreezUtils.type.toString([1, 2, 3]));
  test.equal('[object Object]', kreezUtils.type.toString({}));

  test.done();
};
