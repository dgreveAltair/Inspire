module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),




      uglify: {
        plugins: {
           src: ['src/js/plugins.js'], //input
          dest: 'dist/js/plugins.min.js' //output
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
        compress: false,
        cleancss: true,
        banner: "/*\r\n--------------------------\r\nEnvision Main Stylesheet\r\n- Custom theme of Bootstrap 3\r\n- sfdss\r\n- sdfsdf\r\n--------------------------\r\n*/",
        },
        files: {
          "dist/css/bootstrap-envision.css": "src/less/styles.less"
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
