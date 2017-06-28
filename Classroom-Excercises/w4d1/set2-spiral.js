/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(arr) {

    let result = [];

    if(!arr){
        throw new Error("Array can't be empty");
    }

    while(true){

        if(arr.length === 0 || arr[0].length === 0)
            break;

        result = result.concat(arr.shift());


        for(let i=0; i<arr.length; i++){
            result.push(arr[i].pop());
        }

        if(arr.length === 0 || arr[0].length === 0)
            break;

        result= result.concat(arr.pop().reverse());

        if(arr.length === 0 || arr[0].length === 0)
            break;

        for(let j=arr.length-1; j>-1; j--){
            result.push(arr[j].shift());
        }

    }

    return result;

};

var input = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
];

spiralOrder(input)