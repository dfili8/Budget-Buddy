const description = document.querySelector("#description");
const amount = document.querySelector("#amount");
const clearBtn = document.querySelector("#clear");
const addExpenseBtn = document.querySelector("#add-expense");
const results = document.querySelector("#expense-results");
const totalExpensesOutput = document.querySelector("#total-expenses");

let totalExpenses = 0;

const clearInputs = () => {
    description.value = "";
    amount.value = "";
}

const presentAlert = () => {
    const alert = document.createElement('ion-alert');
    alert.header = 'Error';
    alert.message = 'Please enter valid inputs.';
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    return alert.present();
}

clearBtn.addEventListener('click', clearInputs);

addExpenseBtn.addEventListener('click', () => {
    const enteredDesc = description.value;
    const enteredAmt = amount.value;

    if(enteredDesc.trim().length <= 0 || enteredAmt.trim().length <= 0 || enteredAmt <= 0){
        presentAlert();
    } else {
        results.innerHTML += `<ion-item>${enteredDesc}: $${enteredAmt}</ion-item>`;

        totalExpenses += +enteredAmt;
        totalExpensesOutput.textContent = `$${totalExpenses}`;
    }

    clearInputs();
});