var row = 1;
var car=document.getElementById("entry")
car.addEventListener("click",displayDetails);

function displayDetails(){
    var owners=document.getElementById("owners").value;
    var cars=document.getElementById("cars").value;
    var Lic=document.getElementById("Lic").value;
    var Entry=document.getElementById("Entry").value;
    var Exp=document.getElementById("Exp").value;

    if(!owners || !cars || !Lic|| !Entry||!Exp){
        alert("please fill all he boxes")
        return;
    }

    var display =document.getElementById("display");
    var newRow = display.insertRow(row);

    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(0);
    var cell3=newRow.insertCell(0);
    var cell4=newRow.insertCell(0);

    cell1.innerHTML=owners;
    cell2.innerHTML=cars;
    cell3.innerHTML=Lic;
    cell4.innerHTML=Entry;
    cell5.innerHTML=Exp;

    row++

}
displayDetails()