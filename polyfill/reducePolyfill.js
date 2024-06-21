//Wrting polyfill of filter, polyfills are function written which are not supported by older versions of browsers.
const arr = [1, 2, 3, 4, 5];
console.log("arr->",arr);

//Reduce
const arrSum=arr.reduce((acc,curr)=>acc=acc*curr);
console.log("reduceSum->",arrSum)

//Polyfill
function polyfillReduce(arr,initalvalue,cbfn){
    let value=initalvalue;
    for(let i=0;i<arr.length;i++){
        value=cbfn(value,arr[i])
    }
    return value
}

function sum(acc,item){
    return acc*item
}

const res=polyfillReduce(arr,1,sum);
console.log("reduce ans->",res)