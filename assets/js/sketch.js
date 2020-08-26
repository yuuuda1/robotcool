const canvasX = 598;
const canvasY = 520;

class eye {
  constructor(x, y, width, heigh, lor) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.heigh = heigh;
    this.lor = lor;     // Light or Right
  }

  move(direction) {
    if (direction == "up") this.y -= 10;
    if (direction == "down") this.y += 10;
    if (direction == "left") {
      if (this.lor == "leftEye") this.x += 10;
      if (this.lor == "rightEye") this.x -= 10;
    }
    if (direction == "right") {
      if (this.lor == "leftEye") this.x -= 10;
      if (this.lor == "rightEye") this.x += 10;
    }
  }

  resize(value, direction) {
    if (direction == "vertical") this.heigh = value, this.width = value;
    if (direction == "horizontal") this.width = value, this.heigh = value;
  }

  repupilSize(value) {
    pupilSize = value;
  }
}

// 目
let rightEye = new eye(199, 260, 50, 50, "rightEye");  // 右目
let leftEye = new eye(399, 260, 50, 50, "leftEye");    // 左目

// 瞳孔
let pupilSize = 25;

// 頭
let headW = 400;
let headH = 400;
let headY = 60;
let headRd = 16;

// 口
let mouthW = 20;
let mouthH = 20;
let mouthY = 400;

let selected = "";

const canvasColor = 'skyblue';

// 最初に１回だけ実行される処理
function setup() {
  // キャンバスの作成

  let cnvs = createCanvas(canvasX, canvasY);
  cnvs.parent('canvas');
  // cnvs.position(368, 184);


  // 背景色の設定
  background(canvasColor);
}

// setup後に繰り返し実行される処理（フレーム単位）
function draw() {
  clear();
  background(canvasColor);

  //頭
  fill('#FFF');
  rect((canvasX - headW) / 2, headY, headW, headH, headRd, headRd, headRd, headRd);

  //口
  fill('#222222');
  rect((canvasX - mouthW) / 2, mouthY, mouthW, mouthH);

  // 目
  fill('#FFF');
  ellipse(leftEye.x, leftEye.y, leftEye.width, leftEye.heigh);
  ellipse(rightEye.x, rightEye.y, rightEye.width, rightEye.heigh);

  // 瞳孔
  fill('#222222');
  ellipse(leftEye.x, leftEye.y, pupilSize);
  ellipse(rightEye.x, rightEye.y, pupilSize);
}

function keyPressed() {
  if (selected == "eye") {
    if (keyCode === UP_ARROW) leftEye.move("up"), rightEye.move("up");
    if (keyCode === DOWN_ARROW) leftEye.move("down"), rightEye.move("down");
    if (keyCode === RIGHT_ARROW) leftEye.move("right"), rightEye.move("right");
    if (keyCode === LEFT_ARROW) leftEye.move("left"), rightEye.move("left");
  }

  if (selected == "head") {
    if (keyCode === UP_ARROW) {
      headY -= 10;
    }
    if (keyCode === DOWN_ARROW) {
      headY += 10;
    }
  }

  if (selected == "mouse") {
    if (keyCode === UP_ARROW) {
      mouthY -= 10;
    }
    if (keyCode === DOWN_ARROW) {
      mouthY += 10;
    }
  }

  return false;
}

function selectElement(name) {
  selected = name;
  console.log(selected);
}

function mouseReleased() {
  // 目のスライドバー
  var width = document.getElementById("slider-h").getAttribute("aria-valuenow");
  if (width != leftEye.width) leftEye.resize(width, "horizontal"), rightEye.resize(width, "horizontal");
  // console.log(width);

  // 瞳孔のスライドバー
  var pupilRate = document.getElementById("pupil-size").getAttribute("aria-valuenow");
  if (pupilRate * leftEye.width != pupilSize) leftEye.repupilSize(pupilRate * leftEye.width);
  // if (pupilRate != leftEye.width * ) leftEye.resize(width, "horizontal"), rightEye.resize(width, "horizontal");
  // console.log(width);

  // 口のスライダー
  var mouseSize = document.getElementById("slider-mouse").getAttribute("aria-valuenow");
  if (mouseSize != mouthW) mouthW = mouseSize, mouthH = mouseSize;
}

// マウスがドラッグされている間
function mouseDragged() {
  if (selected == "eye") {
    leftEye.x = mouseX, leftEye.y = mouseY;
    rightEye.x = 299 + (299 - mouseX), rightEye.y = mouseY;
    console.log(mouseX)
  }
}