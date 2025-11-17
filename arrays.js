// let cars = ['BMW', 'Alto', 'Benzz'];
// // console.log(cars[0]);
// // console.log(typeof(cars));
// // console.log(cars);
// // console.log(cars);
// //cars.push("BYD");//end il add vum
// //cars.unshift("Thanseem");//ithu vatnhu begine start ill add avum
// console.log(cars);
// console.log(cars[0])
// cars.push('Nixon');
// cars.unshift('Ferrary');
// console.log(cars[0]);
// //cars.pop() //Remove for last value
// console.log(cars.pop());
// console.log(cars);

//Totel Access for Array of function
// for (car of cars) {
//     console.log(car);

// }
//index type 
// for(let i=0;i<3;i++){
//     console.log("this outpur" ,cars[i]);
// }
// console.log(cars.length);

// for (let i=0 ;i<cars.length;i++){
//     console.log(cars[i]);
// }

let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
//console.log(mat);
// console.log(mat[1][2]);
// console.log(mat[1][0][1]);
for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++){
        console.log(mat[i][j]);
    }
}