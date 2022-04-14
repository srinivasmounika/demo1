//number

var num1=10;
console.log(typeof num1);

//string

var str="mouni";
console.log(typeof str);

//boolean

var a=true;
console.log(typeof a);

//undefined

var b;
console.log(typeof b);

//null

var a=null;
console.log(typeof a);

//symbol
//the symbol in javascript are unique in nature 

var mySym=Symbol('hello');
var mySym1=Symbol('hello');
if(mySym==mySym1){
    console.log(true);

}
else{
    console.log(false);
}


//BigInit
//It is a another type of number
//pretty new to javascript
//you can store any number in biginit


var big=BigInt(2);
console.log(big);
var hugeNum=12345n;
console.lo

//date object
var date=new Date();
console.log(date.getDay());

