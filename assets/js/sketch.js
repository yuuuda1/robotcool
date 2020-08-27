/* 
1. Class definitions
2. p5.js functions
3. Original functions
*/


/*** -- 1. Class definition -- ***/ 
/* 
1.1 HEAD
 .1.a eye
 .1.b mouse
1.2
*/

// キャンバスの定義
const canvasColor = '#ff980099';
const canvasX = 598;
const canvasY = 520;


class eye {
  constructor(x, y, width, height, eyeScale, lor) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.eyeScale = eyeScale;
    this.pupilScale = 0.5;
    this.lor = lor;     // Light or Right
  }

  init(pattern) {
    if(pattern == "パターン１") rightEye = new eye(199, 260, 50, 50, 1.0, "rightEye"),leftEye = new eye(399, 260, 50, 50, 1.0, "leftEye"); 
    if(pattern == "パターン２") rightEye = new eye(199, 260, 100, 50, 1.0, "rightEye"),leftEye = new eye(399, 260, 100, 50, 1.0, "leftEye"); 
    if(pattern == "パターン３") rightEye = new eye(199, 260, 50, 100, 1.0, "rightEye"),leftEye = new eye(399, 260, 50, 100, 1.0, "leftEye"); 
    eyePattern = pattern;
  }

  draw() {
    fill('#FFF'); // Eye
    ellipse(this.x, this.y, this.width, this.height);
    fill('#222222'); // Pupil
    ellipse(this.x, this.y, this.width * this.pupilScale, this.height * this.pupilScale);
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
    if(value > this.eyeScale) {
      if (direction == "horizontal") {
        this.width = this.width * value / this.eyeScale;
        this.height = this.height * value / this.eyeScale;
      }
      // if (direction == "vertical") this.width = this.width * value / this.eyeScale, this.height = this.height * value / this.eyeScale;
    }else if(value < this.eyeScale) {
      if (direction == "horizontal") {
        this.width = this.width * value / this.eyeScale;
        this.height = this.height * value / this.eyeScale;
      }
      // if (direction == "vertical") this.width = this.width * value / this.eyeScale, this.height = this.height * value / this.eyeScale;
    }
    this.eyeScale = value;
  }

  repupilSize(value) {
    this.pupilScale = value;
  }
  
}

class mouse {
  constructor(x, y, width, height, mouseScale) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.mouseScale = mouseScale;
  }

  init(pattern) {
    if(pattern == "パターン１"); 
    if(pattern == "パターン２"); 
    if(pattern == "パターン３"); 
    mousePattern = pattern;
    console.log(pattern);
  }

  draw() {
    fill('#222222');
      rect((canvasX - this.width) / 2, this.y, this.width, this.height);
    // if(mousePattern == "パターン１") {
    //   fill('#222222');
    //   rect((canvasX - this.width) / 2, this.y, this.width, this.height);
    // }
  }

  move(direction) {
    if (direction == "up") this.y -= 10;
    if (direction == "down") this.y += 10;
  }

  resize(value) {
    if(value > this.mouseScale) {
      this.width = this.width * value / this.mouseScale;
      this.height = this.height * value / this.mouseScale;
    }else if(value < this.mouseScale) {
      this.width = this.width * value / this.mouseScale;
      this.height = this.height * value / this.mouseScale;
    }
    this.mouseScale = value;
  }
}

// 目
let eyePattern = "";
let rightEye = new eye(199, 260, 50, 50, 1.0, "rightEye");  // 右目
let leftEye = new eye(399, 260, 50, 50, 1.0, "leftEye");    // 左目

// 口
let mousePattern = "";
let mouseM = new mouse((canvasX - 400)/2, 400, 20, 20, 1.0);
// let mouthW = 20;
// let mouthH = 20;
// let mouthY = 400;

// 頭
let headW = 400;
let headH = 400;
let headY = 60;
let headRd = 16;

let selected = "";




/*** -- 2. function of p5.js -- ***/ 
// SETUP：最初に１回だけ(初期値)
function setup() {
  // キャンバスの作成
  let cnvs = createCanvas(canvasX, canvasY);
  cnvs.parent('canvas');

  // 背景色の設定
  background(canvasColor);
}

// DRAW：setup後に繰り返し実行（フレーム単位）
function draw() {
  clear();
  background(canvasColor);

  //頭
  fill('#FFF');
  rect((canvasX - headW) / 2, headY, headW, headH, headRd, headRd, headRd, headRd);

  //口
  // fill('#222222');
  // rect((canvasX - mouthW) / 2, mouthY, mouthW, mouthH);
  mouseM.draw();

  // 目
  rightEye.draw();  // 右目
  leftEye.draw();   // 左目
  
  //selectの変更
  var eyeListItem = document.getElementById("eye-list-item");
  changedPattern(eyeListItem.innerHTML,"eye");
  var mouseListItem = document.getElementById("mouse-list-item");
  changedPattern(mouseListItem.innerHTML,"mouse")
}


// KEYPRESSED：キーが押された場合
function keyPressed() {
  // 目
  if (selected == "eye") {
    if (keyCode === UP_ARROW) leftEye.move("up"), rightEye.move("up");
    if (keyCode === DOWN_ARROW) leftEye.move("down"), rightEye.move("down");
    if (keyCode === RIGHT_ARROW) leftEye.move("right"), rightEye.move("right");
    if (keyCode === LEFT_ARROW) leftEye.move("left"), rightEye.move("left");
  }

  // 頭
  if (selected == "head") {
    if (keyCode === UP_ARROW) headY -= 10;
    if (keyCode === DOWN_ARROW) headY += 10;
  }

  // 口
  if (selected == "mouse") {
    // if (keyCode === UP_ARROW) mouthY -= 10;
    // if (keyCode === DOWN_ARROW) mouthY += 10;
    if (keyCode === UP_ARROW) mouseM.move("up");
    if (keyCode === DOWN_ARROW) mouseM.move("down");
  }

  return false;
  
}


// MOOUSE_RELEASED：マウスがリリースされた場合
function mouseReleased() {
  // 目のスライドバー
  var width = document.getElementById("slider-h").getAttribute("aria-valuenow");
  if (width != leftEye.width) leftEye.resize(width, "horizontal"), rightEye.resize(width, "horizontal");

  // 瞳孔のスライドバー
  var pupilRate = document.getElementById("pupil-size").getAttribute("aria-valuenow");
  leftEye.repupilSize(pupilRate), rightEye.repupilSize(pupilRate);

  // 口のスライダー
  var mouseSize = document.getElementById("slider-mouse").getAttribute("aria-valuenow");
  // if (mouseSize != mouthW) mouthW = mouseSize, mouthH = mouseSize;
  mouseM.resize(mouseSize);

}

// MOUSE_DRAGGED：マウスがドラッグされている間
function mouseDragged() {
  if (selected == "eye") {
    leftEye.x = mouseX, leftEye.y = mouseY;
    rightEye.x = 299 + (299 - mouseX), rightEye.y = mouseY;
  }
}


/*** -- 3. Original functions -- ***/ 
// SELECT_ELEMENT：移動する要素を選択する関数
function selectElement(name) {
  selected = name;
}

function changedPattern(pattern, element) {
  // 目 
  if(element == "eye") {
    if(eyePattern != pattern) leftEye.init(pattern), rightEye.init(pattern);
  }

  // 口 
  if(element == "mouse") {
    if(mousePattern != pattern) mouseM.init(pattern);
  }
}
