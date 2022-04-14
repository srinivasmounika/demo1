// fetch('./db1.json').then((res)=>{
//     res.json().then((data)=>{
//         console.log(data);
//         data.forEach((ele)=>{
//             if(ele.id==18){
//                 console.log(ele.login
//                     );
//             }
//         })
//     })
// })


// var ele = document.getElementById('table')
// console.log(ele);

// var arr=[
//     {capsule:"C106",missions:3,details:"first dragon capsule to be used"},
//     {capsule:"C205",missions:1,details:"in construction for use in first mission in contract under the CCtCap contract"},
//     {capsule:"C203",missions:0,details:"Removed to be used for inflight Abort Test after DM-1 "},
// ]

async function data(){
    const mouni=await fetch('./db1.json')
    const names=await mouni.json()
    console.log(names);
    var ele = document.getElementById('mainTable')
    console.log(ele);
names.forEach((res)=>{
   var row  = document.createElement('tr');
   var col  = document.createElement('td');
   var col1 = document.createElement('td');
   var col2 = document.createElement('td');
   col.innerText=res.capsule_id;
   col1.innerText=res.missions.length;
   col2.innerText=res.details
   
   row.appendChild(col)
   row.appendChild(col1)
   row.appendChild(col2)

   ele.appendChild(row)
});
}
data()

