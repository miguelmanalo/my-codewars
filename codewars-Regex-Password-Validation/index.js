// Regex Password Validation - 5 kyu
// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

// FUNDAMENTALS, REGULAR EXPRESSIONS, DECLARATIVE PROGRAMMING, ADVANCED LANGUAGE FEATURES, STRINGS, VALIDATION, ALGORITHMS, UTILITIES

const validate = password => /^(?!\W)(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)\w{6,}$/.test(password);

// /^?/ means scan the whole string
// (?!\W) means eliminate the string if it contians anything that isn't a-z, A-Z, or 0-9
// (?=.*?[A-Z]) means the string has to have at least one capital letter
// (?=.*?[\d]) means at least one digit
// \w{6,} means at least six chars of a-z, A-Z, or 0-9

console.log(validate('djI38D55'));  // 'djI38D55 - Expected true');
console.log(validate('a2.d412'));  //  'a2.d412 - Expected false');
console.log(validate('JHD5FJ53'));  //  'JHD5FJ53 - Expected false');
console.log(validate('!fdjn345'));  //  '!fdjn345 - Expected false');
console.log(validate('jfkdfj3j'));  //  'jfkdfj3j - Expected false');
console.log(validate('123'));  //  '123 - Expected false');
console.log(validate('abc'));  //  'abc - Expected false');
console.log(validate('Password123'));  //  'Password123 - Expected true');

// My Notes
// this: https://techearl.com/regular-expressions/regex-password-strength-validation
// was the big help, the answer really. I couldn't figure out how to match more than one group at a time with negative and positive lookaheads