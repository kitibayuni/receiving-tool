function copyToClipboard(text){
  let copiedText = document.getElementById(text);
  copiedText.select();
  copiedText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copiedText.value);
};
function resetClipboard(){
  let inputList = ['p-batch-barcode', 'design-code', 'lot-no', 'address', 'owner-requestor', 'shc', 'location', 'c-batch-barcode']
  let selectInput;
  const response = confirm("RESET ALL INPUT FIELDS?");
  
  if (response === true){
    for (let i = 0; i < inputList.length; i++){
      selectInput = document.getElementById(inputList[i]);
      selectInput.select();
      selectInput.value = '';
    }
  } else {
    return;
  }
}