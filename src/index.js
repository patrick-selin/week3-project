const btnSubmit = document.getElementById("submit-data");
const btnErase = document.getElementById("empty-table");

const inputUserName = document.getElementById("input-username");
const inputEmail= document.getElementById("input-email");
const inputAddress = document.getElementById("input-address");
const inputIsAdmin = document.getElementById("input-admin");

const tableBody = document.querySelector('#table tbody');

btnSubmit.addEventListener('click', () => {
    event.preventDefault();
    
    const userName = inputUserName.value;
    const email = inputEmail.value;
    const address = inputAddress.value;
    const isAdmin = inputIsAdmin.checked;

    const newRow = tableBody.insertRow();

    const newCell1 = newRow.insertCell();
    newCell1.textContent = userName;

    const newCell2 = newRow.insertCell();
    newCell2.textContent = email;

    const newCell3 = newRow.insertCell();
    newCell3.textContent = address;

    const newCell4 = newRow.insertCell();


    if (isAdmin) {
        newCell4.textContent = "X";
    } else {
        newCell4.textContent = "-";
    }
  });

  
  btnErase.addEventListener('click', () => {
    event.preventDefault();
    
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }
  });

