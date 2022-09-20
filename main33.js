var rIndex,
table = document.getElementById("table");

// check the empty input
function checkEmptyInput()
{
var isEmpty = false,
    fname = document.getElementById("fname").value,
    age = document.getElementById("age").value,
    city = document.getElementById("city").value;

if(fname === ""){
    alert("Name Cannot Be Empty");
    isEmpty = true;
}
else if(city === ""){
    alert("City Cannot Be Empty");
    isEmpty = true;
}
else if(age === ""){
    alert("Age Cannot Be Empty");
    isEmpty = true;
}
return isEmpty;
}

// add Row
function addHtmlTableRow()
{
// get the table by id
// create a new row and cells
// get value from input text
// set the values into row cell's
if(!checkEmptyInput()){
var newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    fname = document.getElementById("fname").value,
    age = document.getElementById("age").value,
    city = document.getElementById("city").value;

cell1.innerHTML = fname;
cell2.innerHTML = age;
cell3.innerHTML = city;
// call the function to set the event to the new row
selectedRowToInput();
}
}

// display selected row data into input text
function selectedRowToInput()
{

for(var i = 1; i < table.rows.length; i++)
{
    table.rows[i].onclick = function()
    {
      // get the seected row index
      rIndex = this.rowIndex;
      document.getElementById("fname").value = this.cells[0].innerHTML;
      document.getElementById("age").value = this.cells[1].innerHTML;
      document.getElementById("city").value = this.cells[2].innerHTML;
    };
}
}
selectedRowToInput();