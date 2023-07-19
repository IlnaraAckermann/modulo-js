const titulo = document.getElementById('titulo');
const msg = document.getElementById('msg');
titulo.innerHTML = `Excercicício 5: Laços de repetição e operadores matemáticos`
msg.innerHTML = `
<p>Nesse exercicício foi for que percore de 0 a 10 exibindo uma mensagem com console.log</p>
<p>No console aparece o seguinte:</p>
`


for (let i = 0; i <= 10; i++) {
    console.log(`O número atual é o ${i} e o dobro dele é ${i*2}`);
    msg.innerHTML +=`<p>O número atual é o ${i} e o dobro dele é ${i*2}</p>`    
}

array = [1,2,3,4,5,6]

for (let index = 0; index < array.length; index++) {   
    console.log(`imprimindo o array, elemento atual: ${array[index]}, index ${index}`)
}