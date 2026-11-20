// console.log('hello');

// let arr = [23, 45, 67, 17, 1, 892, 89, 36, 78, 89, 1000];

// x = arr[0];
// for(let i = 1; i<arr.length;i++){
//     if(arr[i] > x)
//     {
//         x = arr[i];
//     }
// }
// console.log(x);

// let names = ['pooja','ashok_','swetha@@','priya..'] //to find longest name in given array
// let n = names.length;
// function larg(names, n){
//     if (n == 0){
//         return [];
//     }
//     let max = names[0].length;
//     res = [];

//     res.push(names[0]);

//     for(let i = 0; i < n;i++){
//         if(names[i].length > max){
//                max = names[i].length;
//                res = [];
//                res.push(names[i])
//         }
//     }
//     return res;
// }
// console.log(larg(names,n));


// let x = "p2oja- 2m3z4y" 

// function expandStringSimple(str) {
//     let result = "";
//     let multiplier = 1; 

//     for (let char of str) {
     
//         if (char >= '0' && char <= '9') {
//             multiplier = Number(char);
//         } else {
        
//             result += char.repeat(multiplier);
//             multiplier = 1; 
//         }
//     }
//     return result;
// }
// console.log(expandStringSimple(x)); 

const v = 'string';
let tex = "";
for(let x of v){
    tex += x + " ";
}
console.log(tex);