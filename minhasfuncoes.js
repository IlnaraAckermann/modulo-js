function verificarNum(fun, ...args) {
	if (typeof fun === "function") {
		const todosSaoNumeros = args.every((arg) => typeof arg === "number");
		if (todosSaoNumeros) {
			return fun(...args);
		} else {
			return "O primeiro argumento deve ser uma função e todos os argumentos devem ser números.";
		}
	} else {
		return "O primeiro argumento deve ser uma função e todos os argumentos devem ser números.";
	}
}

function somar(a, b) {
	return a + b;
}
function subtrair(a, b) {
	return a - b;
}

function multiplicar(a, b) {
	return a * b;
}

function dividir(a, b) {
	x = b === 0 ? "Não é posivel dividir por 0" : a / b;
	return x;
}
function contarChar(c) {
	return String(c).length;
}
function converterTemp(a) {
	x = a * 1.8 + 32;
	return x;
}
function calcularPerimetro(a, b) {
	x = (a + b) * 2;
	return x;
}
console.log(verificarNum(dividir, 100, "2"));
console.log(verificarNum("dividir", 100, 2));
console.log(verificarNum(dividir, 100, 2));
console.log(verificarNum(dividir, 100, 0));
console.log(verificarNum(somar, 100, 0));
console.log(somar(1, 2));
console.log(subtrair(1, 2));
console.log(multiplicar(1, 2));
console.log(dividir(1, 2));
console.log(dividir("a", 2));
console.log(contarChar(7856));
console.log(converterTemp(40));
console.log(calcularPerimetro(10, 3));

function ehPar(num) {
	switch (num % 2) {
		case 0:
			console.log("O numero é par");
			break;
		case 1:
			console.log("O numero é impar");
			break;
		default:
			console.log("Opss... algo deu errado!");
	}
}

console.log(ehPar(10));
console.log(ehPar(11));
console.log(ehPar("a"));

function valorIngresso(idade) {
	switch (idade) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
			console.log("R$10");
			break;
		case 13:
			console.log("R$15");
			break;
		default:
			console.log("Opss... algo deu errado!");
	}
}

valorIngresso(10);
valorIngresso(9);
valorIngresso(13);
valorIngresso("a");

function ehVogal(char) {
	switch (char) {
		case "a":
		case "e":
		case "i":
		case "o":
		case "u":
			console.log("vogal");
			break;
		default:
			console.log("Consoante");
	}
}

ehVogal("a");
ehVogal("c");
ehVogal("u");

function determinarEstacao(mes) {
	switch (mes) {
		case "Dezembro":
		case "Janeiro":
		case "Fevereiro":
			console.log("Inverno");
			break;
		case "Março":
		case "Abril":
		case "Maio":
			console.log("Primavera");
			break;
		case "Junho":
		case "Julho":
		case "Agosto":
			console.log("Verão");
			break;
		case "Setembro":
		case "Outubro":
		case "Novembro":
			console.log("Outono");
			break;
		default:
			console.log("Opss... algo está errado!");
	}
}

determinarEstacao("Janeiro");
determinarEstacao("Abril");
determinarEstacao("Setembro");
determinarEstacao("125");

function contarAte(num) {
	let a = 0;
	while (a <= num) {
		console.log(a++);
	}
}
contarAte(25);

function subtrairate0(num) {
	while (num >= 0) {
		console.log(num--);
	}
}
subtrairate0(30);

function verificarPrimo(num) {
	let contador = 2;
	let ehPrimo = true;
	while (contador < num) {
		if (num % contador === 0) {
			ehPrimo=false;
			break
		}
		contador++;
	}
	if (ehPrimo) {
		console.log("O numero é primo");
	} else {
		console.log("O numero não é primo");
	}
}

verificarPrimo(1);
verificarPrimo(2);
verificarPrimo(10);
verificarPrimo(11);
