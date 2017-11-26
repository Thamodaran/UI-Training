/*
 * Function for find longest string.
 */
function findLongestString() {
    var str = document.getElementById("find-longest-string").value;
    var sampleStr = str.split(' ');
    var map1 = sampleStr.map(x=> x.length);
    var max = Math.max.apply(null, map1);    //Get max length in array value.
    for (var i = 0; i < map1.length; i++) {
        if (map1[i] == max) {
            maxIndex = i;
        }
    }
    document.getElementById("longest-string").innerHTML = sampleStr[maxIndex];
}
/*
 * Function for join array.
 */
function arrayJoin() {
    var inputArray = ["Tamil", "English", "Science", "Maths"];
    var resArray = inputArray.join(",");    //Join the array values.      
    document.getElementById("join-result").innerHTML = resArray;
}
/*
 * Function for string replace.
 */
function stringReplace() {
    str = document.getElementById("change-string-position").value;
    document.getElementById("changed-string-position").innerHTML = str.charAt(str.length - 1) + '' + str.substring(1, str.length - 1) + '' + str.charAt(0);
}
/*
 * Get current date in different formats. 
 */
function currentDate() {
    var today = new Date();
    document.getElementById("date-one").innerHTML = today.getMonth() + '-' + today.getDate() + '-' + today.getFullYear();
    document.getElementById("date-two").innerHTML = today.getMonth() + '/' + today.getDate() + '/' + today.getFullYear();
    document.getElementById("date-three").innerHTML = today.getDate() + '-' + today.getMonth() + '-' + today.getFullYear();
    document.getElementById("date-four").innerHTML = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();
}
/*
 * Function return amount to coins.
 */
function returnCurrencies() {
    var amount = document.getElementById("change-amount-coins").value;
    var coins = [1, 2, 5, 10, 25];
    var tempCoins = [1, 2, 5, 10, 25];
    resultAmt = [];
    for (var coinCount = 0; coinCount < coins.length; coinCount++) {
        var maxCoin = Math.max.apply(null, tempCoins);
        var remainder = amount % maxCoin;
        var quotient = parseInt(amount / maxCoin);
        amount = remainder;
        for (var maxCoinCount = 0; maxCoinCount < quotient; maxCoinCount++) {
            resultAmt.push(maxCoin);
        }
        tempCoins.pop(maxCoin);
    }
    document.getElementById("changed-amount-coins").innerHTML = resultAmt;
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
function appendLongStringResult() {
    html = '<section style="background-color: #FFFFFF; height: 300px;"> <div style="padding: 10px 0 0 0px;" class="output">Question</div><div style="padding: 0 0 0 250px;"> <ol> <li>Function that accepts a string as a parameter and find the longest word within the string.</li></ol> </div></section> <section style="background-color: #FFFFFF; height: 250px;"> <div class="output">Output</div><div style="padding: 70px 0 0 350px;"> Enter The String : <input type="text" id="find-longest-string" onkeyup="findLongestString()"> <span id="longest-string">_________</span> </div></section>';
    document.getElementById("content").innerHTML = html;
}
function appendIndexResult() {
    html = '<section class="index-overall"> <div class="index-overall-head"> Over all task list </div><div> <ol> <li>Get the current date</li><ul> <li>Expected Output :</li><ul> <li>mm-dd-yyyy</li><li>mm/dd/yyyy</li><li>dd-mm-yyyy</li><li>dd/mm/yyyy</li></ul> </ul> <li>Create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.</li><li>Function that accepts a string as a parameter and find the longest word within the string.</li><ul> <li>Example string : "Web Development Tutorial"</li><li>Expected Output : "Development"</li></ul> <li>Function to convert an amount to coins=> 46 amount. and 25, 10, 5, 2, 1 are coins.</li><ul> <li>Output : 25, 10, 10, 1</li></ul> <li>Join all elements of the following array into a string</li><ul> <li>Sample array : myColor=["Red", "Green", "White", "Black"];</li><li>Expected Output :</li><li>Red,Green,White,Black</li></ul> </ol> </div></section>';
    document.getElementById("content").innerHTML = html;
}
