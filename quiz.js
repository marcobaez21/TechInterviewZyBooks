//Randomizing points
let x1 = Math.floor(Math.random()*10)+1;
let y1 = Math.floor(Math.random()*10)+1;
let x2 = Math.floor(Math.random()*10)+10;
let y2 = Math.floor(Math.random()*10)+10;

//Calculating slope and Y-Intercept
let slope = (y2-y1)/(x2-x1);
let y_intercept = y1-(slope*x1);

//Modifying quiz-question div with randomized values
let question = document.getElementById("quiz_question").innerText;
question = question.split("(");
let first_half = question[0];
let second_half = question[1].split(")")[1];
let new_question = first_half + "(" + x1 + ", " + y1 + ")" + " and (" + x2 + ", " + y2 + ")" + second_half;
document.getElementById("quiz_question").innerText = new_question;

//function that handles answer checking on submit button click
function submit_button_pressed(){
    let user_slope = document.getElementById("slope-answer-box").value;
    let user_y_int = document.getElementById("y-int-answer-box").value;
    if( user_slope > slope-0.1 && user_slope < slope+0.1 && user_y_int > y_intercept-0.1 && user_y_int < y_intercept+0.1){
        alert("Correct answer!");
    }
    else{
        alert("Wrong answer!");
    }
}
