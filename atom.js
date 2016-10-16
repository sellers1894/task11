'use strict';
/*Атом, составная часть молекулы*/
var Atom = (function(name, count){
  var nameAtom = name;
  var countAtom = count;

  function getName(){
  	return nameAtom;
  }
  function getCount(){
  	return countAtom;
  }
  function compare(atom, count = false){
    return (atom.getName() === this.getName() && (!count || atom.getName() === this.getName()));
  }
  function tostring(){
    return nameAtom+countAtom;
  }

  return {
    getName: getName,
    getCount: getCount,
    compare: compare,
    tostring: tostring
  }

});


var fff = function(a){
  alert(a);
};