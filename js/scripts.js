
var roman = "";
var romanNumerals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var romanResult = roman + romanResult;

var converter = function(numberInput) {

if (numberInput <= 0 || numberInput >= 4000) {
  return numberInput;
}

for (var i = 0; i < romanNumerals.length; i ++) {
  while( numberInput > numbers[i]){
   numberInput -= numbers[i];
   roman += romanNumerals[i];
    }
  }
  return roman; //always include a return for the empty string
};

$(document).ready(function() {
  $("#roman-num").submit(function(event) {
    event.preventDefault();

    var numberInput = parseInt($("#input").val());
    var numberOutput = converter(numberInput);

    $("#numeral-results").text(numberOutput);

  });
});
