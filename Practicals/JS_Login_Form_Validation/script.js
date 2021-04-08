var pwd = document.getElementById("pwd");
var lower = document.getElementById("lower");
var capital = document.getElementById("capital");
var num = document.getElementById("num");
var length = document.getElementById("length");

pwd.onfocus = function(){
    document.getElementById("validate_pwd").style.display = "block";
}

pwd.onblur = function(){
    document.getElementById("validate_pwd").style.display = "none";    
}

pwd.onkeyup = function(){
    var lowerCase = /[a-z]/g;
    if(pwd.value.match(lowerCase)) {  
        lower.classList.remove("invalid");
        lower.classList.add("valid");
    } else {
        lower.classList.remove("valid");
        lower.classList.add("invalid");
    }

    var upperCase = /[A-Z]/g;
    if(pwd.value.match(upperCase)) {  
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    var number = /[0-9]/g;
    if(pwd.value.match(number)) {  
        num.classList.remove("invalid");
        num.classList.add("valid");
    } else {
        num.classList.remove("valid");
        num.classList.add("invalid");
    }

    if(pwd.value.length >= 6){
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

var username = document.getElementById("username");
var starting = document.getElementById("starting");
username.onfocus = function(){
    document.getElementById("validate_username").style.display = "block";
}

username.onblur = function(){
    document.getElementById("validate_username").style.display = "none";    
}
var underscore = "_";
var atsign = "@";
var number = /[0-9]/g;

username.onkeyup = function(){
    if(username.value.charAt(0) === underscore | username.value.charAt(0) === (atsign) | username.value.charAt(0).match(number)){
        starting.classList.remove("valid_username");
        starting.classList.add("invalid_username");
    }
    else {
        starting.classList.remove("invalid_username");
        starting.classList.add("valid_username");
    }
}
