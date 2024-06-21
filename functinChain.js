function computeTotal() {
    let total=0;
  return {
    lacs: function (amount) {
      total+=amount * 100000;
      return this
    },
    thousands: function (amount) {
      total+=amount * 1000;
      return this;
    },
    hundreds: function (amount) {
      total+=amount * 100;
      return this;
    },
    crore: function (amount) {
      total+=amount * 10000000;
      return this;
    },
    value:function(){
        return total 
    }
  };
}

let res = computeTotal().lacs(12).thousands(60).lacs(30).crore(3).value();
console.log(res);
