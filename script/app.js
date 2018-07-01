$(document).ready(function() {
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
      sortedValues = bubbleSort(values);
   })
});

function generateArray(length) {
   var arr = new Array();
   var i = 0;
   for (i = 0; i < length; i++)
      arr.push(Math.floor(Math.random() * (99) + 1));
   return arr;
}

function bubbleSort(items) {
   var swapped;
      do {
         swapped = false;
         for (var i = 0; i < items.length - 1; i++) {
               if (items[i] > items[i+1]) {
                  var temp = items[i];
                  items[i] = items[i+1];
                  items[i+1] = temp;
                  swapped = true;
                  swapAnimation(i);
               }
         }
      } while (swapped);
   return items;
}

function swapAnimation(index) {
   console.log(index);
   element = $('#sorted-array').children()[index];
   elementLeft = $(element).position();
   console.log(elementLeft.left);
   nextElement = $('#sorted-array').children()[index+1];
   nextElementLeft = $(nextElement).position();
   // $(element).css({"position": "absolute", "left": elementLeft.left});
   // $(nextElement).css({"position": "absolute", "left": nextElementLeft.left});
   console.log(nextElementLeft.left);
   //$(nextElement).insertBefore(element);
   $(element).animate({"left": '+=37px'}, 450);
   $(nextElement).animate({"left": '-=37px'}, 450, function() {
      $(element).css('left', '0px');
      $(nextElement).css('left', '0px');
      $(nextElement).insertBefore(element);
   });
}