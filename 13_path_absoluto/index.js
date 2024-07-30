const path = require("path")

// path absoluto (USA-SE O COMANDO ".resolve")
console.log(path.resolve("teste.txt"))

// formar path (ele cria um caminho de forma dinâmica.)

const midFolder = "relatorios"
const fileName = "matheus.txt"

const finalPath = path.join("/", "arquivos", midFolder, fileName)

console.log(finalPath)