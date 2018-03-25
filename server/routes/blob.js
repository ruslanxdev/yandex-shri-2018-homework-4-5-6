const _ = require('lodash');
const path = require('path');
const express = require('express');
const git = require('./../helpers/git');
const parseFileList = require('./../helpers/parseFileList');
const parseBranchList = require('./../helpers/parseBranchList');
const config = require('./../../app.json');

const router = express.Router();

router.get(/^\/((\w+)\/?(.*?)?$)?/, (req, res, next) => {
  const branch = req.params[1] || config.defaultBranch || 'master';
  const pathnameArr = req.params[2]
    ? req.params[2].split('/').filter(s => !!s)
    : [];
  const pathname = pathnameArr.join('/');
  const level = pathnameArr.length;
  const title = [branch, pathname].filter(s => !!s).join('/');
  const filepath = path.normalize(pathname);
  const cwd = config.repositoryDiractory;

  Promise.all([
    git(`ls-tree -r -t ${branch} ${filepath}`, { cwd }),
    git('branch', { cwd })
  ])
    .then(data => {
      if (!data[0]) {
        next();

        return;
      }

      const root = { filepath: '', type: 'tree', base: config.name, level: -1 };
      const files = [root, ...parseFileList(data[0])];
      const file = files.filter(file =>
        file.type === 'blob' && file.filepath === pathname
      )[0];
      const parents = files.filter(file => file.level < level);
      const branches = _.uniq([branch, ...parseBranchList(data[1])]);
      const breadcrumbs = parents;

      if (file) {
        git(`cat-file ${file.type} ${file.hash}`, { cwd })
          .then(data => {
            file.content = data;
            res.render('blob', { title, branches, breadcrumbs, branch, file });
          })
          .catch(next);
      } else {
        next();
      }
    })
    .catch(next);
});

module.exports = router;
