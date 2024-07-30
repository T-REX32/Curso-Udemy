const os = require("os")

// quantas cpus tem no servidor
console.log(os.cpus())


// quanto de memória livre tem na máquina
console.log(os.freemem())

// qual é o diretório principal da máquina
console.log(os.homedir())

// Qual é o sistema operacional que está rodando na minha máquina
console.log(os.type())