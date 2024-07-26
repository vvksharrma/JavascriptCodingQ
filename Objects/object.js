//ways to create Object
const obj1={};
const obj2=new Object();
const obj3=Object.assign({},{});
const obj4=Object.create({});
function test() {};
const obj5=new test();
Object.setPrototypeOf(obj5,Object.prototype)

const randomValues = [
  { a: "Alexander", value: [1, 2] },
  { b: "Brian", value: [3] },
  { a: "Alexander", value: [4, 5] }
];
const newObj={
  a: "Alexander", 
  value: [1, 2],
  b:"hello"
}
//output
// * Alexander: [1,2,4,5],
// * Brian: [3]
  
  
  const getValues=(value)=>{
    
    const newres={};
    value.forEach(obj=>{
      const key = Object.values(obj)[0]
      const value=Object.values(obj)[1]
      if(newres[key]){
        newres[key]=newres[key].concat(value) 
      }
      else{
        newres[key]=value
      }
    })
    return newres
  }
  
 const res= getValues(randomValues)