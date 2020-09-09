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
 .2.b Body
 .2.c Arm
 .2.d Leg
1.x Global variable
 .x.a eye
 .x.b mouse
*/


/* -- 1.1 HEAD -- */

// .1.0 Definition of canvas
const canvasColor = '#ff980099';
const canvasX = 600;
// const canvasX = window.innerWidth - 758;
const canvasY = 560;
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

  draw(tabNum) {
    if (tabNum == 1) {
      fill('#FFF'); // Eye
      ellipse(this.x, this.y, this.width, this.height);
      fill('#222222'); // Pupil
      ellipse(this.x, this.y, this.width * this.pupilScale, this.height * this.pupilScale);
    }
    if (tabNum == 2) {
      if (this.x < canvasX / 2) var x = this.x + (canvasX / 2 - this.x) * (1.0 - windowScale);
      if (this.x > canvasX / 2) var x = this.x - (this.x - canvasX / 2) * (1.0 - windowScale);
      fill('#FFF'); // Eye
      ellipse(x, this.y * windowScale, this.width * windowScale, this.height * windowScale);
      fill('#222222'); // Pupil
      ellipse(x, this.y * windowScale, this.width * this.pupilScale * windowScale, this.height * this.pupilScale * windowScale);
    }
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
      arc(canvasX / 2, this.y * windowScale, this.width * 2 * windowScale, this.height * 2 * windowScale, 0, PI, PIE);
    }

    // pattern 2 : NAO mouse
    if (mousePattern == "パターン２") {
      quad((canvasX - this.width * windowScale) / 2, this.y * windowScale, (canvasX + this.width * windowScale) / 2, this.y * windowScale, (canvasX + (this.width * 0.8 * windowScale)) / 2, this.y * windowScale + this.height * windowScale, (canvasX - (this.width * 0.8 * windowScale)) / 2, this.y * windowScale + this.height * windowScale);
    }

    // pattern 3 : Triangle mouse
    if (mousePattern == "パターン３") {
      triangle((canvasX - this.width * windowScale) / 2, this.y * windowScale + this.height * windowScale, canvasX / 2, this.y * windowScale, (canvasX + this.width * windowScale) / 2, this.y * windowScale + this.height * windowScale);
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
      vertex(canvasX / 2, 20 * windowScale);
      bezierVertex(canvasX / 2 + 220 * windowScale, 40 * windowScale, canvasX / 2 + 200 * windowScale, 180 * windowScale, canvasX / 2 + 200 * windowScale, 260 * windowScale);
      bezierVertex(canvasX / 2 + 200 * windowScale, 260 * windowScale, canvasX / 2 + 200 * windowScale, 440 * windowScale, canvasX / 2, 500 * windowScale);
      bezierVertex(canvasX / 2, 500 * windowScale, canvasX / 2 - 200 * windowScale, 440 * windowScale, canvasX / 2 - 200 * windowScale, 260 * windowScale);
      bezierVertex(canvasX / 2 - 200 * windowScale, 180 * windowScale, canvasX / 2 - 220 * windowScale, 40 * windowScale, canvasX / 2, 20 * windowScale);
      endShape();
      strokeWeight(1);
    }

    // pattern 2 : NAO face
    if (headPattern == "パターン２") {
      fill('#fcfcfc');
      strokeWeight(0);
      rect(canvasX / 2 + 169 * windowScale, 140 * windowScale, 80 * windowScale, 240 * windowScale, 20 * windowScale, 20 * windowScale, 20 * windowScale, 20 * windowScale);
      rect(canvasX / 2 - 251 * windowScale, 140 * windowScale, 80 * windowScale, 240 * windowScale, 20 * windowScale, 20 * windowScale, 20 * windowScale, 20 * windowScale);
      ellipse(canvasX / 2, 260 * windowScale, 480 * windowScale, 420 * windowScale);
      strokeWeight(1);
    }

    // pattern 3 : Musio X face
    if (headPattern == "パターン３") {
      strokeWeight(0);
      beginShape();
      vertex(canvasX / 2, 80 * windowScale);
      bezierVertex(canvasX / 2 + 240 * windowScale, 96 * windowScale, canvasX / 2 + 220 * windowScale, 240 * windowScale, canvasX / 2 + 240 * windowScale, 500 * windowScale);
      vertex(canvasX / 2 - 242 * windowScale, 500 * windowScale);
      bezierVertex(canvasX / 2 - 222 * windowScale, 240 * windowScale, canvasX / 2 - 242 * windowScale, 96 * windowScale, canvasX / 2, 80 * windowScale);
      endShape();
      strokeWeight(1);
    }
  }
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
      rect((canvasX - this.width * windowScale) / 2, this.y * windowScale, this.width * windowScale, this.height * windowScale, this.radius * windowScale);
    }

    // pattern 2
    if (displayPattern == "パターン２") {
      rect((canvasX - this.width * windowScale) / 2, this.y * windowScale, this.width * windowScale, this.height * windowScale, this.radius * windowScale, this.radius * windowScale, 0, 0);
    }
  }

  move(direction) {
    if (direction == "up") this.y -= 10;
    if (direction == "down") this.y += 10;
  }
}


/* -- 1.2 Head Global variable -- */
let windowScale = 1.0;

// .2.a Eye
let eyePattern = "";
let rightEye = new eye(canvasX / 2 - 100, 260, 50, 50, 1.0, "rightEye");  // 右目
let leftEye = new eye(canvasX / 2 + 100, 260, 50, 50, 1.0, "leftEye");    // 左目

// .2.b Mouse
let mousePattern = "";
let robotMouse = new mouse((canvasX - 400) / 2, 400, 20, 20, 1.0);

// .2.c Head
let headPattern = "";
let robotHead = new head((canvasX - 400) / 2, 60, 400, 400, 16);

// .2.d display
let displayPattern = "";
let robotDisplay = new display((canvasX - 400) / 2, 160, 320, 160, 40);


/* -- 1.3 BODY -- */

// .3.a Neck 
class neck {
  constructor(x, y, width, height, neckScale) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.neck = neckScale;
  }

  init(pattern) {
    if (pattern == "パターン１");
    if (pattern == "パターン２");
    if (pattern == "パターン３");
    neckPattern = pattern;
  }

  draw() {
    fill('#F8F8F8');
    strokeWeight(0);
    ellipse(this.x, this.y * windowScale, this.width, this.height);
    strokeWeight(1);
    if (neckPattern == "パターン１") {
      ellipse(this.x, this.y, this.width, this.height);
    }
    if (neckPattern == "パターン２") {

    }
    if (neckPattern == "パターン３") {
    }
  }

  move(direction) {
    if (direction == "up") this.y -= 10;
    if (direction == "down") this.y += 10;
  }

  resize(value) {
    if (value > this.neckScale) {
      this.width = this.width * value / this.neckScale;
      this.height = this.height * value / this.neckScale;
    } else if (value < this.neckScale) {
      this.width = this.width * value / this.neckScale;
      this.height = this.height * value / this.neckScale;
    }
    this.neckScale = value;
  }
}

// .3.b Body 
class body {
  constructor(x, y, width, height, bodyScale) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.radius = 20;
    this.neck = bodyScale;
  }

  init(pattern) {
    if (pattern == "パターン１");
    if (pattern == "パターン２");
    if (pattern == "パターン３");
    bodyPattern = pattern;
  }

  draw() {
    fill('#fcfcfc');
    strokeWeight(0);
    // ellipse(this.x, this.y, this.width, this.height);
    rect((canvasX - this.width) / 2, this.y * windowScale, this.width, this.height, this.radius);
    strokeWeight(1);
    if (bodyPattern == "パターン１") {
      ellipse(this.x, this.y, this.width, this.height);
    }
    if (bodyPattern == "パターン２") {

    }
    if (bodyPattern == "パターン３") {
    }
  }

  move(direction) {
    if (direction == "up") this.y -= 10;
    if (direction == "down") this.y += 10;
  }

  resize(value) {
    if (value > this.neckScale) {
      this.width = this.width * value / this.bodyScale;
      this.height = this.height * value / this.bodyScale;
    } else if (value < this.neckScale) {
      this.width = this.width * value / this.bodyScale;
      this.height = this.height * value / this.bodyScale;
    }
    this.bodyScale = value;
  }
}

// .3.c Arm 
class arm {
  constructor(x, y, width, height, lor) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.armScale = 1.0;
    this.radius = 20;
    this.lor = lor;     // Light or Right
  }

  init(pattern) {
    if (pattern == "パターン１");
    if (pattern == "パターン２");
    if (pattern == "パターン３");
    armPattern = pattern;
  }

  draw() {
    fill('#FFF'); // Eye
    strokeWeight(0);
    rect(this.x - this.width / 2, this.y * windowScale, this.width, this.height, this.radius);
    strokeWeight(1);
  }

  move(direction) {
    if (direction == "up") this.y -= 10;
    if (direction == "down") this.y += 10;
  }

  resize(value, direction) {
    if (direction == "width") {
      this.width = this.width * value / this.armScale;
      this.widthScale = value;
    } else if (direction == "height") {
      this.height = this.height * value / this.armScale;
      this.heightScale = value;
    } else if (direction == "size") {
      this.width = this.width * value / this.armScale;
      this.height = this.height * value / this.armScale;
      this.armScale = value;
    }
  }
}

// .3.d Leg 
class leg {
  constructor(x, y, width, height, lor) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.legScale = 1.0;
    this.radius = 20;
    this.lor = lor;     // Light or Right
  }

  init(pattern) {
    if (pattern == "パターン１");
    if (pattern == "パターン２");
    if (pattern == "パターン３");
    legPattern = pattern;
  }

  draw() {
    fill('#FFF'); // Eye
    strokeWeight(0);
    rect(this.x - this.width / 2, this.y * windowScale, this.width, this.height, this.radius);
    strokeWeight(1);
  }

  move(direction) {
    if (direction == "up") this.y -= 10;
    if (direction == "down") this.y += 10;
  }

  resize(value, direction) {
    if (direction == "width") {
      this.width = this.width * value / this.legScale;
      this.widthScale = value;
    } else if (direction == "height") {
      this.height = this.height * value / this.legScale;
      this.heightScale = value;
    } else if (direction == "size") {
      this.width = this.width * value / this.legScale;
      this.height = this.height * value / this.legScale;
      this.legScale = value;
    }
  }
}

/* -- 1.4 Body Global variable -- */

// .4.a Neck
let neckPattern = "";
let robotNeck = new neck(canvasX / 2, 500, 40, 40, 1.0);

// .4.b Body
let bodyPattern = "";
let robotBody = new body(canvasX / 2, 500, 160, 200, 1.0);

// .4.c Arm
let armPattern = "";
let leftArm = new arm(canvasX / 2 - 108, 500, 48, 220, "left");
let rightArm = new arm(canvasX / 2 + 108, 500, 48, 220, "right");

// .4.d leg 
let legPattern = "";
let leftLeg = new leg(canvasX / 2 - 40, 1080, 56, 220, "left");
let rightLeg = new leg(canvasX / 2 + 40, 1080, 56, 220, "right");

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
    windowScale = 1.0;
    cnvs.parent('canvas1');
    robotHead.draw();
    robotDisplay.draw();
    robotMouse.draw();
    rightEye.draw(tabNum);  // 右目
    leftEye.draw(tabNum);   // 左目
  }

  if (tabNum == 2) {
    windowScale = 0.3;
    cnvs.parent('canvas2');
    leftArm.draw();
    rightArm.draw();
    leftLeg.draw();
    rightLeg.draw();
    robotBody.draw();
    robotNeck.draw();



    robotHead.draw();
    robotDisplay.draw();
    robotMouse.draw();
    rightEye.draw(tabNum);  // 右目
    leftEye.draw(tabNum);   // 左目
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
    if (keyCode === UP_ARROW) robotMouse.move("up");
    if (keyCode === DOWN_ARROW) robotMouse.move("down");
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
  robotMouse.resize(mouseSize);
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
    robotMouse.y = mouseY;
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
    if (mousePattern != pattern) robotMouse.init(pattern);
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

function sendMail() {

  var input_text = document.getElementById("email-text").value;
  // alert(input_text)
  // console.log(input_text);

  Email.send({
    SecureToken: "d4c96642-e1aa-4be4-aed1-bf2360d5535d",
    To: 'i2086051@cc.kyoto-su.ac.jp',
    From: input_text,
    Subject: "This is the subject",
    Body: "And this is the body"
  }).then(
    message => alert(message)
  );

}