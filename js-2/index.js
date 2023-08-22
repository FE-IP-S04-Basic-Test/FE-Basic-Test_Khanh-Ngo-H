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
  arr1.reduce()
}

console.log(mergeArray([
  { id: '1', quantity: 2 },
  { id: '2', quantity: 2 },
  { id: '3', quantity: 3 },
  { id: '1', quantity: 3 }
],
  [
    { id: '1', quantity: 2 },
    { id: '3', quantity: 2 }
  ]));
