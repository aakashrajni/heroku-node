var express = require('express');
var app = express();
var path = require('path');
var fileUpload = require('express-fileupload');
var logger = require('morgan');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fs = require('fs'),
        pdf2json = require("pdf2json");
            var pdf2table = require("pdf2table");
var hummus = require("hummus");
var text,texts;
var regnofn = [];
var regnoan = [];
var j,fnlen,anlen;
var pno = [];
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 5000;

// Log all requests
app.use(logger('dev'));

// Serve static files
app.use(express.static(__dirname));
app.use(fileUpload());

// set the home page route
app.get("/pdf", function(req, res) {
	pno.forEach(function(value){
		const pdfWriter = hummus.createWriterToModify( 'fix.pdf', {
			modifiedFilePath: 'Modified' + value + '.pdf'
		});
		const pageModifier = new hummus.PDFPageModifier(pdfWriter,0);
		pageModifier.startContext();
		const context = pageModifier.getContext();
		context.writeText(
			regnofn[value*25+0],
			110, 460,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+1],
			280, 460,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+2],
			460, 460,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+3],
			640, 460,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+4],
			110, 410,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+5],
			280, 410,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+6],
			460, 410,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+7],
			640, 410,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+8],
			110, 350,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+9],
			280, 350,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+10],
			460, 350,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+11],
			640, 350,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+12],
			110, 295,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+13],
			280, 295,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+14],
			460, 295,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+15],
			640, 300,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+16],
			110, 230,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+17],
			280, 230,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+18],
			460, 230,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+19],
			110, 170,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+20],
			280, 170,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+21],
			460, 170,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+22],
			110, 110,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+23],
			280, 110,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+24],
			460, 110,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:14,colorspace:'black',color:'black'}
		);
		pageModifier.endContext().writePage();
		pdfWriter.end();
	});
		var pdfWriter = hummus.createWriter('Merge.pdf');
	pno.forEach(function(value){
		pdfWriter.appendPDFPagesFromPDF('Modified' + value + '.pdf');
	});	
		pdfWriter.end();
		fs.readFile('Merge.pdf', function (err,data){
     		res.contentType("application/pdf");
     		res.send(data);
});
		process.stdin.resume();//so the program will not close instantly

function exitHandler(options, err) {
    if (options.cleanup){ console.log('clean'); pno.forEach(function(value){
		fs.unlinkSync('Modified' + value +'.pdf');
	}) }
    if (err) console.log(err.stack);
    if (options.exit) { process.exit(); pno.forEach(function(value){
		fs.unlinkSync('Modified' + value +'.pdf');
	}) }
}

//do something when app is closing
process.on('exit', exitHandler.bind(null,{cleanup:true}));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));
});


app.post("/upload", function(req, res) {
req.files.sampleFile.mv('try.pdf', function(err) {
    if (err) {
      res.status(500).send(err);
    }
    else {
      
      res.sendFile(path.join(__dirname + '/public/pdfform.html'));
    }
	fs.readFile('try.pdf', function (err, buffer) {
    if (err) return console.log(err);
    pdf2table.parse(buffer, function (err, rows, rowsdebug) {
        if(err) return console.log(err);
	fs.writeFile('tried.txt',rows);
	function function2() {
	 text = fs.readFileSync('tried.txt').toString().split(",") 
	text.forEach(function(value){
		if(value.length == 2 && value == "FN")
		{	
			j = 1;
		}		
		if(value.length == 2 && value == "AN")
		{	
			j = 0;
		}
  		if(value.length == 12 && value != " KANCHIPURAM" )
		{
			if(j == 1)
			{
			regnofn.push(value);
			}
			else
			{
			regnoan.push(value);
			}
		}

});
		fnlen = Math.floor(regnofn.length/25)+1;
		anlen = Math.floor(regnoan.length/25)+1;
		for(var i=0;i<fnlen;i++)
		{
			pno.push(i);
		}
}
setTimeout(function2, 1);
});
});
});
});

// Route for everything else.
app.get('/', function(req, res){
	fs.stat('Merge.pdf', function(err, stat) {
    if(err == null) {
        console.log('File exists');	
	fs.unlinkSync('Merge.pdf');
	}
});
	res.sendFile(path.join(__dirname + '/public/sample.html'));
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
