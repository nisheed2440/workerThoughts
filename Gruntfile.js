module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    paths: ['css']
                },
                files: {
                    'css/styles.css': 'less/styles.less',
                    'css/lt-ie9.css': 'less/lt-ie9.less',
                    'css/lt-ie8.css': 'less/lt-ie8.less'
                }
            },
            production: {
                options: {
                    paths: ['css'],
                    cleancss: true
                },
                files: {
                    'css/styles.min.css': 'less/styles.less',
                    'css/lt-ie9.min.css': 'less/lt-ie9.less',
                    'css/lt-ie8.min.css': 'less/lt-ie8.less'
                }
            }
        }
    });

    //Load the grunt dependency
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['less']);

};