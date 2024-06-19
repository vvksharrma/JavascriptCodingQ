const columns = ["Date", "Number", "Size", "Location", "Age"]

const rows = [
  ["2001", "5", "Big", "Sydney", "25"],
  ["2005", "2", "Med", "Melbourne", "50"],
  ["2012", "20", "Huge", "Brisbane", "80"]
];

const res=rows.map((row)=>
    row.reduce((acc,curr,index)=>(
       {...acc,[columns[index]]: curr}
    ),{})
)
console.log(res)