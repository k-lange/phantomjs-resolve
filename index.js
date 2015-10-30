var which = require('which');

module.exports = {
    path: which.sync('phantomjs')
};
