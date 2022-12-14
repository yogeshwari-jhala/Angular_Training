const numbers : number[] = [12, 3, 10, 4, 8];
let arraySort = (numbers : number[]) => 
{
 console.log(numbers.sort((a,b)=> a-b));
}
arraySort(numbers);