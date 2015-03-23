;(function(global){
  'use strict';

  var x = global.__ = {};

  function compose(fn1, fn2){
    return function(x){
      return fn1(fn2(x));
    };
  }

  function not(fn){
    return function(){
      var args = Array.prototype.slice.call(arguments);
      return !fn.apply(null, args);
    };
  }

  function mapWith(fn){
    return function(array){
      return _.map(array, fn);
    };
  }

  /*
   * var a = incBy(5, 3);
   * a(); // 5
   * a(); // 8
   * var b = incBy(5, -3);
   * b(); // 5
   * b(); // 2
   * b(); // -1
   *
   */
  function incBy(start, inc){
    start -= inc;

    return function(){
      return start += inc;
    };
  }

  function range(start, stop, inc){
    var iterator = incBy(start, inc);
    var steps = Math.floor((stop - start) / inc);
    var values = [];
    for(var i = 0; i < steps; i++){
      values.push(iterator());
    }
    return values;
  }

  x.compose = compose;
  x.not = not;
  x.mapWith = mapWith;
  x.incBy = incBy;
  x.range = range;

}).call(this, window);
