// 1

const hello = function (name) {
    return `Привет, ${name}`;

}
let res = hello('JavaScript!');
console.log(res);



// 2

function sum(a, b) {
    if (a % 2 == 0 && b % 2 == 0) {
        return a * b;
    } else if (a % 2 !== 0 && b % 2 !== 0) {
        return a + b;
    } else if (a % 2 !== 0 && b % 2 == 0) {
        return a;
    } else {
        return d
    }
}
let resc = sum(5, 3)
console.log(resc)

// 3

function checkVelo(weight, mass) {
    if (weight == 2 && mass <= 100) {
        return console.log('Парковка разрешена');
    } else {
        return console.log('Парковка только для велосипедов');
    }
}
let resc1 = checkVelo(2, 200);

// 4

let param1 = 1;
let param2 = 2;
let param3 = 3;

function func(param1, param2, param3) {
    let result = param1 + param2 + param3;
    return result;
}
console.log(func(1, 2, 3));

// 5

let srt1 = 3
function srt(srt1) {
    let res2 = srt1 ** srt1;
    return res2;
}
console.log(srt(3));

// 6

let sr = 3;
function rts(sr) {
    let resss = sr ** 1 / 2
    return resss;
}
console.log(rts(3))
console.log(rts(4))
console.log(rts(3 + 4))