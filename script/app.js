var sort = require('./bubble-sort');
var animatedArray = require('./animated-array');

function generateArray(length) {
   var arr = new Array();
   for (var i = 0; i < length; i++)
      arr.push(Math.floor(Math.random() * (99) + 1));
   return arr;
}

$(document).ready(function() {
   $("#sort-button").on('click', function() {
      var values = generateArray($("#length-input").val());
      var inputArrayHtml = new animatedArray(values);
      $("#input-array").html(inputArrayHtml.drawArray());
      var sortedArrayHtml = new animatedArray(values);
      $("#sorted-array").html(sortedArrayHtml.drawArray());
      var sorted = sort.bubbleSort(values);
      sorted.swapIndex.forEach(function(swapInd, index) {
         setTimeout(sortedArrayHtml.swapAnimation, 650 * index, 
            swapInd);
      });
   })
});