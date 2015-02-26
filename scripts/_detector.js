'use strict';

/* White space in JavaScript */
var whitespace = "[\\x20\\t\\r\\n\\f]";
 
/* Library is the list of Regular Expression Pattern which is possible to match each font uniquely */
var library = {
  "uni": [
    '\u103e', '\u103f', '\u100a\u103a', '\u1014\u103a', '\u1004\u103a', '\u1031\u1038', '\u1031\u102c',
    '\u103a\u1038', '\u1035', '[\u1050-\u1059]', '^([\u1000-\u1021]\u103c|[\u1000-\u1021]\u1031)'
  ],
  "zaw" : [
    '\u102c\u1039', '\u103a\u102c', whitespace+'(\u103b|\u1031|[\u107e-\u1084])[\u1000-\u1021]',
    '^(\u103b|\u1031|[\u107e-\u1084])[\u1000-\u1021]', '[\u1000-\u1021]\u1039[^\u1000-\u1021]', '\u1025\u1039',
    '\u1039\u1038' ,'[\u102b-\u1030\u1031\u103a\u1038](\u103b|[\u107e-\u1084])[\u1000-\u1021]' ,'\u1036\u102f',
    '[\u1000-\u1021]\u1039\u1031' , '\u1064','\u1039'+whitespace, '\u102c\u1031',
    '[\u102b-\u1030\u103a\u1038]\u1031[\u1000-\u1021]', '\u1031\u1031', '\u102f\u102d', '\u1039$'
  ]
};

/*
 * Detection function is originaly creation at knayi-myscript
 * http://github.com/greenlikeorange/knayi-myscript
 *
 * @param content String for detect
 * @return ObjectArray An ObjectArray which sorted most match font object first
 * example return: [
 *  { name: "zaw", matchCount: 12},
 *  { name: "uni", matchCount: 9}
 * ]
 *
 */
function detector(content){
  var result, _name, _list, _listMatch;

  /* 
   * Detect will only execute for string include Myanmar characters 
   * When there is no Myanmar characters found, return is null
   */
  if(!content.match(/[\u1000-\u1097]/g))
    return null;
  
  /* Result is any Object array */
  result = [];
  
  /* Detection each font detection list */
  for(_name in library){

    var matchCount = 0;
    _list = library[_name];
    
    /* Searching match characters on each Regular Expression Pattern */
    for (var i = 0; i < _list.length; i++) {

      _listMatch = content.match(new RegExp(_list[i]), "g");

      /* When match found save it as count */
      if(_listMatch)
        matchCount += _listMatch.length || 0;

    }
   
    result.push({
      name: _name,
      matchCount: matchCount
    });
  }
   
  /* Sort by most match */
  result.sort(function(a,b){
    if(a.matchCount < b.matchCount)
      return 1;
    if(a.matchCount > b.matchCount)
      return -1;
    return 0;
  });
   
  return result;
};

module.exports = detector;