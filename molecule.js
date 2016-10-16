'use strict';
/*Молекула. Состоит из атомов, + цвет и кол-во*/
var Molecule = (function(){
  var molecule = [
    {atoms: [Atom("H", 1)], color: "#ea3939", count: 10},
    {atoms: [Atom("O", 1)], color: "#6899F7", count: 10},
    {atoms: [Atom("F", 1)], color: "#a3f768", count: 10},
    {atoms: [Atom("Si", 1)], color: "##a3f768", count: 10},
    {atoms: [Atom("S", 1)], color: "#c5c910", count: 10},
    {atoms: [Atom("Li", 1)], color: "#bf72f1", count: 10},
    {atoms: [Atom("Au", 1)], color: "#deff00", count: 10},
    {atoms: [Atom("P", 1)], color: "#1f4918", count: 10},
    {atoms: [Atom("K", 1)], color: "#00cf04", count: 10},
    {atoms: [Atom("C", 1)], color: "#67684d", count: 10},
  	{atoms: [Atom("Ca", 1)], color: "#feffdc", count: 10},
  	{atoms: [Atom("Na", 1)], color: "#a77c73", count: 5},
    {atoms: [Atom("H", 2), Atom("O", 1)], color: "#0899F7", count: 4},
  	{atoms: [Atom("H", 3), Atom("P", 4), Atom("O", 4)], color: "#0899F7", count: 4},
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