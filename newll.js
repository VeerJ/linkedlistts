/**
 *Creates a new node.
 * @class NodeLL
 */
var NodeLL = /** @class */ (function () {
    /**
     * Creates an instance of NodeLL.
     * @param {number} data
     * @memberof NodeLL
     */
    function NodeLL(data) {
        this.data = data;
    }
    return NodeLL;
}());
/**
 * functions for LL data manipulations and creation of a new one
 * @class LinkedList
 */
var LinkedList = /** @class */ (function () {
    /**
     * Creates an instance of LinkedList.
     * @memberof LinkedList
     */
    function LinkedList() {
        this.size = 0;
    }
    /**
     * Returns the size of the linked list or the number of element nodes in the linked list.
     * @return {*}  {number}:
     * @memberof LinkedList
     */
    LinkedList.prototype.sizeLL = function () {
        return this.size;
    };
    /**
     * This element needs to be updated to link with the html page for output
     * display the linked list from head to the last node.
     * @memberof LinkedList
     */
    LinkedList.prototype.display = function () {
        var displayobj = this.head;
        var count = 1;
        if (this.sizeLL() === 0) {
            console.log("nothing");
        }
        console.log("SizeOf the List is::" + l.sizeLL());
        while (displayobj.next != null) {
            //put text to html
            console.log("element value = " + displayobj.data + ", index count: " + count);
            count++;
            displayobj = displayobj.next;
        }
        console.log("element value = " + displayobj.data + ", index count: " + count);
        console.log(this.sizeLL());
    };
    /**
     *
     * insert a data by creating a new node and linking it to the last of the linked list.
     * @param {number} ele
     * @memberof LinkedList
     */
    LinkedList.prototype.insertLL = function (ele) {
        var newelement = new NodeLL(ele);
        if (this.sizeLL() === 0) {
            this.head = newelement;
        }
        else {
            var abc = this.head;
            while (abc.next != null) {
                abc = abc.next;
            }
            abc.next = newelement;
        }
        this.size++;
        // this.display();
    };
    /**
     *This funciton shall insert by creating new node and then linking it to the position required
     * @param {number} ele : data to be inserted
     * @param {number} pos : index position
     * @memberof LinkedList
     */
    LinkedList.prototype.insertatposLL = function (ele, pos) {
        var ele2 = new NodeLL(ele);
        if (this.sizeLL() === 0) {
            this.head = ele2;
        }
        if (pos === 1) {
            ele2.next = this.head;
            this.head = ele2;
        }
        else {
            var beforepos = this.head;
            var afterpos = this.head;
            for (var a = 1; a < pos - 1; a++) {
                beforepos = beforepos.next;
                afterpos = afterpos.next;
            }
            afterpos = afterpos.next;
            beforepos.next = ele2;
            ele2.next = afterpos;
        }
        this.size++;
        this.display();
    };
    /**
     * Deletes an element from the front or the head position.
     * @memberof LinkedList
     */
    LinkedList.prototype["delete"] = function () {
        var d = this.head.next;
        this.head = d;
    };
    /**
     * Deletes an element from the required postion
     * @param {number} pos : the index of element to be delted
     * @memberof LinkedList
     */
    LinkedList.prototype.delteatpos = function (pos) {
        var deletepos = this.head;
        var del2 = this.head;
        if (pos === 1) {
            var another = this.head.next;
            this.head = another;
        }
        else {
            for (var a = 1; a < pos - 1; a++) {
                deletepos = deletepos.next;
                del2 = del2.next;
            }
            del2 = del2.next;
            deletepos.next = del2.next;
        }
        this.size--;
        this.display();
    };
    return LinkedList;
}());
var l = new LinkedList;
// l is the object of linked list
//optional test cases are down below
// l.insertLL(1);
// l.insertLL(2);
// l.insertLL(3);
// l.insertLL(4);
// l.insertLL(5);
// l.insertLL(20555);
// l.insertatposLL(1000,1);
// l.display();
// l.insertLL(6);
// l.insertatposLL(4,3);
// l.delteatpos(6);
// l.delete();
