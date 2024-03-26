document.addEventListener("DOMContentLoaded", function () {
    const customerForm = document.getElementById("customerForm");
    const customerList = document.getElementById("customerList");
  
    customerForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const name = document.getElementById("name").value;
        const contact = document.getElementById("contact").value;
        const membership = document.getElementById("membership").value;
  
        if (name && contact && membership) {
            addCustomer(name, contact, membership);
            customerForm.reset();
        } else {
            alert("Please fill in all fields!");
        }
    });
  
    customerList.addEventListener("click", function (e) {
        if (e.target && e.target.matches("button.delete")) {
            e.target.parentNode.remove();
        }
    });
  
    function addCustomer(name, contact, membership) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>Name:</strong> ${name}<br>
            <strong>Contact:</strong> ${contact}<br>
            <strong>Membership:</strong> ${membership}<br>
            <button class="delete">Delete</button>
        `;
        customerList.appendChild(listItem);
    }
  });