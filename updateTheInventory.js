/*Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.

Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item 

and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
arr1 = [

  [21, 'Bowling Ball'],

  [2, 'Dirty Sock'],

  [1, 'Hair Pin'],

  [5, 'Microphone']

]



arr2 = [

  [2, 'Hair Pin'],

  [3, 'Half-Eaten Apple'],

  [67, 'Bowling Ball'],

  [7, 'Toothpaste']

]*/

  
function updateInventory(arr1, arr2) {
  const inventoryMap = new Map(arr1.map(item => [item[1], item[0]]));

  arr2.forEach(([quantity, name]) => {
      if (inventoryMap.has(name)) {
          inventoryMap.set(name, inventoryMap.get(name) + quantity);
      } else {
          inventoryMap.set(name, quantity);
      }
  });

  const updatedInventory = Array.from(inventoryMap, ([name, quantity]) => [quantity, name]);
  updatedInventory.sort((a, b) => a[1].localeCompare(b[1]));

  return updatedInventory;
}

const arr1 = [[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']];
const arr2 = [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']];

console.log(updateInventory(arr1, arr2));
