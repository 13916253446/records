const ghpages = require('gh-pages');
const chalk = require('chalk');
const path = require('path')
const copy = require('copy-template-dir')

const assetsDir = path.resolve(__dirname, '../assets')
const targetDir = path.resolve(__dirname, '../dist')

copy(assetsDir, targetDir, { name: '崔海峰' }, err => {
  if (!err) {
    ghpages.publish('dist', {
      branch: 'master',
      repo: 'https://github.com/13916253446/13916253446.github.io',
      add: true
    }, function () {
      console.log(chalk.blue(`\n站点发布成功\n`))
    });
  } else {
    console.log(err)
  }
})