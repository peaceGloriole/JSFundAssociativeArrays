function minerTask(arr) {
  let resources = {};

  for (let i = 0; i < arr.length; i += 2) {
    let res = arr[i];
    let qty = Number(arr[i + 1]);

    res in resources ? resources[res] += qty : resources[res] = qty;
    // if (res in resources) {
    //   resources[res] += qty;
    // } else {
    //   resources[res] = qty;
    // }
  }

  let entries = Object.entries(resources);

  for (let [res, qty] of entries) {
    console.log(`${res} -> ${qty}`);
  }

}

minerTask([
  'Gold',
  '155',
  'Silver',
  '10',
  'Copper',
  '17'
]);