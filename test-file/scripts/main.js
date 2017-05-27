var myImage = document.querySelector ('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute ('src');
    if(mySrc === 'images/post-1.jpg'){
        myImage.setAttribute ('src','images/post-2.jpg');
        } else {
            myImage.setAttribute('src','images/post-1.jpg');
        } 
}
var myButton = document.querySelector ('button');
var myHeading = document.querySelector ('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to the Eyelet, ' + myName;
}
if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to the Eyelet, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}