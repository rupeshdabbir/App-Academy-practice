/**
 * Created by rdabbir on 6/12/17.
 */

function sumDigits(num){

    //Always validate input. That's the mantra for good JS dev. Never trust anything explicitly.
    if(typeof num !== "number"){
        throw new Error("Looks like the input does not seem to be a number");
    }

    if(num < 9) {
        return num;
    } else {
        let result =  this.computeSum(num);
        if(result === 10)
            return 1;
        else
            return result;
    }
}

function computeSum(num){
    return num % 10 + Math.floor(num / 10);
}