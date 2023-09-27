// Crie uma função que receba como parâmetro a lista de hotifrutis abaixo que tem três tipos: `frutas`, `legumes` e `verduras`, faça com que essa função retorne o número de itens de cada um desses tipos.
// Sendo que:
// fruta → banana, maçã, abacaxi, melancia, laranja, limão.
// legume → cenoura, batata, brócolis, abóbora, tomate, alho-poró.
// verdura → alface, espinafre, rúcula, couve, agrião, acelga.
// Tente criar uma solução utilizando for e if-else e outra utilizando for e switch/case
const hotifrutis = ['banana', 'agrião', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão','cenoura', 'melancia', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró', 'alface', 'espinafre', 'rúcula', 'couve', 'acelga', 'maçã', 'batata' ];
//modelo basico
function contarComForIfElse(array) {
    let frutas = [];
    let legumes = [] ;
    let verduras =[];
    for (item of hotifrutis){
        if (item === "banana" ||
            item === "maçã" ||
            item === "abacaxi" ||
            item === "melancia" ||
            item === "laranja" ||
            item === "limão" ) {
                frutas.push(item);

            } else if (
                item === "alface" ||
                item === "espinafre" ||
                item === "rúcula" ||
                item === "couve" ||
                item === "agrião" ||
                item === "acelga" ) {
                    verduras.push(item);
                
            } else if (
                item === "cenoura" ||
                item === "batata" ||
                item === "brócolis" ||
                item === "abóbora" ||
                item === "tomate" ||
                item === "alho-poró" ) {
                    legumes.push(item);                
            } else {
                console.log(`${item} não é nem fruta, nem verdura e nem legume`)
                
                
            }
        }
        let mensagem = ` Total de frutas = ${frutas.length} \n
        ${frutas} \n
        Total de verduras = ${verduras.length} \n
        ${verduras} \n
        Total de legumes ${legumes.length} \n
        ${legumes}
        `
        console.log(mensagem)
}
//modelo includes
function contarComForIfElseIncludes(array) {
    for (item of hotifrutis){
       
                
    }
}




function contarComForSwicth(array) {

}

//Bonus!!
function contarComReduce(array) {

}

contarComForIfElse(hotifrutis)