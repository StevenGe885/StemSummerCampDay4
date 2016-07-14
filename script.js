console.log('Where is console?');
//document.write('Hello World'); //you cant see me

var a = 1;
var b = 2;
var c = a+b;
console.log('a+b='+c);

/* webpage information shown in console */

var myWebpage = {
    name: document.getElementById("userName").textContent,
    backgroundR: document.getElementById("userR").value,
    backgroundG: document.getElementById("userG").value,
    backgroundB: document.getElementById("userB").value
}

function describeWebpage(webpage) {
    myWebpage.name = document.getElementById("userName").textContent;
    myWebpage.backgroundR = document.getElementById("userR").value;
    myWebpage.backgroundG = document.getElementById("userG").value;
    myWebpage.backgroundB = document.getElementById("userB").value;
    console.log('I am ' + webpage.name + ', and the background color is ' + webpage.backgroundR + ',' + webpage.backgroundG + ',' + webpage.backgroundB + ',');
}

function changeTextColorTianyi() {
    document.getElementById("container").style.color = "#66ccff";
}
function changeTextColorMiku() {
    document.getElementById("container").style.color = "#66ffcc";
}
function changeTextColorMaki() {
    document.getElementById("container").style.color = "#ff0000";
}
function changeTextColorBack() {
    document.getElementById("container").style.color = "#000000";
}

function getName() {
    var firstName = document.getElementById("userFirstName").value;
    var lastName = document.getElementById("userLastName").value;
    var fullName = firstName + " " + lastName;
    console.log(fullName);
    document.getElementById("userName").textContent = fullName;
    document.getElementById("userName2").textContent = fullName;
    if (fullName === "Steven Ge"){
        alert('Hello World!');
    }
    describeWebpage(myWebpage);
}

/* set background color! */

var InputR = Math.floor(document.getElementById("userR").value);
var InputG = Math.floor(document.getElementById("userG").value);
var InputB = Math.floor(document.getElementById("userB").value);

function getBackground() {
    var InputR = Math.floor(document.getElementById("userR").value);
    var InputG = Math.floor(document.getElementById("userG").value);
    var InputB = Math.floor(document.getElementById("userB").value);
    if (InputR > 255 || InputR < 0) {
        alert('Invalid number');
    }
    else if (InputG > 255 || InputG < 0){
        alert('Invalid number');
    }
    else if (InputB > 255 || InputB < 0){
        alert('Invalid number');
    }
    else {
        console.log(InputR,InputG,InputB);
        document.getElementById("container").style.backgroundColor = "rgb("+InputR+","+InputG+","+InputB+")";
        describeWebpage(myWebpage);
    }
}
function lightenBackground () {
    var InputR = Math.floor(document.getElementById("userR").value);
    var InputG = Math.floor(document.getElementById("userG").value);
    var InputB = Math.floor(document.getElementById("userB").value);
    if (InputR > 255 || InputR < 0) {
        alert('Invalid number');
    }
    else if (InputG > 255 || InputG < 0){
        alert('Invalid number');
    }
    else if (InputB > 255 || InputB < 0){
        alert('Invalid number');
    }
    else {
        setInterval (function(){
            InputR++;
            InputG++;
            InputB++;
            document.getElementById("container").style.backgroundColor = "rgb("+InputR+","+InputG+","+InputB+")";
            //setTimeout(lightenBackground,20);
            if (InputR > 255 || InputG > 255 || InputB > 255) {
                console.log(InputR);
                describeWebpage(myWebpage);
                clearInterval();
            }
        },50);
    }
}
