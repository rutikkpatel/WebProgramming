function go(){
    var number = document.getElementById("number").value;
    var text = "";
    var i;
    var num1 = 0, num2 = 1, num3;
    for (i = 0; i < number; i++) {
    text += num1 + ", " ;
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }

    document.getElementById("fiboseries").innerHTML = "<b> First "+number+" numbers of Fibonacci Series is :- </b><br> " + text.slice(0,-2) + ".";    
}