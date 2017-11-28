window.onload = function(){
  var body = document.getElementsByTagName("BODY");
  var inputtwo = document.createElement("input");
  var inputthree = document.createElement("input");
  var elements = [{"element":"input","id": "negative-x", "type": "text","method":"checkValidations(this);","event": "onkeyup"},
                  {"element":"input","id": "positive-x", "type": "text","method":"checkValidations(this);","event": "onkeyup"},
                  {"element":"input","id": "milli", "type": "text","method":"checkValidations(this);","event": "onkeyup"},
                  {"element":"input","id": "click-me", "type": "submit","method":"drawGraphValues();","event": "onclick"}];
  for (var i = 0; i < elements.length; i++) {
    var element = renderElement(elements[i]);
    var errorSpan = createErrorSpan(elements[i]);
    body[0].append(element);
    body[0].append(errorSpan);
  }

  var contentDiv = document.createElement("div");

  contentDiv.setAttribute("id","content");
  contentDiv.setAttribute("style","margin: 150px 0 0 25px;");
  document.getElementById("click-me");
  body[0].append(contentDiv);
};

function createErrorSpan(element) {
  var errorSpan = document.createElement("span");
  errorSpan.setAttribute("id","error_"+element.id);
  return errorSpan;
}

function renderElement(element) {
  var input = document.createElement(element.element);
  input.setAttribute("id",element.id);
  input.setAttribute("type",element.type);
  input.setAttribute(element.event,element.method);
  return input;
}

function drawGraphValues() {
  // var validation = checkValidations();
  var negative = document.getElementById("negative-x").value;
  var positive = document.getElementById("positive-x").value;
  var milli = parseInt(document.getElementById("milli").value)+1;
  removeAllChildrens();
  var spanElement = document.createElement('span');
  document.getElementById("content").appendChild(spanElement);
  spanElement.setAttribute("id","line-graph");
  spanElement.setAttribute("style","border-left: 1px solid black; height: 30px;display: inline-block;");
   for (var i = 0; i > negative; i--) {
      var lineSpans = document.getElementById('line-graph').insertAdjacentHTML('beforebegin', '<span name="negative-span" style="display: inline-block;border-top: 1px solid black;border-left: 1px solid black;width: 40px;height: 15px;"></span>');
   }
   for (var i = 0; i < positive; i++) {
        document.getElementById('line-graph').insertAdjacentHTML('afterbegin', '<span name="positive-span" style="display: inline-block;border-top: 1px solid black;border-right: 1px solid black;width: 40px;height: 15px;"></span>');
   }
   for (var noOfSpan = 0; noOfSpan < document.getElementsByName('negative-span').length; noOfSpan++) {
     for (var j = 0; j < milli; j++) {
       var milliwidth = (parseInt(document.getElementsByName('negative-span')[noOfSpan].style.width) / milli)-1;
      document.getElementsByName('negative-span')[noOfSpan].innerHTML += '<span style="display: inline-block;border-right: 1px solid black;width: '+milliwidth+'px;height: 10px;position: relative;left: 1px;"></span>';
     }
   }
   for (var noOfSpan = 0; noOfSpan < document.getElementsByName('positive-span').length; noOfSpan++) {
     for (var j = 0; j < milli; j++) {
       var milliwidth = (parseInt(document.getElementsByName('positive-span')[noOfSpan].style.width) / milli)-1;
       document.getElementsByName('positive-span')[noOfSpan].innerHTML += '<span style="display: inline-block;border-right: 1px solid black;width: '+milliwidth+'px;height: 10px;position: relative;left: 1px;"></span>';
     }
   }
}

function removeAllChildrens() {
    var myNode = document.getElementById("content");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

function checkValidations(element) {
  console.log(element.value);
  console.log(element.id);
  id = element.id;
  var onlyNumbers = new RegExp("[^0-9]");
  // console.log(onlyNumbers.test(element.value));
  if (onlyNumbers.test(element.value)) {
    document.getElementById(id).setAttribute("style","border: 1px solid red;");
    document.getElementById("error_"+element.id);
    error.innerHTML("test");
    // console.log(element.style,"border: 1px solid red;");
    // console.log(element.style.border:"1px solid red");
  }
  // var value = getElementById();
  // var negative = document.getElementById("negative-x").value;
  // var positive = document.getElementById("positive-x").value;
  // var milli = parseInt(document.getElementById("milli").value)+1;
  // if(negative > 0) {
  //   document.getElementById("negative-x").setAttribute("style","border: 1px solid red;")
  //   return false;
  // } else {
  //   document.getElementById("negative-x").setAttribute("style","border: 1px solid black;")
  // }
  // if(positive < 0) {
  //   document.getElementById("positive-x").setAttribute("style","border: 1px solid red;")
  //   return false;
  // } else {
  //   document.getElementById("positive-x").setAttribute("style","border: 1px solid black;")
  // }
  // return false;
}
