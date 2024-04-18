x1 = Math.floor(Math.random()*10)+1
y1 = Math.floor(Math.random()*10)+1
x2 = Math.floor(Math.random()*10)+10
y2 = Math.floor(Math.random()*10)+10

slope = (y2-y1)/(x2-x1)
y_intercept = y1-(slope*x1)


question = document.getElementById("quiz_question").innerText
question = question.split("(")
first_half = question[0]
second_half = question[1].split(")")[1]

new_question = first_half + "(" + x1 + ", " + y1 + ")" + " and (" + x2 + ", " + y2 + ")" + second_half
document.getElementById("quiz_question").innerText = new_question

function submit_button_pressed(){
    user_slope = document.getElementById("slope-answer-box").value
    user_y_int = document.getElementById("y-int-answer-box").value
    if( user_slope > slope-0.1 && user_slope < slope+0.1 && user_y_int > y_intercept-0.1 && user_y_int < y_intercept+0.1){
        alert("Correct answer!")
    }
    else{
        alert("Wrong answer!")
    }
}
