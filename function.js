'use strict';
function makeDroppable(e) {
	e.preventDefault();
}

function drag(e) {
	element.inputBlock = e.target.parentNode;
	element.elem = e.target;
	e.dataTransfer.setData("text/plain", "");
}

function drop(e) {
	e.preventDefault();
	var ouputBlock = e.target;
	if (ouputBlock.getAttribute("class") !== "dropel" || ouputBlock === element.inputBlock)
		return;

	var elem_info = element.elem.childNodes[0].childNodes;
	var count = element.getCount(elem_info);
  var isLast = count === 1;//если последний, то вырезвать

  element.setElement(element.elem, ouputBlock);

  if (!isLast)
  	elem_info[elem_info.length-1].innerHTML = "(" + (count-1) + ")";
  else
  	element.inputBlock.removeChild(element.elem);
}


function addElement(molecule, parent){
	var div = document.createElement("div");
	div.className = "dragg-elem";
	div.draggable = true;
	div.style = "background-color: "+molecule.color+";";
	var text = "";
	var id = "";
	for (let i = 0, n = molecule.atoms.length; i < n; i++){
		id += molecule.atoms[i].getName();
		text += "<span class = \"atom-name\">"+molecule.atoms[i].getName()+"</span>";
		let count = ((molecule.atoms[i].getCount() !== 1)? molecule.atoms[i].getCount(): "");
		id += ","+molecule.atoms[i].getCount()+ "|";
		text += "<span class = \"atom-count\">"+count+"</span>";
	}
	id = id.slice(0, -1);
	// div.id = id;
	text += "<span class = \"elem-count\">("+molecule.count+")</span>";
	text+= "</div>";
	div.innerHTML = "<div class = \"elem\" id=\"" +id+"\">"+text;
	parent.appendChild(div);
	return div;
}



function elemInfo(e){
	var elem = e.target;
	if (elem.tagName === "SPAN"){
		elem = elem.parentNode;
	}
	else
		if (elem.className === "dragg-elem")
			elem = elem.childNodes[0];
	var molecule = [];
	var arr = elem.id.split("|");
	arr.forEach(function(item){
		let buf = item.split(",");
		let atom = new Atom(buf[0], buf[1]);
		molecule.push(atom);
	});


	info_panel.innerHTML = "";
	var formulas = Formula.getFormulasOnAtoms(molecule);
	formulas.forEach(function(item){
		info_panel.innerHTML += "<p>";
		item.forEach(function(item2){
			info_panel.innerHTML += item2.tostring();
		});
		info_panel.innerHTML += "</p>"
	});
}


	function create(){
		alert("bla");
	}