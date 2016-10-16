'use strict';
var resurse_panel = document.getElementById("resurse");
var create_panel = document.getElementById("create");


resurse_panel.ondragover = makeDroppable;
create_panel.ondragover = makeDroppable;
resurse_panel.ondrop = drop;
create_panel.ondrop = drop;

var mas = Molecule.getMolecule();

for (let i = 0, n = mas.length; i < n; i++){
	addElement(mas[i], resurse_panel).ondragstart = drag;
}

