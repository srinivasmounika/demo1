var a=[1,2,1,2,3,4,2,3,4]
var r=a.filter((value,index)=>{
    return a.indexOf(value)===index;
})
console.log(r);
