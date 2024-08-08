// modulos externos
import chalk from "chalk";

import { createRequire } from 'module';

const require = createRequire(import.meta.url);

import inquirer from "inquirer"


// modulos internos

const fs = require("fs")

console.log("Iniciamos o Accounts")

operation()
function operation() {
    inquirer.prompt([{
        type: "list",
        name: "action",
        message: "O que prefere fazer?",
        choices: [
            "Criar Conta", "Consultar Saldo", "Depositar", "Sacar", "Sair"
        ]
    }]).then((answer) => {
        const action = answer["action"]

        console.log(answer)

        if (action === "Criar Conta") {
            createAccout()
        }
    })
}

// Criando uma conta
function createAccout() {
    console.log(chalk.bgGreen("Obrigado por escolher nosso banco!"))
    console.log(chalk.green("Defina as opções da sua conta a seguir."))
    buildAccount();
}

function buildAccount() {
    inquirer.prompt([{
        name: "accountName",
        message: "Digite um nome para sua nova conta:"
    }]).then((answer) => {
        const accountName = answer["accountName"]
        console.info(accountName)

        if(!fs.existsSync("accounts")) {
            fs.mkdirSync("accounts");
        }

        if(fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black("Essa conta já existe! Escolha outro nome!"))
            buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`, "{'balance': 0}",
            function (err) {
                console.log(err)
        })

        console.log(chalk.green("Parabéns, sua conta foi crianda!"))
        operation()

    }).catch((err) => console.log(err))
}