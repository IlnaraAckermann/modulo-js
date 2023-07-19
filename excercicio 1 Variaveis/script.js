const nome = prompt("Digite seu nome");
alert(`"Seja bem vindo(a), ${nome}!`)

const titulo = document.getElementById('titulo');
const msg = document.getElementById('msg');
titulo.innerHTML= `Exercicíco 1 : nome = ${nome}`
msg.innerHTML = `Nesse exercicício foi criado um promt onde o usuário é solicitado a inserir o nome. \n
a Váriavel nome recebeu ${nome}`