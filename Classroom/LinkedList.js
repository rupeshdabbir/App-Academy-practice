/**
 * Created by rdabbir on 6/12/17.
 */


//Create Node Class
function node(value) {
    this.value = value;
    this.next = null;
}


function LinkedList() {

    //Head
    this.root = null;

    //Add API

    this.addStart = function(value) {
        var node = new Node(value);
        node.next = this.root;
        this.root = node;
    }

    this.addEnd = function(value){
        var node = new Node(value);
        var prev = null;
        var current = this.root;

        while(current) {
            prev = current;
            current = current.next;
        }

        if(prev) {
            prev.next = node;
        } else {
            this.root = node;
        }
    }

    this.addAt = function(value, index) {
        var node = new Node(value);
        var prev = null;
        var current = this.root;

        while(current) {

            if (index == 0) {
                node.next = current;
            }

            if (prev) {
                prev.next = node
            } else {
                this.root = node;
            }
            return true;
        }

        prev = current;
        current = current.next;
        index--;
        return false;
    }

    //Delete API

    this.deleteStart = function(){
        this.root = this.root? this.root.next: this.root;
    }
    this.deleteEnd = function(value){
        var prev = null;

    }
    this.deleteAt = function(index){}

    //Search

    this.get = function(value) {}
    this.indexOf = function(value) {}
    this.print = function(filename) {}

}

