
//id
//  var a=document.getElementById('demo')
//  a .style.color="red"

 //class
//  var b=Array.from(document.getElementsByClassName('emo'));
//  console.log(b);
//  b.forEach(changeColor);
//    function changeColor(ele){
//        ele.style.color="blue";
//    }
 
     
 //tag

//  var c=Array.from(document.getElementsByTagName('h2'));
//  console.log(c);
//  c.forEach(changeColor);
//  function changeColor(res){
//      res.style.color="red"
//  }

 //querySelector

//  var d=document.querySelector('h4')
//  console.log(d);
//  d.style.color="green"

 //querySelectorAll
//  var e=Array.from(document.getElementsByTagName('h4'));
//  console.log(e);
//  e.forEach(changeColor);
//  function changeColor(res){
//      res.style.color="red"
//  }


 //properties

 function remove(){
     var list=document.getElementById('list');
     var children=list.childNodes;
     console.log(children);
     list.removeChild(list.firstElementChild)
 }

//events

function mounika(){
    document.getElementById('h').innerHTML="hi everyone my name is mounuka"

}