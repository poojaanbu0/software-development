const n = [1,2,3,4,6];

const tot = n.reduce((sum, cur) => {
    return sum + cur;
},0);

console.log(tot);