const boletoPago = false

if (boletoPago) {
    mensagem = "O boleto está pago";
} else {
    mensagem = "O boleto não está pago";
}

const titulo = document.getElementById('titulo');
const msg = document.getElementById('msg');
titulo.innerHTML = `Exercicíco 2 : tipos primitivos`
msg.innerHTML = `
<p>Nesse exercicício foi criado uma varável boletoPago inciada como false e depois feito a verificação se o boleto foi pago ou não sendo alterada a mensagem exibida na tela </p>
<p> Várivel boleetoPago = ${boletoPago} do tipo ${typeof (boletoPago)}</p>
<p> Mensagem de retorno ${mensagem}</p>
`