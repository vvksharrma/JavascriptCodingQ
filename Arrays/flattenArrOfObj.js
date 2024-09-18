const Input = [
  {
    name: "A",
    child: [{ name: "1", child: { name: "a" } }],
  },
  {
    name: "B",
    child: [{ name: "2" }],
  },
];
 Output: [
  { name: "A" },
  { name: "1" },
  { name: "a" },
  { name: "B" },
  { name: "2" },
];


//solution

function flatten(input) {
  const output = [];
  for (const item of input) {
    output.push({ name: item.name });
    if (item.child) {
      output.push(...flatten(item.child));
    }
  }
  return output;
}

const flattenedOutput = flatten(input);
console.log(flattenedOutput);