 var raj = [1,2,3,4,4,5,5,5,1,1,6,7,8,8,8,9]
 var sri = raj.filter((value,index)=>{
     return raj.indexOf(value) === index
 })
 console.log(sri);


 