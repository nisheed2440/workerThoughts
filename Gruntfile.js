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
        },
        usebanner: {
            stylesBanner: {
                options: {
                    position: 'top',
                    banner: '/*! \n<%= pkg.name %>\n' +
                        'Author: <%= pkg.author.name %>\n' +
                        'Build Date: <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                        'Description: File contains the styles for the UI of workerThoughts webpage' +
                        '*/'
                },
                files: {
                    src: ['css/styles.css', 'css/styles.min.css']
                }
            },
            ltIe9Banner: {
                options: {
                    position: 'top',
                    banner: '/*! \n<%= pkg.name %>\n' +
                        'Author: <%= pkg.author.name %>\n' +
                        'Build Date: <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                        'Description: File contains the css fixes for IE8' +
                        '*/'
                },
                files: {
                    src: ['css/lt-ie9.css', 'css/lt-ie9.min.css']
                }
            },
            ltIe8Banner: {
                options: {
                    position: 'top',
                    banner: '/*! \n<%= pkg.name %>\n' +
                        'Author: <%= pkg.author.name %>\n' +
                        'Build Date: <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                        'Description: File contains the css fixes for IE7' +
                        '*/'
                },
                files: {
                    src: ['css/lt-ie8.css', 'css/lt-ie8.min.css']
                }
            }
        }
    });

    //Load the grunt dependency
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-banner');

    // Default task(s).
    grunt.registerTask('default', ['less', 'usebanner']);

};