var ele = document.getElementById('table')
console.log(ele);

var arr=[
    {name:"mounika",age:10},
    {name:"akhitha",age:11},
    {name:"keerthy",age:12}
]

arr.forEach((element)=>{
   var row = document.createElement('tr');
   var col = document.createElement('td');
   var col1 = document.createElement('td');
   col.innerText=element.name;
   col1.innerText=element.age;
   
   row.appendChild(col)
   row.appendChild(col1)
   ele.appendChild(row)
})