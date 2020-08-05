const canvasX = 640;
const canvasY = 520;

const canvasColor = 'skyblue';

// 最初に１回だけ実行される処理
function setup() {
  // キャンバスの作成
  let cnvs = createCanvas(canvasX, canvasY);
  cnvs.position(368, 184);
  // 背景色の設定
  background(canvasColor);
}

// setup後に繰り返し実行される処理（フレーム単位）
function draw() {
  // 頭
  ellipse(320,140,100,100);
  // 胴
  rect(270,190,100,100);
  // 右腕
  rect(220,190,50,100);
  // 左腕
  rect(370,190,50,100);
  // 右足
  rect(270,290,50,100);
  // 左脚
  rect(320,290,50,100);
}