var str1 : string = "mom";
var checkPalindrome =(str1 : string)=>{
    let reverseStr ="";
    for(let i =str1.length-1; i>=0; i--)
    {
        reverseStr += str1[i];
    }
    if(str1== reverseStr)
    console.log(str1+ " is palindrome string");
    else
    console.log(str1 + " is not palindrome string");
}
checkPalindrome(str1);