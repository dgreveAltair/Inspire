module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),




      uglify: {
        plugins: {
           src: ['src/js/plugins.js'], //input
          dest: 'dist/js/plugins.min.js' //output
        },
                plugins: {
           src: ['src/js/defer.js'], //input
          dest: 'dist/js/defer.min.js' //output
        },
        scripts: {
           src: ['src/js/scripts.js'], //input
          dest: 'dist/js/scripts.min.js' //output
        }
    },



    less: {
      development: {
        options: {
          paths: ["src/less/"],
        compress: true,
        cleancss: false,
        banner: "/* PBS Cloud Main Stylesheet - Edit CSS with LESS source files using Grunt - Repo: https://github.com/JacobLett/pbscloud.io */",
        },
        files: {
          "dist/css/pbscloud.min.css": "src/less/styles.less"
        }
      },
    },


        /* Auto Update the scripts and styles when working */
        watch: {
            scripts: {
                files: ['src/js/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            styles: {
                files: ['src/less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                },
            },
        },




  });
    // END GRUNT


  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
 grunt.loadNpmTasks('grunt-contrib-watch');
 //grunt.loadNpmTasks('grunt-sftp-deploy');


  // Default task(s).
    grunt.registerTask('default', ['less']);


};
