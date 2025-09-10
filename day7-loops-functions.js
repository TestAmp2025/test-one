
// for(let i = 1; i <=3; i++){
//     console.log(i)
// }

// let count = 1;
// while(count <= 3){
//     console.log(count);
//     count++;
// }

// let num = 5;
// do{
//     console.log("Do once");
// }while (num < 3);

// let fruits = ["Apple", "Banana", "Mango"]
// fruits.forEach((fruit) => {
//     console.log(fruit)
// });

// function add(a, b=0){
//     return a+b;
// }

// let sum = add(40, 3);
// console.log(sum)

function testLogin (username, password){
    const valid = username === "admin" && password === "Test1";
    return valid ? "success ✅" : "error ❌"
}

let testResult = testLogin("admin", "Test")
console.log(testResult)