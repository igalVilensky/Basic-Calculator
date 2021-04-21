function multiply() {
  let userNum = document.querySelector("#num").value;
  let userNum2 = document.querySelector("#num2").value;
  // console.log(userNum);
  // console.log(userNum2);
  let resultText = "";

  resultText = `${userNum} * ${userNum2} = ${userNum2 * userNum} <br>`;

  document.querySelector(".result").innerHTML = resultText;
}
