'use strict';

window.addEventListener("load", function() {
  var magicButton = document.createElement("div");
  magicButton.className = "rfloat _42ft _4jy0 _4jy4 _4jy2 _517h _51sy";
  magicButton.innerHTML = "Magic Button";
  magicButton.onclick= function() {
    var textBox = document.getElementsByName('xhpc_message_text')[0];

    if (typeof textBox.value != 'undefined') {
      textBox.value = "(---Unicode Version---)\n" + textBox.value + "\n\n\n(---Zawgyi Version---)\n" + uni512zg1(textBox.value);
      document.getElementsByName('xhpc_message')[0].value =  textBox.value;
    }
  };
  document.querySelector('._5142').appendChild(magicButton);
});