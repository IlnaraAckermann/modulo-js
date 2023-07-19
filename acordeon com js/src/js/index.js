const titles = document.querySelectorAll("h2");

titles.forEach((e) => {
  e.addEventListener("click", () => {
    toggleOpenClose(e)
  })
})

function toggleOpenClose(elementClicked) {
  titles.forEach((e) => {
    const isOpen = e.classList.contains('open');
    const isClose = e.classList.contains('close');
    const isClicked = (e === elementClicked)

    if (!isClicked && isOpen) {
      e.classList.replace('open', 'close')
    }
    if (isClicked) {
      if (isOpen || isClose) {
        e.classList.toggle('open')
        e.classList.toggle('close')
      } else {
        e.classList.toggle('open');
      }
    }
    if (!elementClicked.classList.contains('spin')) {
      elementClicked.classList.add('spin');
    }
  });
}
