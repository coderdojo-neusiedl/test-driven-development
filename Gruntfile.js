/* global global */
'use strict';

 
// Grunt is a JavaScript task runner, similar to Ant. 
// See http://gruntjs.com/ for details

module.exports = function(grunt) {

   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

       // Run JSHint on all sources. JSHint is a linter that checks for specific
       // formatting rules and/or coarse syntax checks. The file '.jshintrc'
       // contains the settings.
       // See http://jshint.org/about/ for details
      jshint: {
         all: {
            options: {
               jshintrc: '.jshintrc'
            },
            src: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
         }
      },

      // Run tests using mocha. Mocha is one of the more commonly used test
      // frameworks.
      // See http://visionmedia.github.io/mocha/ for details
      mochaTest: {
			test: {
			  options: {
				 reporter: 'spec'
			  },
			  src: ['test/**/*Test.js']
			}
      }
   });

   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-mocha-test');
   
	grunt.registerTask('lint', ['jshint']);
   grunt.registerTask('test', ['mochaTest']);
   grunt.registerTask('default', ['lint', 'test']);
 };