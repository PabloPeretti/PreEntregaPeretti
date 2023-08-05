function suma(num1, num2) {
    return num1 + num2;
  }

  function resta(num1, num2) {
    return num1 - num2;
  }

  function multiplicacion(num1, num2) {
    return num1 * num2;
  }

  function division(num1, num2) {
    if (num2 === 0) {
      return "Error: No es posible dividir por cero";
    }
    return num1 / num2;
  }

  function calcularOperacion() {
    let operacion = prompt("Ingrese la operación que desea realizar (+, -, *, /):");

    if (operacion !== '+' && operacion !== '-' && operacion !== '*' && operacion !== '/') {
      alert("Operación inválida. Por favor, ingrese una operación válida.");
      return;
    }

    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));

    let resultado;

    switch (operacion) {
      case '+':
        resultado = suma(num1, num2);
        break;
      case '-':
        resultado = resta(num1, num2);
        break;
      case '*':
        resultado = multiplicacion(num1, num2);
        break;
      case '/':
        resultado = division(num1, num2);
        break;
    }

    alert("El resultado de la operación " + num1 + " " + operacion + " " + num2 + " es: " + resultado);
  }
  
  calcularOperacion();