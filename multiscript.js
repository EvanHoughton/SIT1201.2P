let testText = "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway, because bees don't care what humans think is impossible.";
console.log(testText);
let testLength = testText.length;
console.log("Length = " + testLength);
let testSlice = testText.slice(41, 85);
console.log("Slice = " + testSlice);
let testReplace = testText.replace("humans think", "Danny Devito thinks");
console.log("Devitofication = " + testReplace);
let testReplaceAll = testText.replaceAll("bee", "bumblebee");
console.log("Bumblefication = " + testReplaceAll);
let testUppercase = testText.toUpperCase();
console.log("Shouting = " + testUppercase);

console.log("");

const testArray = [413, 612, 720, 1025, 111111];
console.log(testArray);
let testArrayLength = testArray.length;
console.log("Array Length = " + testArrayLength);
let testAt = testArray.at(2);
console.log("the third item is " + testAt);
let testCopyWithin = testArray.copyWithin(2, 0, 3);
console.log("Copy Within'd values: " + testCopyWithin);

console.log("");

const testStringArray = ["let's", "all", "go", "to", "the", "lobby"];
console.log(testStringArray);
let testJoin = testStringArray.join("");
console.log("Conjoined: " + testJoin);
let testFill = testStringArray.fill("8");
console.log("Eightification: " + testFill);

console.log("");

const testDate = new Date();
console.log(testDate);
let testMonth = testDate.getMonth() + 1;
console.log("It is month number " + testMonth + " of the year");
let testOffset = testDate.getTimezoneOffset();
console.log("The time zone offset is " + testOffset);
let testTimeString = testDate.toTimeString();
console.log("The time alone is " + testTimeString);
let testValueOf = testDate.valueOf();
console.log("Value of: " + testValueOf);
let testParse = Date.parse(testDate);
console.log("Parse: " + testParse);