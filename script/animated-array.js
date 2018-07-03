/**
 * Array view class.
 * 
 * @constructor
 * @param {String} id - The id.
 * @param {Number} x  - The x coordinate.
 * @param {Number} y  - The y coordinate.
 */

function AnimatedArray(values) {
   this.values = values;
   this.html = document.createDocumentFragment();
}

AnimatedArray.prototype.drawArray = function() {
   var that = this;
   this.html = document.createDocumentFragment();
   this.values.forEach(function(element) {
      var newElement = document.createElement('div');
      newElement.innerHTML = element;
      that.html.appendChild(newElement);
   });
   return this.html;
}

AnimatedArray.prototype.swapAnimation = function(index) {
   var element = $('#sorted-array').children()[index];
   var nextElement = $('#sorted-array').children()[index+1];
   $(element).animate({"left": '+=37px'}, 300);
   $(nextElement).animate({"left": '-=37px'}, 300, function() {
      $(element).css('left', '0px');
      $(nextElement).css('left', '0px');
      $(nextElement).insertBefore(element);
   });
}

module.exports = AnimatedArray;