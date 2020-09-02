/* 
1. Class definitions
2. p5.js functions
3. Original functions
*/


/*** -- 1. Class definition -- ***/
/* 
1.1 HEAD
 .1.0 definition of canvas
 .1.a eye
 .1.b mouse
 .1.c head
 .1.d display
1.2 Body
 .2.a Neck
1.x Global variable
 .x.a eye
 .x.b mouse
*/


/* -- 1.1 HEAD -- */

// .1.0 Definition of canvas
const canvasColor = '#ff980099';
const canvasX = 598
// const canvasX = window.innerWidth - 758;
const canvasY = 520;
console.log(window.innerWidth);

// .1.a Eye
class eye {
  constructor(x, y, width, height, eyeScale, lor) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.eyeScale = eyeScale;
    this.widthScale = 1;
    this.heightScale = 1;
    this.pupilScale = 0.5;
    this.lor = lor;     // Light or Right
  }

  init(pattern) {
    if (pattern == "パターン１") rightEye = new eye(canvasX / 2 - 100, 260, 50, 50, 1.0, "rightEye"), leftEye = new eye(canvasX / 2 + 100, 260, 50, 50, 1.0, "leftEye");
    if (pattern == "パターン２") rightEye = new eye(canvasX / 2 - 100, 260, 60, 50, 1.0, "rightEye"), leftEye = new eye(canvasX / 2 + 100, 260, 60, 50, 1.0, "leftEye");
    if (pattern == "パターン３") rightEye = new eye(canvasX / 2 - 100, 260, 50, 68, 1.0, "rightEye"), leftEye = new eye(canvasX / 2 + 100, 260, 50, 68, 1.0, "leftEye");
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
    if (direction == "width") {
      this.width = this.width * value / this.widthScale;
      this.widthScale = value;
    } else if (direction == "height") {
      this.height = this.height * value / this.heightScale;
      this.heightScale = value;
    } else if (direction == "size") {
      this.width = this.width * value / this.eyeScale;
      this.height = this.height * value / this.eyeScale;
      this.eyeScale = value;
    }
  }

  repupilSize(value) {
    this.pupilScale = value;
  }

}

// .1.b Mouse
class mouse {
  constructor(x, y, width, height, mouseScale) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.mouseScale = mouseScale;
  }

  init(pattern) {
    if (pattern == "パターン１");
    if (pattern == "パターン２");
    if (pattern == "パターン３");
    mousePattern = pattern;
  }

  draw() {
    fill('#222222');

    // pattern 1 : Human mouse
    if (mousePattern == "パターン１") {
      arc(canvasX / 2, this.y, this.width * 2, this.height * 2, 0, PI, PIE);
    }

    // pattern 2 : NAO mouse
    if (mousePattern == "パターン２") {
      quad((canvasX - this.width) / 2, this.y, (canvasX + this.width) / 2, this.y, (canvasX + (this.width * 0.8)) / 2, this.y + this.height, (canvasX - (this.width * 0.8)) / 2, this.y + this.height);
    }

    // pattern 3 : Triangle mouse
    if (mousePattern == "パターン３") {
      triangle((canvasX - this.width) / 2, this.y + this.height, canvasX / 2, this.y, (canvasX + this.width) / 2, this.y + this.height);
    }
  }

  move(direction) {
    if (direction == "up") this.y -= 10;
    if (direction == "down") this.y += 10;
  }

  resize(value) {
    if (value > this.mouseScale) {
      this.width = this.width * value / this.mouseScale;
      this.height = this.height * value / this.mouseScale;
    } else if (value < this.mouseScale) {
      this.width = this.width * value / this.mouseScale;
      this.height = this.height * value / this.mouseScale;
    }
    this.mouseScale = value;
  }
}

// .1.c Head
class head {
  constructor(x, y, width, height, headRd) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.headRd = headRd
  }

  init(pattern) {
    if (pattern == "パターン１");
    if (pattern == "パターン２");
    if (pattern == "パターン３");
    headPattern = pattern;
  }

  draw() {
    fill('#fcfcfc');

    // pattern 1 : human face
    if (headPattern == "パターン１") {
      strokeWeight(0);
      beginShape();
      vertex(299, 20);
      bezierVertex(520, 40, 500, 180, 500, 260);
      bezierVertex(500, 260, 500, 440, 299, 500);
      bezierVertex(299, 500, 98, 440, 98, 260);
      bezierVertex(98, 180, 78, 40, 299, 20);
      endShape();
      strokeWeight(1);
    }

    // pattern 2 : NAO face
    if (headPattern == "パターン２") {
      fill('#fcfcfc');
      strokeWeight(0);
      rect(469, 140, 80, 240, 20, 20, 20, 20);
      rect(49, 140, 80, 240, 20, 20, 20, 20);
      ellipse(299, 260, 480, 420);
      strokeWeight(1);
    }

    // pattern 3 : Musio X face
    if (headPattern == "パターン３") {
      strokeWeight(0);
      beginShape();
      vertex(299, 80);
      bezierVertex(540, 96, 520, 240, 540, 480);
      vertex(58, 480);
      bezierVertex(78, 240, 58, 96, 299, 80);
      endShape();
      strokeWeight(1);
    }
  }

  // move(direction) {
  //   if (direction == "up") this.y -= 10;
  //   if (direction == "down") this.y += 10;
  // }
}

// .1.d display
class display {
  constructor(x, y, width, height, radius) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.radius = radius;
  }

  init(pattern) {
    displayPattern = pattern;
  }

  draw() {
    fill("#000")

    // pattern 1
    if (displayPattern == "パターン１") {
      rect((canvasX - this.width) / 2, this.y, this.width, this.height, this.radius);
    }

    // pattern 2
    if (displayPattern == "パターン２") {
      rect((canvasX - this.width) / 2, this.y, this.width, this.height, this.radius, this.radius, 0, 0);
    }
  }

  move(direction) {
    if (direction == "up") this.y -= 10;
    if (direction == "down") this.y += 10;
  }
}


/* -- 1.x Global variable -- */

// .x.a Eye
let eyePattern = "";
let rightEye = new eye(canvasX / 2 - 100, 260, 50, 50, 1.0, "rightEye");  // 右目
let leftEye = new eye(canvasX / 2 + 100, 260, 50, 50, 1.0, "leftEye");    // 左目

// .x.b Mouse
let mousePattern = "";
let mouseM = new mouse((canvasX - 400) / 2, 400, 20, 20, 1.0);

// .x.c Head
let headPattern = "";
let robotHead = new head((canvasX - 400) / 2, 60, 400, 400, 16);

// .x.d display
let displayPattern = "";
let robotDisplay = new display((canvasX - 400) / 2, 160, 320, 160, 40);

// .x.x 
let selected = "";



/*** -- 2. function of p5.js -- ***/
/* 
2.1 setup() 
2.2 draw()
2.3 keyPressed()
2.4 mouseReleased()
2.5 mouseDragged()
*/

let cnvs; // Creating a Canvas

// 2.1 SETUP：最初に１回だけ(初期化)
function setup() {
  cnvs = createCanvas(canvasX, canvasY); // Creating a Canvas
  // let cnvs = createCanvas(canvasX, canvasY); // Creating a Canvas
  // cnvs.parent('canvas'); // 親要素の変更
}

// 2.2 DRAW：setup後に繰り返し実行（フレーム単位）
function draw() {
  let tabNum = tabSwiching();

  clear();
  background(canvasColor);

  // Depiction of the head
  if (tabNum == 1) {
    cnvs.parent('canvas1');
    robotHead.draw();
    robotDisplay.draw();
    mouseM.draw();
    rightEye.draw();  // 右目
    leftEye.draw();   // 左目
  }

  if (tabNum == 2) {
    cnvs.parent('canvas2');
  }

  if (tabNum == 3) {
    cnvs.parent('canvas3');
  }

  //selectの変更
  var eyeListItem = document.getElementById("eye-list-item");
  changedPattern(eyeListItem.innerHTML, "eye");
  var mouseListItem = document.getElementById("mouse-list-item");
  changedPattern(mouseListItem.innerHTML, "mouse");
  var headListItem = document.getElementById("head-list-item");
  changedPattern(headListItem.innerHTML, "head");
  var displayListItem = document.getElementById("display-list-item");
  changedPattern(displayListItem.innerHTML, "display");
}


// 2.3 KEYPRESSED：キーが押された場合
function keyPressed() {
  // 目
  if (selected == "eye") {
    if (keyCode === UP_ARROW) leftEye.move("up"), rightEye.move("up");
    if (keyCode === DOWN_ARROW) leftEye.move("down"), rightEye.move("down");
    if (keyCode === RIGHT_ARROW) leftEye.move("right"), rightEye.move("right");
    if (keyCode === LEFT_ARROW) leftEye.move("left"), rightEye.move("left");
  }

  // 口
  if (selected == "mouse") {
    if (keyCode === UP_ARROW) mouseM.move("up");
    if (keyCode === DOWN_ARROW) mouseM.move("down");
  }

  // Head
  // if (selected == "head") {
  //   if (keyCode === UP_ARROW) robotHead.move("up");
  //   if (keyCode === DOWN_ARROW) robotHead.move("down");
  // }

  // Display
  if (selected == "display") {
    if (keyCode === UP_ARROW) robotDisplay.move("up");
    if (keyCode === DOWN_ARROW) robotDisplay.move("down");
  }

  return false;
}


// 2.4 MOOUSE_RELEASED：マウスがリリースされた場合
function mouseReleased() {
  // 目のスライドバー
  var eyeSize = document.getElementById("eye-size").getAttribute("aria-valuenow");
  if (eyeSize != leftEye.width) leftEye.resize(eyeSize, "size"), rightEye.resize(eyeSize, "size");
  // 目の横幅
  var eyeWidth = document.getElementById("eye-width").getAttribute("aria-valuenow");
  if (eyeWidth != leftEye.width) leftEye.resize(eyeWidth, "width"), rightEye.resize(eyeWidth, "width");
  // 目の縦幅
  var eyeHeight = document.getElementById("eye-height").getAttribute("aria-valuenow");
  if (eyeHeight != leftEye.width) leftEye.resize(eyeHeight, "height"), rightEye.resize(eyeHeight, "height");

  // 瞳孔のスライドバー
  var pupilRate = document.getElementById("pupil-size").getAttribute("aria-valuenow");
  leftEye.repupilSize(pupilRate), rightEye.repupilSize(pupilRate);

  // 口のスライダー
  var mouseSize = document.getElementById("slider-mouse").getAttribute("aria-valuenow");
  // if (mouseSize != mouthW) mouthW = mouseSize, mouthH = mouseSize;
  mouseM.resize(mouseSize);
}

// 2.5 MOUSE_DRAGGED：マウスがドラッグされている間
function mouseDragged() {
  if (selected == "eye") {
    if ((mouseX < 0) || (mouseX > canvasX)) selected = "";
    if ((mouseY < 0) || (mouseY > canvasY)) selected = "";
    leftEye.x = mouseX, leftEye.y = mouseY;
    rightEye.x = canvasX / 2 + (canvasX / 2 - mouseX), rightEye.y = mouseY;
  }

  if (selected == "mouse") {
    if ((mouseX < 0) || (mouseX > canvasX)) selected = "";
    if ((mouseY < 0) || (mouseY > canvasY)) selected = "";
    mouseM.y = mouseY;
  }
}


/*** -- 3. Original functions -- ***/
// SELECT_ELEMENT：移動する要素を選択する関数
function selectElement(name) {
  if (selected == name) {
    selected = "";
  } else {
    selected = name;
  }
}

// CHANGED_PATTERN：セレクタによりパターンを変更する関数
function changedPattern(pattern, element) {
  // 目 
  if (element == "eye") {
    if (eyePattern != pattern) leftEye.init(pattern), rightEye.init(pattern);
  }

  // 口 
  if (element == "mouse") {
    if (mousePattern != pattern) mouseM.init(pattern);
  }

  // Head 
  if (element == "head") {
    if (headPattern != pattern) robotHead.init(pattern);
  }

  // Display
  if (element == "display") {
    if (displayPattern != pattern) robotDisplay.init(pattern);
  }
}

// TAB_SWICHING：タブの遷移時にコンテンツを切り替える関数
function tabSwiching() {
  let index = 0;

  const content1 = document.getElementById("content1");
  const tab1 = document.getElementById("mdc-tab-1").getAttribute("aria-selected");
  if (tab1 != "true") content1.classList.remove("active", "edit-container"), content1.classList.add("disable");
  if (tab1 == "true") content1.classList.remove("disable"), content1.classList.add("active", "edit-container"), index = 1;

  const content2 = document.getElementById("content2");
  const tab2 = document.getElementById("mdc-tab-2").getAttribute("aria-selected");
  if (tab2 != "true") content2.classList.remove("active", "edit-container"), content2.classList.add("disable");
  if (tab2 == "true") content2.classList.remove("disable"), content2.classList.add("active", "edit-container"), index = 2;

  const content3 = document.getElementById("content3");
  const tab3 = document.getElementById("mdc-tab-3").getAttribute("aria-selected");
  if (tab3 != "true") content3.classList.remove("active", "edit-container"), content3.classList.add("disable");
  if (tab3 == "true") content3.classList.remove("disable"), content3.classList.add("active", "edit-container"), index = 3;

  return index;
}
