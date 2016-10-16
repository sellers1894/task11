'use strict';
/*Начальная загрузка. Глобальные переменные, назначение событий, заполнение*/
var resurse_panel = document.getElementById("resurse");
var create_panel = document.getElementById("create");
var info_panel = document.getElementById("info");

document.getElementById("create-btn").addEventListener('click', create);

resurse_panel.ondragover = makeDroppable;
create_panel.ondragover = makeDroppable;
resurse_panel.ondrop = drop;
create_panel.ondrop = drop;

var mas = Molecule.getMolecule();

for (let i = 0, n = mas.length; i < n; i++){
	let el = addElement(mas[i], resurse_panel);
	el.ondragstart = drag;
	el.addEventListener('click', elemInfo);
}