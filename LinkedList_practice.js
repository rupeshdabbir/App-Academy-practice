/**
 * Created by rdabbir on 6/13/17.
 */


function Node(value){
    this.value = value;
    this.next = null;
}

//LinkedList Implementation
function LinkedList(){

    this.root = null;

    this.addStart = function(val){
        var node = new Node(val);
        node.next = this.root;
        this.root = node;
    }

    this.addEnd = function(val){
        var node = new Node(val);
        var prev = null;
        var current = this.root;
        while(current){
            prev = current;
            current = current.next;
        }

        // If the array is empty Initially, prev = null. Then it becomes root node
        if(prev)
            prev.next = node;
        else
            this.root = node;
    }

    this.addAt = function(val, index){
        var node = new Node(val);
        var prev = null;
        var current = this.root;
        while(current){
            if(index === 0){ //Which means we are asked to insert in the beginning of the LL.
                node.next = current;
                if(prev){
                    prev.next = node;
                } else {
                    this.root = node;
                }
                return true;
            }
            prev = current;
            current = current.next;
            index --;
        }
        return false;
    }

    //If root exists, then next of root is the root else that becomes the root.
    this.deleteStart = function(){
        this.root = this.root? this.root.next: this.root;
    }

    this.deleteEnd = function(){
        var prev = null;
        var current = this.root;

        while(current){
            prev = current;
            current = current.next;
        }

        if(prev){
            prev = null; //Question?
        } else {
            this.root = null;
        }
    }

    //Code again
    this.deleteAt = function(index){
        var prev = null;
        var current = this.root;

        while(current){
            if(index === 0) {
                if(prev){
                    prev.next = current.next;
                } else {
                    this.root = current.next;
                }

            }

            current = current.next;
            index--;
        }
    }

}