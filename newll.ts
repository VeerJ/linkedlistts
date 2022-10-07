/**
 *Creates a new node.
 * @class NodeLL
 */
class NodeLL{
    
    /**
     * Data element of node
     * @type {number}
     * @memberof NodeLL
     */
    data:number;
    /**
     * link of next block
     * @type {NodeLL}
     * @memberof NodeLL
     */
    next!:NodeLL;

    /**
     * Creates an instance of NodeLL.
     * @param {number} data
     * @memberof NodeLL
     */
    constructor(data:number){
        this.data = data;
    }
}
/**
 * functions for LL data manipulations and creation of a new one
 * @class LinkedList
 */
class LinkedList{

    /**
     * head refers to the first node and is used to iterate thorugh the LL.
     * @type {NodeLL}
     * @memberof LinkedList
     */
    head!:NodeLL;

    /**
     * refers to the next element.
     * @type {NodeLL}
     * @memberof LinkedList
     */
    next!:NodeLL;

    /**
     * defines the size of the list
     * @type {number}
     * @memberof LinkedList
     */
    size: number;

    /**
     * Creates an instance of LinkedList.
     * @memberof LinkedList
     */
    constructor(){
        this.size = 0;
    }

    /**
     * Returns the size of the linked list or the number of element nodes in the linked list.
     * @return {*}  {number}: 
     * @memberof LinkedList
     */
    sizeLL(): number{
        return this.size;
    }
    /**
     * This element needs to be updated to link with the html page for output
     * display the linked list from head to the last node.
     * @memberof LinkedList
     */
    display():void{
        let displayobj = this.head;
        let count = 1;
        if (this.sizeLL()===0){console.log("nothing")}
        console.log("SizeOf the List is::" + l.sizeLL());
        while(displayobj.next != null){
            //put text to html
            console.log("element value = " + displayobj.data + ", index count: " + count);
            count++;
            displayobj = displayobj.next;
        }
        console.log("element value = " + displayobj.data + ", index count: " + count);
        console.log(this.sizeLL());
    }
    /**
     *
     * insert a data by creating a new node and linking it to the last of the linked list.
     * @param {number} ele
     * @memberof LinkedList
     */
    insertLL(ele: number): void{
        let newelement = new NodeLL(ele);
        if (this.sizeLL()===0){
            this.head = newelement;
        }
        else{
            let abc = this.head;
            while(abc.next != null){
                abc=abc.next;
            }
            abc.next = newelement;
        }
        this.size++;
        // this.display();
    }
    /**
     *This funciton shall insert by creating new node and then linking it to the position required
     * @param {number} ele : data to be inserted
     * @param {number} pos : index position
     * @memberof LinkedList
     */
    insertatposLL(ele:number, pos:number): void{
        let ele2 = new NodeLL(ele);
        if (this.sizeLL() === 0) {
            this.head = ele2;
        } 
        if (pos===1){
            ele2.next = this.head;
            this.head = ele2;
        }
        else{
            let beforepos = this.head;
            let afterpos = this.head;
            
            for (let a=1;a<pos-1;a++){
                beforepos = beforepos.next;
                afterpos = afterpos.next;
            }
            afterpos = afterpos.next;
            beforepos.next = ele2;
            ele2.next = afterpos;
        }
        this.size++;
        this.display();
    }
    /**
     * Deletes an element from the front or the head position.
     * @memberof LinkedList
     */
    delete():void{
        let d = this.head.next;
        this.head = d;        
    }

    /**
     * Deletes an element from the required postion
     * @param {number} pos : the index of element to be delted
     * @memberof LinkedList
     */
    delteatpos(pos:number):void{
        let deletepos = this.head;
        let del2 = this.head;
        if (pos===1){
            let another = this.head.next;
            this.head = another;
        }
        else{
            for (let a=1;a<pos-1;a++){
                deletepos = deletepos.next;
                del2 = del2.next;
            }
            del2 = del2.next;
            deletepos.next=del2.next;
        }
        this.size--;
        this.display();
    }
}



let l = new LinkedList
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