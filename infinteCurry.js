//infinite sum curry function
//sum(1)(2)(5)(2).....

function sum(a){
    return function(b){
        if(b){
            return sum(a+b);
        }
        return a;
    }
}

let add=sum(1)(2)(5)(1)(2);
console.log(add())