const confirmacao = confirm("Seja bem vindo(a), aventureiro(a)! Gostaria de pagar R$ 50,00 para passar a noite na nossa hospedagem?");

if (confirmacao) {
    mensagem = "Ótimo! Nós temos as melhores camas    de toda a região!";
} else {
    mensagem = "Que pena! Você parecia ser uma pessoa mais legal";
}

const titulo = document.getElementById('titulo');
const msg = document.getElementById('msg');
titulo.innerHTML = `Excercicício 3: Unindo variáveis e condições!`
msg.innerHTML = `
<p>Nesse exercicício foi criado uma varável confirmacao que recebe um confirm </p>
<p> Várivel confirmacao do tipo ${typeof (confirmacao)} recebe ${confirmacao} </p>
<p> Mensagem de retorno ${mensagem}</p>
`