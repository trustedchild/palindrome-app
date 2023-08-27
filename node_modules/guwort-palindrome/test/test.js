let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function(){
    describe("#palindrome", function(){
        it("should return false for non-palindrome", function(){
            let nonpalindrome = new Phrase("apple");
            assert(!nonpalindrome.palindrome());
        });

        it("should return true for palindrome", function(){
            let plainpalindrome = new Phrase("111");
            assert(plainpalindrome.palindrome);
        });

        it("should return true for a mixed-case palindrome", function() {
            let mixedCase = new Phrase("RaceCar");
            assert(mixedCase.palindrome());
          });

          it("should return true for a palindrome with punctuation", function() {
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
            assert(punctuatedPalindrome.palindrome());
          });


          it("should return false for an empty string", function() {
            let emptyPhrase = new Phrase("");
            assert(!emptyPhrase.palindrome());
          });
    });
});