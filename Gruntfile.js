const sass = require('node-sass');

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
        outputStyle: 'expanded'
      },
      dist: {
        files: {
          'dist/horus.css': 'src/horus.scss'
        }
      }
    },
    watch: {
      scripts: {
        files: ["Gruntfile.js", "src/**/*.*"],
        tasks: ["default"],
        options: {
          spawn: false
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', [
    'sass'
  ]);
};
