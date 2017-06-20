/**
 * Created by rdabbir on 6/20/17.
 */


function maxPubSub(str) {
    let result = [str[str.length-1]];

    //We go backwards
    for(let i = str.length-2; i>=0; i++) {
        if(str[i] < str[str.length-1]) { // Check to see if the string found is greater than last string
            continue;
        }

        result.push(str[i]);
    }

    return result.reverse().join('');
}