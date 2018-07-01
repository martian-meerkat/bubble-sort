$(document).ready(function() {
   $("#sort-button").on('click', function() {
      var values = generateArray($("#length-input").val());
      if ( !$("#input-array").is(":empty"))
         $("#input-array").html('');
      values.forEach(element => {
         $("#input-array").append('<div>' + element + '</div>');
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