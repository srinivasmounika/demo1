// Named functions

// function example(a,b){
//     var c=a+b;
//     console.log(c);
// }
// example(10,20)

//anonymous functions

// var fun=function(var1,var2){
//     var result=var1*var2;
//     console.log(result);
// }
// fun(10,20)

//imediately invoked function expression

(function(num1,num2){
  var b=num1+num2;
  console.log(b);

  
})(10,20);

//Arrow function

var food=(pizza,burger)=>{
    console.log(pizza+burger);
}
food(30,40)




