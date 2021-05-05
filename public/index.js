const rangeInput = document.querySelector('.percent-input')
const priceInput = document.querySelector('.price-input')

rangeInput.addEventListener('input', function() {
  const percentText = document.querySelector('.percent-text')
  percentText.innerHTML = `${this.value}%`

  CalculateTip()
})

priceInput.addEventListener('input', function() {
  CalculateTip()

})

function CalculateTip() {
  const price = priceInput.value
  const percent = rangeInput.value

  const tipAmount = document.querySelector('.tip-amount')
  const tipTotal = document.querySelector('.tip-total')

  const regex = /^[0-9]*\.?[0-9]*$/

  if ( !regex.test(price) ) {
    tipAmount.value = "Invalid number"
    tipTotal.value = "Invalid number"

    return document.body.classList.add('invalid')
  }

  document.body.classList.remove('invalid')

  const tip = ((price / 100) * percent).toFixed(2)
  const totalTip = (parseFloat(price) + (price / 100) * percent).toFixed(2)

  tipAmount.value = tip
  tipTotal.value = totalTip

}