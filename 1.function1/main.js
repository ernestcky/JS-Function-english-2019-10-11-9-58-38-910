function reverseString(message){
    // wirte your code here
    var str = message.split("");
    for (var i = 0; i < str.length / 2; i++) {
        var temp = str[i];
        str[i] = str[str.length - 1 - i]
        str[str.length - 1 - i] = temp;
    } 
    return str.join("");
}

console.log(reverseString('hello'));

