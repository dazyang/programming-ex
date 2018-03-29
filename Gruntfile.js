module.exports = function(grunt) {
  //Project config
  grunt.initConfig({
    concat: {
      release: {
        src: ['js/values.js', 'js/prompt.js'],
        dest: 'release/main.js'
      }
    },
      copy: {
        release: {
          src: 'mainfest.js',
          dest: 'release/manifest.js'
        }
      },
      jshint: {
        files: ['js/values.js', 'js/prompt.js']
      },
      watch: {
        files: ['<%= jshint.files %>', 'manifest.json'],
        tasks: ['default']
      }
  });
  //Grunt plug-ins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //register tasks
  grunt.registerTask('default', ['jshint', 'concat', 'copy'])
}