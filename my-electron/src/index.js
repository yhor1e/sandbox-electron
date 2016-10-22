'use strict';

const electron = require('electron'),
      remote = electron.remote,
      fileUtil = remote.require('./fileUtil');

fileUtil.fetchReadmeList(function (err, matches) {
  if(!err) document.write(matches.join());
})
