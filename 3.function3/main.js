function alphabetSort(message){
    // wirte your code here
    var arr = message.split("");
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr.join("");
}
console.log(alphabetSort('hello')); // should return 'ehllo'