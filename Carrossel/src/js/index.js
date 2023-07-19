const navigatorArrows = document.getElementsByClassName("fa-solid");
console.log(navigatorArrows)
// const textArticle = document.getElementsByTagName('article');
const textArticle = document.querySelectorAll('article');
console.log(textArticle)
// const imgCarrossel = document.getElementsByTagName('img');
const imgCarrossel = document.querySelectorAll('img');
console.log(imgCarrossel)

let count = 0;

navigatorArrows[0].addEventListener('click', ()=> {
if (count !=0){ count--}
noMoreIndex(count)
})

navigatorArrows[1].addEventListener('click', ()=> {
    if (count !=3) {count++}
    noMoreIndex(count)
})



function noMoreIndex(count) {
    if (count === 0 && !navigatorArrows[0].classList.contains('noMoreSlides')) {
        navigatorArrows[0].classList.add('noMoreSlides')
    } else if (count !== 0) {
        navigatorArrows[0].classList.remove('noMoreSlides')
    }

    if (count === 3 && !(navigatorArrows[1].classList.contains('noMoreSlides'))) {
        navigatorArrows[1].classList.add('noMoreSlides')
    } else if (count !==3) {
        navigatorArrows[1].classList.remove('noMoreSlides')
    }
    hideArticle(count)

}

function hideArticle(count) {
    textArticle.forEach(article=>article.classList.add('noDisplay'));
    textArticle[count].classList.remove('noDisplay');
    imgCarrossel.forEach(img=>img.classList.add('noDisplay'));
    imgCarrossel[count].classList.remove("noDisplay");   
}
