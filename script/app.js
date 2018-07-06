require('../style/page.less');

var sort = require('./bubble-sort');
var animatedArray = require('./animated-array');

function generateArray(length) {
   var arr = new Array();
   for (var i = 0; i < length; i++)
      arr.push(Math.floor(Math.random() * (99) + 1));
   return arr;
}

var animationTimeout = 850; // The timeout between two animation steps.

$(document).ready(function() {
   var timerId;
   $("#sort-button").on('click', function() {
      var arrlen = $("#size-input").val();
      if (arrlen < 2 || arrlen > 30) {
         $(".errortext").addClass("visible");
         throw new Error("Array length is out of range.");
      }
      else
         $(".errortext").removeClass("visible");
      clearTimeout(timerId); // Reset timer for animation.
      var values = generateArray(arrlen);

      // Appending the original array.
      var inputArrayHtml = new animatedArray(values);
      if (!$("#input-array-container").is(":empty"))
         $("#input-array-container").html("");
      $("#input-array-container").append(inputArrayHtml.drawArray("input-array"));
      // Appending the array for animation of swaps.
      var sortedArrayHtml = new animatedArray(values);
      if (!$("#sorted-array-container").is(":empty"))
         $("#sorted-array-container").html("");
      $("#sorted-array-container").append(sortedArrayHtml.drawArray("sorted-array"));

      var sorted = sort.bubbleSort(values); // bubbleSort from animated-array.js
      // We got list of swap steps in sorted.swapIndex.
      if (sorted.swapIndex.length > 0) {
         var index = 0;
         // Recurrent setting of timeouts, due to index change.
         timerId = setTimeout(function swap() {
            sortedArrayHtml.swapAnimation(sorted.swapIndex[index]);
            if (index < sorted.swapIndex.length) {
               timerId = setTimeout(swap, animationTimeout);
               index++;
            }
         }, 610);
      }
   })
});