// var detector = require("../scripts/_detector.js");
// var detector=function(){function t(t){var n,u,a,o;if(!t.match(/[\u1000-\u1097]/g))return null;n=[];for(u in r){var c=0;a=r[u];for(var e=0;e<a.length;e++)o=t.match(new RegExp(a[e]),"g"),o&&(c+=o.length||0);n.push({name:u,matchCount:c})}return n.sort(function(t,n){return t.matchCount<n.matchCount?1:t.matchCount>n.matchCount?-1:0}),n}var n="[\\x20\\t\\r\\n\\f]",r={uni:["ှ","ဿ","ည်","န်","င်","ေး","ော","်း","ဵ","[ၐ-ၙ]","^([က-အ]ြ|[က-အ]ေ)"],zaw:["ာ္","်ာ",n+"(ျ|ေ|[ၾ-ႄ])[က-အ]","^(ျ|ေ|[ၾ-ႄ])[က-အ]","[က-အ]္[^က-အ]","ဥ္","္း","[ါ-ူေ်း](ျ|[ၾ-ႄ])[က-အ]","ံု","[က-အ]္ေ","ၤ","္"+n,"ာေ","[ါ-ူ်း]ေ[က-အ]","ေေ","ုိ","္$"]};return t}();

describe("Magic Bottom test", function () {
  describe("#Font Detection", function () {
    var noMyanmar = "this is a test string which don't include Myanmar Characters";
    var unicodeString = "မြန်မာစာသည်တိုစာ၊ မြန်မာစကားသည် တို့စကား";
    var zawgyiString = "ေဇာ္ဂ်ီ၊ ေဇာ္ကကေနသည္";

    // console.log(detector(unicodeString));

    it("String should be detect as non Myanmar String", function () {
      var result = detector(noMyanmar);
      if( !(result === null) ){
        throw new Error("Not Equal");
      }
    });

    it("String should be detect as Unicode", function () {
      var result = detector(unicodeString);
      if( !(result && result[0] && result[0].name === "uni") ){
        throw new Error("Not Equal");
      }
    });

    it("String should be detect as Zawgyi", function () {
      var result = detector(zawgyiString);
      if( !(result && result[0] && result[0].name === "zaw") ){
        throw new Error("Not Equal");
      }
    });
  });
});