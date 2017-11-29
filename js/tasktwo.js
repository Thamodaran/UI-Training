function drawGraphValues() {
  removeAllChildrens();
  // var validation = checkValidations();
  var negative = document.getElementById("negative-x").value;
  var positive = document.getElementById("positive-x").value;
  var milli = parseInt(document.getElementById("milli").value)+1;  
  var spanElement = document.createElement('span');
  document.getElementById("content").appendChild(spanElement);
  spanElement.setAttribute("id","line-graph");
  spanElement.setAttribute("style","border-left: 1px solid black; height: 30px;display: inline-block;");
  var negativeCount = 0;
   for (var ncount = 0; ncount > negative; ncount--) {
      var lineSpans = document.getElementById('line-graph').insertAdjacentHTML('beforebegin', '<span name="negative-span" class="negative-span_'+negativeCount+'" style="display: inline-block;border-top: 1px solid black;border-left: 1px solid black;width: 40px;height: 15px;"></span>');
      negativeCount++;
   }
   var positiveCount = 0;
   for (var pcount = 0; pcount < positive; pcount++) {
      document.getElementById('line-graph').insertAdjacentHTML('afterbegin', '<span name="positive-span" class="positive-span_'+positiveCount+'" style="display: inline-block;border-top: 1px solid black;border-right: 1px solid black;width: 40px;height: 15px;"></span>');
      positiveCount++;        
   }
   for (var noOfSpan = 0; noOfSpan < document.getElementsByName('negative-span').length; noOfSpan++) {
       
     for (var j = 0; j < milli; j++) {
       var milliwidth = (parseInt(document.getElementsByName('negative-span')[noOfSpan].style.width) / milli)-1;
      document.getElementsByName('negative-span')[noOfSpan].innerHTML += '<span style="display: inline-block;border-right: 1px solid black;width: '+milliwidth+'px;height: 10px;position: relative;left: 1px;"></span>';      
     }
     document.styleSheets[0].addRule('.negative-span_'+noOfSpan+'::after','content: "'+ncount+'"');
     ncount++;
  }
   for (var noOfSpan = 0; noOfSpan < document.getElementsByName('positive-span').length; noOfSpan++) {
     for (var j = 0; j < milli; j++) {
       var milliwidth = (parseInt(document.getElementsByName('positive-span')[noOfSpan].style.width) / milli)-1;
       document.getElementsByName('positive-span')[noOfSpan].innerHTML += '<span style="display: inline-block;border-right: 1px solid black;width: '+milliwidth+'px;height: 10px;position: relative;left: 1px;"></span>';
     }
     positiveCount--;
     parseInt(noOfSpan+1);
     console.log(noOfSpan);
     document.styleSheets[0].addRule('.positive-span_'+noOfSpan+'::after','content: "'+pcount+'"','position:"reletive"','left: 20px;' );
     pcount--;
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
