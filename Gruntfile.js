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
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/horus.min.css': 'dist/horus.css'
        }
      }
    },
    usebanner: {
      banner: {
        options: {
          position: "top",
          banner:
            "/* Horus CSS v<%= pkg.version %> <%= pkg.repository %> */",
          linebreak: true
        },
        files: {
          src: "dist/horus.min.css"
        }
      }
    },
    copy: {
      toDocs: {
        files: [
          {
            src: "dist/horus.min.css",
            dest: "docs/css/horus.min.css"
          }
        ]
      }
    },
    concat: {
      options: { separator: "\n\n" },
      basic_and_extras: {
        files: {
          "tests/tests.html": ["src/test.html", "src/plugins/**/test.html"],
          "docs/README.md": ["src/README.md", "src/plugins/**/README.md"]
        }
      }
    },
    pug: {
      compile: {
        options: {
          pretty: true
        },
        files: [
          {
            cwd: "templates",
            src: "**/*.html.pug",
            dest: "docs/",
            expand: true,
            ext: ".html"
          }
        ]
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
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks("grunt-banner");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-pug");
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', [
    'sass',
    'cssmin',
    'usebanner',
    'copy',
    'concat',
    'pug'
  ]);
};
