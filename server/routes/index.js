const express = require('express');

const git = require('./../helpers/git');
const parseFileList = require('./../helpers/parseFileList');

const config = require('./../../app.json');

const router = express.Router();

// GET home page.
router.get('/', (req, res, next) => {
  const title = config.menu && config.menu.length !== 0 ? config.menu : '';
  const branch = 'master';
  const pathname = '';
  const lsPath = pathname || '.';
  const cwd = config.repositoryDiractory;

  git(`ls-tree -r -t ${branch} ${lsPath}`, { cwd })
    .then(data => {
      const files = parseFileList(data).filter(file => pathname === file.dir);
      const tree = { children: files };

      res.render('index', { title, branch, tree });
    });
});

module.exports = router;
