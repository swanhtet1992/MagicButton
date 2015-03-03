// Magic Button Chrome Extension
// Copyright (C) 2015 Swan Htet Aung

// This file is part of Magic Button Chrome Extension

// Magic Button is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Magic Button is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Foobar.  If not, see <http://www.gnu.org/licenses/>.

var detector=function(){function t(t){var n,u,a,o;if(!t.match(/[\u1000-\u1097]/g))return null;n=[];for(u in r){var c=0;a=r[u];for(var e=0;e<a.length;e++)o=t.match(new RegExp(a[e]),"g"),o&&(c+=o.length||0);n.push({name:u,matchCount:c})}return n.sort(function(t,n){return t.matchCount<n.matchCount?1:t.matchCount>n.matchCount?-1:0}),n}var n="[\\x20\\t\\r\\n\\f]",r={uni:["ှ","ဿ","ည်","န်","င်","ေး","ော","်း","ဵ","[ၐ-ၙ]","^([က-အ]ြ|[က-အ]ေ)"],zaw:["ာ္","်ာ",n+"(ျ|ေ|[ၾ-ႄ])[က-အ]","^(ျ|ေ|[ၾ-ႄ])[က-အ]","[က-အ]္[^က-အ]","ဥ္","္း","[ါ-ူေ်း](ျ|[ၾ-ႄ])[က-အ]","ံု","[က-အ]္ေ","ၤ","္"+n,"ာေ","[ါ-ူ်း]ေ[က-အ]","ေေ","ုိ","္$"]};return t}();

if (window.location.origin === "https://www.facebook.com") {
  'use strict';

  window.addEventListener("load", function() {

    var magicButton = document.createElement("div");
    var undoButton;

    var composer = document.getElementById('pagelet_composer');
    var textBoxs = composer.getElementsByTagName('textarea');
    var focusedTextBox;

    // Style magicButton
    magicButton.className = "rfloat _42ft _4jy0 _4jy4 _4jy2 _517h _51sy";
    magicButton.style = "position: absolute; top: 0; left: 0;";
    magicButton.innerHTML = "Magic Button";

    // Clone undoButton from magicButton node
    undoButton = magicButton.cloneNode(true);
    undoButton.innerHTML = "Undo";

    function onChangeSimulation(input){
      var event = new InputEvent('change', {
        'view': window,
        'bubbles': true,
        'cancelable': true
      });
      var canceled = !input.dispatchEvent(event);
    }

    /* Use Event Listener for bind future callback */
    magicButton.addEventListener("click", function(event){

      var _String = focusedTextBox.value;
      var check = detector(_String);

      /* Save old string */
      focusedTextBox.setAttribute("data-magic-button", _String);

      if (typeof focusedTextBox.value != 'undefined') {
        if(!check){
          return; // Not burmese font.
        } else if(check[0].name === "zaw"){
          focusedTextBox.value = "[Zawgyi]\n" + 
                          _String + 
                        "\n\n\n[Unicode]\n" + 
                          Z1_Uni(_String);
        } else if (check[0].name === "uni"){
          focusedTextBox.value = "[Unicode]\n" + 
                          _String + 
                        "\n\n\n[Zawgyi]\n" + 
                          Uni_Z1(_String);
        }

        focusedTextBox.parentNode.removeChild(magicButton);
        focusedTextBox.parentNode.appendChild(undoButton);
        
        /* Creation Simulation event */
        // onChangeSimulation(focusedTextBox);
      }

      document.getElementsByName('xhpc_message')[0].value = focusedTextBox.value;
      focusedTextBox.style.height = focusedTextBox.scrollHeight + 'px';
      focusedTextBox.setAttribute('aria-expanded', true);
 
    }, false);

    /*
     * Prevent Multiple time conservation by adding undo button data
     */
    undoButton.addEventListener("click", function(event){
      var _String = focusedTextBox.getAttribute("data-magic-button");
      focusedTextBox.setAttribute("data-magic-button", false);
      focusedTextBox.value = _String;

      focusedTextBox.parentNode.removeChild(undoButton);
      focusedTextBox.parentNode.appendChild(magicButton);

      // onChangeSimulation(focusedTextBox);
    }, false);

    /* 
     * Watch Focus on all textBoxs and adding magic button on focused TextBox;
     */
   Array.prototype.forEach.call(textBoxs, function(box){
      box.addEventListener("focus", function(event){
        if(focusedTextBox === event.target){
          return;
        }

        focusedTextBox = event.target;

        var parent = event.target.parentNode;
        /* When There is no magic work made */
        if(focusedTextBox.getAttribute("data-magic-button") !== "false"){
          parent.appendChild(magicButton);
        } 
        /* If there is any undo work on it */
        else {
         parent.appendChild(undoButton);
        }

      }, false);

      box.addEventListener("keyup", function(event){
        focusedTextBox = event.target;
        var parent = event.target.parentNode;

        focusedTextBox.setAttribute("data-magic-button", false);

        if (parent.contains(undoButton)) {
          parent.removeChild(undoButton);
          parent.appendChild(magicButton);
        };
      }, false);
    });
  });
}
