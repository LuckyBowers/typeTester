var textEl = $('#text');
let myText = textEl.text().trim();
var count = 0;

textEl.html('<span id="correct"></span><span id="wrong"></span><span id="todo">' + myText + '</span>');


$(document).keypress(function(data){
  let pressedKey = data.key;
  let targetKey = myText[count];

  console.log("PRESSED: " + pressedKey);
  console.log("SHOULD BE: " + targetKey);

  let correctTxt = $('#correct').text();
  let wrongTxt = $('#wrong').text();
  let todoTxt = $('#todo').text();

  if (pressedKey == targetKey) {
    console.log("MATCH");

    if (wrongTxt == "") {
      $('#todo').text(todoTxt.substring(1));
    }else{
      $('#wrong').text('');
    }
    $('#correct').text(correctTxt + pressedKey);

    count+=1;
  }else{
    if (pressedKey == "Backspace") {
      $('#todo').text(wrongTxt + todoTxt);
      $('#wrong').text('');
    } else if (wrongTxt == "") {
      $('#todo').text(todoTxt.substring(1));
      $('#wrong').text(todoTxt[0]);
    }
  }

});
