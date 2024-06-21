//Wrting polyfill of filter, polyfills are function written which are not supported by older versions of browsers.
const arr = [1, 2, 3, 4, 5];
console.log("arr->",arr);

//Filter
const greatorthan3=arr.filter(item=>item>3);
console.log("filter=>",greatorthan3);

//Polyfill
const polyfillFilter=(arr,cbfn)=>{
    const newFilterarr=[];
    for (let i = 0; i < arr.length; i++) {
        if(cbfn(arr[i])){
            newFilterarr.push(cbfn(arr[i]));
        }
      }
      return newFilterarr
}

function moreThan3(item){
    if(item>3)
        return item;
}

const filterdArr=polyfillFilter(arr,moreThan3);
console.log("polyfill->",filterdArr);