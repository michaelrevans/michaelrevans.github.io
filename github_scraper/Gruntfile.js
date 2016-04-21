module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      less: {
        files: ['**/*.less'],
        tasks: ['less'],
      },
    },
    less: {
      dev: {
        files: {
          'styles.css': 'styles.less'
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['watch']);

};
