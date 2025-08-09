// 3. Write a javascript program to implement Comparisons and Control Flow
let rating=Number(prompt("Enter your Codeforces Rank "));
if (rating<1200 && rating>=0){
    console.log("Newbie");
}
else if (rating>=1200 && rating<1399){
    console.log("Pupil");
}
else if (rating>=1400 && rating <1599){
    console.log("Specialist");
}
else if (rating >=1600 && rating <1899){
    console.log("Expert");
}
else if (rating >=1900 && rating <2099){
    console.log("Candidate Master");
}
else if (rating>=2100 && rating<2299){
    console.log("Master");
}
else if (rating>=2300 && rating<2399){
    console.log("International Master");
}
else if (rating >=2400 && rating <2599){
    console.log("Grandmaster");
}
else if (rating >=2600 && rating <2999){
    console.log("International Grandmaster");
}
else if (rating>=3000){
    console.log("Legendary Grandmaster");
}
else {
    console.log("Enter Correct input");
}

