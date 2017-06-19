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
    //this.value = [];
    this.key = key;
    this.deleted = false;

    /* Helper API's */

    this.insert = function(val) {

        // if(val == this.key) {
        //
        // }

        if(val < this.key) {
            if(this.left) {
                this.left.insert(val);
            } else {
                this.left = new Node(val);
            }

        } else {
            if(this.right)
                this.right.insert(val);
            else
                this.right = new Node(val);
        }
    }

    //Searching
    this.lookup = function(val) {
        if(this.key === val && !this.deleted){
            return this; //this == node so we are returning the node.
        } else if(val < this.key && this.left) {
            this.left.lookup(val);
        } else if(val > this.key && this.right) {
            this.right.lookup(val);
        }

        return false; //if it doesn't exist in tree :-p
    }

    this.delete = function(val){
        if(this.key == val) {
            this.deleted = true;
        } else if(val < this.key && this.left){
            this.left.delete(val);
        } else if(val > this.key && this.right) {
            this.right.delete(val);
        }

        return false;
    }


}