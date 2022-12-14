var CheckingVowelsCons = /** @class */ (function () {
    function CheckingVowelsCons() {
    }
    CheckingVowelsCons.prototype.setValue = function (s) {
        this.str = s.toLowerCase();
    };
    CheckingVowelsCons.prototype.opertations = function () {
        var count1 = 0;
        var count2 = 0;
        if (this.str.charAt(0) == 'a' || this.str.charAt(0) == 'e' || this.str.charAt(0) == 'i' || this.str.charAt(0) == 'o' || this.str.charAt(0) == 'u') {
            console.log("First Letter is Vowel");
            for (var i = 0; i <= this.str.length; i++) {
                if (this.str[i] != 'a' || this.str[i] != 'e' || this.str[i] != 'i' || this.str[i] != 'o' || this.str[i] != 'u') {
                    count1++;
                }
            }
            console.log("Number of Consonants are :" + count1);
        }
        if (this.str.charAt(0) != 'a' || this.str.charAt(0) != 'e' || this.str.charAt(0) != 'i' || this.str.charAt(0) != 'o' || this.str.charAt(0) != 'u') {
            console.log("First Letter is Consonant");
            for (var i = 0; i <= this.str.length; i++) {
                if (this.str[i] == 'a' || this.str[i] == 'e' || this.str[i] == 'i' || this.str[i] == 'o' || this.str[i] == 'u') {
                    count2++;
                }
            }
            console.log("Number of Vowels are :" + count2);
        }
    };
    CheckingVowelsCons.prototype.display = function () {
    };
    return CheckingVowelsCons;
}());
var ck = new CheckingVowelsCons();
ck.setValue("Yogeshwari");
ck.opertations();
