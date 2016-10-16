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
  function compare(atom, count_atom = false){
    return (atom.getName() === this.getName() && (!count_atom || atom.getCount() === this.getCount()));
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