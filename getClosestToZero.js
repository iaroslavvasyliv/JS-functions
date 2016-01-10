function getClosestToZero() {
  // приводим обєкт аргументів до масиву 
  var args = Array.prototype.slice.call(arguments, 0);
  // define the target value
  var goal = 0;
  // define the first num in array to compare with goal num
  var curr = args[0];
  
  // loop through array 
  for (var i = 0; i < args.length; i += 1) {
    // 
    if (Math.abs(goal - args[i]) < Math.abs(goal - curr)) {
      curr = args[i];
    }
  }
  
  console.log(curr)
  return curr;
  
}

getClosestToZero(9, 5, -3, -9);