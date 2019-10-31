// business logic

var roman = function(submit) {
if ((submit >= 1) && (submit <= 3999)) {
  return true;
} else {
  alert("please enter a number");
}

};



// user logic

$(document).ready(function() {
 $("form#roman").submit(function(event) {
   event.preventDefault();

   $("div.result").show();
   var num = parseInt($("input#submit").val());
   var result = roman(num);
       $(".outcome").text(num);
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
