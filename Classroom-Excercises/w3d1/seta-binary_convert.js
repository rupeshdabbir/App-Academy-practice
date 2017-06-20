/**
 * Created by rdabbir on 6/20/17.
 */

function binary(num) {
    let result = [];

    while(num != 0) {
        result.push(num%2);
        num = parseInt(num/2);
    }

    return result.reverse().join('');
}


/*
 * Some interesting ways of doing it: https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
 */

function binary2(num) {
    return (num>>>0).toString(2);
}

function binary3(num) {
    return (3).toString(2);
}

function binary4(num){
    return Number(num).toString(2);
}