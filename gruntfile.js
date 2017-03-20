
module.exports = function configureGrunt (gruntConfig) {

  gruntConfig.initConfig({


    clean: [ 'build/' ],

    copy: {

      copythehtml: {

        files: [
          {
            cwd: 'src/',
            src: [ '*.html' ],
            dest: 'build/',
            expand: true
          }
        ]
      }
    },
    copyJS: {
      files: [
        {
          cwd:'src/',
          src: ['**/*.js'],
          dest: 'build/',
          expand: true
        }
      ]
    },

    copyJquerry: {
      files: [
        {
          cwd: 'node_modules/jquery/dist'

        }
      ]
    },

    jsHint: 

    sass: {
      all: {

        files: {

          'build/style.css' : 'src/sass/main.scss'
        }
      }

    },

    karma: {
      all:
        options: {
          frameworks: [ 'mocha', 'chai' ],
          browsers: [ 'Chrome' ],
          singleRun: true,
          files: [
            'src/**/*.js',
            'node_modules/fetch-mock/es5/client-browserified.js',
            'test/specs/**/*.js'
        ]
      }
    }
  }


  });

require('load-grunt-tasks')(gruntConfig);

gruntConfig.registerTask ('build', [ 'jshint', 'karma', 'clean', 'copy', 'sass' ]);

};
