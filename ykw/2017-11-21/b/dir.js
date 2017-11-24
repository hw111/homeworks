var fs = require("fs");
var path = require("path");
var filePath = path.resolve("./../");

function file(filePath) {
    fs.readdir(filePath, function (error, files) {
        if (error) {
            console.warn(error);
        } else {
            files.forEach(function (filename) {
                var filedirname = path.join(filePath, filename);
                fs.stat(filedirname, function (error, stats) {
                    if (error) {
                        console.warn(error);
                    } else {
                        var isDir = stats.isDirectory();
                        if (isDir) {
                            console.log(filedirname);
                            file(filedirname);
                        }
                    }
                });
            });
        }
    });
}

file(filePath);