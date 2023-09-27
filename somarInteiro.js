//   Escrever um sistema ou função que um valor inteiro positivo e maior que 1, e retorne a soma total de todos os dígitos a partir de 0.
//   Ex: 
// 	  Entrada: 0, 1, 2, 3, 4, 5
// 	  Soma total: 0 + 1 + 2 + 3 + 4 + 5 = 15
//   Desafio: Resolva sem utilizar NENHUM laço de repetição.

function somarInteiro(num){
	let metade = 0;
    let soma = 0;
    if (num%2===0){
        metade = num/2;
        soma=(num*metade) + metade;
    }else{
        metade=(num+1)/2
        soma = num*metade;
    }
	console.log(soma)
	return soma
  }

  somarInteiro(5)
  somarInteiro(10)
  somarInteiro(11)

