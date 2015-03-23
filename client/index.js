/* global __:true */

$(document).ready(function(){
  'use strict';

  function add5(v){return v + 5;}
  function mul3(v){return v * 3;}
  var add5mul3 = __.compose(add5, mul3);
  console.log('add5mul3:', add5mul3(2));

  // -------------------------------------------- //

  function isOdd(x){return Boolean(x % 2);}
  function isSumEven(a, b, c){return !isOdd(a + b + c);}
  var notIsSumEven = __.not(isSumEven);
  console.log('notIsSumEven:', notIsSumEven(3, 4, 5));

  // -------------------------------------------- //

  var squareAll = __.mapWith(function(n){return Math.pow(n, 2);});
  console.log('squareAll:', squareAll([2,4,6]));

  // -------------------------------------------- //

  console.log('range:', __.range(20, -127, -15));
});
