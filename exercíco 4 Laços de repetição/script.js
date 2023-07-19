const titulo = document.getElementById('titulo');
const msg = document.getElementById('msg');
titulo.innerHTML = `Excercicício 4: Laços de repetição`
msg.innerHTML = `
<p>Nesse exercicício foi for que percore de 0 a 10 exibindo uma mensagem com console.log</p>
<p>No console aparece o seguinte:</p>
`


for (let i = 0; i <= 10; i++) {
    console.log(`O número atual é o ${i}`);
    msg.innerHTML +=`<p>O número atual é o ${i}</p>`    
}