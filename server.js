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
var regnoan = [];var ecec;var eeec;
var j,fnlen,anlen;var csec;var mechc;
var pno = [];var cset = [];var eeet = [];
var ano = [];var ecet = [];var mecht = [];
var cse = [];var flagm = 0;var cseca;var ececa;
var ece = [];var flage = 0;var eeeca;var mechca;
var eee = [];var flaga = 0;var alln = [];var allna = [];
var mech = [];var ecen = [];var ecena = [];var allno = [];
var cser = [];var eeen = [];var eeena = [];var allnoa = [];
var ecer = [];var mechn = [];var mechna = [];var allc = [];
var eeer = [];var csen = [];var csena = [];var allca = [];
var mechr = [];var flagc = 0;var allt = [];var allta = [];
var regnofnf = [];var cseta = [];var eeeta = [];var alld = [];var allda = [];
var regnoanf = [];var eceta = [];var mechta = [];
var date,ehfn,ehan;var c;var allh = [];var allha = [];
var nosph,nospha;var q = 0;
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
			if(csen[value].length > 0)
			{
			allh.push(req.body.ehf[value]);
			}
			if(mechn[value].length > 0)
			{
			allh.push(req.body.ehf[value]);
			}
			if(ecen[value].length > 0)
			{
			allh.push(req.body.ehf[value]);
			}
			if(eeen[value].length > 0)
			{
			allh.push(req.body.ehf[value]);
			}
		});	
		ano.forEach(function(value){
			if(csena[value].length > 0)
			{
			allha.push(req.body.eha[value]);
			}
			if(mechna[value].length > 0)
			{
			allha.push(req.body.eha[value]);
			}
			if(ecena[value].length > 0)
			{
			allha.push(req.body.eha[value]);
			}
			if(eeena[value].length > 0)
			{
			allha.push(req.body.eha[value]);
			}
		});		
		
	pno.forEach(function(value){
		const pdfWriter = hummus.createWriterToModify( 'fix.pdf', {
			modifiedFilePath: 'Modified' + value + '.pdf'
		});
		const pageModifier = new hummus.PDFPageModifier(pdfWriter,0);
		pageModifier.startContext();
		const context = pageModifier.getContext();
		context.writeText(
			req.body.ehf[value],
			185, 510,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			date,
			705, 510,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);
		context.writeText(
			"FN",
			765, 510,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+0],
			175, 370,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+1],
			175, 343,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+2],
			175, 315,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+3],
			175, 285,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+4],
			175, 256,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+5],
			300, 370,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+6],
			300, 343,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+7],
			300, 315,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+8],
			300, 285,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+9],
			300, 256,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+10],
			430, 370,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+11],
			430, 343,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+12],
			430, 315,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+13],
			430, 285,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+14],
			430, 256,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+15],
			555, 370,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+16],
			555, 343,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+17],
			555, 315,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+18],
			555, 285,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnofn[value*nosph+19],
			555, 256,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if (nosph >= 21)
		{
		context.writeText(
			regnofn[value*nosph+20],
			685, 370,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if (nosph >= 22)
		{
		context.writeText(
			regnofn[value*nosph+21],
			685, 343,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if (nosph >= 23)
		{
		context.writeText(
			regnofn[value*nosph+22],
			685, 315,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if (nosph >= 24)
		{
		context.writeText(
			regnofn[value*nosph+23],
			685, 285,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if (nosph >= 25)
		{
		context.writeText(
			regnofn[value*nosph+24],
			685, 256,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if (nosph >= 26)
		{
		context.writeText(
			regnofn[value*nosph+25],
			175, 400,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if (nosph >= 27)
		{
		context.writeText(
			regnofn[value*nosph+26],
			685, 400,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		}
		}
		}
		}}}}
		if(csen[value].length > 78)
		{
		var z = csen[value].length-1;
		context.writeText(
			csen[value].slice(0,78),
			261, 173,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		context.writeText(
			csen[value].slice(78,z),
			261, 160,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		}
		else
		context.writeText(
			csen[value],
			261, 173,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		if(csen[value].length > 0)
		context.writeText(
			csec,
			185, 168,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:12,colorspace:'black',color:'black'}
		); 
		if(mechn[value].length > 78)
		{
		var z = mechn[value].length-1;
		context.writeText(
			mechn[value].slice(0,78),
			261, 146,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		context.writeText(
			mechn[value].slice(78,z),
			261, 133,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		}
		else
		context.writeText(
			mechn[value],
			261, 146,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		if(mechn[value].length > 0)
		context.writeText(
			mechc,
			185, 140,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:12,colorspace:'black',color:'black'}
		); 
		
		if(ecen[value].length > 78)
		{
		var z = ecen[value].length-1;
		context.writeText(
			ecen[value].slice(0,78),
			261, 119,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		context.writeText(
			ecen[value].slice(78,z),
			261, 106,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		}
		else
		context.writeText(
			ecen[value],
			261,119,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		if(ecen[value].length > 0)
		context.writeText(
			ecec,
			185, 110,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:12,colorspace:'black',color:'black'}
		); 
		
		if(eeen[value].length > 78)
		{
		var z = eeen[value].length-1;
		context.writeText(
			eeen[value].slice(0,78),
			261, 90,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		context.writeText(
			eeen[value].slice(78,z),
			261, 77,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		}
		else
		context.writeText(
			eeen[value],
			261, 90,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		if(eeen[value].length > 0)
		context.writeText(
			eeec,
			185, 80,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if(csen[value].length > 0)
		context.writeText(
			cset[value],
			720, 168,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if(mechn[value].length > 0) 
		context.writeText(
			mecht[value],
			720, 140,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:12,colorspace:'black',color:'black'}
		); 
		if(ecen[value].length > 0)
		context.writeText(
			ecet[value],
			720, 110,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:12,colorspace:'black',color:'black'}
		); 
		if(eeen[value].length > 0)
		context.writeText(
			eeet[value],
			720, 80,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:12,colorspace:'black',color:'black'}
		);  
		
		pageModifier.endContext().writePage();
		pdfWriter.end();
	});
	
	allno.forEach(function(value){
		const pdfWriter = hummus.createWriterToModify( 'lfix.pdf', {
			modifiedFilePath: 'Modify' + value + '.pdf'
		});
		const pageModifier = new hummus.PDFPageModifier(pdfWriter,0);
		pageModifier.startContext();
		const context = pageModifier.getContext();
		context.writeText(
			date,
			700, 520,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);
		context.writeText(
			"FN",
			760, 520,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);
		
		for(var i=0;i<10;i++)
		{
		if(alln[value*10+i] != undefined)
		{
		var x = [133,180,230,230,650,700];var y = [460,460,475,490,460,460];
		y[0] = y[0]-36*i;y[1] = y[1]-36*i;y[2] = y[2]-38*i;y[3] = y[2]-15;y[4] = y[4]-36*i;y[5] = y[5]-36*i;
		context.writeText(
			alld[value*10+i],
			x[0], y[0],
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);
		context.writeText(
			allc[value*10+i],
			x[1], y[1],
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);
		if(alln[value*10+i].length > 78)
		{
		var z = alln[value*10+i].length;
		context.writeText(
			alln[value*10+i].slice(0,78),
			x[2], y[2],
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);
		context.writeText(
			alln[value*10+i].slice(78,z),
			x[3], y[3],
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);
		}else
		context.writeText(
			alln[value*10+i],
			x[2], y[2],
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);
		context.writeText(
			allt[value*10+i],
			x[4], y[4],
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);
		context.writeText(
			allh[value*10+i],
			x[5], y[5],
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);}}
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
			185, 510,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			date,
			705, 510,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);
		context.writeText(
			"AN",
			765, 510,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);		
		context.writeText(
			regnoan[value*nospha+0],
			175, 370,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+1],
			175, 343,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+2],
			175, 315,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+3],
			175, 285,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+4],
			175, 256,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+5],
			300, 370,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+6],
			300, 343,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+7],
			300, 315,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+8],
			300, 285,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+9],
			300, 256,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+10],
			430, 370,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+11],
			430, 343,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+12],
			430, 315,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+13],
			430, 285,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+14],
			430, 256,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+15],
			555, 370,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+16],
			555, 343,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+17],
			555, 315,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+18],
			555, 285,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		context.writeText(
			regnoan[value*nospha+19],
			555, 256,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if (nospha >= 21)
		{
		context.writeText(
			regnoan[value*nospha+20],
			685, 370,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if (nospha >= 22)
		{
		context.writeText(
			regnoan[value*nospha+21],
			685, 343,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if (nospha >= 23)
		{
		context.writeText(
			regnoan[value*nospha+22],
			685, 315,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if (nospha >= 24)
		{
		context.writeText(
			regnoan[value*nospha+23],
			685, 285,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if (nospha >= 25)
		{
		context.writeText(
			regnoan[value*nospha+24],
			685, 256,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if (nospha >= 26)
		{
		context.writeText(
			regnoan[value*nospha+25],
			175, 400,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if (nospha >= 27)
		{
		context.writeText(
			regnoan[value*nospha+26],
			685, 400,
			{font:pdfWriter.getFontForFile('Times New Roman.ttf'),size:12,colorspace:'black',color:'black'}
		);
		}
		}
		}}}}}
		if(csena[value].length > 78)
		{
		var z = csena[value].length-1;
		context.writeText(
			csena[value].slice(0,78),
			261, 173,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		context.writeText(
			csena[value].slice(78,z),
			261, 160,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		}
		else
		context.writeText(
			csena[value],
			261, 173,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		if(csena[value].length > 0)
		context.writeText(
			cseca,
			185, 168,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:12,colorspace:'black',color:'black'}
		); 
		
		if(mechna[value].length > 78)
		{
		var z = mechna[value].length-1;
		context.writeText(
			mechna[value].slice(0,78),
			261, 146,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		context.writeText(
			mechna[value].slice(78,z),
			261, 133,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		}
		else
		context.writeText(
			mechna[value],
			261, 146,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		if(mechna[value].length > 0)
		context.writeText(
			mechca,
			185, 140,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:12,colorspace:'black',color:'black'}
		); 
		
		if(ecena[value].length > 78)
		{
		var z = ecena[value].length-1;
		context.writeText(
			ecena[value].slice(0,78),
			261, 119,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		context.writeText(
			ecena[value].slice(78,z),
			261, 106,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		}
		else
		context.writeText(
			ecena[value],
			261, 119,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		if(ecena[value].length > 0)
		context.writeText(
			ececa,
			185, 110,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:12,colorspace:'black',color:'black'}
		); 
		
		if(eeena[value].length > 78)
		{
		var z = eeena[value].length-1;
		context.writeText(
			eeena[value].slice(0,78),
			261, 90,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		context.writeText(
			eeena[value].slice(78,z),
			261, 77,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		}
		else
		context.writeText(
			eeena[value],
			261, 90,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:11,colorspace:'black',color:'black'}
		);
		if(eeena[value].length > 0)
		context.writeText(
			eeeca,
			185, 80,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:12,colorspace:'black',color:'black'}
		); 
		if(csena[value].length > 0)
		context.writeText(
			cseta[value],
			720, 168,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:12,colorspace:'black',color:'black'}
		);
		if(mechna[value].length > 0) 
		context.writeText(
			mechta[value],
			720, 140,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:12,colorspace:'black',color:'black'}
		); 
		if(ecena[value].length > 0)
		context.writeText(
			eceta[value],
			720, 110,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:12,colorspace:'black',color:'black'}
		); 
		if(eeena[value].length > 0)
		context.writeText(
			eeeta[value],
			720, 80,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:12,colorspace:'black',color:'black'}
		);
		
		pageModifier.endContext().writePage();
		pdfWriter.end();
	});

	allnoa.forEach(function(value){
		const pdfWriter = hummus.createWriterToModify( 'lfix.pdf', {
			modifiedFilePath: 'Modifya' + value + '.pdf'
		});
		const pageModifier = new hummus.PDFPageModifier(pdfWriter,0);
		pageModifier.startContext();
		const context = pageModifier.getContext();
		context.writeText(
			date,
			700, 520,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);
		context.writeText(
			"AN",
			760, 520,
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);
		
		for(var i=0;i<10;i++)
		{
		if(allna[value*10+i] != undefined)
		{
		var x = [133,180,230,230,650,700];var y = [460,460,475,490,460,460];
		y[0] = y[0]-36*i;y[1] = y[1]-36*i;y[2] = y[2]-38*i;y[3] = y[2]-15;y[4] = y[4]-36*i;y[5] = y[5]-36*i;
		context.writeText(
			allda[value*10+i],
			x[0], y[0],
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);
		context.writeText(
			allca[value*10+i],
			x[1], y[1],
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);
		if(allna[value*10+i].length > 78)
		{
		var z = allna[value*10+i].length;
		context.writeText(
			allna[value*10+i].slice(0,78),
			x[2], y[2],
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);
		context.writeText(
			allna[value*10+i].slice(78,z),
			x[3], y[3],
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);
		}else
		context.writeText(
			allna[value*10+i],
			x[2], y[2],
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);
		context.writeText(
			allta[value*10+i],
			x[4], y[4],
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);
		context.writeText(
			allha[value*10+i],
			x[5], y[5],
			{font:pdfWriter.getFontForFile('Times New Roman Bold.ttf'),size:10,colorspace:'black',color:'black'}
		);}}
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
	allno.forEach(function(value){
		pdfWriter.appendPDFPagesFromPDF('Modify' + value + '.pdf');
	});	
	allnoa.forEach(function(value){
		pdfWriter.appendPDFPagesFromPDF('Modifya' + value + '.pdf');
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
		allno.forEach(function(value){
		fs.stat('Modify' + value +'.pdf', function(err, stat) {
    		if(err == null) {
        	console.log('File exists');
		fs.unlinkSync('Modify' + value +'.pdf'); }
	}) });
		allnoa.forEach(function(value){
		fs.stat('Modifya' + value +'.pdf', function(err, stat) {
    		if(err == null) {
        	console.log('File exists');
		fs.unlinkSync('Modifya' + value +'.pdf'); }
	}) });
	regnofn = [];
	regnoan = [];
	regnofnf = [];
	regnoanf = [];
	pno = [];
	ano = [];
	cse = [];eee = [];ece = [];mech = [];
	fnlen = null;allno = [];allnoa = [];
	anlen = null;alld =[];alln =[];allc =[];allh =[];
	allda =[];allna =[];allca =[];allha =[];
	allt = [];allta = [];
	csen = [];mechn = [];ecen = [];eeen = [];
	csena = [];mechna = [];ecena = [];eeena = [];
});


app.post("/upload", function(req, res) {
nosph = req.body.sph;
nospha = req.body.spha;
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
		if(c == 1 && q == 1 && j == 1)
			{
			q=0;
			csec = value.slice(0,6);
			}
		if(c == 2 && q == 1 && j == 1)
			{
			q=0;
			mechc = value.slice(0,6);
			}
		if(c == 3 && q == 1 && j == 1)
			{
			q=0;
			eeec = value.slice(0,6);
			}
		if(c == 4 && q == 1 && j == 1)
			{
			q=0;	
			ecec = value.slice(0,6);
			}
		if(c == 1 && q == 1 && j == 0)
			{
			q=0;
			cseca = value.slice(0,6);
			}
		if(c == 2 && q == 1 && j == 0)
			{
			q=0;
			mechca = value.slice(0,6);
			}
		if(c == 3 && q == 1 && j == 0)
			{
			q=0;
			eeeca = value.slice(0,6);
			}
		if(c == 4 && q == 1 && j == 0)
			{
			q=0;
			ececa = value.slice(0,6);
			}
		if(value.slice(0,3) == 104)
			 c = 1;
		if(value.slice(0,3) == 114)
			 c = 2;
		if(value.slice(0,3) == 105)
			 c = 3;
		if(value.slice(0,3) == 106)
			 c = 4;
		if(value == "Subject Code/Name :")
			q=1;

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
		for(var i=0;i<nospha;i++)
		 {
			if(regnoan[Math.max.apply(null,ano)*nospha+i] == undefined)
				regnoan[Math.max.apply(null,ano)*nospha+i] = "";  
		 }
		for(var i=0;i<fnlen;i++)
		{
		cser = [];ecer = [];eeer = [];mechr = [];
		csen[i] = "";ecen[i] = "";eeen[i] = "";mechn[i] = "";
		cset[i] = 0;ecet[i] = 0;eeet[i] = 0;mecht[i] = 0;
		for(var j=0;j<nosph;j++)
		{
		if(Math.floor(regnofn[i*nosph+j]/1000)%1000 == 104)
		{
		cser.push(regnofn[i*nosph+j]);
		++cset[i];
		}
		if(Math.floor(regnofn[i*nosph+j]/1000)%1000 == 106)
		{
		ecer.push(regnofn[i*nosph+j]);
		++ecet[i];
		}
		if(Math.floor(regnofn[i*nosph+j]/1000)%1000 == 105)
		{
		eeer.push(regnofn[i*nosph+j]);
		++eeet[i];
		}
		if(Math.floor(regnofn[i*nosph+j]/1000)%1000 == 114)
		{
		mechr.push(regnofn[i*nosph+j]);
		++mecht[i];
		}
		}
		for(j=0;j<nosph;j++)
		{
			if((cser[j+1]-cser[j]) == 1 && flagc == 0)
			{
			csen[i] += cser[j]+"-";
			flagc = 1;
			}
			if((cser[j+1]-cser[j]) != 1 && cser[j] != undefined)
			{
			csen[i] += cser[j]+",";
			flagc = 0;
			}
			if((ecer[j+1]-ecer[j]) == 1 && flaga == 0)
			{
			ecen[i] += ecer[j]+"-";
			flaga = 1;
			}
			if((ecer[j+1]-ecer[j]) != 1 && ecer[j] != undefined)
			{
			ecen[i] += ecer[j]+",";
			flaga = 0;
			}
			if((eeer[j+1]-eeer[j]) == 1 && flage == 0)
			{
			eeen[i] += eeer[j]+"-";
			flage = 1;
			}
			if((eeer[j+1]-eeer[j]) != 1 && eeer[j] != undefined)
			{
			eeen[i] += eeer[j]+",";
			flage = 0;
			}
			if((mechr[j+1]-mechr[j]) == 1 && flagm == 0)
			{
			mechn[i] += mechr[j]+"-";
			flagm = 1;
			}
			if((mechr[j+1]-mechr[j]) != 1 && mechr[j] != undefined)
			{
			mechn[i] += mechr[j]+",";
			flagm = 0;
			}
			
		}
		}
		
		for(var i=0;i<anlen;i++)
		{
		cser = [];ecer = [];eeer = [];mechr = [];
		csena[i] = "";ecena[i] = "";eeena[i] = "";mechna[i] = "";
		cseta[i] = 0;eceta[i] = 0;eeeta[i] = 0;mechta[i] = 0;
		for(var j=0;j<nospha;j++)
		{
		if(Math.floor(regnoan[i*nospha+j]/1000)%1000 == 104)
		{
		cser.push(regnoan[i*nospha+j]);
		++cseta[i];
		}
		if(Math.floor(regnoan[i*nospha+j]/1000)%1000 == 106)
		{
		ecer.push(regnoan[i*nospha+j]);
		++eceta[i];
		}
		if(Math.floor(regnoan[i*nospha+j]/1000)%1000 == 105)
		{
		eeer.push(regnoan[i*nospha+j]);
		++eeeta[i];
		}
		if(Math.floor(regnoan[i*nospha+j]/1000)%1000 == 114)
		{
		mechr.push(regnoan[i*nospha+j]);
		++mechta[i];
		}
		}
		for(j=0;j<nospha;j++)
		{
			if((cser[j+1]-cser[j]) == 1 && flagc == 0)
			{
			csena[i] += cser[j]+"-";
			flagc = 1;
			}
			if((cser[j+1]-cser[j]) != 1 && cser[j] != undefined)
			{
			csena[i] += cser[j]+",";
			flagc = 0;
			}
			if((ecer[j+1]-ecer[j]) == 1 && flaga == 0)
			{
			ecena[i] += ecer[j]+"-";
			flaga = 1;
			}
			if((ecer[j+1]-ecer[j]) != 1 && ecer[j] != undefined)
			{
			ecena[i] += ecer[j]+",";
			flaga = 0;
			}
			if((eeer[j+1]-eeer[j]) == 1 && flage == 0)
			{
			eeena[i] += eeer[j]+"-";
			flage = 1;
			}
			if((eeer[j+1]-eeer[j]) != 1 && eeer[j] != undefined)
			{
			eeena[i] += eeer[j]+",";
			flage = 0;
			}
			if((mechr[j+1]-mechr[j]) == 1 && flagm == 0)
			{
			mechna[i] += mechr[j]+"-";
			flagm = 1;
			}
			if((mechr[j+1]-mechr[j]) != 1 && mechr[j] != undefined)
			{
			mechna[i] += mechr[j]+",";
			flagm = 0;
			}
			
		}
		}
		pno.forEach(function(value){
			if(csen[value].length > 0)
			{
			allt.push(cset[value]);
			alln.push(csen[value]);
			}
			if(mechn[value].length > 0)
			{
			allt.push(mecht[value]);
			alln.push(mechn[value]);
			}
			if(ecen[value].length > 0)
			{
			allt.push(ecet[value]);
			alln.push(ecen[value]);
			}
			if(eeen[value].length > 0)
			{
			allt.push(eeet[value]);
			alln.push(eeen[value]);
			}
		});
		ano.forEach(function(value){
			if(csena[value].length > 0)
			{
			allta.push(cseta[value]);
			allna.push(csena[value]);
			}
			if(mechna[value].length > 0)
			{
			allta.push(mechta[value]);
			allna.push(mechna[value]);
			}
			if(ecena[value].length > 0)
			{
			allta.push(eceta[value]);
			allna.push(ecena[value]);
			}
			if(eeena[value].length > 0)
			{
			allta.push(eeeta[value]);
			allna.push(eeena[value]);
			}
		});		 
		for(var i=0;i<Math.floor(alln.length/10)+1;i++)
			allno.push(i);
		for(var i=0;i<Math.floor(allna.length/10)+1;i++)
			allnoa.push(i);
		alln.forEach(function(value){
			if(value.slice(6,9) == 104)
			{
			allc.push(csec);
			alld.push("CSE");
			}
			if(value.slice(6,9) == 104)
			{
			allc.push(mechc);
			alld.push("MECH");
			}
			if(value.slice(6,9) == 106)
			{
			allc.push(ecec);
			alld.push("ECE");
			}
			if(value.slice(6,9) == 105)
			{
			allc.push(eeec);
			alld.push("EEE");
			}
		});
		allna.forEach(function(value){
			if(value.slice(6,9) == 104)
			{
			allca.push(cseca);
			allda.push("CSE");
			}
			if(value.slice(6,9) == 104)
			{
			allca.push(mechca);
			allda.push("MECH");
			}
			if(value.slice(6,9) == 106)
			{
			allca.push(ececa);
			allda.push("ECE");
			}
			if(value.slice(6,9) == 105)
			{
			allca.push(eeeca);
			allda.push("EEE");
			}
		});
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
