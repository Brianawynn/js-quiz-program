document.write("<h1> A TEST ABOUT CATS</h1>")
// variables
var correct = 0;

// prompt
var ans1 = prompt("What do you call a group of cats?");
var ans2 = prompt("How many muscles control a cat's ears?")
var ans3 = prompt("Which state has elected a cat for mayor of one of its cities?")
var ans4 = prompt("")
var ans5 = prompt("")
// if statement
if ( ans1.toUpperCase() === 'CLOWDER' ) {
 correct = correct+ 1;
}
if (ans2.toUpperCase() === 'TWENTY' || '20'){
 correct = correct +1; 
}
if(ans3.toUpperCase() === 'ALASKA'){
 correct = correct +1; 
}

// output results
document.write("<p>write something to page...</p>");
