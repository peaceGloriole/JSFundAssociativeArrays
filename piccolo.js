function cars(arr) {
  let carLot = {};

  for (let els of arr) {
    let [command, plate] = els.split(`, `);

    if (command === `IN`) {
      carLot[plate] = true;
    } else if (command === `OUT`) {
      if (carLot[plate]) {
        delete carLot[plate];
      }
    }
  }

  let keys = Object.keys(carLot).sort();

  for (let plate of keys) {
    console.log(plate);
  }

}
cars([
  'IN, CA2844AA',
  'IN, CA1234TA',
  'OUT, CA2844AA',
  'IN, CA9999TT',
  'IN, CA2866HI',
  'OUT, CA1234TA',
  'IN, CA2844AA',
  'OUT, CA2866HI',
  'IN, CA9876HH',
  'IN, CA2822UU'
]);