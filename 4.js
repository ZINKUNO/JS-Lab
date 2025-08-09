const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your Codeforces rating: ", function(input) {
    let rating = Number(input);

    if (rating >= 0 && rating < 1200) {
        console.log("Newbie");
    } else if (rating >= 1200 && rating < 1400) {
        console.log("Pupil");
    } else if (rating >= 1400 && rating < 1600) {
        console.log("Specialist");
    } else if (rating >= 1600 && rating < 1900) {
        console.log("Expert");
    } else if (rating >= 1900 && rating < 2100) {
        console.log("Candidate Master");
    } else if (rating >= 2100 && rating < 2300) {
        console.log("Master");
    } else if (rating >= 2300 && rating < 2400) {
        console.log("International Master");
    } else if (rating >= 2400 && rating < 2600) {
        console.log("Grandmaster");
    } else if (rating >= 2600 && rating < 3000) {
        console.log("International Grandmaster");
    } else if (rating >= 3000) {
        console.log("Legendary Grandmaster");
    } else {
        console.log("Enter a valid rating.");
    }

    rl.close();
});
