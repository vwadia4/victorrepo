

    const form = document.getElementById('chickenForm');

//Form Handling
form.addEventListener('submit', function () {
    event.preventDefault()
    
    const name = document.getElementById('farmerName').value.trim();
    const age = number(document.getElementById('age').value);
    const quantity = number(document.getElementById('quantity').value);
    const type = document.getElementById('chickenType').value;
    const errorMsg = document.getElementById('errorMsg');
    errorMsg.textContent ="";

    if (!name || !type) {     //no content
        errorMessage = "please fill out all the fields";
        return
    }
    if (age < 20 || age > 30) {
        return;

        errorMsg.textContent = "age must between 20 and 30";
        return;
    }
    if (quantity < 30) {

        errorMsg.textContent = "quantity should be betweem 100 ND 500";
        return;

    }
    //save toLocal
    addToTable(name, age, type, quantity)  //envoke element to the table
    form.reset();

});

//Table Handling
function addToTable(name, age, type, quantity) {
    const table = document.getElementById('requestTable').getElementsByTagName('tbody')[0]

    let newRow = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.textContent = 'name';
    cell2.textContent = 'age';
    cell3.textContent = 'type';
    cell4.textContent = 'quantity';
}
