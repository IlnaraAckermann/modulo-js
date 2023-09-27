// Crie uma função que receba como parâmetro a lista de hotifrutis abaixo que tem três tipos: `frutas`, `legumes` e `verduras`, faça com que essa função retorne o número de itens de cada um desses tipos.
// Sendo que:
// fruta → banana, maçã, abacaxi, melancia, laranja, limão.
// legume → cenoura, batata, brócolis, abóbora, tomate, alho-poró.
// verdura → alface, espinafre, rúcula, couve, agrião, acelga.
// Tente criar uma solução utilizando for e if-else e outra utilizando for e switch/case
const hotifrutis = [
	"banana",
	"agrião",
	"maçã",
	"abacaxi",
	"melancia",
	"laranja",
	"limão",
	"cenoura",
	"melancia",
	"batata",
	"brócolis",
	"abóbora",
	"tomate",
	"alho-poró",
	"alface",
	"espinafre",
	"rúcula",
	"couve",
	"acelga",
	"maçã",
	"batata",
];
//modelo basico
function contarComForIfElse(array) {
	let frutas = [];
	let legumes = [];
	let verduras = [];
	for (item of hotifrutis) {
		if (
			item === "banana" ||
			item === "maçã" ||
			item === "abacaxi" ||
			item === "melancia" ||
			item === "laranja" ||
			item === "limão"
		) {
			frutas.push(item);
		} else if (
			item === "alface" ||
			item === "espinafre" ||
			item === "rúcula" ||
			item === "couve" ||
			item === "agrião" ||
			item === "acelga"
		) {
			verduras.push(item);
		} else if (
			item === "cenoura" ||
			item === "batata" ||
			item === "brócolis" ||
			item === "abóbora" ||
			item === "tomate" ||
			item === "alho-poró"
		) {
			legumes.push(item);
		} else {
			console.log(`${item} não é nem fruta, nem verdura e nem legume`);
		}
	}
	let mensagem = ` Total de frutas = ${frutas.length} \n
        ${frutas} \n
        Total de verduras = ${verduras.length} \n
        ${verduras} \n
        Total de legumes ${legumes.length} \n
        ${legumes}
        `;
	console.log(mensagem);
}
//Bonus modelo c/ includes
function contarComForIfElseIncludes(array) {
	const frutas = ["banana", "maçã", "abacaxi", "melancia", "laranja", "limão"];
	const verduras = [
		"alface",
		"espinafre",
		"rúcula",
		"couve",
		"agrião",
		"acelga",
	];
	const legumes = [
		"cenoura",
		"batata",
		"brócolis",
		"abóbora",
		"tomate",
		"alho-poró",
	];
	const frutasContidas = [];
	const verdurasContidas = [];
	const legumesContidos = [];

	for (item of hotifrutis) {
		if (frutas.includes(item)) {
			frutasContidas.push(item);
		} else if (verduras.includes(item)) {
			verdurasContidas.push(item);
		} else if (legumes.includes(item)) {
			legumesContidos.push(item);
		} else {
			console.log(`${item} não é nem fruta, nem verdura e nem legume`);
		}
		let mensagem = ` Total de frutas = ${frutasContidas.length} \n
        ${frutasContidas} \n
        Total de verduras = ${verdurasContidas.length} \n
        ${verdurasContidas} \n
        Total de legumes ${legumesContidos.length} \n
        ${legumesContidos}
        `;
		console.log(mensagem);
	}
}

function contarComForSwicth(array) {
	const frutasContidas = [];
	const verdurasContidas = [];
	const legumesContidos = [];
	for (item of hotifrutis) {
		switch (item) {
			case "banana":
			case "maçã":
			case "abacaxi":
			case "melancia":
			case "laranja":
			case "limão":
				frutasContidas.push(item);
				break;
			case "alface":
			case "espinafre":
			case "rúcula":
			case "couve":
			case "agrião":
			case "acelga":
				verdurasContidas.push(item);
				break;
			case "cenoura":
			case "batata":
			case "brócolis":
			case "abóbora":
			case "tomate":
			case "alho-poró":
				legumesContidos.push(item);
				break;
			default:
                console.log(`${item} não é nem fruta, nem verdura e nem legume`);
				break;
		}        
	}
    let mensagem = ` Total de frutas = ${frutasContidas.length} \n
        ${frutasContidas} \n
        Total de verduras = ${verdurasContidas.length} \n
        ${verdurasContidas} \n
        Total de legumes ${legumesContidos.length} \n
        ${legumesContidos}
        `;
		console.log(mensagem);
}

//Bonus!!
function contarComReduce(array) {}

// contarComForIfElse(hotifrutis)
// contarComForIfElseIncludes(hotifrutis)
contarComForSwicth(hotifrutis)
