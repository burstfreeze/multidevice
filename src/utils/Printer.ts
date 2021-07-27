const util = require('util')

export const printWholeStanza = (e) => {

    const unwrapped = util.inspect(e, false, null, true) //https://www.codegrepper.com/code-examples/javascript/how+to+show+nested+object+in+console.log

    console.log("\nWhole Stanza print:\n", unwrapped, "\n")
}

