function solve(input) {
  let addressBook = {};

  for (let els of input) {
    let [name, address] = els.split(`:`);

    addressBook[name] = address;
  }

  let sorted = Object.keys(addressBook).sort();

  for (let name of sorted) {
    let address = addressBook[name];
    console.log(`${name} -> ${address}`);
  }

}
solve(['Tim:Doe Crossing',
  'Bill:Nelson Place',
  'Peter:Carlyle Ave',
  'Bill:Ornery Rd']);