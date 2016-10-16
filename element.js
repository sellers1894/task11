'use strict';
var element = {
  elem: null,//эл-т
  inputBlock: null,//источник
  outputBlockL: null,//приёмник

  setElement: function(el, parent){
    var id = el.childNodes[0].id;
    var elements = parent.childNodes;
    for (let i = 0, n = elements.length; i < n; i++){//есть ли уже такие
      if (elements[i].childNodes.length)
        if (elements[i].childNodes[0].id === id)
          return this.incCount(elements[i].childNodes[0].childNodes);
    }

    var clo = el.cloneNode(true);
    clo.ondragstart = drag;
    var clo_info = clo.childNodes[0].childNodes;
    clo_info[clo_info.length-1].innerHTML = "(" + (1) + ")";
    parent.appendChild(clo);
  },



  getCount: function(elem_info){//последний span содержит кол-во
    var count = elem_info[elem_info.length-1].innerHTML;
    count = count.slice(1);
    count = count.slice(0, -1);
    return parseInt(count);
  },

  incCount: function(elem_info){
    var count = elem_info[elem_info.length-1];
    var countInt = count.innerHTML.slice(1);
    countInt = countInt.slice(0, -1);
    count.innerHTML = "(" + (++countInt) + ")";
    return countInt;
  }
};