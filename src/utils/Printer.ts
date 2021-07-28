const util = require('util')

function printUTF(arr) {
    try {
        console.log("UTF8: ", String.fromCharCode.apply(null, arr), "\n")
    } catch (e) {
      console.log("(no utf 8 cast available)")
    }
  }

export const printWholeStanza = (e) => {

    const unwrapped = util.inspect(e, { colors: true, depth: null, maxArrayLength: null})

    if(e?.['tag'] == 'iq' && e?.['attrs']?.['type'] == 'result' && e?.['content'] == null) {
        console.log("[omitting ping response]")
        return
    }

    console.log("\nWhole Stanza print:\n", unwrapped, "\n")
    e.content?.forEach(element => {
        if(element?.content) {
            var eventArray = new Uint8Array(element?.content)
		    printUTF(eventArray)
        }
    });
}

