 
 //functions

 //closures

 function outer(){
     var outside="im a outside ";
     console.log('outer function');
     console.log('outside ');
inner();
    function inner(){
        var inside="im a inside"
        console.log('inside function');
        console.log('inner function');
    };
   
 };
 outer();

 //function chaining

 function one(){
     console.log('im one');
 }
 function two(){
     console.log('im two');
     return one;
 }
 function three(){
     console.log('im three');
     return two;
 }
 three()()();

 //callback

 function callMom(callback){
     setTimeout(()=>{
         console.log('she calls mom');
         callback();
     },5000)
 };
 function callSri(){
     setTimeout(()=>{
         
         console.log('she calls rahul');
     },2000)
 }
 callMom(callSri)