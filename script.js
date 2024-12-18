let num = [2, 4, 9, 10, 45, 67, 8, 90]

console.log(num, 'boshlanishdagi array');

let i = 0;
let result = []
while ( i < num.length ) {
    if (num[i] % 2 == 0) {
        result.push(num[i])
    }
    i++
}

console.log(result, 'juft sonlarga ajratilgan array');



