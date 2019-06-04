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
  modules.forEach(({ module = '', pages = [], introduction: moduleIntro }) => {
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
            const path = `/${module}/${page.name}`
            resolve({
              module,
              title: page.title,
              introduction,
              moduleIntro,
              path
            })
          })
        }))
      }
    })
  })
  const result = await Promise.all(promises)
  let dataArr = []
  result.forEach(item => {
    if (dataModel[item.module] !== void 0) {
      dataArr[dataModel[item.module]].views.push(item)
    } else {
      dataModel[item.module] = dataArr.length
      dataArr.push({
        module: item.module,
        title: item.moduleIntro,
        views: [item]
      })
    }
  })
  await fs.writeJson(listJSONPath, dataArr, { spaces: 2 })
}

geneList()

module.exports = geneList
