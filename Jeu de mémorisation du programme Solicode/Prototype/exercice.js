//  let tableau = ["C1","C1", "C3", "C2", "C1", "C8", "C2", "C1"]


//  let code = "C1"
//  let counts = 0;

//  for (let i = 0; i < tableau.length; i++) {
//     if (code === tableau[i]) {
//         counts++
//     }
//  }

//  console.log("the code " + code + " appears " + counts);

//hdtodayz.to/home

//teen wolf 

//viking
let tableau = ["C1","C1", "C3", "C2", "C1", "C8", "C2", "C1"];

let code = "C1";
let counts = 0;

tableau.forEach(function(element) {
    if (element === code) {
        counts++;
    }
});

console.log("the code " + code + " appears " + counts);
