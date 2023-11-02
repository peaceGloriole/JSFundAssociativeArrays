function solve(input) {
  let set = new Map();

  for (let els of input) {
    let tokens = els.split(` `);
    let product = tokens[0];
    let quantity = Number(tokens[1]);

    if (!set.has(product)) {
      set.set(product, +quantity);
    } else {
      let currQuantity = set.get(product);
      let newQuantity = currQuantity += quantity;
      set.set(product, newQuantity);
    }
  }

  for (let kvp of set) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
  }

}
solve(['tomatoes 10',
  'coffee 5',
  'olives 100',
  'coffee 40']);