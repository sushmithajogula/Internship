var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') 
  {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/Users/sushmithaj/Desktop/Inventory/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
   });
  } 

 else 
 {
	fs.readFile('./Main.html', function(err, data) {
    		if (err) 
		    {
      			res.writeHead(404, {'Content-Type': 'text/html'});
      			return res.end("404 Not Found");
    		} 
    	res.writeHead(200, {'Content-Type': 'text/html'});
    	res.write(data);
   }); 
 }
}).listen(8080); 