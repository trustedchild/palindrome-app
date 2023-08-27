let Phrase = require("guwort-palindrome");

function palindromeTester(event){
  event.preventDefault();

  let phrase = new Phrase(event.target.phrase.value);

  let result = document.querySelector("#palindromeResult");
  
  if (phrase.palindrome()) {
    result.innerHTML = `"${phrase.content}" is a palindrome!`;
  } else {
    result.innerHTML = `"${phrase.content}" is not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function(){
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", function(event) {
    palindromeTester(event);
  });
});