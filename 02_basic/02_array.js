const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[1][2]);

// const newArr = marvel_heros.concat(dc_heros)
// console.log(newArr);


// const all_new_heros = [...dc_heros, ...marvel_heros]  //^ This stucture is very important
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_arr = another_array.flat(Infinity)
// console.log(real_another_arr);


// console.log(Array.isArray("Animesh"))
// console.log(Array.from("Animesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));