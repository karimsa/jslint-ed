/**
 * index.js - jslint-ed
 * JSLint edition loader based on node-jslint.
 * Copyright (C) 2016 Karim Alibhai.
 */

const vm = require('vm'),
      fs = require('fs'),
      path = require('path'),
      aliases = {
          latest: '2015-10-29',
          es5: '2014-07-08',
          es6: '2015-10-29'
      };

/**
 * Loads a specified JSLint edition.
 * 
 * @param edition a proper JSLint edition string.
 */
module.exports = function (edition) {
    // any type other than string is incorrect
    if (typeof edition !== 'string' || !(/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(edition) || aliases.hasOwnProperty(edition))) {
        throw new Error('JSLint edition must be a valid string.');
    }

    // default edition is latest, and aliases must be
    // converted to proper edition numbers
    edition = aliases[edition || 'latest'] || edition;

    // extract source code
    const source = fs.readFileSync(path.resolve(__dirname, 'editions', edition + '.js'), 'utf8');

    // run jslint under the context
    const ctx = vm.createContext();
    vm.runInContext(source, ctx);

    // newer editions have a slightly different
    // API (i.e. editions 2015-05-08 and es6)
    if (typeof ctx.JSLINT === 'undefined') {
        // wrap over the newer api
        ctx.JSLINT = function (script, options) {
            ctx.JSLINT.data = () => ctx.jslint(script, options, options.predef);
        };

        // expose the jslint edition
        ctx.JSLINT.edition = edition;
    }

    // the resulting function is always the global
    // JSLINT function in the context
    return ctx.JSLINT;
};

// expose the list of used aliases and available editions
module.exports.aliases = aliases;
module.exports.editions = (fs.readdirSync(path.resolve(__dirname, 'editions')) || []).map(function (filename) {
    return filename.substr(0, filename.length - 3);
});