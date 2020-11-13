function countWords(message){
    // wirte your code here
    var arr = message.split(" ");
    return arr.length;
}
console.log(countWords('Good morning, I love JavaScript.')); // should return 5