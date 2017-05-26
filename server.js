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
var shuffle = require('shuffle-array');
var text,texts;
var regnofn = [];
var regnoan = [];
var j,fnlen,anlen;
var pno = [];
var ano = [];
var cse = [];
var ece = [];
var eee = [];
var mech = [];
var regnofnf = [];
var regnoanf = [];
var date,ehfn,ehan;
var nosph,nospha;
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
			regnofn[value*nosph+0],
			170, 260,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+1],
			170, 233,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+2],
			170, 205,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+3],
			170, 175,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+4],
			170, 146,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+5],
			295, 260,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+6],
			295, 233,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+7],
			295, 205,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+8],
			295, 175,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+9],
			295, 146,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+10],
			425, 260,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+11],
			425, 233,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+12],
			425, 205,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+13],
			425, 175,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+14],
			420, 146,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+15],
			555, 260,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+16],
			555, 233,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+17],
			555, 205,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+18],
			555, 175,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+19],
			555, 146,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+20],
			685, 260,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+21],
			685, 233,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+22],
			685, 205,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+23],
			685, 175,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if (nosph >= 25)
		{
		context.writeText(
			regnofn[value*nosph+24],
			685, 146,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if (nosph >= 26)
		{
		context.writeText(
			regnofn[value*nosph+25],
			170, 290,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if (nosph >= 27)
		{
		context.writeText(
			regnofn[value*nosph+26],
			685, 290,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		}
		}
		}
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
			regnoan[value*nospha+0],
			170, 260,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+1],
			170, 233,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+2],
			170, 205,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+3],
			170, 175,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+4],
			170, 146,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+5],
			295, 260,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+6],
			295, 233,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+7],
			295, 205,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+8],
			295, 175,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+9],
			295, 146,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+10],
			425, 260,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+11],
			425, 233,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+12],
			425, 205,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+13],
			425, 175,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+14],
			420, 146,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+15],
			555, 260,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+16],
			555, 233,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+17],
			555, 205,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+18],
			555, 175,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nosph+19],
			555, 146,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+20],
			685, 260,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+21],
			685, 233,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+22],
			685, 205,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+23],
			685, 175,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if (nospha >= 25)
		{
		context.writeText(
			regnoan[value*nospha+24],
			685, 146,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if (nospha >= 26)
		{
		context.writeText(
			regnoan[value*nospha+25],
			170, 290,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if (nospha >= 27)
		{
		context.writeText(
			regnoan[value*nospha+26],
			685, 290,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		}
		}
		}
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
	regnofnf = [];
	regnoanf = [];
	pno = [];
	ano = [];
	cse = [];eee = [];ece = [];mech = [];
	fnlen = null;
	anlen = null;
});


app.post("/upload", function(req, res) {
nosph = req.body.sph;
nospha = req.body.spha;
console.log(nosph,nospha);
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
			regnofnf.push(value);
			}
			else
			{
			regnoanf.push(value);
			}
		}

});
		regnofnf.forEach(function(value){
		if(Math.floor(value/1000)%1000 == 104)
		cse.push(value);
		if(Math.floor(value/1000)%1000 == 105)
		eee.push(value);
		if(Math.floor(value/1000)%1000 == 106)
		ece.push(value);
		if(Math.floor(value/1000)%1000 == 114)
		mech.push(value);
		});
		for(i=0;i<regnofnf.length;i++)
		{
			if(cse[i] != undefined)
			regnofn.push(cse[i]);
			if(eee[i] != undefined)
			regnofn.push(eee[i]);
			if(ece[i] != undefined)
			regnofn.push(ece[i]);
			if(mech[i] != undefined)
			regnofn.push(mech[i]);
		}
		cse = [];eee = [];ece = [];mech = [];
		regnoanf.forEach(function(value){
		if(Math.floor(value/1000)%1000 == 104)
		cse.push(value);
		if(Math.floor(value/1000)%1000 == 105)
		eee.push(value);
		if(Math.floor(value/1000)%1000 == 106)
		ece.push(value);
		if(Math.floor(value/1000)%1000 == 114)
		mech.push(value);
		});
		for(i=0;i<regnoanf.length;i++)
		{
			if(cse[i] != undefined)
			regnoan.push(cse[i]);
			if(eee[i] != undefined)
			regnoan.push(eee[i]);
			if(ece[i] != undefined)
			regnoan.push(ece[i]);
			if(mech[i] != undefined)
			regnoan.push(mech[i]);
		}
		console.log(regnofn,regnoan);
		fnlen = Math.floor(regnofn.length/nosph)+1;
		anlen = Math.floor(regnoan.length/nospha)+1;
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
		for(var i=0;i<nosph;i++)
		 {
			if(regnofn[Math.max.apply(null,pno)*nosph+i] == undefined)
				regnofn[Math.max.apply(null,pno)*nosph+i] = "";
		  }		
		for(var i=0;i<nosph;i++)
		 {
			if(regnoan[Math.max.apply(null,ano)*nospha+i] == undefined)
				regnoan[Math.max.apply(null,ano)*nospha+i] = "";  
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
