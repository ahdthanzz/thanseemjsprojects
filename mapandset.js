/* //data strucaters

let map = new Map();
map.set(1, 'Thanseem');
map.set(2, 'Ahamed')
    .set(3, 'Ahd')
    .set(4, 'hello')
console.log(map);

//Read Function
console.log(map.get(2));
//Value irukantu indintyfire 
console.log(map.has('Ahamed'));
//Delete function
map.delete(2);
console.log(map);
//map.clear();
console.log(map);
//map size 
console.log(map.size);

//print all map
//key yah print pani pakurathuku

for (key of map.keys()) {
    console.log(key)
}
//values find function
for (key of map.values()) {
    console.log(key);
}

//all data find 
for (key of map) {
    console.log(key);
}*/

//set function
//set is a unique ah than change pannaum

/* let set = new Set();

set.add('thanseem')
    .add('ahd')
    .add('hello')
console.log(set);
//set.delete(1);
console.log(set.has('hello'));
console.log(set.size);
//set.clear();
console.log(set);

for (s of set) {
    console.log(s);
} */

//question
let set = new Set();
set.add(0)
    .add(7)
    .add(6)
    .add(1)
    .add(0)
    .add(1)
    .add(7)
    .add(1)
    .add(3)
    .add(8)
console.log(set.size);