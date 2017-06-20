/*
 * Created by rdabbir on 6/20/17.
 * Let's do factorial in two ways.
 */


/*
 * Iterative way
 */

function factorial(num) {

    let result=1;

    for(var i=1; i<= num; i++){
        result *= i;
    }

    return result;
}