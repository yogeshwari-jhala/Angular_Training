var str1 = "mom";
var checkPalindrome = function (str1) {
    var reverseStr = "";
    for (var i = str1.length - 1; i >= 0; i--) {
        reverseStr += str1[i];
    }
    if (str1 == reverseStr)
        console.log(str1 + " is palindrome string");
    else
        console.log(str1 + " is not palindrome string");
};
checkPalindrome(str1);
