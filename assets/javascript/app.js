
$(document).ready(function () {


var correct = 0;

//global var
var timer = 30;
var questionCounter = 0;
// Variable that will hold our setInterval that runs the timer when we click start
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false;


//functions

//function to show the Question and Answers
var startGame = function (){
//click start button things happen
$("#startBtn").on("click", function () {
    if (!clockRunning) {
        intervalId = setInterval(decrement, 1000);
        clockRunning = true;
    }
});

function decrement() {

        //  Decrease number by one.
        timer--;
        //  Show the number in the #show-number tag.
        $("#timer").html("<h2>" + timer + "</h2>");
        if (timer === 0) {
        //  ...run the stop function.
        stop();
    }
};

 function stop() {
//  Clears our intervalId
//  We just pass the name of the interval
//  to the clearInterval function.
clearInterval(intervalId);
}

startGame();



// var submitChoices = function () {
// $("#subBtn").on("click", function () {console.log("submit");
//     var question1 = question1.test.value;
//     var question2 = question2.test.value;
//     var question3 = question3.test.value;
//     var question4 = question4.test.value;

//     if (question1 == "Tom Marvolo Riddle" ){
//         correct++;
//     }
//     if (question2 == "Hedwig") {
//         correct++;
//     }
//     if (question3 == "Diagon Alley") {
//         correct++;
//     }
//     if (question4 == "9 3/4") {
//         correct++;
//  }
// });
}
});




