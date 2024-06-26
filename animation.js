//Creating new animation
var anim = new Konva.Animation(eachFrame, layer);

//eachFrame is called on each frame and is where the animation logic is held
function eachFrame(){
    if(first_point.opacity() <= 1){
        let newOpacity = first_point.opacity()+0.009;
        first_point.opacity(newOpacity);
    }
    if(first_point.opacity()>1){
        let newOpacity2 = second_point.opacity()+0.009;
        second_point.opacity(newOpacity2);
    }
    if(second_point.opacity()>1){
        let newOpacity = redLine.opacity()+0.009;
        redLine.opacity(newOpacity);
    }
    if(redLine.opacity()>1){
        runLine.opacity(1);
        let newPoints = runLine.points();
        if(newPoints[2]<first_point.x()){
            newPoints[2] = newPoints[2]+1;
            runLine.points(newPoints);
        }
    }
    if(runLine.points()[2]>=first_point.x()){
        run_number.opacity(1);
        riseLine.opacity(1);
        let newPoints = riseLine.points();
        if(newPoints[3]<second_point.y()){
            newPoints[3] = newPoints[3]+1;
            riseLine.points(newPoints);
        }
    }
    if(riseLine.points()[3]>=second_point.y()){
        rise_number.opacity(1);
    }
    if(rise_number.opacity()==1){
        let rise_x = rise_number.x();
        let newOpacity = slope_equation.opacity()+0.005;
        slope_equation.opacity(newOpacity);
        if(rise_x<680){
            rise_number.x(rise_x+1.5);
        }
    }
    if(rise_number.x()>=679){
        let run_x = run_number.x();
        let run_y = run_number.y();
        if(run_x<715){
            run_number.x(run_x+2);
        }
        if(run_y>280){
            run_number.y(run_y-0.5);
        }
    }
    if(run_number.x()>=715){
        let newPoints = yIntLine.points();
        yIntLine.opacity(1);
        if(newPoints[2]>110){
            newPoints[2]=newPoints[2]-1;
            yIntLine.points(newPoints);
        }
        if(newPoints[3]<455){
            newPoints[3]=newPoints[3]+0.5;
            yIntLine.points(newPoints);
        }
    }
    if(yIntLine.points()[2]<=110){
        y_int_text.opacity(1);
    }
}

//Start animation on start-button click
document.getElementById('start-button').addEventListener(
    'click',
    function () {
      anim.start();
    },
    false
  );

  //Stop animation on stop-button click
  document.getElementById('stop-button').addEventListener(
    'click',
    function () {
      anim.stop();
    },
    false
  );