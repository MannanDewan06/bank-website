const logInBtnElement = document.getElementById("logInBtn");
logInBtnElement.addEventListener("click", function () {
  const inputEmailElement = document.getElementById("input-email");
  const inputEmail = inputEmailElement.value;
  const inputPasswordElement = document.getElementById("input-password");
  const inputPassword = inputPasswordElement.value;
  if (
    inputEmail === "mannandewan@gmail.com" &&
    inputPassword === "bangladesh"
  ) {
    window.location.href = "main.html";
  } else {
    alert("please enter correct email and password");
  }
});
