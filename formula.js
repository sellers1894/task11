'use strict';
/*Список формул*/
var Formula = (function(){
	var formula = [
	[Atom("H", 2), Atom("O", 1)],
	[Atom("Na", 1), Atom("O", 1), Atom("H", 1)]
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


		// atoms.forEach(function(item){
		// 	var b = true;
		// 	formula.forEach(function(item2){
		// 		b = false;
		// 		item2.forEach(function(item3){
		// 			if (item.compare(item3, true)){
		// 				arr.push(item2);
		// 				b = true;
		// 			}
		// 		})

		// 	})
		// });
		return arr;
	}

	function size(){
		return formula.length;
	}

	return {
		getFormulas: getFormulas,
		getFormulasOnAtoms: getFormulasOnAtoms,
		size: size
	}

})();