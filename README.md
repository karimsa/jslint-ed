# jslint-ed

all the JSLint editions in one package.

[![NPM](https://nodei.co/npm/jslint-ed.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/jslint-ed/)

## Installation

Install via npm using `npm install jslint-ed`.

## Usage

To use the latest version of JSLint, simply do `require('jslint-ed')()` like so:

```javascript
var jslint = require('jslint-ed')();
jslint( /* use as specified by Douglas Crockford */ );
```

To use a specific edition (i.e. edition 'es6'), simply do `require('jslint-ed')('es6')`.

## List of Editions and Aliases

The package will expose the list of aliases under the property 'aliases' and the list of
editions under the property 'editions':

```javascript
{ [Function]
  aliases: { latest: '2015-10-29', es5: '2014-07-08', es6: '2015-10-29' },
  editions: 
   [ '2012-02-03',
     '2013-02-03',
     '2013-08-13',
     '2013-08-26',
     '2013-09-22',
     '2013-11-23',
     '2014-01-26',
     '2014-02-06',
     '2014-04-21',
     '2014-07-08',
     '2015-05-08' ] }
```

## License

All the code in the directory `editions` is written by Douglas Crockford. Therefore the
licensing and copyright of that code belongs to Douglas Crockford.

The code in 'index.js' is refactored from [node-jslint](https://github.com/reid/node-jslint).
This code is re-licensed under MIT.

For a copy of the licensing used in JSLint, see [LICENSE](LICENSE).
