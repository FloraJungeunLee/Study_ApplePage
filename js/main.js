const basketStarterEL = document.querySelector('header .basket-starter')
const basketEL = basketStarterEL.querySelector('.basket')

basketStarterEL.addEventListener('click', function (event) {
  event.stopPropagation()
  if (basketEL.classList.contains('show')) {
    hideBasket()
  } else {
    showBasket()
  }
})

basketEL.addEventListener( 'click', function (event) {
  event.stopPropagation()
})

window.addEventListener( 'click', function () {
  hideBasket()
})

function showBasket() {
  basketEL.classList.add('show')
}
function hideBasket() {
  basketEL.classList.remove('show')
}