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

imageObj.src = 'graph.png';

var first_point = new Konva.Circle({
    x: 543,
    y: 238,
    radius: 10,
    fill: 'red',
    opacity: 0,
  });

var second_point = new Konva.Circle({
    x: 326,
    y: 346,
    radius: 10,
    fill: 'red',
    opacity: 0,
  });

var redLine = new Konva.Line({
    points: [second_point.x(),second_point.y(), first_point.x(), first_point.y()],
    stroke: 'red',
    strokeWidth: 5,
    lineCap: 'round',
    lineJoin: 'round',
    opacity: 0,
  });

var runLine = new Konva.Line({
  points: [second_point.x(),second_point.y(), second_point.x(),second_point.y()],
  stroke: 'black',
  strokeWidth: 5,
  lineCap: 'round',
  lineJoin: 'round',
  opacity: 0,
});

var riseLine = new Konva.Line({
  points: [first_point.x(), first_point.y(), first_point.x(), first_point.y()],
  stroke: 'black',
  strokeWidth: 5,
  lineCap: 'round',
  lineJoin: 'round',
  opacity: 0,
});

var slope_equation = new Konva.Text({
  x: 625,
  y: 280,
  text: 'm =   / ',
  fontSize: 30,
  fill: 'black',
  opacity: 0,
});

var run_number = new Konva.Text({
  x: 425,
  y: 355,
  text: '2',
  fontSize: 30,
  fill: 'black',
  opacity: 0,
});

var rise_number = new Konva.Text({
  x: 550,
  y: 280,
  text: '1',
  fontSize: 30,
  fill: 'black',
  opacity: 0,
});

var yIntLine = new Konva.Line({
  points: [second_point.x(), second_point.y(), second_point.x(), second_point.y()],
  stroke: 'black',
  strokeWidth: 5,
  lineCap: 'round',
  lineJoin: 'round',
  opacity: 0,
});

var y_int_text = new Konva.Text({
  x: 50,
  y: 480,
  text: 'y-intercept = 1',
  fontSize: 20,
  fill: 'black',
  opacity: 0,
});

layer.add(background);
layer.add(runLine);
layer.add(riseLine);
layer.add(yIntLine);
layer.add(first_point);
layer.add(second_point);
layer.add(redLine);
layer.add(slope_equation);
layer.add(run_number);
layer.add(rise_number);
layer.add(y_int_text);

stage.draw();
