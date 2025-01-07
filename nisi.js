const data = [
  { id: 1, name: 'Alice', transforms: [{ type: 'rotate', value: 90 }] },
  { id: 2, name: 'Bob', transforms: [{ type: 'translate', value: [10, 20] }] },
  { id: 3, name: 'Charlie', transforms: [] },
  { id: 4, name: 'David', transforms: [{ type: 'scale', value: 2 }] },
  { id: 5, name: 'Eve', transforms: [] },
];

const filteredData = data.filter(item => item.transforms.length > 0);

console.log(filteredData);
