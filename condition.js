/* 

if(condition) {

if true
}

else{
if false
}

*/

// var isRaining = "true";

// if (isRaining === true) {
//     console.log("will not go outside")
// }
// else{
//     console.log("will be go")
// }

// if (!isRaining) {
//     console.log("will not go outside because outside raining.")
// }
// else {
//     console.log("will go outside because the rain stop outside.")
// }

//* Ternary Operator
// Condition ? if true : if false

// var isRaining = "true";

// isRaining === "true" ? console.log("will not go outside") : console.log("will go outside");

// var money = 10;
// var isRaining = false;
// var taxi = 15;

// if (isRaining === true && money >= taxi) {
//   console.log("we go to market");
// } else {
//   console.log("will not go to market");
// }

// if (isRaining === false || money >= taxi) {
//     console.log("will go to market")
// }
// else {
//     console.log("will not go to market")
// }

// var money = 9;

// if (money >= 100) {
//   console.log("I will eat Biriyani");
// } else if (money >= 50) {
//   console.log("I will eat EGG and Polao");
// } else if (money >= 30) {
//   console.log("I will Eat Bread and Banana");
// }
// else if (money >= 10) {
//     console.log("Singara Khabo")
// }
// else {
//   console.log("Auto kore bari jabo");
// }


var isRaining = true;
var haveUmbrella = true;

if (isRaining === true)
{
    if (haveUmbrella === true) {
      console.log("I will go outside because I have a Chata");
    } else {
      console.log("I will not go because I don't have chata");
    }
}
else {
    console.log("I will go outside. its Sunny day")
}

