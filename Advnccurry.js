//Implement curry such that:
//var add = curry(function(a, b, c)
//  return a + b + c;
//});

console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));
console.log(add(1,2,3));
//One possible solution
//This is just my own solution. Aside: func.lengt 
//specifies the number of arguments expected by the //function.

var curry = function(func) {
  var totalNumArgs = func.length;

  return function curriedFunc() {
    var args = [].slice.call(arguments);
    if (args.length === totalNumArgs) {
      return func.apply(null, args);
    } else {
      return function () {
        var args2 = [].slice.call(arguments);
        return curriedFunc.apply(null, args.concat(args2));
      };
    }
  };
};