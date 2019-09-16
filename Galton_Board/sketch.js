arr = [];

function setup() {
  createCanvas(500, 500);
  for (let i = 0; i < 20; i++) {
    append(arr, new Agent(width / 2, 0));
  }
}

function draw() {
  background(51);
  noStroke();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].y % 5 == 0 && arr[i].y != height) {
      arr[i].roll();
    } else if (arr[i].y == height) {
      arr[i].stop();
    }
    arr[i].move();
    arr[i].show();
    if (arr[i].x <= 0) {
      arr[i].x = 0;
    } else if (arr[i].x >= width) {
      arr[i].x = width;
    } else if (arr[i].y >= height) {
      arr[i].y = height;
    }
  }
  if (arr.length < 230 && frameCount % 1 == 0) {
    append(arr, new Agent(width / 2, 0));
  }
  graph();
}

function graph() {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    if (arr[i].y == height) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j].y == height && arr[j].x == arr[i].x && arr[i] != arr[j]) {
          count++;
          noStroke();
          push();
          fill(255, 0, 0);
          ellipse(arr[i].x, (count * 3), 3, 3);
          pop();
        }
      }
    }
  }
}

function Agent(x, y) {
  this.x = x;
  this.y = y;
  this.dir = int(random(0, 2));
  this.moving = true;
  this.roll = function() {
    this.dir = int(random(0, 2));
  }
  this.move = function() {
    if (this.moving) {
      if (this.dir == 0) {
        this.x++;
        this.y++;
      } else if (this.dir == 1) {
        this.x--;
        this.y++;
      }
    }
  }
  this.show = function() {
    ellipse(this.x, this.y, 10, 10);
  }
  this.stop = function() {
    this.moving = false;
  }
}
