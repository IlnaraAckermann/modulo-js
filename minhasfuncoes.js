


function somar(a, b) {
	if (typeof a === "number" && typeof b === "number") {
		return a + b;
	} else {
		return "Os parametros denvem ser do tipo number";
	}
}
function subtrair(a, b) {
	if (typeof a === "number" && typeof b === "number") {
		return a - b;
	} else {
		return "Os parametros denvem ser do tipo number";
	}
}
function multiplicar(a, b) {
	if (typeof a === "number" && typeof b === "number") {
		return a * b;
	} else {
		return "Os parametros denvem ser do tipo number";
	}
}
function dividir(a, b) {
	if (typeof a === "number" && typeof b === "number") {
		x = b === 0 ? "Não é posivel dividir por 0" : a / b;
		return x;
	} else {
		return "Os parametros denvem ser do tipo number";
	}
}
function contarChar(c) {
	return String(c).length;
}
function converterTemp(a) {
	if (typeof a === "number") {
		x = a * 1.8 + 32;
		return x;
	} else {
		return "Os parametros denvem ser do tipo number";
	}
}
function calcularPerimetro(a, b) {
	if (typeof a === "number" && typeof b === "number") {
		x = (a + b) * 2;
		return x;
	} else {
		return "Os parametros denvem ser do tipo number";
	}
}
// console.log(somar(1, 2));
// console.log(subtrair(1, 2));
// console.log(multiplicar(1, 2));
// console.log(dividir(1, 2));
// console.log(dividir("a", 2));
// console.log(contarChar(7856));
// console.log(converterTemp(40));
// console.log(calcularPerimetro(10, 3));

function verificarNum(fun, ...args) {
    if (typeof fun === 'function') {
        const todosSaoNumeros = args.every((arg) => typeof arg === 'number');
      if (todosSaoNumeros) {
        return fun(...args)        
      }
      else{
        return 'O primeiro argumento deve ser uma função e todos os argumentos devem ser números.';
      }
    } else {
      return 'O primeiro argumento deve ser uma função e todos os argumentos devem ser números.';
    }
  }

function dividir2(a, b) {
		x = b === 0 ? "Não é posivel dividir por 0" : a / b;
		return x;
	
}

console.log(verificarNum(dividir2, 100, "2" ))
console.log(verificarNum('dividir2', 100, 2 ))
console.log(verificarNum(dividir2, 100, 2 ))