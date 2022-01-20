class Node{
    // A node contains data and
    constructor(element){
        this.data=element;
        this.next=null;
    }
}

class LinkedList{
    // A linked list is a collection of nodes , an empty linked list will have a head
    constructor(){
        this.head=null;
        this.size=0;
    }

    addElement(element){
        const node = new Node(element)
        var current;
        if(this.size == 0) this.head = node
        else{
            current = this.head

            while(current.next){
                current=current.next
            }
            current.next=node
        }
        this.size++
    }

    printList(){
        let current = this.head
        let fullList = []
        while(current){
            fullList.push(current.data)
            current = current.next
        }
        console.log(fullList)
    }
}

const list = new LinkedList();
list.addElement(5)
list.addElement(3)
list.addElement(23)
list.addElement(42)
list.addElement(7)
list.printList()