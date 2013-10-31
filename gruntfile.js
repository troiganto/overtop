module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ts: {
      dev: {
        src: ["scripts/*.ts"],
        reference: "./scripts/reference.ts",
        outDir: "scripts",
        options: {}
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-ts');

  // Default task(s).
  grunt.registerTask('default', ['ts']);

};