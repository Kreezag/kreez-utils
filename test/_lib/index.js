'use strict';
/*eslint no-process-env:0 */

module.exports = process.env.NODE_LIB_KREEZUTILS_COVERAGE ? require('./../../lib-cov') : require('./../../lib');
