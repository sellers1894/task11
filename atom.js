'use strict';
var Atom = (function(name, count){
  var nameAtom = name;
  var countAtom = count;

  function getName(){
  	return nameAtom;
  }
  function getCount(){
  	return countAtom;
  }

  return {
    getName: getName,
    getCount: getCount
  }

});


var fff = function(a){
  alert(a);
};