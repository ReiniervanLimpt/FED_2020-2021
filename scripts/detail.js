const quantityInput = document.querySelector('.qty__input')
const priceIndicator = document.querySelector('.price__indicator')

const decreaseButton = document.querySelector('#decrease')
const increaseButton = document.querySelector('#increase')

let currentValue = 1

increaseButton.addEventListener('click', () => {
  event.preventDefault()
  currentValue++
  updateValues()
})

decreaseButton.addEventListener('click', () => {
  event.preventDefault()
  if (currentValue === 1) {
    return
  } else {
    currentValue--
    updateValues()
  }
})

function updateValues() {
  let animation = "highlight"
  quantityInput.value = currentValue
  priceIndicator.innerHTML = currentValue * 30 + ".00"
  if (priceIndicator.classList.contains(animation)) {
    priceIndicator.classList.remove(animation)
    setTimeout(function() {
      priceIndicator.classList.add(animation)
    }, 1)
  } else {
    priceIndicator.classList.add(animation)
  }
}