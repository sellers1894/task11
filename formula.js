'use strict';
/*Список формул*/
var Formula = (function(){
	var formula = [
	[Atom("H", 2), Atom("O", 1)],
	[Atom("Na", 1), Atom("O", 1), Atom("H", 1)],
	[Atom("C", 1), Atom("O", 2)],
	[Atom("F", 1), Atom("O", 1)],
	[Atom("Si", 1), Atom("O", 2)],
	[Atom("H", 2), Atom("S", 4), Atom("O", 4)],
	[Atom("H", 3), Atom("P", 4), Atom("O", 4)],
	[Atom("Li", 2), Atom("O", 1), Atom("H", 1)],
	[Atom("K", 2), Atom("O", 1)],
	[Atom("Ca", 1), Atom("C", 3), Atom("O", 3)]
	];

	function getFormulas(){
		return formula;
	}

	function getFormulasOnAtoms(atoms){
		var arr = [];
		formula.forEach(function(atms){
			var b = true;
				var b1 = false;
				atoms.forEach(function(atom){
					atms.forEach(function(atm){
						if ((atom.getName() === atm.getName()) && (atom.getCount() <= atm.getCount()))
							b1 = true;
					});
					if (!b1)
						b = false;
				});

			if (b)
				arr.push(atms);
		});
		return arr;
	}

	function getFormulaOnAtoms(atoms){
		var ansv = null;
		formula.forEach(function(atms){
			var b = false;
			var b1 = false;
			if (atms.length === atoms.length){
				b = true;
				for (let i = 0, n = atms.length; i < n; i++){
					b1 = false;
					for (let j = 0; j < n; j++){
						if (atms[i].compare(atoms[j], true)){
							b1 = true;
							break;
						}
					}
					if (!b1){
						b = false;
						break;
					}
				}
			}
			if (b){
				ansv = atms;
			}
		});
		return ansv;
	}

	function size(){
		return formula.length;
	}

	return {
		getFormulas: getFormulas,
		getFormulasOnAtoms: getFormulasOnAtoms,
		getFormulaOnAtoms: getFormulaOnAtoms,
		size: size
	}

})();