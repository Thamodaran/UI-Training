window.onload = function(){
  var body = document.getElementsByTagName("BODY");
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