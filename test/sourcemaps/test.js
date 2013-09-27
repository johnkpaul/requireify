'use strict';

var fs = require('fs');
var vm = require('vm');
var assert = require('assert');

var browserify = require('browserify');
var requireify = require('../../index');

var ism = require('inline-source-map');

var modulePath = __dirname + '/../module.js';
var exported = __dirname + '/../compiled.js';

var b = browserify();

b.transform(requireify);


b.add(modulePath)
 .bundle({debug: true}, function(err, src){
   var sourceUrl = ism()
     .addGeneratedMappings(__dirname+'/compiled.js', src, {line: 25, column: 100})
       .inlineMappingUrl();
       console.log(src);
       console.log("+++++++++++++++++");
       console.log("+++++++++++++++++");
       console.log("+++++++++++++++++");
       console.log("+++++++++++++++++");
       console.log(sourceUrl);
  var toWrite = src.replace(/\/\/@.*$/g, sourceUrl);
   //fs.writeFileSync(__dirname+'/compiled.js', src);
   fs.writeFileSync(__dirname+'/compiled.js', toWrite);

 });
