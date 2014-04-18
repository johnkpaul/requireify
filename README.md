# requireify

Browserify v3 transform to allow access to all modules from browser console

[![Build Status](https://travis-ci.org/johnkpaul/requireify.png)](https://travis-ci.org/johnkpaul/requireify)

![Usage](https://dl.dropboxusercontent.com/u/21266325/requireify.gif)

## Usage

Install requireify locally to your project:

    npm install requireify --save-dev


Then use it as Browserify transform or global transform module:

    browserify --transform requireify main.js > bundle.js
    # Will parse files in node_modules, for more see https://github.com/substack/node-browserify/issues/566
    browserify --global-transform=requireify main.js > bundle.js



```javascript
// /index.js
exports = module.exports = {
  hello: 'world'
};
  
// /foo/dep.js

var dep = require('./foo/dep');
console.log(dep.hello); // world
```

Now, inside your browser console, you can look up every module on the global require

    >> var hello = require('/foo/dep').hello;
    >> console.log(hello); // world

You can also include all libraries in the browser console that have been installed using npm and used in your browserify'd code. 
