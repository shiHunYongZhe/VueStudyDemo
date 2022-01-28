// const fs = require('fs');
// const { run } = require('runjs')
// const args = process.argv.join(' ')

// run(`console.log(${args}})`)
// function getFilenames(dir, isRecur = false) {
//   const contents = fs.readdirSync(dir)
//   const files = contents.filter(name => !fs.statSync(`${dir}/${name}`).isDirectory())

//   if (!isRecur) return files

//   const subdirs = contents.filter(name => fs.statSync(`${dir}/${name}`).isDirectory())
//   return subdirs.reduce((acc, subdir) => acc.concat(getFilenames(`${dir}/${subdir}`, true).map(name => `${subdir}/${name}`)), files)
// }

// console.log(fs.statSync('./dist').isFile());
let path = require('path')
console.log(path.join('node_modules', 'vant'))
