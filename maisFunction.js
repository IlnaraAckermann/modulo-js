// function podeVotar(idade, nacionalidade) {
// 	return idade >= 16 && nacionalidade === "brasileiro";
// }

// console.log(podeVotar(15, "brasileiro"));
// console.log(podeVotar(15, "eua"));
// console.log(podeVotar(16, "brasileiro"));
// console.log(podeVotar(16, "eua"));
// console.log(podeVotar(18, "brasileiro"));
// console.log(podeVotar(18, "eua"));

// function validarSenha(senha) {
// 	return String(senha).length >= 8;
// }

// console.log("validando senhas");
// console.log(validarSenha(12345678));
// console.log(validarSenha(123));
// // console.log(validarSenha("Abc"));
// console.log(validarSenha("Alf@b3to"));

// function aprovaEmprestimo(salario, score, idade) {
// 	return (salario >= 5000) && 
//     (score >= 700) && (idade >= 18);
// }

// console.log(aprovaEmprestimo(5000, 700, 18))
// console.log(aprovaEmprestimo(5000, 700, 17))
// console.log(aprovaEmprestimo(5030, 702, 27))

// function verificarCompatibilidade (navegador, sistemaOperacional) {
//     navegadorCompativel = ["Chrome", "Firefox"]
//     sistemaOperacionalCompativel = ["Windows", "Mac"]
    
//     return navegadorCompativel.includes(navegador) && sistemaOperacionalCompativel.includes(sistemaOperacional)
    
// }

// console.log(verificarCompatibilidade("Chrome", "Mac"))
// console.log(verificarCompatibilidade("Chromes", "Mac"))


function elegivelParaDesconto(idade, valorCompra, isNewClient) {
    return idade >= 60 && valorCompra >= 100 && !isNewClient
}

console.log(elegivelParaDesconto(60, 100, true))
console.log(elegivelParaDesconto(60, 100, false))