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


function addElement(molecule, parent, new_elem = false){
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

	var b = false;
	if (new_elem){
		var elems = document.querySelectorAll("#"+parent.id+" .dragg-elem");
		for (let i = 0, n = elems.length; i < n; i++){
			if (elems[i].childNodes[0].id === id){
				b = true;
				element.incCount(elems[i].childNodes[0].childNodes, 3);
				break;
			}
		}
	}

	if (!b)
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
		var elems = create_panel.childNodes;
		if (elems.length){
			if (elems.length === 1){//добавить существующий
				var elem_info = elems[0].childNodes[0].childNodes;
				var count = element.getCount(elem_info) * 3 + 1;
				var elem = document.querySelectorAll("#resurse .dragg-elem");
				for (let i = 0, n = elem.length; i < n; i++)
					if (elem[i].childNodes[0].id === elems[0].childNodes[0].id)
						element.incCount(elem[i].childNodes[0].childNodes, count);
				create_panel.innerHTML = "";
			}
			else{
				var atoms = [];
				elems.forEach(function(item){
					let buf = item.childNodes[0].id.split(",");
					buf[1] *= element.getCount(item.childNodes[0].childNodes);
					atoms.push(new Atom(buf[0], buf[1]));
				});

				var form = Formula.getFormulaOnAtoms(atoms);
				if (!form)
					alert("Формула не найдена")
				else{
					let el = addElement({atoms: form, color: getRandomColor(), count: 3}, resurse_panel, true);
					el.ondragstart = drag;
					el.addEventListener('click', elemInfo);
					create_panel.innerHTML = "";
					alert("Элемент добавлен!");
				}
			}
		}
	}




function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}