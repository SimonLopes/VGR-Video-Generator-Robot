const readline = require('readline-sync')
const robots = {
    //userInput: require("./robots/user-input.js"),
    text: require("./robots/text.js")
}
async function start() {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    await robots.text(content)

    function askAndReturnSearchTerm() {
        return readline.question("Buscar na Wikipedia por: ")
    }

    function askAndReturnPrefix() {
        const prefixes = ["Who is", "What is", "The history of"]
        const selectedPrefixIndex = readline.keyInSelect(prefixes)
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    }
    console.log(content)
}
start()