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
			170, 260,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+1],
			170, 205,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+2],
			170, 146,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+3],
			170, 233,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+4],
			170, 175,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+5],
			295, 260,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+6],
			295, 205,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+7],
			295, 146,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+8],
			295, 233,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+9],
			295, 175,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+10],
			425, 260,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+11],
			425, 205,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+12],
			425, 146,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+13],
			425, 233,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+14],
			420, 175,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+15],
			555, 260,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+16],
			555, 205,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+17],
			555, 146,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+18],
			555, 233,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+19],
			555, 175,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+20],
			685, 260,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+21],
			685, 205,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+22],
			685, 146,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+23],
			685, 233,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*25+24],
			685, 175,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
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
		
		
	        pno.forEach(function(value){
		fs.stat('Modified' + value +'.pdf', function(err, stat) {
    		if(err == null) {
        	console.log('File exists');
		fs.unlinkSync('Modified' + value +'.pdf'); }
	}) });
	regnofn = [];
	regnoan = [];
	pno = [];
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
	console.log(rows);
	fs.writeFile('tried.txt',rows);
	function function2() {
	 text = fs.readFileSync('tried.txt').toString().split(",") 
	console.log(text);
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
		for(var i=0;i<25;i++)
			if(regnofn[Math.max.apply(null,pno)*25+i] == undefined)
				regnofn[Math.max.apply(null,pno)*25+i] = ""; 
				 
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
