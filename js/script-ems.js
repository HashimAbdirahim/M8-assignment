// CREATE AN ARRAY OF EMPLOYEES
let empArray = [
    [12345678 ,'Hashim Abdirahim', 1234,'habdirahim1999@gmail.com', 'Engineering'],
    [12345677 ,'Zak Zak', 1111,'Zak@gmail.com', 'Executive'],
    [12345688 ,'Xander Xander', 2222,'Xander9@gmail.com', 'Marketing'],
    [12345666 ,'John Doe', 3333,'John@gmail.com', 'Sales'],
    [12345655 ,'Bob Marz', 4444,'Bob@gmail.com', 'Administrative']
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
if (localStorage.employees){
    empArray = JSON.parse(localStorage.getItem('employees'))
}
else{
    localStorage.employees = JSON.stringify(empArray)
}
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY


// GET DOM ELEMENTS
const $ = id => document.getElementById(id)
let tbody = document.getElementsByTagName('tbody')[0]
let empCount = 0
let output = $('empCount')
let empTable = $('empTable')
let form = $('addForm')
let empId = $('id')
let name = $('name')
let ext = $('extension')
let email = $('email')
let department = $('department')
// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()
// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmpArray = [parseInt(empId.value),name.value,parseInt(ext.value),email.value,department.value]
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    empArray.push(newEmpArray)
    // BUILD THE GRID
    buildGrid()
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    empId.focus()
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    
    if(e.target.classList.contains('delete')){
        // CONFIRM THE DELETE
        if(confirm('Do you want to delete this employee?')){
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentElement.parentElement.rowIndex
            console.log(rowIndex)
            // REMOVE EMPLOYEE FROM ARRAY
            empArray.splice(rowIndex-1,1)
            // BUILD THE GRID
            buildGrid()
        }
    }
    
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    tbody.innerHTML = ''
    // REBUILD THE TBODY FROM SCRATCH
    for (const emp of empArray) {
        let row = document.createElement('tr')
        let id = row.insertCell().appendChild(document.createTextNode(emp[0]))
        let name = row.insertCell().appendChild(document.createTextNode(emp[1]))
        let ext = row.insertCell().appendChild(document.createTextNode(emp[2]))
        let email = row.insertCell().appendChild(document.createTextNode(emp[3]))
        let department = row.insertCell().appendChild(document.createTextNode(emp[4]))
        let deletButton = document.createElement('button')
        deletButton.appendChild(document.createTextNode('x'))
        deletButton.classList = 'btn btn-danger btn-sm delete'
        let delBtn = row.insertCell()
        delBtn.appendChild(deletButton)
        tbody.appendChild(row)
    }
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT
    empCount = empArray.length
    output.value = `(${empCount})`
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(empArray))
};