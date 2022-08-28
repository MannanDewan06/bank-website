function transactionAmount(amountInputId) {
  const amountElement = document.getElementById(amountInputId);
  const amountString = amountElement.value;
  amountElement.value = "";
  if (isNaN(amountString) == false) {
    const amount = parseFloat(amountString);
    return amount;
  } else {
    alert("please enter a valid number");
    return 0;
  }
}
function existingAmount(amountInputId) {
  const amountElement = document.getElementById(amountInputId);
  const amountString = amountElement.innerText;
  const amount = parseFloat(amountString);
  return amount;
}
function updatedAmount(amountInputId, updatedValue) {
  document.getElementById(amountInputId).innerText = updatedValue;
}
