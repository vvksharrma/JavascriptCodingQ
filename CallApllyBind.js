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