function makeDroppable(e) {
  e.preventDefault();
}

function dragImg(e) {
  element.inputBlock = e.target.parentNode;
  e.dataTransfer.setData("text/plain", e.target.id);
}

function dropImg(e) {
  e.preventDefault();
  var ouputBlock = e.target;
  if (ouputBlock.getAttribute("class") !== "dropel")
    return false;

  var id = e.dataTransfer.getData("text/plain");
  element.elem = element.getElement(element.inputBlock, id);//Сам эл-т

  if (!element.setElement(element.elem, true))//убрать из источника
    element.inputBlock.removeChild(element.elem);//если осталось 0 эл-в

  element.addElement(ouputBlock, id);//добавление эл-та в приёмник
}



function create(){
  var formula = "";
  var cols = document.querySelectorAll("#create .dragg-elem");
  var el = false;
  var count = 0;
  [].forEach.call(cols, function(col) {
    el = col;
    formula += el.id;
    var cols2 = document.querySelectorAll("#create #" + el.id);
    [].forEach.call(cols2, function(col2) {
      var count = col2.getElementsByClassName("elem-count")[0].innerHTML;
      formula += count;
    });
    formula += "|";
    count++;
  });

  if (!formula)
    return;
  formula = formula.slice(0, -1);


  if (count === 1){
    request('GET', "?add="+formula.substring(0, formula.indexOf('(')));
    location.reload();
    return;
  }


  var ansv = request('POST');

  if (ansv){
    ansv = ansv.split(",");
    let b = false;
    for (let i = 0, n = ansv.length; i < n; i++){

      let mas1 = ansv[i].split("|");
      let mas2 = formula.split("|");
      mas1 = mas1.sort();
      mas2 = mas2.sort();
      if (mas1.length === mas2.length){
        // alert(mas1);
        // alert(mas2);
        b = true;
        for (let j = 0, n2 = mas1.length; j < n2; j++){
            b = false;
            for (let k = 0; k < n2; k++)
              if (mas1[j] === mas2[k]){
                b = true;
                break;
              }
            if (!b)
              break;
          }
        }
      if (b){//есть совпадение
        if (ansv[i]){
          request('GET', "?add="+ansv[i]);
          location.reload();
        }
        break;
      }

    }

    if (!b){
      var isNew = confirm("В-во не найдено. Добавить?");
      if (isNew){
        request('GET', "?newElem="+formula);
        location.reload();
      }
    }

  }
}


function request(method, get=""){
  var xhr = new XMLHttpRequest();
  xhr.open(method, 'function.php' + get, false);
  xhr.send();
  return xhr.responseText;
}



function click(id){
  document.getElementById('info').innerHTML = "";
  let mas1 = request("GET", "?info="+id).split("|");
  for (let i = 0, n = mas1.length; i < n; i++)
    document.getElementById('info').innerHTML += "<p>"+mas1[i]+"</p>";
}

var div = document.getElementsByClassName("dragg-elem");
// alert(div.length);
for (let i = 0, n = div.length; i < n; i++)
div[i].onclick = function (e) {
 click(div[i].id);
}