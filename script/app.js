var sort = require('./bubble-sort');
var animatedArray = require('./animated-array');

function generateArray(length) {
   var arr = new Array();
   for (var i = 0; i < length; i++)
      arr.push(Math.floor(Math.random() * (99) + 1));
   return arr;
}

$(document).ready(function() {
   var timerId;
   $("#sort-button").on('click', function() {
      var arrlen = $("#length-input").val();
      if (arrlen < 2 || arrlen > 30) {
         $(".errortext").addClass("visible");
         throw new Error("Array length is out of range.");
      }
      else
         $(".errortext").removeClass("visible");
      clearTimeout(timerId);
      var values = generateArray(arrlen);
      var inputArrayHtml = new animatedArray(values);
      if (!$("#input-array-container").is(":empty"))
         $("#input-array-container").html("");
      $("#input-array-container").append(inputArrayHtml.drawArray("input-array"));
      var sortedArrayHtml = new animatedArray(values);
      if (!$("#sorted-array-container").is(":empty"))
         $("#sorted-array-container").html("");
      $("#sorted-array-container").append(sortedArrayHtml.drawArray("sorted-array"));
      var sorted = sort.bubbleSort(values);
      if (sorted.swapIndex.length > 0) {
         var index = 0;
         timerId = setTimeout(function swap() {
            sortedArrayHtml.swapAnimation(sorted.swapIndex[index]);
            if (index < sorted.swapIndex.length) {
               console.log(index);
               timerId = setTimeout(swap, 610);
               index++;
            }
         }, 610);
      }
   })
});