const lib1 =require('./lib1');
const lib2 =require('./lib2');

console.log(lib1);
console.log(lib1);

console.log(lib2.lib1);
console.log(lib1.lib2);

// it can go into infinite loop but JS will prevent it and throw error "circular dependency"