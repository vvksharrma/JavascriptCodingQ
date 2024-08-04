// methods that allow you to manipulate the context and arguments of a function. 
// These methods are part of the Function prototype and can be used to change the behavior of a function.
// Call and apply are similar in that they both allow you to call a function with a specific context
// and arguments. The difference between the two is that call takes arguments as a list, while apply takes arguments as an array.
// Bind is a little different in that it returns a new function that is bound to a specific context
// and arguments. This means that you can call the new function with different arguments, but the

const person1={
    name:'vivek',
    age:25,
    gender:'male',
}
const person2={
    name:'Shivani',
    age:23,
    gender:'female',
}

function showDetails(place){
    console.log(this.name,"lives in " + place);
}

//call uses function borrowing

//call method
showDetails.call(person2,'delhi')

//apply method
showDetails.apply(person1,['Pune']);

//bind
const binded=showDetails.bind(person1,"UP");
binded()