/**
 * Created by rdabbir on 6/9/17.
 */

function tappingWater(arr) {
    let len = arr.length;
    let leftmaxvalue=[], rightmaxvalue = [], maxn=0, sum=0;

    //Going Forward to get the max-number
    for(var i=0; i<arr.length; i++) {
        leftmaxvalue[i] = maxn;
        maxn = Math.max(arr[i], maxn);
    }

    //reset max value
    maxn=0;

    //Going backward to get the max number
    for(var i=arr.length-1; i>=0; i--) {
        rightmaxvalue[i] = maxn;
        maxn = Math.max(arr[i], maxn);
    }

    //Now for water to be stored on any Tower, the requirement is:
    //There should be an either left tower or a right tower height greater than the current tower.
    for(var i=0; i<arr.length; i++){
        let left = leftmaxvalue[i];
        let right = rightmaxvalue[i];
        let minh = Math.min(left,right); //Get the minimum of both the towers

        //if one of the min tower height is greater than current towers then our current tower can hold water
        if(minh > arr[i]){
            sum += minh - arr[i];
        }

    }

    return sum;
}

let arr = [0,1,0,2,1,0,1,3,2,1,2,1];

tappingWater(arr);