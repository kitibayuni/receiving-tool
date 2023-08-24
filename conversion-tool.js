function convertAmount(reset){
  const x = document.getElementById('weight');
  const y = document.getElementById('volume');
  const z = document.getElementById('density');
  if (reset == ''){
    x.value != '' && z.value != ''
    ? y.value = x.value / z.value
    : y.value != '' && z.value != ''
    ? x.value = y.value * z.value
    : x.value != '' && y.value != ''
    ? z.value = x.value / y.value
    : alert('Conversion Tool Error: Invalid Input')
} else {
  x.value = '';
  y.value = '';
  z.value = '';
}
}