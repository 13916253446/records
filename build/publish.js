const ghpages = require('gh-pages');
const chalk = require('chalk');

ghpages.publish('dist', {
  branch: 'master',
  repo: 'https://github.com/13916253446/13916253446.github.io'
}, function () {
  console.log(chalk.blue(`\n站点发布成功\n`))
});
