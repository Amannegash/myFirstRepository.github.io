var http = require('http');
var url = require('url');
var fs = require('fs');
var addmode = require('./calmode');
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var qdata = q.query;
    var filename = "." + q.pathname;
    if (q.pathname=="/cal.js")
    {
        if(qdata.operation == 'add') {
            calmode.add(req,res,q,query)
            calmode.displays(req,res,q,query)
        }
        else if(qdata.operation == 'subtract') {
            calmode.subtract(req,res,q,query)
            calmode.displays(req,res,q,query)
        }
        else if(qdata.operation == 'multiply') {
            calmode.multiply(req,res,q,query)
            calmode.displays(req,res,q,query)
        }
        else if(qdata.operation == 'division') {
            calmode.subtract(req,res,q,query)
            calmode.displays(req,res,q,query)
        }
    }
    else
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200); // Content-Type not included
        res.write(data);
        return res.end();
    }); 
}).listen(8080);