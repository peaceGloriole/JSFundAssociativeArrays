function solve(input) {
  let schedule = {};

  for (let els of input) {
    let [day, name] = els.split(` `);

    if (schedule[day] !== undefined) {
      console.log(`Conflict on ${day}!`);
      continue;
    } else {
      schedule[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }

  for (let [day, name] of Object.entries(schedule)) {
    console.log(`${day} -> ${name}`);
  }
}
solve(['Monday Peter',
  'Wednesday Bill',
  'Monday Tim',
  'Friday Tim']);