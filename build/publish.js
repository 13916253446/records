const ghpages = require('gh-pages');
const copy = require('kopy');
const path = require('path');
const chalk = require('chalk');
const CWD = process.cwd();


copy(path.resolve(CWD, './components/template/publish'), path.resolve(CWD, './dist'), {
  data: {},
  template: require('jstransformer-handlebars')
})
  .then(() => {
    ghpages.publish('dist', {
      branch: 'master',
      repo: 'https://github.com/13916253446/13916253446.github.io'
    }, function () {
      console.log(chalk.blue(`\n站点发布成功\n`))
    });
  })

