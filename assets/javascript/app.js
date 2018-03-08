
$(document).ready(function () {

var correct = 0;

//global var
var timer = 30;
var questionCounter = 0;
// Variable that will hold our setInterval that runs the timer when we click start
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false;

//hide that questions

$(".questions").hide();
//functions

//click start button things happen
$("#startBtn").on("click", function () {
    console.log("clicked");
    $(".questions").show();
    if (!clockRunning) {
        intervalId = setInterval(decrement, 1000);
        clockRunning = true
    
    };


function decrement() {

        //  Decrease number by one.
        timer--;
        //  Show the number in the #show-number tag.
        $("#timer").html("<h2>" + timer + "</h2>");
        
        if (timer === 0) { 
        //  ...run the stop function.
        stop();
        alert("you lost!")
};

        //  ...run the stop function.

function stop() {
//  Clears our intervalId
//  We just pass the name of the interval
//  to the clearInterval function.
clearInterval(intervalId);
};

//trying to get the question graded then change the DOM to show the results by creating a var for each question and assigning the value once the submit button is clicked

 $("#subBtn").on("click", function () {
     console.log("I got clicked!");
    $(".questions").show();
   
    var question1 =parseInt(document.querySelector('input[name="question1"]:checked').value);
    var question2 = parseInt(document.querySelector('input[name="question2"]:checked').value);
    var question3 = parseInt(document.querySelector('input[name="question3"]:checked').value);
    var question4 = parseInt(document.querySelector('input[name="question4"]:checked').value);

    result = question1 + question2 + question3 + question4;

    stop(); 

    $("#number_correct").text("Number of answers correct: " + result);
    
    // return false; 



});
};
});
});

