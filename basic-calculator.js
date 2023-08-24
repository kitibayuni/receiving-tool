const calculatorElement = document.getElementById('calculation-entry');

/* Adding a listener to check that 1. the input element is focused and 2. enter is pressed */
/* Comprised of a nested event listener */
calculatorElement.addEventListener('focus', function(){
  calculatorElement.addEventListener('keydown', function(){
    if (event.key === 'Enter'){
      calculate();
    }
  })
})

function calculate(){
  const toBeCalc = document.getElementById('calculation-entry');
  const results = document.querySelector('.calculation-result')
  let x = toBeCalc.value;

  try {
    let y = eval(x);
    results.innerHTML = y;
  } catch (error) {
    alert('Calculator Error: Invalid Argument')
  }
}