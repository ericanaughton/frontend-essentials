// 1.  Write a function capitalize that takes a string and
// uses`.map` to return the same string in all caps.Write test to it.

it("should capitalize all letters in a string using map", () => {
  const name = "erica";

  const capitalize = name =>
    name
      .split("")
      .map(letter => letter.toUpperCase())
      .join("");

  expect(capitalize(name)).toEqual("ERICA");
});

// 2.  Now write a new function called swapCase that takes a string of words and uses.map and your newly written capitalize()
// function to return a string where every other word is in all caps.Write a test to test the function.
// ```js
//     ex: const string = 'hello world'
//     will return 'hello WORLD'
//     ```

// it("should capitalize every other word in a string", () => {
const name = "erica ashly naughton miller";

const capitalize = name =>
  name
    .split("")
    .map(letter => letter.toUpperCase())
    .join("");

const swapCase = name => name.split(" ");
// .map((word, idx) => (idx % 2 ? word : word.capitalize(name)));

console.log(swapCase(name));

expect(swapCase).toEqual("erica MILLER");
// });
