export function bubbleSort(items) {
   var swapped;
   var swaps = new Array();
      do {
         swapped = false;
         for (var i = 0; i < items.length - 1; i++) {
            if (items[i] > items[i+1]) {
               var temp = items[i];
               items[i] = items[i+1];
               items[i+1] = temp;
               swapped = true;
               swaps.push(i);
            }
         }
      } while (swapped);
   return {"sortedValues": items, "swapIndex": swaps};
}