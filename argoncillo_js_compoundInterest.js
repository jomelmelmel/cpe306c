///COMPOUND INTEREST DISCUSSION
/// 2023/11/11

//variables
var principal=1000;
var n=12;
var rate=0.05;
var time=10;

//declare compoundInterest
var compoundInterest = (p,n,r,t) => {
    var amt = p * (Math.pow((1+(r/n)), (n*t)));
    var interest = amt - p;
    return interest;
};

//output
console.log(compoundInterest(principal,n,rate,time));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var compoundInterest = function(p,n,r,t){
    if(n<0){throw "INPUT ERROR";}
    return p * Math.pow(1+(r/n), n*t);
};
console.log(compoundInterest(5000,-0.05,0.05,10));