document.write("<h1> A TEST ABOUT CATS</h1>");
document.write("<h2> Test your knowledge about the best species on earth here!</h2>");
document.write("<h2> Become the next master in cat knowledge!</h2> <p> This is for a limited time only, enjoy!</p>");
// variables
var correct = 0;

// prompt
var ans1 = prompt("What do you call a group of cats?");
document.write("The question was: What do you call a group of cats?  You responded: " + ans1 + " The correct answer was CLOWDER");
var ans2 = prompt("How many muscles control a cat's ears?")
document.write("The question was: How many muscles control a cat's ears?  You responded: " + ans2 + " The correct answer was TWENTY");
var ans3 = prompt("Which state has elected a cat for mayor of one of its cities?")
document.write("The question was: Which state has elected a cat for mayor of one of its cities?  You responded: " + ans3 + " The correct answer was Alaska");
var ans4 = prompt("What flavor can cats NOT taste?")
document.write("The question was: What flavor can cats NOT taste?  You responded: " + ans4 + " The correct answer was SWEETNESS");
var ans5 = prompt("What is the technical term for a hairball?")
document.write("The question was: What is the technical term for a hairball?  You responded: " + ans5 +" The correct answer was BEZOAR");
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
if (ans4.toUpperCase() === 'SWEETNESS'){
 correct = correct +1; 
}
if (ans5.toUpperCase() === 'BEZOAR'){
 correct = correct +1;
}

console.log(correct);

// output results
if (correct<= 2){

document.write("YOU GOT " + correct + " OUT OF 5 CORRECT. I SUGGEST WORKING ON YOUR KNOWLEDGE!YOU RECIEVE A BRONZE MEDAL. ");
}
if (correct > 2 && correct <= 4){
 document.write("YOU GOT " + correct + " OUT OF 5 CORRECT. I THINK YOUR CAT KNOWLEDGE COULD USE A LITTLE MORE WORK! YOU RECIEVE A SILVER MEDAL!");
 if (correct >4){
  document.write("YOU GOT " + correct + " OUT OF 5 CORRECT. YOU ARE A MASTER IN CAT KNOWLDEGE! YOU RECIEVE A GOLD MEDAL");
 }
}
