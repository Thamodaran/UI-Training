window.onload = function () {
    var string = 'mr mahakavi bharathiyar kavithai is a tamilan';
//    findLongestString(string);
    var sampleArray = ['Fire', 'Wind', 'Rain'];
//    arrayJoin(sampleArray);
    // var replaceString = 'Fire';
    // stringReplace(replaceString);
    // currentDate();
//    returnCurrencies();
};
function findLongestString(str) {
    var sampleStr = str.split(' ');
    var premap = 0;
    var map1 = sampleStr.map(x=> x.length);
    var max = Math.max.apply(null, map1);
    for (var i = 0; i < map1.length; i++) {
        if (map1[i] == max) {
            maxIndex = i;
        }
    }
    console.log(sampleStr[maxIndex]);
}

function arrayJoin() {
    var inputArray = ["Tamil", "English", "Science", "Maths"];
    var resArray = inputArray.join(",");    
    document.getElementById("join-result").innerHTML = resArray;
}

function stringReplace() {
    str = document.getElementById("change-string-position").value;
    document.getElementById("changed-string-position").innerHTML = str.charAt(str.length - 1) + '' + str.substring(1, str.length - 1) + '' + str.charAt(0);
}

function currentDate() {
    var today = new Date();
    document.getElementById("date-one").innerHTML = today.getMonth() + '-' + today.getDate() + '-' + today.getFullYear();
    document.getElementById("date-two").innerHTML = today.getMonth() + '/' + today.getDate() + '/' + today.getFullYear();
    document.getElementById("date-three").innerHTML = today.getDate() + '-' + today.getMonth() + '-' + today.getFullYear();
    document.getElementById("date-four").innerHTML = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();
}

function returnCurrencies() {
    var amount = document.getElementById("change-amount-coins").value;
    var coins = [1, 2, 5, 10, 25];
    var tempCoins = [1, 2, 5, 10, 25];
    resultAmt = [];
    var a = amount;
    for (var i = 0; i < coins.length; i++) {
        var b = Math.max.apply(null, tempCoins);
        if (i >= 1) {
            var remainder = a % b;
            var quotient = parseInt(a / b);
        } else if (i == 0) {
            var remainder = a % b;
            var quotient = parseInt(a / b);
        }
        a = remainder;
        for (var j = 0; j < quotient; j++) {
            resultAmt.push(b);
        }
        tempCoins.pop(b);
    }
    document.getElementById("changed-amount-coins").innerHTML = resultAmt;
//    console.log(resultAmt);
}
function appendDateResult() {
    html = '<section style="background-color: #FFFFFF; height: 300px;"> <div style="padding: 10px 0 0 0px;" class="output">Question</div><div style="padding: 0 0 0 350px;"> <ol> <li>Get the current date</li><ul> <li>Expected Output :</li><ul> <li>mm-dd-yyyy</li><li>mm/dd/yyyy</li><li>dd-mm-yyyy</li><li>dd/mm/yyyy</li><ul> </ul> </ol> </div></section> <section style="background-color: #FFFFFF; height: 250px;"> <div class="output">Output</div><div style="padding: 70px 0 0 350px;"> Get Current Date : <span onclick="currentDate()">Click Me</span> <span id="date-one">_________</span> <span id="date-two">_________</span> <span id="date-three">_________</span> <span id="date-four">_________</span> </div></section>';
    document.getElementById("content").innerHTML = html;
}
function appendChangingPositionResult() {
    html = '<section style="background-color: #FFFFFF; height: 300px;"> <div style="padding: 10px 0 0 0px;" class="output">Question</div><div style="padding: 0 0 0 250px;"> <ol> <li>create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.</li></ol> </div></section> <section style="background-color: #FFFFFF; height: 250px;"> <div class="output">Output</div><div style="padding: 70px 0 0 350px;"> Get Sample String : <input type="text" id="change-string-position" onkeyup="stringReplace()"> <span id="changed-string-position">_________</span> </div></section>';
    document.getElementById("content").innerHTML = html;
}
function appendCoinsResult() {
    html = '<section style="background-color: #FFFFFF; height: 300px;"> <div style="padding: 10px 0 0 0px;" class="output">Question</div><div style="padding: 0 0 0 250px;"> <ol> <li>function to convert an amount to coins=> 46 amount. and 25, 10, 5, 2, 1 are coins. </li></ol> <ul> <li>Output : 25, 10, 10, 1</li></ul> </div></section> <section style="background-color: #FFFFFF; height: 250px;"> <div class="output">Output</div><div style="padding: 70px 0 0 350px;"> Get Sample String : <input type="text" id="change-amount-coins" onkeyup="returnCurrencies()"> <span id="changed-amount-coins">_________</span> </div></section>';
    document.getElementById("content").innerHTML = html;
}
function appendjoinResult() {
    html = '<section style="background-color: #FFFFFF; height: 300px;"> <div style="padding: 10px 0 0 0px;" class="output">Question</div><div style="padding: 0 0 0 350px;"> <ol> <li>join all elements of the following array into a string.</li></ol> <ul> <li>Sample array : myColor=["Red", "Green", "White", "Black"];</li><li> Expected Output : "Red,Green,White,Black" "Red,Green,White,Black" "Red+Green+White+Black" </li></ul> </div></section> <section style="background-color: #FFFFFF; height: 250px;"> <div class="output">Output</div><div style="padding: 70px 0 0 350px;"> Sample Array : ["Tamil", "English", "Science", "Maths"] <span onclick="arrayJoin()">Click Me</span> <span id="join-result">_________</span></div></section>';
    document.getElementById("content").innerHTML = html;
}
