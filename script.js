var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["photo"] = document.getElementById("photo").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["email"] = document.getElementById("email").value;
    formData["phone"] = document.getElementById("phone").value;
    formData["address"] = document.getElementById("address").value;
    formData["message"] = document.getElementById("message").value;
    formData["date"] = document.getElementById("date").value;
    formData["time"] = document.getElementById("time").value;
    formData["branch"] = document.getElementById("branch").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.name;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.photo;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.gender;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.email;

    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.phone;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.address;
    var cell7 = newRow.insertCell(6);
        cell7.innerHTML = data.message;
    var cell8 = newRow.insertCell(7);
        cell8.innerHTML = data.date;
    var cell9 = newRow.insertCell(8);
        cell9.innerHTML = data.time;
    var cell10 = newRow.insertCell(9);
        cell10.innerHTML = data.branch;
    var cell11 = newRow.insertCell(10);
        cell11.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Cancel</button>`
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('photo').value = selectedRow.cells[1].innerHTML;
    document.getElementById('gender').value = selectedRow.cells[2].innerHTML;
    document.getElementById('email').value = selectedRow.cells[3].innerHTML;
    document.getElementById('phone').value = selectedRow.cells[4].innerHTML;
    document.getElementById('address').value = selectedRow.cells[5].innerHTML;
    document.getElementById('message').value = selectedRow.cells[6].innerHTML;
    document.getElementById('date').value = selectedRow.cells[7].innerHTML;
    document.getElementById('time').value = selectedRow.cells[8].innerHTML;
    document.getElementById('branch').value = selectedRow.cells[9].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.photo;
    selectedRow.cells[2].innerHTML = formData.gender;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.phone;
    selectedRow.cells[5].innerHTML = formData.address;
    selectedRow.cells[6].innerHTML = formData.message;
    selectedRow.cells[7].innerHTML = formData.date;
    selectedRow.cells[8].innerHTML = formData.time;
    selectedRow.cells[9].innerHTML = formData.branch;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('name').value = '';
    document.getElementById('photo').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
    document.getElementById('message').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
    document.getElementById('branch').value = '';
}