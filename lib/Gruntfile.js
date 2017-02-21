module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      js: {
        src: ['../scripts/main.js'],
        dest: '../dist/app.js'
      },
      options: {
        transform: ["hbsfy"],
        browserifyOptions: {
          paths: [
            "./node_modules"
          ]
        }
      }
    },
    jshint: {
      options: {
        predef: [ "document", "console", "$" ],
        esnext: true,
        globalstrict: true,
        browserify: true
      },
      files: ['../scripts/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../css/main.css': '../scss/styles.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../scripts/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['../scss/**/*.scss'],
        tasks: ['sass']
      },
      hbs: {
        files: ['../templates/**/*.hbs'],
        tasks: ['browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};
