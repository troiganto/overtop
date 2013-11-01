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
    },
            // The YUIDoc plugin to generate documentation for code files.
        yuidoc: {
            compile: {
                name: 'Overtop',
                description: '',
                version: '0.1.0',
                url: '',
                options: {
                    extension: '.ts',
                    paths: 'scripts/',
                    outdir: 'docs/'
                }
            }
        }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-contrib-yuidoc');

  // Default task(s).
  grunt.registerTask('default', ['ts', 'yuidoc']);

};