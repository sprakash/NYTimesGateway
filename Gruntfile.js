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

		uglify: {
			build : {
				src : ["js/main.js"],
				dest : "js/main.min.js"
			}
		},

		watch:{
			css:{
				files: '**/*.scss',
				tasks: ['sass', 'postcss', 'cssmin']
			},
			js:{
				files: '**/*.js',
				tasks: 'uglify'

			}
		}

	});

	//Load Grunt Plugins
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');


	//Register Grunt tasks
	grunt.registerTask('default',['sass', 'cssmin', 'uglify', 'watch']);

};
