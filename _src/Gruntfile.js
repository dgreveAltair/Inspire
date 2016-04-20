module.exports = function(grunt) {
 
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

/*
 
      uglify: {
        plugins: {
           src: ['js/plugins.js'], //input
          dest: '../js/plugins.min.js' //output
        },
        scripts: {
           src: ['js/scripts.js'], //input
          dest: '../js/scripts.min.js' //output
        }
    },

 */

    less: {
      development: {
        options: {
          paths: ["less/"],
        compress: false,
        cleancss: true,
        banner: "/*\r\n--------------------------\r\n-Test\r\n-sdfsd\r\n-sfdss\r\n-sdfsdf\r\n--------------------------\r\n*/",
        },
        files: {
          "../css/main.css": "less/styles.less"
        }
      },
    },
    

    
  /*  






'sftp-deploy': {
  build: {
    auth: {
      host: 'staging.altairuniversity.com',
      port: 22,
      authKey: 'key1'
    },
    src: '/Users/jlett.PROG/Documents/wordpress-themes/altair-university-wp-theme/',
    dest: '/srv/staging.altairuniversity.com/public_html/wp-content/themes/altair-theme/',
    exclusions: [".git*","node_modules",".DS_Store","_build","less","fonts","fancybox", "*.png", "*.jpg" ],
    //set to true if you want to see what files are moved
    progress: false
  }
}






*/
    
/*    

FTP PORTS 

ftps-data 989/tcp ftp protocol, data, over TLS/SSL
ftps-data 989/udp ftp protocol, data, over TLS/SSL
ftps  990/tcp ftp protocol, control, over TLS/SSL
ftps  990/udp ftp protocol, control, over TLS/SSL

versus the usual

ftp-data 20/tcp File Transfer [Default Data]
ftp-data 20/udp File Transfer [Default Data]
ftp 21/tcp File Transfer [Control]
ftp 21/udp File Transfer [Control]

3000


'ftp-deploy': {
  build: {
    auth: {
      host: 'staging.altairuniversity.com',
      port: 990,
      authKey: 'key1'
    },
    src: '/Users/jlett.PROG/Documents/wordpress-themes/altair-university-wp-theme/',
    dest: '/srv/staging.altairuniversity.com/public_html/wp-content/themes/altair-theme/',
    exclusions: [".git*","node_modules",".DS_Store","_build"],
    progress: true
  }
}



  ftps_deploy: {
    deploy: {
      options: {
        auth:{
          host:'staging.altairuniversity.com',
          port: 990,
          authKey: 'key1',
          secure: true
        }
      },
      files: [{
        expand: true,
        cwd:'app',
        //exclusions: [".git*","node_modules",".DS_Store","_build"],
        src: '/Users/jlett.PROG/Documents/wordpress-themes/altair-university-wp-theme/',
        dest: '/srv/staging.altairuniversity.com/public_html/wp-content/themes/altair-theme2/'
      }]
    }
  }




*/




  });
    // END GRUNT
 

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
 // grunt.loadNpmTasks('grunt-contrib-watch');
 //grunt.loadNpmTasks('grunt-sftp-deploy');


  // Default task(s).
 // grunt.registerTask('default', ['uglify','less', 'sftp-deploy']);
    grunt.registerTask('default', ['less']);

 
};