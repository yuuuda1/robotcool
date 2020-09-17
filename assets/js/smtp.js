// SEND_MAIL：結果をSMTPサーバーに転送する関数
function sendMail() {
  // 氏名とメールアドレス
  var email = document.getElementById("email-text").value;
  var name = document.getElementById("name-text").value;

  Email.send({
    SecureToken: "d4c96642-e1aa-4be4-aed1-bf2360d5535d",
    To: 'i2086051@cc.kyoto-su.ac.jp',
    From: email,
    Subject: "This is the subject" + name,
    Body: "And this is the body"
  }).then(
    message => alert(message)
  );

}