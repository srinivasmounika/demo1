const signUp = e => {
    let formData = JSON.parse(localStorage.getItem('formData')) || []
    formData.push({
        owner: document.getElementById('owner').value,
        car: document.getElementById('car').value,
        licensePlate: document.getElementById('licensePlate').value,
        entryDate: document.getElementById('entryDate').value,
        exitDate: document.getElementById('exitDate').value
    })

    localStorage.setItem('formData', JSON.stringify(formData))
    console.log(localStorage.getItem('formData'));
    dispData()
    e.preventDefault()

}

function dispData() {
    if (localStorage.getItem('formData')) {

        var output = document.querySelector('tbody')
        output.innerHTML = ""
        JSON.parse(localStorage.getItem('formData')).forEach(data => {
            output.innerHTML += `
            <tr>
            <td scope="col">${data.owner}</td>
            <td scope="col">${data.car}</td>
            <td scope="col">${data.licensePlate}</td>
            <td scope="col">${data.entryDate}</td>
            <td scope="col">${data.exitDate}</td>
            <td scope="col"><a>Delete</a></td>
            </tr>`
        })

    }


}
const searchFun = () => {
    let filter = document.getElementById('myInput')
    let myTable = document.getElementById('myTable')
    let tr = myTable.getElementsByTagName('tr')

    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0]

        if (td) {
            let textValue = td.textContent || td.innerHTML

            if (textValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = ""
            } else {
                tr[i].style.display = "none"
            }
        }
    }
}


dispData()