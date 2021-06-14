const calculateAdd = () => {
  const num1 = document.getElementById("number1").value;
  const num2 = document.getElementById("number2").value;

  const add = parseInt(num1) + parseInt(num2);
  const sub = parseInt(num1) - parseInt(num2);
  const mult = parseInt(num1) * parseInt(num2);
  const divide = parseInt(num1) / parseInt(num2);

  document.querySelector("#answer").innerHTML = add;
};

const calculateSub = () => {
  const num1 = document.getElementById("number1").value;
  const num2 = document.getElementById("number2").value;

  const sub = parseInt(num1) - parseInt(num2);

  document.querySelector("#answer").innerHTML = sub;
};

const calculateMult = () => {
  const num1 = document.getElementById("number1").value;
  const num2 = document.getElementById("number2").value;

  const mult = parseInt(num1) * parseInt(num2);

  document.querySelector("#answer").innerHTML = mult;
};

const calculateDivide = () => {
  const num1 = document.getElementById("number1").value;
  const num2 = document.getElementById("number2").value;

  const divide = parseInt(num1) / parseInt(num2);

  document.querySelector("#answer").innerHTML = divide;
};

document.querySelector("#add").addEventListener("click", calculateAdd);
document.querySelector("#sub").addEventListener("click", calculateSub);
document.querySelector("#mult").addEventListener("click", calculateMult);
document.querySelector("#divide").addEventListener("click", calculateDivide);