// business logic

var roman = function(num) {
if ((num < 1) || (num > 3999)) {
  return "please enter a number between 1 and 3999";
}
 else if (num >= 1000){
  var romanNumeral = "I";
return romanNumeral}

  else {
  alert("we haven't gotten to that spec yet");
};

};



// user logic

$(document).ready(function() {
 $("form#roman").submit(function(event) {
   event.preventDefault();

   $("div.result").show();
   var num = parseInt($("input#submit").val());
   var result = roman(num);
       $(".outcome").text(result);
 });
});



















// $(document).ready(function(){
//   $("form#roman").submit(function(event){
//     event.preventDefault();
//
//     var submit = parseInt($("input#submit").val());
//     var numerals = ["I", "V", "X", "L", "C", "D", "M"];
//     // var result = roman(submit);
//
//     $(".outcome").text(submit);
//
//     // var roman = function(submit) {
//     //   return false;
//     //   console.log("false")
//     $("#result").show();
//   });
//   });
