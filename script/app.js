$(document).ready(function() {
   $("#sort-button").on('click', function() {
      var values = generateArray($("#length-input").val());
      if ( !$("#input-array").is(":empty"))
         $("#input-array").html('');
      values.forEach(element => {
         $("#input-array").append('<div>' + element + '</div>');
      });
      sortedValues = bubbleSort(values);
      if ( !$("#sorted-array").is(":empty"))
         $("#sorted-array").html('');
      sortedValues.forEach(element => {
         $("#sorted-array").append('<div>' + element + '</div>');
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
               }
         }
      } while (swapped);
   return items;
}