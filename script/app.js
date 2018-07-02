var sort = require('./bubble-sort');

$(document).ready(function() {
   console.log(sort);
   $("#sort-button").on('click', function() {
      var values = generateArray($("#length-input").val());
      if ( !$("#input-array").is(":empty"))
         $("#input-array").html('');
      values.forEach(element => {
         $("#input-array").append('<div>' + element + '</div>');
      });
      var sortedValues = values;
      if ( !$("#sorted-array").is(":empty"))
         $("#sorted-array").html('');
      sortedValues.forEach(element => {
         $("#sorted-array").append('<div>' + element + '</div>');
      });
      sorted = sort.bubbleSort(values);
      sorted.swapIndex.forEach(function(swapInd, index) {
         setTimeout(swapAnimation, 600 * index, swapInd);
      });
   })
});

function generateArray(length) {
   var arr = new Array();
   var i = 0;
   for (i = 0; i < length; i++)
      arr.push(Math.floor(Math.random() * (99) + 1));
   return arr;
}

function swapAnimation(index) {
   element = $('#sorted-array').children()[index];
   elementLeft = $(element).position();
   nextElement = $('#sorted-array').children()[index+1];
   nextElementLeft = $(nextElement).position();
   console.log(nextElementLeft.left);
   $(element).animate({"left": '+=37px'}, 450);
   $(nextElement).animate({"left": '-=37px'}, 450, function() {
      $(element).css('left', '0px');
      $(nextElement).css('left', '0px');
      $(nextElement).insertBefore(element);
   });
}