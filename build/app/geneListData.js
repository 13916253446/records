// 生成模块列表数据
const path = require('path')
const fs = require('fs-extra')
const marked = require('marked')
const cheerio = require('cheerio')
const modules = require('../../website/blog/config/routes.json')

const pageBasePath = path.resolve(__dirname, '../../website/blog/modules')
const listJSONPath = path.resolve(__dirname, '../../app/config/module-list.json')

async function geneList () {
  let promises = []
  let dataModel = {}
  modules.forEach(({ module = '', pages = [] }) => {
    pages.forEach(page => {
      let pageMd = `${pageBasePath}/${module}/${page.name}/index.md`
      if (fs.pathExistsSync(pageMd)) {
        promises.push(new Promise((resolve, reject) => {
          fs.readFile(pageMd, 'utf8', (err, content) => {
            if (err) {
              reject(err)
              return false
            }
            const $ = cheerio.load(marked(content))
            const introduction = ($('p') && $('p').text()) || ''
            resolve({
              module,
              title: page.title,
              introduction
            })
          })
        }))
      }
    })
  })
  const result = await Promise.all(promises)
  result.forEach(item => {
    if (dataModel[item.module]) dataModel[item.module].push(item)
    else dataModel[item.module] = [item]
  })
  await fs.writeJson(listJSONPath, dataModel, { spaces: 2 })
}

geneList()

module.exports = geneList
