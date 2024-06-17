const person={
    name:'vivek',
    age:23
}

function showDetails(place){
    console.log(this.name,"lives in " + place);
}

const bb= showDetails.bind(person,'delhi')
bb();

//polyfill using prototype
Function.prototype.myBind=function(...args){
    const obj=this;
    const params=args.slice(1);
    return function(){
        obj.apply(args[0],params);
    }
}
const cc= showDetails.myBind(person,'delhi')
cc();