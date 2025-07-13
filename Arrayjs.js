let colors = ["red", "green", "blue"];
let colorscolor = ["red", "green", 12];

// console.log(colors[2]);  // Output: red for index 0 , green for index 1 , blue for 2

// console.log(colors.length);  // Output: 3

// console.log(typeof colors);  // Output: object

console.log(colorscolor);

console.log(colorscolor[0]);

console.log(colorscolor.length);

// for (let i = 0; i < colors.length; i++)
// {
//     console.log(colors[i]);
// }

for (let i of colors)
{
console.log(i);
}

