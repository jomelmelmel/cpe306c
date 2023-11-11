/// 2023/11/11

// WRITE A FUNCTION THAT RETURNS THE LARGER OF ITS TWO ARGUMENTS. FOR EXAMPLE, larger(-2, 10) SHOULD return 10.
a = -2;
b = 10;
function returnLarger(a,b) {
    if(a>b){return a;} 
    else{return b;}
};
console.log(returnLarger(a,b));

// WRITE A FUNCTION THAT RETURNS THE AVERAGE OF ITS TWO ARGUMENTS. FOR EXAMPLE, average(-2, 10) SHOULD return 4.
a = -2;
b = 10;
function returnAverage(a,b){
    return ((a+b) / 2);
};
console.log(returnAverage(a,b));

// WRITE A FUNCTION THAT RETURNS THE AVERAGE OF ALL THE ITEMS IN AN ARRAY. FOR EXAMPLE, average([4,5,7,2]) SHOULD return 4.5 .
var array = [4,5,7,2];
function average(forArray) {
    var total = 0;
    var count = 0;
    array.forEach(function(num, index){
        total += num;
        count++;
    });
    return total/count;
};
console.log(average(array));