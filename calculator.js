var number1;
      var number2;
      var numCombined = " ";
      var selectedOperator = false;
      var additionalOperator = false;
      var operator = "";
      var concat = "";
      var concatRes = "";

      function displayNumber(number) {
        numCombined = numCombined + number;
        showScreen("display", numCombined);
        assignmentNumber(number);
      }

      function displayOperator(text) {
        selectedOperator = true;
        numCombined = "";
        operator = text;
        concat = concat + text;
        showScreen("display2", concat);
        if (additionalOperator == true) {
          clearLcdResult();
        }
      }

      function displayResult() {
        switch (operator) {
          case "*":
            assignValues(multiply(number1, number2));
            additionalOperator = true;
            break;
          case "+":
            assignValues(Add(number1, number2));
            additionalOperator = true;
            break;
          case "-":
            assignValues(subtract(number1, number2));
            additionalOperator = true;
            break;
          case "/":
            assignValues(divide(number1, number2));
            additionalOperator = true;
            break;
          default:
        }
      }

      function resetScreen() {
        showScreen("display", "");
        showScreen("display2", "");
        resetParameters()
      }

      function resetParameters() {
        number1= 0;
        number2= 0;
        numCombined = " ";
        selectedOperator = false;
        operator = "";
        concat = "";
        concatRes = "";
      }

      function clearLcdResult() {
        var index = concat.lastIndexOf("=");
        if (index !== -1) {
          concat = concat.substring(index);
        }
        showScreen("display2", concat);
      }

      function assignmentNumber(number) {
        if (selectedOperator == false) {
          number1 = parseFloat(numCombined, 10);
          console.log(number1);
          concat = number1;
          showScreen("display2", concat);
        } else {
          number2 = parseFloat(numCombined, 10);
          console.log(number2);
          concat = concat + number;
          showScreen("display2", concat);
        }
      }

      console.log(number1);
      console.log(number2);

      function Add(x, y) {
        return x + y;
      }

      function divide(x, y) {
        return x / y;
      }

      function subtract(x, y) {
        return x - y;
      }

      function multiply(x, y) {
        return x * y;
      }

      function assignValues(result) {
        showScreen("display", result);
        number1 = result;
        concat = Add(Add(concat,"="),result);
        showScreen("display2", concat);
      }

      function showScreen(id, textShow) {
        document.getElementById(id).innerHTML = textShow;
      }
