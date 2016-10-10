var element = {
  elem: null,//эл-т
  inputBlock: null,//источник
  outputBlockL: null,//приёмник

  getElement: function(parent, id){
    var cols = document.querySelectorAll("#" + parent.id +" #" + id);
    var el = false;
    [].forEach.call(cols, function(col) {
      el = col;
    });
    return el;
  },

  addElement: function(parent, id){
    el = this.getElement(parent, id);

    if (!el){
      var clo = document.getElementById(id).cloneNode(true);
      clo.getElementsByClassName('elem-count')[0].innerHTML = "(" + (1) + ")";
      parent.appendChild(clo);
    }
    else
      this.setElement(el, false);//добавить к текущему
  },

  setElement: function(el, isTake){
    var count = el.getElementsByClassName('elem-count')[0].innerHTML;
    count = count.slice(1);
    count = count.slice(0, -1);
    count = isTake? parseInt(count)-1: parseInt(count)+1;
    el.getElementsByClassName('elem-count')[0].innerHTML = "(" + (count) + ")";
    return count;
  }
};