function palindrome(message){
    // wirte your code here
    var arr = message.split("");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true