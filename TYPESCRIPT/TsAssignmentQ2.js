var numbers = [12, 3, 10, 4, 8];
var arraySort = function (numbers) {
    console.log(numbers.sort(function (a, b) { return a - b; }));
};
arraySort(numbers);
