var text = document.getElementsByTagName('h2');
console.log(text);
function upperCaseFirstStandaloneLetter (text) {
   var arrayText = [];

   for (var i=0; i < text.length; i++) {

     if (text[i-1]=== undefined || text[i-1]=== ' ') {
      arrayText.push(text[i].toUpperCase());

    } else {
      arrayText.push(text[i]);
      }
  }

  var text = arrayText.join('');
  console.log('text');
}

upperCaseFirstStandaloneLetter();
