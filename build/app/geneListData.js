// 生成模块列表数据
const path = require('path')
const fs = require('fs-extra')
const marked = require('marked')
const cheerio = require('cheerio')
const modules = require('../../website/blog/config/routes.json')

const pageBasePath = path.resolve(__dirname, '../../website/blog/modules')

module.exports = async () => {
}

const $ = cheerio.load(marked(fs.readFileSync(`${pageBasePath}/VUE/abstract/index.md`, 'utf8')))
console.log($('p').text())

