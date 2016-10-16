'use strict';
/*Молекула. Состоит из атомов, + цвет и кол-во*/
var Molecule = (function(){
  var molecule = [
  	{atoms: [Atom("H", 1)], color: "#6899F7", count: 10},
  	{atoms: [Atom("Na", 5)], color: "#A899F7", count: 5},
  	{atoms: [Atom("H", 2), Atom("O", 1)], color: "#0899F7", count: 4},
  	{atoms: [Atom("C", 1), Atom("O", 2)], color: "#E09EE7", count: 20}
  ];

  function getMolecule(){
    return molecule;
  }

  function size(){
  	return molecule.length;
  }

  return {
    getMolecule: getMolecule,
    size: size
  }

})();