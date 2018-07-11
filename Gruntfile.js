module.exports = function (grunt) {
	 grunt.initConfig({ 
		pkg: grunt.file.readJSON('package-lock.json'),
		

		//Tasks
		sass: {
			dist: {
				options:{
					sourcemap: 'none'
				},
				files: [{
					expand: true,
					cwd:'scss',
					src:['*.scss'],
					dest:'css',
					ext:'.css'
				}]
			}
		},

		postcss: {
			options:{
				map: false,
				processors: [
					require('autoprefixer')({
						browsers: ['last 2 versions']
					})
				]
			},
			dist: {
				src:'css/base.css'
			}
		},

		cssmin:{
			target:{
				files: [{
					expand: true,
					cwd: 'css',
					src: ['*.css', '!*.min.css'],
					dest: 'css',
					ext: '.min.css'
				}]
			}
		},

		watch:{
			css:{
				files: '**/*.scss',
				tasks: ['sass', 'postcss', 'cssmin']
			}
		}

	});

	//Load Grunt Plugins
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');


	//Register Grunt tasks
	grunt.registerTask('default',['sass', 'cssmin', 'watch']);

};
