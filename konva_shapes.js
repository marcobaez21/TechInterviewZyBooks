const width = 975;
const height = window.innerHeight - (window.innerHeight*0.30);

const stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height,
});

const layer = new Konva.Layer();
stage.add(layer);

// another solution is to use rectangle shape
var background = new Konva.Rect({
x: 0,
y: 0,
width: stage.width() - 200,
height: stage.height(),
});

var fillPatternImage = background.fillPatternImage();

// set fill pattern image
var imageObj = new Image();
imageObj.onload = function() {
    background.fillPatternImage(imageObj);
};

imageObj.src = 'graph2.png';

layer.add(background);

var first_point = new Konva.Circle({
    x: 543,
    y: 238,
    radius: 10,
    fill: 'red',
    opacity: 0,
  });

layer.add(first_point);

var second_point = new Konva.Circle({
    x: 326,
    y: 346,
    radius: 10,
    fill: 'red',
    opacity: 0,
  });

layer.add(second_point);

var redLine = new Konva.Line({
    points: [second_point.x(),second_point.y(), first_point.x(), first_point.y()],
    stroke: 'red',
    strokeWidth: 5,
    lineCap: 'round',
    lineJoin: 'round',
    opacity: 0,
  });

layer.add(redLine);

var anim = new Konva.Animation(eachFrame, layer);

function eachFrame(){
    if(first_point.opacity() <= 1){
        const newOpacity = first_point.opacity()+0.005
        first_point.opacity(newOpacity);
    }
    if(first_point.opacity()>1){
        const newOpacity2 = second_point.opacity()+0.005
        second_point.opacity(newOpacity2);
    }
    if(second_point.opacity()>1){
        const newOpacity = redLine.opacity()+0.005
        redLine.opacity(newOpacity)
    }
}

document.getElementById('start-button').addEventListener(
    'click',
    function () {
      anim.start();
    },
    false
  );

  document.getElementById('stop-button').addEventListener(
    'click',
    function () {
      anim.stop();
    },
    false
  );

stage.draw();
