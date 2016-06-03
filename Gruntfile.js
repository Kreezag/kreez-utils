'use strict';

var grunto = require('grunto');
var jitGrunt = require('jit-grunt');

module.exports = grunto(function (grunt) {
  jitGrunt(grunt);

	grunt.registerTask('test',   [
		'eslint'/*<% if (testEngine === 'nodeunit') { %>*/,
		'nodeunit'/*<% } %>*/
	]);

	grunt.registerTask('default', [
		'test',
		'watch'
	]);

	return {
		/*<% if (testEngine === 'nodeunit') { %>*/
		nodeunit: {
			all: [
				'test/*.js'
			]
		},
		/*<% } %>*/

		eslint: {
			all: [
				'**/*.js',
				'!test/**/*.js',
				'!Gruntfile.js',
				'!node_modules/**/*',
				'!lib-cov/**/*'
			]
		},

		watch: {
			files: [
				'lib/**/*',
				'test/**/*.js',
				'!node_modules/**/*',
				'!lib-cov/**/*'
			],
			tasks: [
				'test'
			]
		}
	};
});
