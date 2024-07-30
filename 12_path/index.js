const path = require("path")

const customPath = "C:\Users\caio.favetti\Downloads\Caio Barp Da Silva Favetti declaração.pdf"


// nome do diretório
console.log(path.dirname(customPath))

// nome do arquivo ou local onde se encontra
console.log(path.basename(customPath))

// nome da extensão do arquivo
console.log(path.extname(customPath))