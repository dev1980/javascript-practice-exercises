console.log(false); // false
console.log(!true); // false
console.log(!false); // true
console.log(!!true); // !false = true

console.log(false && false); //
console.log(false && true);
console.log(true && false);
console.log(true && true);

console.log(false || false);
console.log(false || true);
console.log(true || false);
console.log(true || true);

console.log(!false || false);
console.log(false || (true && true));
console.log(false || !(true && true));
console.log(!true && (false || true));