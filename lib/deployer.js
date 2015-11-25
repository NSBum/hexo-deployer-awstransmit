module.exports = function(args) {
    var publicDir = this.config.public_dir;
    var log = this.log;
    var config = this.config;
    var deployConfig = config.deploy;
    var fav = deployConfig.favorite;
    var timeout = deployConfig.timeout || 1800;

    //  get the path to our applescript
    var applescript = __dirname + '/sync-s3.scpt';

    //  spawn the applescript as a child process
    var util = require('util'),
        spawn = require('child_process').spawn,
        deploy = spawn('osascript', [applescript, fav, timeout]);

    //  some call backs
    deploy.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
    });

    deploy.stderr.on('data', function(data) {
        console.log('stderr: ' + data);
    });

    return deploy.on('exit', function(code) {
        //console.log('child process exited with code ' + code);
    });
}
