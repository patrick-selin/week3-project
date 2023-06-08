const btnSubmit = document.getElementById("submit-data");
const btnErase = document.getElementById("empty-table");

const inputUserName = document.getElementById("input-username");
const inputEmail = document.getElementById("input-email");
const inputAddress = document.getElementById("input-address");
const inputIsAdmin = document.getElementById("input-admin");
const imageInput = document.getElementById('input-image');
const tableBody = document.querySelector('#table tbody');

const userNameList = document.querySelector('.user-name');

btnSubmit.addEventListener('click', () => {
  event.preventDefault();

  const userName = inputUserName.value;
  const email = inputEmail.value;
  const address = inputAddress.value;
  const isAdmin = inputIsAdmin.checked;

  const existingRow = Array.from(tableBody.rows).find(row =>
    row.cells[0].textContent === userName);
  console.log(existingRow);

  if (existingRow) {
    existingRow.cells[1].textContent = email;
    existingRow.cells[2].textContent = address;
    existingRow.cells[3].textContent = isAdminChecked(isAdmin);

  } else {
    const newRow = tableBody.insertRow();

    const newCell1 = newRow.insertCell();
    newCell1.textContent = userName;

    const newCell2 = newRow.insertCell();
    newCell2.textContent = email;

    const newCell3 = newRow.insertCell();
    newCell3.textContent = address;

    const newCell4 = newRow.insertCell();
    newCell4.textContent = isAdminChecked(isAdmin);

    const imageCell = newRow.insertCell();

    if (imageInput.files.length > 0) {
      const imageFile = imageInput.files[0];
      const imageURL = URL.createObjectURL(imageFile);

      const imageElement = document.createElement('img');
      imageElement.src = imageURL;
      imageElement.alt = 'User Image';
      imageElement.classList.add('table-image');

      imageCell.appendChild(imageElement);
    }
  }
});


btnErase.addEventListener('click', () => {
  event.preventDefault();

  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
});


function isAdminChecked(isAdmin) {
  if (isAdmin) {
    return "X";
  } else {
    return "-";
  }
}


