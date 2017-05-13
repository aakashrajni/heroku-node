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
var ano = [];
var date,ehfn,ehan;
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 5000;

// Log all requests
app.use(logger('dev'));

// Serve static files
app.use(express.static(__dirname));
app.use(fileUpload());

// set the home page route
app.post("/pdf", function(req, res) {
	pno.forEach(function(value){
		const pdfWriter = hummus.createWriterToModify( 'fix.pdf', {
			modifiedFilePath: 'Modified' + value + '.pdf'
		});
		const pageModifier = new hummus.PDFPageModifier(pdfWriter,0);
		pageModifier.startContext();
		const context = pageModifier.getContext();
		context.writeText(
			req.body.ehf[value],
			185, 403,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			date,
			700, 403,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);
		context.writeText(
			"FN",
			760, 403,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);
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
	ano.forEach(function(value){
		const pdfWriter = hummus.createWriterToModify( 'fix.pdf', {
			modifiedFilePath: 'Modifieda' + value + '.pdf'
		});
		const pageModifier = new hummus.PDFPageModifier(pdfWriter,0);
		pageModifier.startContext();
		const context = pageModifier.getContext();
		context.writeText(
			req.body.eha[value],
			185, 403,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			date,
			700, 403,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);
		context.writeText(
			"AN",
			760, 403,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);		
		context.writeText(
			regnoan[value*25+0],
			170, 260,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+1],
			170, 205,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+2],
			170, 146,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+3],
			170, 233,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+4],
			170, 175,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+5],
			295, 260,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+6],
			295, 205,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+7],
			295, 146,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+8],
			295, 233,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+9],
			295, 175,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+10],
			425, 260,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+11],
			425, 205,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+12],
			425, 146,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+13],
			425, 233,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+14],
			420, 175,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+15],
			555, 260,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+16],
			555, 205,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+17],
			555, 146,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+18],
			555, 233,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+19],
			555, 175,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+20],
			685, 260,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+21],
			685, 205,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+22],
			685, 146,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+23],
			685, 233,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*25+24],
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
	ano.forEach(function(value){
		pdfWriter.appendPDFPagesFromPDF('Modifieda' + value + '.pdf');
	});	
		pdfWriter.end();
		fs.readFile('Merge.pdf', function (err,data){
     		res.contentType("application/pdf");
     		res.send(data);
});
		
		
	        pno.forEach(function(value){
		fs.stat('Modified' + value +'.pdf', function(err, stat) {
    		if(err == null) {
		fs.unlinkSync('Modified' + value +'.pdf'); }
	}) });
		ano.forEach(function(value){
		fs.stat('Modifieda' + value +'.pdf', function(err, stat) {
    		if(err == null) {
        	console.log('File exists');
		fs.unlinkSync('Modifieda' + value +'.pdf'); }
	}) });
	regnofn = [];
	regnoan = [];
	pno = [];
	ano = [];
	fnlen = null;
	anlen = null;
});


app.post("/upload", function(req, res) {
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/public'));
req.files.sampleFile.mv('try.pdf', function(err) {
    if (err) {
      res.status(500).send(err);
    }
    else {
      
      
    }
	fs.readFile('try.pdf', function (err, buffer) {
    if (err) return console.log(err);
    pdf2table.parse(buffer, function (err, rows, rowsdebug) {
        if(err) return console.log(err);
	fs.writeFile('tried.txt',rows);
	function function2() {
	 text = fs.readFileSync('tried.txt').toString().split(",") 
	text.forEach(function(value){
		if(value.length == 11)
		{
			date = value;
		}
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
		ehfn = fnlen;
		ehan = anlen;
		res.render('pdfform',{nfn:ehfn,nan:ehan});
		for(var i=0;i<fnlen;i++)
		{
			pno.push(i);
		}
		for(var i=0;i<anlen;i++)
		{
			ano.push(i);
		}
		for(var i=0;i<25;i++)
		 {
			if(regnofn[Math.max.apply(null,pno)*25+i] == undefined)
				regnofn[Math.max.apply(null,pno)*25+i] = "";
			if(regnoan[Math.max.apply(null,ano)*25+i] == undefined)
				regnoan[Math.max.apply(null,ano)*25+i] = "";  
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
