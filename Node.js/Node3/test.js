const names = [12, 34, 56,78,90];
names.shift(2);
delete names[2];
console.log(names.length);