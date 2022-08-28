document.getElementById("deposite-btn").addEventListener("click", function () {
  const depositeAmount = transactionAmount("deposite-amount");
  const existingDeposite = existingAmount("total-deposite");
  const existingTotalAmount = existingAmount("total-amount");
  const totalDeposite = depositeAmount + existingDeposite;
  const totalAmount = existingTotalAmount + depositeAmount;
  updatedAmount("total-deposite", totalDeposite);
  updatedAmount("total-amount", totalAmount);
});
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawAmount = transactionAmount("withdraw-amount");
  const existingWithdraw = existingAmount("total-withdraw");
  const existingTotalAmount = existingAmount("total-amount");
  const totalWithdraw = withdrawAmount + existingWithdraw;
  const totalAmount = existingTotalAmount - withdrawAmount;
  updatedAmount("total-withdraw", totalWithdraw);
  updatedAmount("total-amount", totalAmount);
});
