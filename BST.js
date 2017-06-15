/**
 * Created by rdabbir on 6/14/17.
 */

/* Implementation of BST
 * App-Academy: Data Structures & Algorithms for programmers.
 * Homework/Assignment
 */

function Node(key){

    /* Basic Properties */
    this.left = null;
    this.right = null;
    this.value = [];
    this.key = key;

    /* Helper API's */

    this.insert = function(val) {

        if(val == this.key) {

        }

        if(val < this.key) {
            this.left.insert(val);
        } else {
            this.right.insert(val);
        }
    }


}