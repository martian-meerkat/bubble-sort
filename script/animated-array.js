/**
 * Array view class.
 */

function AnimatedArray(values) {
   this.values = values;
   this.id = "";
   this.slideDistance = "50px";
}

AnimatedArray.prototype.setValues = function(values) {
   this.values = values;
}

AnimatedArray.prototype.drawArray = function(id) {
   this.id = id;
   html = document.createElement('div');
   html.id = id;
   this.values.forEach(function(element) {
      var newElementDiv = document.createElement('div');
      var newElementSpan = document.createElement('span');
      newElementSpan.innerHTML = element;
      newElementDiv.appendChild(newElementSpan);
      html.appendChild(newElementDiv);
   });
   return html;
}

AnimatedArray.prototype.swapAnimation = function(index) {
   if (index < 0 || index >= this.values.length) {
      throw new Error("The element used to swap is out of range.");
   }
   var array = document.getElementById(this.id);
   var element = array.children[index];
   var nextElement = array.children[index+1];
   var temp = this.values[index];
   this.values[index] = this.values[index+1];
   this.values[index+1] = temp;
   $(element).animate({"left": '+=' + this.slideDistance}, 350);
   $(nextElement).animate({"left": '-=' + this.slideDistance}, 350, function() {
      $(element).css('left', '0px');
      $(nextElement).css('left', '0px');
      $(nextElement).insertBefore(element);
   });
}

module.exports = AnimatedArray;