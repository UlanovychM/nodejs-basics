import fs from 'node:fs';

// const fileContent = fs.readFileSync('path_to_file'); уникати


fs.readFile('path_to_file', (err, fileContent) => {
  /* ваш код */
}); //На відміну від попереднього варіанту, така функція не буде блокуючою і швидкодію додатка знижувати не буде.


// fs.readFile('path_to_file', (err, fileContent) => {
// 		someOtherFunctionWithCallback(fileContent, (err, data) => {
// 			anotherFunctionWithCallback(data, () => {....})
// 		}
// }); callback hell


