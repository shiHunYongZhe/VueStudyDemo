const fs = require('fs');
function getFilenames(dir, isRecur = false) {
  const contents = fs.readdirSync(dir)
  const files = contents.filter(name => !fs.statSync(`${dir}/${name}`).isDirectory())

  if (!isRecur) return files

  const subdirs = contents.filter(name => fs.statSync(`${dir}/${name}`).isDirectory())
  return subdirs.reduce((acc, subdir) => acc.concat(getFilenames(`${dir}/${subdir}`, true).map(name => `${subdir}/${name}`)), files)
}

// function getFilenames(dir, isRecur = false) {
//     const contents = fs.readdirSync(dir)
//     const files = contents.filter(name => !fs.statSync(`${dir}${name}`).isFile())
    
// }
console.log(fs.statSync('./dist').isFile());
// console.log(getFilenames('./dist', true));