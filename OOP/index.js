//simple object syntax

/*const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log('draw');
  }
};

circle.draw();*/

//simple factory to create multiple objects

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log('draw');
    }
  };
}

const circle = createCircle(1);
//circle.draw();

//constuctor function
//factory vs constructor is just preference
function Circle(radius) {
  //console.log('this', this)
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const another = new Circle(1);

//let x = {};
//JS translates this too
//let x = new Object();

//in JS functions are objects
