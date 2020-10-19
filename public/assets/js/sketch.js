/* 
1. Class definitions
2. p5.js functions
3. Original functions
*/


/*** -- 1. Class definition -- ***/
/* 
1.0 Foundation
 .1 canvas
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


/* -- 1.0 Foundation -- */
// -- x.1.1 canvas / キャンバス
let cnvsColor = '#ff980099';           // 色
let cnvsW = window.innerWidth - 796;   // 横幅(width)
let cnvsH = window.innerHeight - 208;  // 縦幅(height)
const ctrX = cnvsW / 2;                // 中央のX座標
const ctrY = cnvsH / 2;                // 中央のY座標


/* -- 1.1 HEAD -- */
// -- x.1.a Eye / 目
class eye {
  constructor(x, y, width, height, scale, lor) {
    this.x = x;             // X座標
    this.y = y;             // Y座標
    this.width = width;     // 横幅(width)
    this.height = height;   // 縦幅(height)
    this.scale = scale;     // 全体のスケール
    this.widthScale = 1;    // 横幅のスケール
    this.heightScale = 1;   // 縦幅のスケール
    this.pupilScale = 0.5;  // 瞳孔のスケール
    this.colorRed = 0;      // 赤色のGBR値
    this.colorGreen = 0;    // 緑色のGBR値
    this.colorBlue = 0;     // 青色のGBR値
    this.colorAlpha = 0;    // アルファ値
    this.lor = lor;         // 右か左か
  }

  init(pattern) {
    if (pattern == "パターン１") rightEye = new eye(cnvsW / 2 - 100, 260, 50, 50, 1.0, "rightEye"), leftEye = new eye(cnvsW / 2 + 100, 260, 50, 50, 1.0, "leftEye");
    if (pattern == "パターン２") rightEye = new eye(cnvsW / 2 - 100, 260, 60, 50, 1.0, "rightEye"), leftEye = new eye(cnvsW / 2 + 100, 260, 60, 50, 1.0, "leftEye");
    if (pattern == "パターン３") rightEye = new eye(cnvsW / 2 - 100, 260, 50, 68, 1.0, "rightEye"), leftEye = new eye(cnvsW / 2 + 100, 260, 50, 68, 1.0, "leftEye");
    eyePattern = pattern;
  }

  draw(tabNum) {
    if (tabNum == 1) {
      fill('#FFF'); // Eye
      ellipse(this.x, this.y, this.width, this.height);
      // fill('#222222'); // Pupil
      fill(color(this.colorRed, this.colorGreen, this.colorBlue, this.colorAlpha * 2.55));
      ellipse(this.x, this.y, this.width * this.pupilScale, this.height * this.pupilScale);
    }
    if ((tabNum == 2) || (tabNum == 3)) {
      if (this.x < cnvsW / 2) var x = this.x + (cnvsW / 2 - this.x) * (1.0 - windowScale);
      if (this.x > cnvsW / 2) var x = this.x - (this.x - cnvsW / 2) * (1.0 - windowScale);
      fill('#FFF'); // Eye
      ellipse(x, this.y * windowScale, this.width * windowScale, this.height * windowScale);
      // fill('#222222'); // Pupil
      fill(color(this.colorRed, this.colorGreen, this.colorBlue, this.colorAlpha * 2.55));
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
      this.width = this.width * value / this.scale;
      this.height = this.height * value / this.scale;
      this.scale = value;
    }
  }

  repupilSize(value) {
    this.pupilScale = value;
  }

  reColor(color) {
    this.colorRed = color[0];
    this.colorGreen = color[1];
    this.colorBlue = color[2];
    this.colorAlpha = color[3];
    syncSelectorValue(this.colorRed, this.colorGreen, this.colorBlue, this.colorAlpha)
    console.log(this.colorRed, this.colorGreen, this.colorBlue, this.colorAlpha);
  }
}

// .1.b Mouse
class mouse {
  constructor(x, y, width, height, mouseScale) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.widthScale = 1;
    this.heightScale = 1;
    this.mouseScale = mouseScale;
    this.colorRed = 255,
      this.colorGreen = 255,
      this.colorBlue = 255,
      this.colorAlpha = 100;
    this.cr = 12;
    this.cx0 = ctrX + this.width * windowScale, this.cy0 = this.y * windowScale,
      this.cx1 = ctrX + this.width * windowScale, this.cy1 = this.y + this.height * windowScale,
      this.cx2 = ctrX * windowScale, this.cy2 = this.y + this.height * windowScale,
      this.cx3 = ctrX - this.width * windowScale, this.cy3 = this.y + this.height * windowScale,
      this.cx4 = ctrX - this.width * windowScale, this.cy4 = this.y * windowScale
  }

  init(pattern) {
    if (pattern == "パターン１");
    if (pattern == "パターン２");
    if (pattern == "パターン３");
    mousePattern = pattern;
  }

  draw() {
    fill(color(this.colorRed, this.colorGreen, this.colorBlue, this.colorAlpha * 2.55));

    if (mousePattern == "") {
      arc(cnvsW / 2, this.y * windowScale, this.width * 2 * windowScale, this.height * 2 * windowScale, 0, PI, PIE);
    }

    // pattern 1 : Human mouse
    if (mousePattern == "パターン１") {
      // arc(cnvsW / 2, this.y * windowScale, this.width * 2 * windowScale, this.height * 2 * windowScale, 0, PI, PIE);

      // console.log(this.cx0, this.cx1, this.cx2, this.cx3);

      beginShape();
      fill(color(this.colorRed, this.colorGreen, this.colorBlue, this.colorAlpha * 2.55));
      strokeWeight(1);
      vertex(this.cx0, this.cy0);
      bezierVertex(this.cx0, this.cy0, this.cx1, this.cy1, this.cx2, this.cy2);
      bezierVertex(this.cx2, this.cy2, this.cx3, this.cy3, this.cx4, this.cy4);
      vertex(this.cx0, this.cy0);
      endShape();

      strokeWeight(0);
      if (pointControlElement == "mouse") {
        fill('#2196f3');
        circle(this.cx0, this.cy0, this.cr);
        circle(this.cx1, this.cy1, this.cr);
        circle(this.cx2, this.cy2, this.cr);
        circle(this.cx3, this.cy3, this.cr);
        circle(this.cx4, this.cy4, this.cr);
      }

      fill('#fff');
      strokeWeight(1);
    }

    // pattern 2 : NAO mouse
    if (mousePattern == "パターン２") {
      quad((cnvsW - this.width * windowScale) / 2, this.y * windowScale, (cnvsW + this.width * windowScale) / 2, this.y * windowScale, (cnvsW + (this.width * 0.8 * windowScale)) / 2, this.y * windowScale + this.height * windowScale, (cnvsW - (this.width * 0.8 * windowScale)) / 2, this.y * windowScale + this.height * windowScale);
    }

    // pattern 3 : Triangle mouse
    if (mousePattern == "パターン３") {
      triangle((cnvsW - this.width * windowScale) / 2, this.y * windowScale + this.height * windowScale, cnvsW / 2, this.y * windowScale, (cnvsW + this.width * windowScale) / 2, this.y * windowScale + this.height * windowScale);
    }
  }

  move(direction) {
    if (direction == "up") this.y -= 10;
    if (direction == "down") this.y += 10;
  }

  resize(value, direction) {
    if (direction == "width") {
      if (!(value == this.widthScale)) {
        this.width = this.width * value / this.widthScale;
        this.widthScale = value;
        this.reCoordinate();
      }
    } else if (direction == "height") {
      if (!(value == this.heightScale)) {
        this.height = this.height * value / this.heightScale;
        this.heightScale = value;
        this.reCoordinate();
      }
    } if (direction == "size") {
      if (!(value == this.mouseScale)) {
        this.width = this.width * value / this.mouseScale;
        this.height = this.height * value / this.mouseScale;
        this.mouseScale = value;
        this.reCoordinate();
      }
    }
  }

  reCoordinate() {
    this.cx0 = ctrX + this.width * windowScale, this.cy0 = this.y * windowScale,
      this.cx1 = ctrX + this.width * windowScale, this.cy1 = (this.y + this.height) * windowScale,
      this.cx2 = ctrX, this.cy2 = (this.y + this.height) * windowScale,
      this.cx3 = ctrX - this.width * windowScale, this.cy3 = (this.y + this.height) * windowScale,
      this.cx4 = ctrX - this.width * windowScale, this.cy4 = this.y * windowScale
  }



  reColor(color) {
    this.colorRed = color[0];
    this.colorGreen = color[1];
    this.colorBlue = color[2];
    this.colorAlpha = color[3];
    syncSelectorValue(this.colorRed, this.colorGreen, this.colorBlue, this.colorAlpha)
    console.log(this.colorRed, this.colorGreen, this.colorBlue, this.colorAlpha);
  }
}

// .1.c Head
class head {
  constructor(x, y, width, height, headRd) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.headRd = headRd;
    this.headScale = 1.0;
    this.colorRed = 255, this.colorGreen = 255, this.colorBlue = 255, this.colorAlpha = 100;

    this.amp = 0;
    this.cr = 0;
    this.cx0 = 0, this.cx1 = 0, this.cx2 = 0, this.cx3 = 0, this.cx4 = 0, this.cx5 = 0, this.cx6 = 0, this.cx7 = 0, this.cx8 = 0, this.cx9 = 0;
  }

  init(pattern, tabNum) {
    if ((headPattern != pattern) || (tabNum == 2)) {
      if (pattern == "");
      if (pattern == "パターン１") {
        this.amp = 200;
        this.cr = 20 * windowScale;
        this.cx0 = ctrX, this.cy0 = (this.y + 20) * windowScale;
        this.cx1 = ctrX + (this.amp + 20) * windowScale, this.cy1 = (this.y + 40) * windowScale;
        this.cx2 = ctrX + (this.amp) * windowScale, this.cy2 = (this.y + 180) * windowScale;
        this.cx3 = ctrX + (this.amp) * windowScale, this.cy3 = (this.y + 260) * windowScale;
        this.cx4 = ctrX + (this.amp) * windowScale, this.cy4 = (this.y + 440) * windowScale;
        this.cx5 = ctrX, this.cy5 = (this.y + 500) * windowScale;
        this.cx6 = ctrX - (this.amp) * windowScale, this.cy6 = (this.y + 440) * windowScale;
        this.cx7 = ctrX - (this.amp) * windowScale, this.cy7 = (this.y + 260) * windowScale;
        this.cx8 = ctrX - (this.amp) * windowScale, this.cy8 = (this.y + 180) * windowScale;
        this.cx9 = ctrX - (this.amp + 20) * windowScale, this.cy9 = (this.y + 40) * windowScale;
        console.log("hogehoge");
      };
      if (pattern == "パターン２");
      if (pattern == "パターン３");
      headPattern = pattern;
    }
  }

  draw() {
    fill(color(this.colorRed, this.colorGreen, this.colorBlue, this.colorAlpha * 2.55));

    // pattern 0 : no selected
    if (headPattern == "") {
      strokeWeight(0);
      circle(ctrX, (ctrY - 80) * windowScale, 440 * windowScale);
      strokeWeight(1);
    }

    // pattern 1 : human face
    if (headPattern == "パターン１") {
      strokeWeight(0);
      beginShape();
      vertex(this.cx0, this.cy0);
      bezierVertex(this.cx1, this.cy1, this.cx2, this.cy2, this.cx3, this.cy3);
      bezierVertex(this.cx3, this.cy3, this.cx4, this.cy4, this.cx5, this.cy5);
      bezierVertex(this.cx5, this.cy5, this.cx6, this.cy6, this.cx7, this.cy7);
      bezierVertex(this.cx8, this.cy8, this.cx9, this.cy9, this.cx0, this.cy0);
      endShape();

      if (selected == "head") {
        fill('#2196f3');
        circle(this.cx0, this.cy0, this.cr);
        circle(this.cx1, this.cy1, this.cr);
        circle(this.cx2, this.cy2, this.cr);
        circle(this.cx3, this.cy3, this.cr);
        circle(this.cx3, this.cy3, this.cr);
        circle(this.cx4, this.cy4, this.cr);
        circle(this.cx5, this.cy5, this.cr);
        circle(this.cx5, this.cy5, this.cr);
        circle(this.cx6, this.cy6, this.cr);
        circle(this.cx7, this.cy7, this.cr);
        circle(this.cx8, this.cy8, this.cr);
        circle(this.cx9, this.cy9, this.cr);
        circle(this.cx0, this.cy0, this.cr);
      }

      fill('#fff');
      strokeWeight(1);
    }

    // pattern 2 : NAO face
    if (headPattern == "パターン２") {
      strokeWeight(0);
      rect(cnvsW / 2 + 169 * windowScale, 140 * windowScale, 80 * windowScale, 240 * windowScale, 20 * windowScale, 20 * windowScale, 20 * windowScale, 20 * windowScale);
      rect(cnvsW / 2 - 251 * windowScale, 140 * windowScale, 80 * windowScale, 240 * windowScale, 20 * windowScale, 20 * windowScale, 20 * windowScale, 20 * windowScale);
      ellipse(cnvsW / 2, 260 * windowScale, 480 * windowScale, 420 * windowScale);
      strokeWeight(1);
    }

    // pattern 3 : Musio X face
    if (headPattern == "パターン３") {
      strokeWeight(0);
      beginShape();
      vertex(cnvsW / 2, 80 * windowScale);
      bezierVertex(cnvsW / 2 + 240 * windowScale, 96 * windowScale, cnvsW / 2 + 220 * windowScale, 240 * windowScale, cnvsW / 2 + 240 * windowScale, 500 * windowScale);
      vertex(cnvsW / 2 - 242 * windowScale, 500 * windowScale);
      bezierVertex(cnvsW / 2 - 222 * windowScale, 240 * windowScale, cnvsW / 2 - 242 * windowScale, 96 * windowScale, cnvsW / 2, 80 * windowScale);
      endShape();
      strokeWeight(1);
    }
  }

  move(direction) {
    if (direction == "up") this.y -= 10;
    if (direction == "down") this.y += 10;
  }

  reColor(color) {
    this.colorRed = color[0];
    this.colorGreen = color[1];
    this.colorBlue = color[2];
    this.colorAlpha = color[3];
    syncSelectorValue(this.colorRed, this.colorGreen, this.colorBlue, this.colorAlpha)
    console.log(this.colorRed, this.colorGreen, this.colorBlue, this.colorAlpha);
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
    this.colorRed = 0, this.colorGreen = 0, this.colorBlue = 0, this.colorAlpha = 100;
  }

  init(pattern) {
    displayPattern = pattern;
  }

  draw() {
    fill("#000")

    // pattern 1
    if (displayPattern == "パターン１") {
      rect((cnvsW - this.width * windowScale) / 2, this.y * windowScale, this.width * windowScale, this.height * windowScale, this.radius * windowScale);
    }

    // pattern 2
    if (displayPattern == "パターン２") {
      rect((cnvsW - this.width * windowScale) / 2, this.y * windowScale, this.width * windowScale, this.height * windowScale, this.radius * windowScale, this.radius * windowScale, 0, 0);
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
let rightEye = new eye(cnvsW / 2 - 100, 260, 50, 50, 1.0, "rightEye");  // 右目
let leftEye = new eye(cnvsW / 2 + 100, 260, 50, 50, 1.0, "leftEye");    // 左目

// .2.b Mouse
let mousePattern = "";
let robotMouse = new mouse((cnvsW - 400) / 2, 400, 40, 40, 1.0);

// .2.c Head
let headPattern = "";
// let robotHead = new head((cnvsW - 400) / 2, 0, 400, 400, 16);
let robotHead = new head(cnvsW / 2, 0, 400, 400, 16);

// .2.d display
let displayPattern = "";
let robotDisplay = new display((cnvsW - 400) / 2, 160, 320, 160, 40);


/* -- 1.3 BODY -- */

// .3.a Neck 
class neck {
  constructor(x, y, width, height, neckScale) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.neck = neckScale;
    this.colorRed = 255;
    this.colorGreen = 255;
    this.colorBlue = 255;
    this.colorAlpha = 100;
  }

  init(pattern) {
    if (pattern == "パターン１");
    if (pattern == "パターン２");
    if (pattern == "パターン３");
    neckPattern = pattern;
  }

  draw() {
    // fill('#F8F8F8');
    fill(color(this.colorRed, this.colorGreen, this.colorBlue, this.colorAlpha * 2.55));
    strokeWeight(0);
    // ellipse(this.x, this.y * windowScale, this.width, this.height);

    if (neckPattern == "") {
      ellipse(this.x, this.y * windowScale, this.width, this.height);
    }
    if (neckPattern == "パターン１") {
      quad(this.x - this.width / 3, this.y * windowScale, this.x + this.width / 3, this.y * windowScale, this.x + this.width / 2, this.y * windowScale + this.height, this.x - this.width / 2, this.y * windowScale + this.height);
    }
    if (neckPattern == "パターン２") {
      rect(this.x - this.width / 2, this.y * windowScale, this.width, this.height);
    }
    if (neckPattern == "なし") {
    }
    // console.log(neckPattern == "");
    strokeWeight(1);
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

  reColor(color) {
    this.colorRed = color[0];
    this.colorGreen = color[1];
    this.colorBlue = color[2];
    this.colorAlpha = color[3];
    syncSelectorValue(this.colorRed, this.colorGreen, this.colorBlue, this.colorAlpha)
    console.log(this.colorRed, this.colorGreen, this.colorBlue, this.colorAlpha);
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
    this.bodyScale = bodyScale;
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
    if (bodyPattern == "") {
      rect((cnvsW - this.width) / 2, this.y * windowScale, this.width, this.height, this.radius);
    }
    if (bodyPattern == "パターン１") {
      ellipse(this.x, this.y, this.width, this.height);
    }
    if (bodyPattern == "パターン２") {

    }
    if (bodyPattern == "パターン３") {
    }
    strokeWeight(1);
  }

  move(direction) {
    if (direction == "up") this.y -= 10;
    if (direction == "down") this.y += 10;
  }

  resize(value) {
    if (value > this.bodyScale) {
      this.width = this.width * value / this.bodyScale;
      this.height = this.height * value / this.bodyScale;
    } else if (value < this.bodyScale) {
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
    this.widthScale = 1;
    this.heightScale = 1;
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
    // let step = frameCount % 100;
    // console.log(step);
    // applyMatrix(1, 0, 0, 1, 40 + step, 50);
    // rectMode(CENTER);
    fill('#FFF'); // Eye
    strokeWeight(0);
    translate(this.x - this.width / 2, this.y * windowScale + this.width / 2);
    // let step = frameCount;
    // let angle = map(step * 0.1, 0, 5, 0, TWO_PI);
    // let cos_a = cos(angle);
    // let sin_a = sin(angle);
    // applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);

    // rect(this.x - this.width / 2, this.y * windowScale, this.width, this.height, this.radius);
    if (armPattern == "") {
      // rotate(PI / 120.0);

      rect(0, - this.width / 2, this.width, this.height, this.radius);
      // rect(this.x - this.width / 2, this.y * windowScale, this.width, this.height, this.radius);
      // rectMode(CENTER);
      // translate(-25, -25);
    }
    if (armPattern == "パターン１") {
    }
    if (armPattern == "パターン２") {
    }
    if (armPattern == "なし") {
    }
    strokeWeight(1);
    // rotate(0);
    resetMatrix();
  }

  move(direction) {
    if (direction == "up") this.y -= 10;
    if (direction == "down") this.y += 10;
    if (direction == "left") {
      if (this.lor == "left") this.x += 10;
      if (this.lor == "right") this.x -= 10;
    }
    if (direction == "right") {
      if (this.lor == "left") this.x -= 10;
      if (this.lor == "right") this.x += 10;
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
    this.widthScale = 1;
    this.heightScale = 1;
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
    if (legPattern == "") {
      rect(this.x - this.width / 2, this.y * windowScale, this.width, this.height, this.radius);
    }
    if (legPattern == "パターン１") {
    }
    if (legPattern == "パターン２") {
    }
    if (legPattern == "なし") {
    }
    strokeWeight(1);
  }

  move(direction) {
    if (direction == "up") this.y -= 10;
    if (direction == "down") this.y += 10;
    if (direction == "left") {
      if (this.lor == "left") this.x += 10;
      if (this.lor == "right") this.x -= 10;
    }
    if (direction == "right") {
      if (this.lor == "left") this.x -= 10;
      if (this.lor == "right") this.x += 10;
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
      this.width = this.width * value / this.legScale;
      this.height = this.height * value / this.legScale;
      this.legScale = value;
    }
  }
}

/* -- 1.4 Body Global variable -- */

// .4.a Neck
let neckPattern = "";
let robotNeck = new neck(cnvsW / 2, 500, 40, 40, 1.0);

// .4.b Body
let bodyPattern = "";
let robotBody = new body(cnvsW / 2, 500, 160, 200, 1.0);

// .4.c Arm
let armPattern = "";
let leftArm = new arm(cnvsW / 2 - 108, 500, 48, 220, "left");
let rightArm = new arm(cnvsW / 2 + 108, 500, 48, 220, "right");

// .4.d leg 
let legPattern = "";
let leftLeg = new leg(cnvsW / 2 - 40, 1080, 56, 220, "left");
let rightLeg = new leg(cnvsW / 2 + 40, 1080, 56, 220, "right");

// .x.x 
let selected = "";
let pointControlElement = "";


/*** -- 2. function of p5.js -- ***/
/* 
2.1 setup() 
2.2 draw()
2.3 keyPressed()
2.4 mouseReleased()
2.5 mouseDragged()
*/

let cnvs; // Creating a Canvas
// let img;
// function preload() {
//   img = loadImage('assets/img/bg-img1.jpg');
// }

// 2.1 SETUP：最初に１回だけ(初期化)
function setup() {
  cnvs = createCanvas(cnvsW, cnvsH); // Creating a Canvas
}

// 2.2 DRAW：setup後に繰り返し実行（フレーム単位）
function draw() {
  let tabNum = tabSwiching();

  clear();
  background(cnvsColor);

  // Depiction of the head
  if (tabNum == 1) {
    cnvs.position(0, 0);
    cnvsColor = "#ff980099";
    windowScale = 1.0;
    cnvs.parent('canvas1');
    robotHead.draw();
    robotDisplay.draw();
    robotMouse.draw();
    rightEye.draw(tabNum);  // 右目
    leftEye.draw(tabNum);   // 左目
  }

  if (tabNum == 2) {
    cnvs.position(0, 0);
    cnvsColor = "#ff980099";
    windowScale = 0.3;
    cnvs.parent('canvas2');

    leftLeg.draw();
    rightLeg.draw();

    robotBody.draw();

    robotNeck.draw();

    robotHead.init(headPattern, 2);
    robotHead.draw();
    robotDisplay.draw();
    robotMouse.reCoordinate();
    robotMouse.draw();
    rightEye.draw(tabNum);  // 右目
    leftEye.draw(tabNum);   // 左目

    leftArm.draw();
    rightArm.draw();
  }

  if (tabNum == 3) {
    cnvs.position(-160, 160);
    cnvsColor = "#ff980001";
    windowScale = 0.3;
    cnvs.parent('canvas3');

    leftLeg.draw();
    rightLeg.draw();

    robotBody.draw();

    robotNeck.draw();


    robotHead.draw();
    robotDisplay.draw();
    robotMouse.draw();
    rightEye.draw(tabNum);  // 右目
    leftEye.draw(tabNum);   // 左目

    leftArm.draw();
    rightArm.draw();
  }

  changeSelect();

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

  //Head
  if (selected == "head") {
    if (keyCode === UP_ARROW) {
      robotDisplay.move("up");
      leftEye.move("up"), rightEye.move("up");
      robotMouse.move("up");
      robotHead.move("up");
    }
    if (keyCode === DOWN_ARROW) {
      robotMouse.move("down");
      leftEye.move("down"), rightEye.move("down");
      robotDisplay.move("down");
      robotHead.move("down");
    }
  }

  // Display
  if (selected == "display") {
    if (keyCode === UP_ARROW) robotDisplay.move("up");
    if (keyCode === DOWN_ARROW) robotDisplay.move("down");
  }

  // Neck
  if (selected == "neck") {
    if (keyCode === UP_ARROW) robotNeck.move("up");
    if (keyCode === DOWN_ARROW) robotNeck.move("down");
  }

  // Arm
  if (selected == "arm") {
    console.log(selected);
    if (keyCode === UP_ARROW) leftArm.move("up"), rightArm.move("up");
    if (keyCode === DOWN_ARROW) leftArm.move("down"), rightArm.move("down");
    if (keyCode === RIGHT_ARROW) leftArm.move("right"), rightArm.move("right");
    if (keyCode === LEFT_ARROW) leftArm.move("left"), rightArm.move("left");
  }

  // Leg
  if (selected == "leg") {
    console.log(selected);
    if (keyCode === UP_ARROW) leftLeg.move("up"), rightLeg.move("up");
    if (keyCode === DOWN_ARROW) leftLeg.move("down"), rightLeg.move("down");
    if (keyCode === RIGHT_ARROW) leftLeg.move("right"), rightLeg.move("right");
    if (keyCode === LEFT_ARROW) leftLeg.move("left"), rightLeg.move("left");
  }

  // Body
  if (selected == "body") {
    if (keyCode === UP_ARROW) robotBody.move("up");
    if (keyCode === DOWN_ARROW) robotBody.move("down");
  }

  return false;
}


// 2.4 MOOUSE_RELEASED：マウスがリリース時 / MDC_Slider
function mouseReleased() {
  // Color Slider
  var cmRed = document.getElementById("color-model-red").getAttribute("aria-valuenow");
  var cmBlue = document.getElementById("color-model-blue").getAttribute("aria-valuenow");
  var cmGreen = document.getElementById("color-model-green").getAttribute("aria-valuenow");
  var cmAlpha = document.getElementById("color-model-alpha").getAttribute("aria-valuenow");
  if (selectColorParts == "eye") {
    leftEye.colorRed = cmRed, rightEye.colorRed = cmRed;
    leftEye.colorBlue = cmBlue, rightEye.colorBlue = cmBlue;
    leftEye.colorGreen = cmGreen, rightEye.colorGreen = cmGreen;
    leftEye.colorAlpha = cmAlpha, rightEye.colorAlpha = cmAlpha;
  }
  if (selectColorParts == "mouse") {
    robotMouse.colorRed = cmRed;
    robotMouse.colorBlue = cmBlue;
    robotMouse.colorGreen = cmGreen;
    robotMouse.colorAlpha = cmAlpha;
  }
  if (selectColorParts == "neck") {
    robotNeck.colorRed = cmRed;
    robotNeck.colorBlue = cmBlue;
    robotNeck.colorGreen = cmGreen;
    robotNeck.colorAlpha = cmAlpha;
  }
  if (selectColorParts == "head") {
    robotHead.colorRed = cmRed;
    robotHead.colorBlue = cmBlue;
    robotHead.colorGreen = cmGreen;
    robotHead.colorAlpha = cmAlpha;
  }

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
  robotMouse.resize(mouseSize, "size");
  // 口の横幅
  var mouseWidth = document.getElementById("slider-mouse-width").getAttribute("aria-valuenow");
  robotMouse.resize(mouseWidth, "width");
  var mouseHeight = document.getElementById("slider-mouse-height").getAttribute("aria-valuenow");
  robotMouse.resize(mouseHeight, "height");

  // 首のスライダ
  var neckSize = document.getElementById("slider-neck").getAttribute("aria-valuenow");
  robotNeck.resize(neckSize);
  // 腕の横幅
  var armWidth = document.getElementById("slider-arm-width").getAttribute("aria-valuenow");
  leftArm.resize(armWidth, "width"), rightArm.resize(armWidth, "width");
  // 腕の横幅
  var armHeight = document.getElementById("slider-arm-height").getAttribute("aria-valuenow");
  leftArm.resize(armHeight, "height"), rightArm.resize(armHeight, "height");
  // 脚の横幅
  var legWidth = document.getElementById("slider-leg-width").getAttribute("aria-valuenow");
  leftLeg.resize(legWidth, "width"), rightLeg.resize(legWidth, "width");
  // 脚の横幅
  var legHeight = document.getElementById("slider-leg-height").getAttribute("aria-valuenow");
  leftLeg.resize(legHeight, "height"), rightLeg.resize(legHeight, "height");
  // 胴のスライダ
  var bodySize = document.getElementById("slider-body").getAttribute("aria-valuenow");
  robotBody.resize(bodySize);
}

// 2.5 MOUSE_DRAGGED：マウスがドラッグされている間
function mouseDragged() {
  if (selected == "eye") {
    if ((mouseX < 0) || (mouseX > cnvsW)) selected = "";
    if ((mouseY < 0) || (mouseY > cnvsH)) selected = "";
    leftEye.x = mouseX, leftEye.y = mouseY;
    rightEye.x = cnvsW / 2 + (cnvsW / 2 - mouseX), rightEye.y = mouseY;
  }

  if (selected == "mouse") {
    if ((mouseX < 0) || (mouseX > cnvsW)) selected = "";
    if ((mouseY < 0) || (mouseY > cnvsH)) selected = "";
    robotMouse.y = mouseY;
  }

  if (selected == "head") {
    // controlPoint();
  }

  controlPoint();
}

// 制御点の変更を行う関数
function controlPoint() {
  // console.log(robotHead.cx0);
  if (selected == "head") {
    if ((mouseX <= robotHead.cx0 + 10) && ((mouseX >= robotHead.cx0 - 10))) {
      if ((mouseY <= robotHead.cy0 + 10) && ((mouseY >= robotHead.cy0 - 10))) {
        robotHead.cy0 = mouseY;
      }
    }
    if ((mouseX <= robotHead.cx1 + 10) && ((mouseX >= robotHead.cx1 - 10))) {
      if ((mouseY <= robotHead.cy1 + 10) && ((mouseY >= robotHead.cy1 - 10))) {
        robotHead.cx1 = mouseX, robotHead.cy1 = mouseY;
        robotHead.cx9 = ctrX - (mouseX - ctrX), robotHead.cy9 = mouseY;
      }
    }
    if ((mouseX <= robotHead.cx2 + 10) && ((mouseX >= robotHead.cx2 - 10))) {
      if ((mouseY <= robotHead.cy2 + 10) && ((mouseY >= robotHead.cy2 - 10))) {
        robotHead.cx2 = mouseX, robotHead.cy2 = mouseY;
        robotHead.cx8 = ctrX - (mouseX - ctrX), robotHead.cy8 = mouseY;
      }
    }
    if ((mouseX <= robotHead.cx3 + 10) && ((mouseX >= robotHead.cx3 - 10))) {
      if ((mouseY <= robotHead.cy3 + 10) && ((mouseY >= robotHead.cy3 - 10))) {
        robotHead.cx3 = mouseX, robotHead.cy3 = mouseY;
        robotHead.cx7 = ctrX - (mouseX - ctrX), robotHead.cy7 = mouseY;
      }
    }
    if ((mouseX <= robotHead.cx4 + 10) && ((mouseX >= robotHead.cx4 - 10))) {
      if ((mouseY <= robotHead.cy4 + 10) && ((mouseY >= robotHead.cy4 - 10))) {
        robotHead.cx4 = mouseX, robotHead.cy4 = mouseY;
        robotHead.cx6 = ctrX - (mouseX - ctrX), robotHead.cy6 = mouseY;
      }
    }
    if ((mouseX <= robotHead.cx5 + 10) && ((mouseX >= robotHead.cx5 - 10))) {
      if ((mouseY <= robotHead.cy5 + 10) && ((mouseY >= robotHead.cy5 - 10))) {
        robotHead.cy5 = mouseY;
      }
    }
    if ((mouseX <= robotHead.cx9 + 10) && ((mouseX >= robotHead.cx9 - 10))) {
      if ((mouseY <= robotHead.cy9 + 10) && ((mouseY >= robotHead.cy9 - 10))) {
        robotHead.cx9 = mouseX, robotHead.cy9 = mouseY;
        robotHead.cx1 = ctrX - (mouseX - ctrX), robotHead.cy1 = mouseY;
      }
    }
    if ((mouseX <= robotHead.cx8 + 10) && ((mouseX >= robotHead.cx8 - 10))) {
      if ((mouseY <= robotHead.cy8 + 10) && ((mouseY >= robotHead.cy8 - 10))) {
        robotHead.cx8 = mouseX, robotHead.cy8 = mouseY;
        robotHead.cx2 = ctrX - (mouseX - ctrX), robotHead.cy2 = mouseY;
      }
    }
    if ((mouseX <= robotHead.cx7 + 10) && ((mouseX >= robotHead.cx7 - 10))) {
      if ((mouseY <= robotHead.cy7 + 10) && ((mouseY >= robotHead.cy7 - 10))) {
        robotHead.cx7 = mouseX, robotHead.cy7 = mouseY;
        robotHead.cx3 = ctrX - (mouseX - ctrX), robotHead.cy3 = mouseY;
      }
    }
    if ((mouseX <= robotHead.cx6 + 10) && ((mouseX >= robotHead.cx6 - 10))) {
      if ((mouseY <= robotHead.cy6 + 10) && ((mouseY >= robotHead.cy6 - 10))) {
        robotHead.cx6 = mouseX, robotHead.cy6 = mouseY;
        robotHead.cx4 = ctrX - (mouseX - ctrX), robotHead.cy4 = mouseY;
      }
    }
  }

  if (pointControlElement == "mouse") {
    if (mousePattern == "パターン１") {
      console.log("hoge");
      if ((mouseX <= robotMouse.cx0 + 10) && ((mouseX >= robotMouse.cx0 - 10))) {
        if ((mouseY <= robotMouse.cy0 + 10) && ((mouseY >= robotMouse.cy0 - 10))) {
          robotMouse.cx0 = mouseX, robotMouse.cy0 = mouseY;
          robotMouse.cx4 = ctrX - (mouseX - ctrX), robotMouse.cy4 = mouseY;
        }
      }
      if ((mouseX <= robotMouse.cx1 + 10) && ((mouseX >= robotMouse.cx1 - 10))) {
        if ((mouseY <= robotMouse.cy1 + 10) && ((mouseY >= robotMouse.cy1 - 10))) {
          robotMouse.cx1 = mouseX, robotMouse.cy1 = mouseY;
          robotMouse.cx3 = ctrX - (mouseX - ctrX), robotMouse.cy3 = mouseY;
        }
      }
      if ((mouseX <= robotMouse.cx2 + 10) && ((mouseX >= robotMouse.cx2 - 10))) {
        if ((mouseY <= robotMouse.cy2 + 10) && ((mouseY >= robotMouse.cy2 - 10))) {
          robotMouse.cy2 = mouseY;
        }
      }
    }
  }
}


/*** -- 3. Original functions -- ***/
/* 
3.1 COLOR 
*/

let mdcPalette = {
  red500: [244, 67, 54, 96],
  pink500: [233, 30, 99, 91],
  purple500: [156, 39, 176, 69],
  deepPurple500: [103, 58, 183, 72],
  indigo500: [63, 81, 181, 71],
  blue500: [33, 150, 243, 95],
  lightBlue500: [3, 169, 244, 96],
  cyan500: [0, 168, 212, 83],
  teal500: [0, 150, 136, 59],
  green500: [76, 175, 80, 69],
  lightGreen500: [139, 195, 74, 76],
  lime500: [205, 220, 57, 86],
  yellow500: [255, 235, 59, 100],
  amber500: [255, 193, 7, 100],
  orange500: [255, 152, 0, 100],
  deepOrange500: [255, 87, 34, 100],
  brown500: [121, 85, 72, 47],
  grey500: [158, 158, 158, 62],
  blueGrey500: [96, 125, 139, 55],
};


// 
let selectColorParts = "";
function changeColor(parts) {
  selectColorParts = parts;
  console.log(parts);
}

function onPalletClick(colorValue) {
  if (selectColorParts == "eye") {
    leftEye.reColor(mdcPalette[colorValue]);
    rightEye.reColor(mdcPalette[colorValue]);
  }
  if (selectColorParts == "mouse") {
    robotMouse.reColor(mdcPalette[colorValue])
  }
  if (selectColorParts == "neck") {
    robotNeck.reColor(mdcPalette[colorValue])
  }
  if (selectColorParts == "head") {
    robotHead.reColor(mdcPalette[colorValue])
  }
}

function syncSelectorValue(red, green, blue, alpha) {
  document.getElementById("color-model-red").setAttribute("now", red + '');
  document.getElementById("color-model-green").setAttribute("now", green + '');
  document.getElementById("color-model-blue").setAttribute("now", blue + '');
  document.getElementById("color-model-alpha").setAttribute("now", alpha + '');
}



// SELECT_ELEMENT：移動する要素を選択する関数
function selectElement(name, behavior) {
  if (behavior == "point") {
    if (pointControlElement == name) {
      pointControlElement = "";
    } else {
      pointControlElement = name;
    }
  } else {
    if (selected == name) {
      selected = "";
    } else {
      selected = name;
    }
  }
  console.log(name, behavior);
}

// CHANGE_SELECT
function changeSelect(parts) {
  //selectの変更
  var eyeListItem = document.getElementById("eye-list-item");
  changedPattern(eyeListItem.innerHTML, "eye");
  var mouseListItem = document.getElementById("mouse-list-item");
  changedPattern(mouseListItem.innerHTML, "mouse");
  var headListItem = document.getElementById("head-list-item");
  changedPattern(headListItem.innerHTML, "head");
  var displayListItem = document.getElementById("display-list-item");
  changedPattern(displayListItem.innerHTML, "display");
  var neckListItem = document.getElementById("neck-list-item");
  changedPattern(neckListItem.innerHTML, "neck");
  var armListItem = document.getElementById("arm-list-item");
  changedPattern(armListItem.innerHTML, "arm");
  var legListItem = document.getElementById("leg-list-item");
  changedPattern(legListItem.innerHTML, "leg");
  var bodyListItem = document.getElementById("body-list-item");
  changedPattern(bodyListItem.innerHTML, "body");
}

// CHANGED_PATTERN：セレクタによりパターンを変更する関数
function changedPattern(pattern, element) {
  // - Head - 
  // Eye
  if (element == "eye") leftEye.init(pattern), rightEye.init(pattern);
  // Mouse
  if (element == "mouse") mousePattern = pattern;
  // Head
  if (element == "head") robotHead.init(pattern);
  // if (element == "head") headPattern = pattern;
  // Display
  if (element == "display") displayPattern = pattern;
  // - Body - 
  // Neck
  if (element == "neck") neckPattern = pattern;
  // Arm
  if (element == "arm") armPattern = pattern;
  // Leg
  if (element == "leg") legPattern = pattern;
  // Body
  if (element == "body") bodyPattern = pattern;
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


// キャンバスに背景画像を追加
function ChangeBackground() {
  document.querySelector('#canvas3').getAttribute()
}


// window.addEventListener('beforeunload', function (e) {
//   e.returnValue = 'このページから移動しますか？ データ送信せずに移動した際はデータは保存されません';
// }, false);