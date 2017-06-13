/**
 * Created by rdabbir on 6/12/17.
 */

function caesar_decipherv2(word, shift){
    let letters = "abcdefghijklmnopqrstuvwxyz".split(''), result="";

    for(var i=0; i<word.length; i++){
        if(word[i] !== "" || word[i] !==" "){
            let indexInDict = letters.indexOf(word[i]);
            result = result.concat(letters[indexInDict + shift]);
        }
    }

    return result;
}