function partyTime(arr) {
  let list = {};
  let attending = {};
  let isParty = false;

  for (let guest of arr) { //loop to separate the list from attending;
    if (isParty) {
      attending[guest] = 1;
    } else {
      if (guest === `PARTY`) {
        isParty = true;
        continue;
      }

      list[guest] = 1;
    }
  }

  for (let guest in attending) { // delete the guest from list;
    if (list[guest]) {
      delete list[guest];
    }
  }

  let entries = Object.keys(list);

    entries.sort((a, b) => {
      if (a[0] >= '0' && a[0] <= '9' && !(b[0] >= '0' && b[0] <= '9')) {
        return -1;
      } else if (!(a[0] >= '0' && a[0] <= '9') && (b[0] >= '0' && b[0] <= '9')) {
        return 1;
      } else {
        return a.localeCompare(b);
      }
    });
  

  console.log(entries.length);
  console.log(entries.join(`\n`));
}

partyTime([
  '7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY',
  '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'
]);

// partyTime(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ']);
