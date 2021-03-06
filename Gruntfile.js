module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'app/*.js', 'app/*/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        
        uglify: {
			dist: {
				files: {
					'dist/main.min.js': ['assets/js/*.js']
				}
			}
		},
        
        concat: {
			dist: {
				src: ['app/*.js', 'app/*/*.js'],
				dest: 'dist/app.js'
			}
		},

		sass: {
			dist: {
				files: {
					'dist/style.css': 'assets/scss/style.scss'
				}
			}
		},
        connect: {
            server: {
                options: {
                    port: 9006,
                    livereload: true
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.server.options.port %>'
            }
        },
        watch: {
            sass: {
                files: ['**/*.scss'],
                tasks: ['sass']
            },
            js: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint']
            },
            src: {
                files: ['app/*.js', 'app/*/*.js'],
                tasks: ['concat']
            },
            scripts: {
            	files: ['assets/js/*.js'],
            	tasks: ['uglify']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');


    grunt.registerTask('default', ['concat', 'jshint', 'uglify', 'sass', 'connect', 'open', 'watch']);

};