const array = document.getElementById('array');
const filter = document.getElementById('filter');
const map = document.getElementById('map');
const reduce = document.getElementById('reduce');

let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

arr.forEach(element => {
    array.innerHTML +=`<div class="item"> ${element} </div>`    
});

let filterArray = arr.filter(e=>e>4)

filterArray.forEach(element => {
    filter.innerHTML +=`<div class="item"> ${element} </div>`    
});

let arrayMapeado = arr.map((e)=>e*10);

arrayMapeado.forEach(element => {
    map.innerHTML +=`<div class="item"> ${element} </div>`    
});

let reduceArray = arr.reduce((count, e) => count+=e,0);


    reduce.innerHTML +=`<div class="item"> ${reduceArray} </div>`    
