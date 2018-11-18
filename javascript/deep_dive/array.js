//changing data in arrays
let notes = ['do','re','mi','fa','so','la','ti','do'];
let notes1=notes.slice(4,6);
console.log(notes,notes1);
//splice
let omit = notes.splice(4,2);
console.log(notes,omit);
console.log("\n");
console.log(notes.push('sa','re','ga','ma'));
console.log(notes);
notes.shift();
notes.unshift('saa','ree');
console.log(notes);
notes.splice(5,2,'saa','reee')
console.log(notes);
console.log(notes.concat('hi'))