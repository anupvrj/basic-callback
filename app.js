///Reading File Without Callback

const fs = require('fs');

console.log("Program Has been started \n*********");

let readfile = fs.readFileSync("text.txt")
console.log(readfile.toString());
console.log("************* \nProgramm Ended");


function readFilewithAsync() {
    console.log("Program started with Sync")
    let readfile = fs.readFile("text.txt", (err, data) => {
        if (err)
            console.log(err);
        console.log(data.toString());

        

    })
    console.log("Async Programm Ended");
}

readFilewithAsync();