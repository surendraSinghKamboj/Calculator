console.clear();
("use strict");

let question = "8/2*4+9-5";

function bodmas(str) {
  const OpratorCheck = /[+-/*]/gim;
  let go = false;
  let end = str[str.length - 1];
  let left = "";
  let right = "";
  let rightArm = "";
  let newStr = "";
  let oprator = "";
  let string = str;
  if (!OpratorCheck.test(end)) {
    string = str + "+";
  } else {
    string = str;
  }

  if (!OpratorCheck.test(question)) {
    console.log(string);
    return string;
  }

  for (let i = 0; i < string.length; i++) {
    if (
      string[i] == "/" ||
      string[i] == "*" ||
      string[i] == "+" ||
      string[i] == "-"
    ) {
      oprator = string[i];
      // For loop for Left Number
      for (let j = 0; j >= 0; j--) {
        // leftArm = string.slice(0,j);
        left = string.slice(j, i);
        if (
          string[j] == "+" ||
          string[j] == "-" ||
          string[j] == "*" ||
          string[j] == "/" ||
          j == 0
        ) {
          break;
        }
      }
      //   For loop for Right Number
      for (let k = i + 1; k <= string.length; k++) {
        rightArm = string.slice(k, string.length);
        right = string.slice(i + 1, k);
        if (
          string[k] == "/" ||
          string[k] == "*" ||
          string[k] == "+" ||
          string[k] == "-" ||
          k == string.length
        ) {
          go = true;
          break;
        }
      }
      if (go == true) {
        break;
      }
    }
  }
  // Final Variables
  newStr = calculate(left, oprator, right) + rightArm;
  if (OpratorCheck.test(newStr)) {
    bodmas(newStr);
  } else {
    console.log(newStr);
  }
}

bodmas(question);

function calculate(a, oprator, b) {
  let result;
  let num1 = +a;
  let num2 = +b;
  oprator == "/"
    ? (result = num1 / num2)
    : oprator == "*"
    ? (result = num1 * num2)
    : oprator == "+"
    ? (result = num1 + num2)
    : oprator == "-"
    ? (result = num1 - num2)
    : (result = 0);
  return result;
}
