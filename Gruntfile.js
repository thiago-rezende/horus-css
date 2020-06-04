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
          'src/horus.css': 'src/horus.scss'
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version %> */\n'
      },
      dist: {
        files: {
          'dist/horus.min.css': 'src/horus.css'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', [
    'sass',
    'uglify'
  ]);
};
