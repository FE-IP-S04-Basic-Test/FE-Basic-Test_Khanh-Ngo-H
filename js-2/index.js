/* 
 *
 * @param {array[{ id: string, quantity: number }]}
 * @param {array[{ id: string, quantity: number }]}
 * @return {array[{ id: string, quantity: number }]}
 * Input: (
  [
    { id: '1', quantity: 2 },
    { id: '2', quantity: 2 },
    { id: '3', quantity: 3 },
    { id: '1', quantity: 3 }
  ],
  [
    { id: '1', quantity: 2 },
    { id: '3', quantity: 2 }
  ]);
 * Output:  [{ id: '1', quantity: 7 }, { id: '3', quantity: 5 }]
 */


const mergeArray = (arr1, arr2) => {
  const result = [];
  // get unique id in arrays
  const arr1Id = arr1.map(item => item.id).filter((value, index, arr) => arr.indexOf(value) === index);
  const arr2Id = arr2.map(item => item.id).filter((value, index, arr) => arr.indexOf(value) === index);
  const duplicateId = arr1Id.filter(i => arr2Id.includes(i));
  // array with duplicated id
  const newArr = [...arr1, ...arr2].filter(item => duplicateId.includes(item.id));
  newArr.forEach(item => {
    const arrItem = result.find(a => a.id === item.id);
    if (!arrItem) {
      result.push(item);
    } else {
      arrItem.quantity += item.quantity;
    }
  })
  return result;
}

console.log(mergeArray([
  { id: '1', quantity: 2 },
  { id: '2', quantity: 2 },
  { id: '3', quantity: 3 },
  { id: '1', quantity: 3 }],
  [
    { id: '1', quantity: 2 },
    { id: '3', quantity: 2 },
    { id: '4', quantity: 2 }
  ]
));
