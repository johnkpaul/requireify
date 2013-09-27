;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var regex = /function[^)]*\([^)]*\)\s{0,}\{([\s\S]*)\}/,
	toString = Function.prototype.toString;

module.exports = function innersource(func){
  return toString.call(func).match(regex)[1];
};

},{}],2:[function(require,module,exports){
var __filename="/foo/dep.js";
  var global = (function(){ return this; }).call(null);
  if(!global.require){
    global.require = global.require || function require(key){return global.require[key];};

    (function(){
    var require = global.require;
    var ret = global.require;
        
    Object.defineProperty(global, 'require', {
        get: function(){
          return ret;
        },
        set: function(newRequire){
            ret = function(key){
                if(require[key]){
                  return require[key];
                }else{
                  var temp = ret;
                  ret = newRequire;
                  var module = newRequire(key);
                  ret = temp;
                  return module;
                }
            };
            for(var key in require){
              ret[key] = require[key];
            }
        }
    });

    })();
  }

exports = module.exports = {
  hello: 'world'
};
;
  var global = (function(){ return this; }).call(null);
  if(typeof __filename !== 'undefined'){
    global.require[__filename.substring(0, __filename.length - 3)] = module.exports;
  }

},{}],3:[function(require,module,exports){
var __filename="/foo/dep2.js";
  var global = (function(){ return this; }).call(null);
  if(!global.require){
    global.require = global.require || function require(key){return global.require[key];};

    (function(){
    var require = global.require;
    var ret = global.require;
        
    Object.defineProperty(global, 'require', {
        get: function(){
          return ret;
        },
        set: function(newRequire){
            ret = function(key){
                if(require[key]){
                  return require[key];
                }else{
                  var temp = ret;
                  ret = newRequire;
                  var module = newRequire(key);
                  ret = temp;
                  return module;
                }
            };
            for(var key in require){
              ret[key] = require[key];
            }
        }
    });

    })();
  }

module.exports = exports = 'world';
;
  var global = (function(){ return this; }).call(null);
  if(typeof __filename !== 'undefined'){
    global.require[__filename.substring(0, __filename.length - 3)] = module.exports;
  }

},{}],4:[function(require,module,exports){
var __filename="/module.js";
  var global = (function(){ return this; }).call(null);
  if(!global.require){
    global.require = global.require || function require(key){return global.require[key];};

    (function(){
    var require = global.require;
    var ret = global.require;
        
    Object.defineProperty(global, 'require', {
        get: function(){
          return ret;
        },
        set: function(newRequire){
            ret = function(key){
                if(require[key]){
                  return require[key];
                }else{
                  var temp = ret;
                  ret = newRequire;
                  var module = newRequire(key);
                  ret = temp;
                  return module;
                }
            };
            for(var key in require){
              ret[key] = require[key];
            }
        }
    });

    })();
  }

;var global = (function(){ return this; }).call(null);global.require['innersource'] = require('innersource');'use strict';
var foo = require('./foo/dep');
var dep2 = require('./foo/dep2');
var innersource = require('innersource');

exports = module.exports = {
  hello: foo.hello
};
;
  var global = (function(){ return this; }).call(null);
  if(typeof __filename !== 'undefined'){
    global.require[__filename.substring(0, __filename.length - 3)] = module.exports;
  }

},{"./foo/dep":2,"./foo/dep2":3,"innersource":1}]},{},[4])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvanBhdWwvd29ya3NwYWNlL3JlcXVpcmVpZnkvbm9kZV9tb2R1bGVzL2lubmVyc291cmNlL2luZGV4LmpzIiwiL1VzZXJzL2pwYXVsL3dvcmtzcGFjZS9yZXF1aXJlaWZ5L3Rlc3QvZm9vL2RlcC5qcyIsIi9Vc2Vycy9qcGF1bC93b3Jrc3BhY2UvcmVxdWlyZWlmeS90ZXN0L2Zvby9kZXAyLmpzIiwiL1VzZXJzL2pwYXVsL3dvcmtzcGFjZS9yZXF1aXJlaWZ5L3Rlc3QvbW9kdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG52YXIgcmVnZXggPSAvZnVuY3Rpb25bXildKlxcKFteKV0qXFwpXFxzezAsfVxceyhbXFxzXFxTXSopXFx9Lyxcblx0dG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5uZXJzb3VyY2UoZnVuYyl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGZ1bmMpLm1hdGNoKHJlZ2V4KVsxXTtcbn07XG4iLCJ2YXIgX19maWxlbmFtZT1cIi9mb28vZGVwLmpzXCI7XG4gIHZhciBnbG9iYWwgPSAoZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pLmNhbGwobnVsbCk7XG4gIGlmKCFnbG9iYWwucmVxdWlyZSl7XG4gICAgZ2xvYmFsLnJlcXVpcmUgPSBnbG9iYWwucmVxdWlyZSB8fCBmdW5jdGlvbiByZXF1aXJlKGtleSl7cmV0dXJuIGdsb2JhbC5yZXF1aXJlW2tleV07fTtcblxuICAgIChmdW5jdGlvbigpe1xuICAgIHZhciByZXF1aXJlID0gZ2xvYmFsLnJlcXVpcmU7XG4gICAgdmFyIHJldCA9IGdsb2JhbC5yZXF1aXJlO1xuICAgICAgICBcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCAncmVxdWlyZScsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24obmV3UmVxdWlyZSl7XG4gICAgICAgICAgICByZXQgPSBmdW5jdGlvbihrZXkpe1xuICAgICAgICAgICAgICAgIGlmKHJlcXVpcmVba2V5XSl7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWlyZVtrZXldO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgdmFyIHRlbXAgPSByZXQ7XG4gICAgICAgICAgICAgICAgICByZXQgPSBuZXdSZXF1aXJlO1xuICAgICAgICAgICAgICAgICAgdmFyIG1vZHVsZSA9IG5ld1JlcXVpcmUoa2V5KTtcbiAgICAgICAgICAgICAgICAgIHJldCA9IHRlbXA7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbW9kdWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IodmFyIGtleSBpbiByZXF1aXJlKXtcbiAgICAgICAgICAgICAgcmV0W2tleV0gPSByZXF1aXJlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIH0pKCk7XG4gIH1cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBoZWxsbzogJ3dvcmxkJ1xufTtcbjtcbiAgdmFyIGdsb2JhbCA9IChmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSkuY2FsbChudWxsKTtcbiAgaWYodHlwZW9mIF9fZmlsZW5hbWUgIT09ICd1bmRlZmluZWQnKXtcbiAgICBnbG9iYWwucmVxdWlyZVtfX2ZpbGVuYW1lLnN1YnN0cmluZygwLCBfX2ZpbGVuYW1lLmxlbmd0aCAtIDMpXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG4iLCJ2YXIgX19maWxlbmFtZT1cIi9mb28vZGVwMi5qc1wiO1xuICB2YXIgZ2xvYmFsID0gKGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KS5jYWxsKG51bGwpO1xuICBpZighZ2xvYmFsLnJlcXVpcmUpe1xuICAgIGdsb2JhbC5yZXF1aXJlID0gZ2xvYmFsLnJlcXVpcmUgfHwgZnVuY3Rpb24gcmVxdWlyZShrZXkpe3JldHVybiBnbG9iYWwucmVxdWlyZVtrZXldO307XG5cbiAgICAoZnVuY3Rpb24oKXtcbiAgICB2YXIgcmVxdWlyZSA9IGdsb2JhbC5yZXF1aXJlO1xuICAgIHZhciByZXQgPSBnbG9iYWwucmVxdWlyZTtcbiAgICAgICAgXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsb2JhbCwgJ3JlcXVpcmUnLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKG5ld1JlcXVpcmUpe1xuICAgICAgICAgICAgcmV0ID0gZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgICAgICAgICBpZihyZXF1aXJlW2tleV0pe1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmVba2V5XTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gcmV0O1xuICAgICAgICAgICAgICAgICAgcmV0ID0gbmV3UmVxdWlyZTtcbiAgICAgICAgICAgICAgICAgIHZhciBtb2R1bGUgPSBuZXdSZXF1aXJlKGtleSk7XG4gICAgICAgICAgICAgICAgICByZXQgPSB0ZW1wO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZHVsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yKHZhciBrZXkgaW4gcmVxdWlyZSl7XG4gICAgICAgICAgICAgIHJldFtrZXldID0gcmVxdWlyZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB9KSgpO1xuICB9XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9ICd3b3JsZCc7XG47XG4gIHZhciBnbG9iYWwgPSAoZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pLmNhbGwobnVsbCk7XG4gIGlmKHR5cGVvZiBfX2ZpbGVuYW1lICE9PSAndW5kZWZpbmVkJyl7XG4gICAgZ2xvYmFsLnJlcXVpcmVbX19maWxlbmFtZS5zdWJzdHJpbmcoMCwgX19maWxlbmFtZS5sZW5ndGggLSAzKV0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfVxuIiwidmFyIF9fZmlsZW5hbWU9XCIvbW9kdWxlLmpzXCI7XG4gIHZhciBnbG9iYWwgPSAoZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pLmNhbGwobnVsbCk7XG4gIGlmKCFnbG9iYWwucmVxdWlyZSl7XG4gICAgZ2xvYmFsLnJlcXVpcmUgPSBnbG9iYWwucmVxdWlyZSB8fCBmdW5jdGlvbiByZXF1aXJlKGtleSl7cmV0dXJuIGdsb2JhbC5yZXF1aXJlW2tleV07fTtcblxuICAgIChmdW5jdGlvbigpe1xuICAgIHZhciByZXF1aXJlID0gZ2xvYmFsLnJlcXVpcmU7XG4gICAgdmFyIHJldCA9IGdsb2JhbC5yZXF1aXJlO1xuICAgICAgICBcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCAncmVxdWlyZScsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24obmV3UmVxdWlyZSl7XG4gICAgICAgICAgICByZXQgPSBmdW5jdGlvbihrZXkpe1xuICAgICAgICAgICAgICAgIGlmKHJlcXVpcmVba2V5XSl7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWlyZVtrZXldO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgdmFyIHRlbXAgPSByZXQ7XG4gICAgICAgICAgICAgICAgICByZXQgPSBuZXdSZXF1aXJlO1xuICAgICAgICAgICAgICAgICAgdmFyIG1vZHVsZSA9IG5ld1JlcXVpcmUoa2V5KTtcbiAgICAgICAgICAgICAgICAgIHJldCA9IHRlbXA7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbW9kdWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IodmFyIGtleSBpbiByZXF1aXJlKXtcbiAgICAgICAgICAgICAgcmV0W2tleV0gPSByZXF1aXJlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIH0pKCk7XG4gIH1cblxuO3ZhciBnbG9iYWwgPSAoZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pLmNhbGwobnVsbCk7Z2xvYmFsLnJlcXVpcmVbJ2lubmVyc291cmNlJ10gPSByZXF1aXJlKCdpbm5lcnNvdXJjZScpOyd1c2Ugc3RyaWN0JztcbnZhciBmb28gPSByZXF1aXJlKCcuL2Zvby9kZXAnKTtcbnZhciBkZXAyID0gcmVxdWlyZSgnLi9mb28vZGVwMicpO1xudmFyIGlubmVyc291cmNlID0gcmVxdWlyZSgnaW5uZXJzb3VyY2UnKTtcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBoZWxsbzogZm9vLmhlbGxvXG59O1xuO1xuICB2YXIgZ2xvYmFsID0gKGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KS5jYWxsKG51bGwpO1xuICBpZih0eXBlb2YgX19maWxlbmFtZSAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgIGdsb2JhbC5yZXF1aXJlW19fZmlsZW5hbWUuc3Vic3RyaW5nKDAsIF9fZmlsZW5hbWUubGVuZ3RoIC0gMyldID0gbW9kdWxlLmV4cG9ydHM7XG4gIH1cbiJdfQ==
;