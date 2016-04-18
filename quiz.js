document.write("<h1> A TEST ABOUT CATS</h1>");
document.write("<h2> Test your knowledge about the best species on earth here!</h2>");
document.write("<h2> Become the next master in cat knowledge!</h2> <p> This is for a limited time only, enjoy!</p>");
// variables
var correct = 0;
var totalAsked = 0;

// prompt
// var ans1 = prompt("What do you call a group of cats?");
// document.write("<p>The question was: What do you call a group of cats?  You responded: " + ans1 + " The correct answer was CLOWDER</p>");
// var ans2 = prompt("How many muscles control a cat's ears?")
// document.write("<p>The question was: How many muscles control a cat's ears?  You responded: " + ans2 + " The correct answer was TWENTY</p>");
// var ans3 = prompt("Which state has elected a cat for mayor of one of its cities?")
// document.write("<p>The question was: Which state has elected a cat for mayor of one of its cities?  You responded: " + ans3 + " The correct answer was Alaska</p>");
// var ans4 = prompt("What flavor can cats NOT taste?")
// document.write("<p>The question was: What flavor can cats NOT taste?  You responded: " + ans4 + " The correct answer was SWEETNESS</p>");
// var ans5 = prompt("What is the technical term for a hairball?")
// document.write("<p>The question was: What is the technical term for a hairball?  You responded: " + ans5 +" The correct answer was BEZOAR</p>");

//rewrite the above code in a function to simplify it.

function question(questionText, realAnswer){
 //what our function will do 
  var ansInput = prompt(questionText);
  totalAsked+=1;
   if ( ansInput.toUpperCase() === realAnswer ) {
  correct += 1;
}

question("WHAT DO YOU CALL A GROUP OF CATS?", "CLOWDER");
question("How many muscles control a cat's ears?", "TWENTY");
question("Which state has elected a cat for mayor of one of its cities?", "ALASKA");


// // if statement
// if ( ans1.toUpperCase() === 'CLOWDER' ) {
//  correct = correct+ 1;
// }
// if (ans2.toUpperCase() === 'TWENTY' || '20'){
//  correct = correct +1; 
// }
// if(ans3.toUpperCase() === 'ALASKA'){
//  correct = correct +1; 
// }
// if (ans4.toUpperCase() === 'SWEETNESS'){
//  correct = correct +1; 
// }
// if (ans5.toUpperCase() === 'BEZOAR'){
//  correct = correct +1;
// }

//console.log(correct);

// output results
if (correct<= 2){

document.write("<p>YOU GOT " + correct + " OUT OF " + totalAsked+ " CORRECT. I SUGGEST WORKING ON YOUR KNOWLEDGE!YOU RECIEVE A BRONZE MEDAL. </p> ");
}
else if (correct > 2 && correct <= 4){
 document.write("<p>YOU GOT " + correct + " OUT OF " + totalAsked + " CORRECT. I THINK YOUR CAT KNOWLEDGE COULD USE A LITTLE MORE WORK! YOU RECIEVE A SILVER MEDAL!</p>");
 else if (correct >4){
  document.write("<p>YOU GOT " + correct + " OUT OF " + totalAsked + " CORRECT. YOU ARE A MASTER IN CAT KNOWLDEGE! YOU RECIEVE A GOLD MEDAL</p>");
 }
}
