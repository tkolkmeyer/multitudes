/*

This program serves as a tool for drawing landscapes. 
It offers the user 3 shapes and 3 colors to create different scenaries. 
The scanries can be created with either mountains, trees, clouds or a combination of the three.
I was inspired to make this drawing tool by scenes of nature I witnessed when I travelled to a hill station in India.
I was specifically drawn to the blending of colors between the skies and mountains and
the seemingly small size of large trees and mountains due to perspective.
To achieve the same effects, I have played with opacity and scale at varying heights of the canvas.

Instructions for user:

The canvas is divided into 2 parts: The upper one-third portion serves as the sky and the rest as the ground.
Sky: Click and drag to draw clouds.
Ground: 
1. Click to draw trees or mountains or anything else if you're feeling creative!
2. Your cursor is set to GREEN TRIANGLES by default.
3. Hover over bottom-left corner of canvas to change to a brown rectangle.
4. Hover over bottom-right corner of canvas to change back to triangle mode.
5. Triangles can be drawn in two colors.
		a) Hover over top-right corner of canvas to switch to BLUE TRAINGLES.
    b) Hover over top-left corner of canvas to switch to GREEN TRIANGLES.
6. Have fun!

*/

// function mousePressed(){
  
//   if (recording){
    
//     stopRecording();
//     recording = false;
    
//   } else {
    
//     startRecording();
//     recording = true;
//   }
// }


var c;
  var h;
  var w;
  var isTriangle = true;
  var isBlue = true;

  function setup() {
    createCanvas(600, 600);
    background(196, 222, 228);
  }

  function draw() {
    
    
    noStroke();
    fill(99, 150, 135);
    rect(0,0,15,15);
    fill(100, 142, 152);
    rect(585,0,15,15);
    fill(84, 93, 94);
    rect(0,580,10,20);
    triangle(585,600,592.5,585,600,600);
    

    if (mouseY <= 10) {
      if (mouseX >= width - 10) {
        isBlue = true;
      } else if (mouseX <= 10) {
        isBlue = false;
      }
    }

    if (mouseY <= 200) {
      if (mouseIsPressed) {
        stroke(255);
        strokeWeight(25);
        line(pmouseX, pmouseY, mouseX, mouseY);
      }
    } else if (mouseY >= 210) {
      noStroke();
      w = map(mouseY, 0, height, 20, 100);
      h = map(mouseY, 210, height, 50, 200);
      c = map(mouseY, 210, height, 10, 100);


      if (mouseY >= height - 10) {
        if (mouseX >= width - 10) {
          isTriangle = true;
        } else if (mouseX <= 10) {
          isTriangle = false;
        }
      }

      if (mouseIsPressed) {
        if (isTriangle == true) {
          if (isBlue == true) {
            fill(100, 142, 152, c);
          } else if (isBlue == false) {
            fill(99, 150, 135, c);
          }
          triangle(mouseX - w, mouseY + h, mouseX, mouseY, mouseX + w, mouseY + h);

        } else {
          fill(84, 93, 94, c);
          rect((mouseX - (w - 50) / 2), mouseY, w - 40, h + 20);
        }
      }
    }
  }