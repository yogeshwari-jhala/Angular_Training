class CheckingVowelsCons
{
    private str: string;
    setValue(s: string)
    {
        this.str = s.toLowerCase();
    }
    opertations()
    {
        let count1 =0;
        let count2=0;
            if(this.str.charAt(0) == 'a' || this.str.charAt(0) == 'e'  || this.str.charAt(0) == 'i'|| this.str.charAt(0) == 'o' || this.str.charAt(0) == 'u')
            {
                console.log("First Letter is Vowel");
                for(let i=0; i<this.str.length ; i++)
                {
                    if(this.str[i] != 'a' && this.str[i] != 'e'  && this.str[i] != 'i'&& this.str[i] != 'o' && this.str[i] != 'u')
                    {
                        count1++;

                    }
                }
                console.log("Number of Consonants are :"+count1);
                
            }     
            
            // else(this.str.charAt(0) != 'a' || this.str.charAt(0) != 'e' || this.str.charAt(0) != 'i'|| this.str.charAt(0) != 'o' || this.str.charAt(0) != 'u')
          else  {
                console.log("First Letter is Consonant");

                for(let i=0; i<this.str.length ; i++)
                {
                    if(this.str[i] == 'a' || this.str[i] == 'e'  ||this.str[i] == 'i' || this.str[i] == 'o' || this.str[i] == 'u')
                    {
                        count2++;
                    }
                }
                console.log("Number of Vowels are :"+count2);

            }     

    }
    display()
    {
    
    }
}
let ck:CheckingVowelsCons = new CheckingVowelsCons();
ck.setValue("Namrata");
ck.opertations();