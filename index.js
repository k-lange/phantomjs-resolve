var which = require('which');
var cp = require('child_process');
var semver = require('semver');

var path = which.sync('phantomjs');
var versionOutput = cp.execSync(path + ' -v', { encoding: 'utf8' });
var versionMatch = versionOutput.match(/\d+(?:\.\d+){2}/);
var version = versionMatch && versionMatch[0];

if (!semver.satisfies(version, '2.0.x')) {
    throw(new Error('Wrong phantomjs version', version || versionOutput));
}

module.exports = {
    path: path
};
