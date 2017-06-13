/**
 * Created by rdabbir on 6/12/17.
 */

function sum_array(arr){
    return arr.reduce((val, next) => {
        return val+sum;
    }, 0);
}

function sum_array_recursion(arr) {

    if(arr.length ==0){return 0};
    return arr[0] + arr.slice(1, arr.length);
}