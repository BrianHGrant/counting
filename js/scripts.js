$(document).ready(function(){
  $("#count-form").submit(function(){
    var number1Input = parseInt($("input#number1").val());
    var multipleInput= parseInt($("input#multiple").val());

    if (!number1Input) {
      alert("Please enter a valid integer!!");
    }
    else if (number1Input < 0) {
      alert("Please enter a positive number!!");
    }
    else if (multipleInput > number1Input){
      alert("Please make multiples smaller than final number!");
    }
    else {
      for (var  index = 0; index < number1Input; index += multipleInput){
        var numberCount = index + multipleInput;

      $("ul").append("<li>" + numberCount +"</li>");
      }
    }
    event.preventDefault();
  });
});
