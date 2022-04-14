//is Array

//this method is used to test wheather the passes argument is an array or not

var arr=['sandhya',56,false]
 console.log(Array.isArray(arr));
 console.log(arr);

 //includes

 //this method determines wheather an array includes certain values among its entries

 var arr=['sandhya',56,false]
 console.log(arr.includes('sandhya',0));
 console.log(arr);

 //push
 //push method is used to add the item in the end of the array
 var arr=['sandhya',56,false] 
 console.log(arr.push('santhu'));
 console.log(arr);

 //pop
 //pop method is used to remove the item in the end of the array
 var arr=['sandhya',56,90]
 console.log( arr.pop());
 console.log(arr);

 //shift
 //shift method is used to remove the item in the begining of an array
 var arr=['sandhya',56,false]
 console.log(arr.shift());
 console.log(arr);

 //unshift
//unshift method is used to add the item in the begining of  an array
 var arr=['sandhya',56,false]
 console.log(arr.unshift('santhu'));
 console.log(arr);

 //splice


 var arr=['sandhya','sathya','santhu','sri','srikanth']
 console.log(arr.splice(2,3));
 console.log(arr);

 //slice
 var arr=['sandhya','sathya','santhu','sri','srikanth']
 console.log(arr.slice(2,4));
 console.log(arr);

 //map

 var arr=['hi','hello','good']
 var newArr=arr.map((value,index)=>{
     return 'mam'+value;

 })
 console.log(newArr);

 //filter
 var arr=['hi','hello','good']
 var filteredArr=arr.filter((value,index)=>{
     return value.length==4;
    
 })
 console.log(filteredArr);

//  string Methods
var text="mounika"
console.log(text.toUpperCase());

//charAt

//chart At will take a position of the element
var str="mounika";
console.log(str.charAt(0));

 //replace
//replace method will take a Search value and Replace value
 var string="welcome to home"
 console.log(string.replace("welcome","hi"));

//trim

//trim will be avoid the wide spaces 
 var string=" welocome to "
 console.log(string.trim());
 console.log(string);


 //indexOf
 var string="  keer thi reddy  "
 console.log(string.indexOf('thi',2));
 console.log(string);

//concat

var string="hi mounika"
console.log(string.concat('hi','mounika'));
