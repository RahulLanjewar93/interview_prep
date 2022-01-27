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

    insertAt(element,location){
        let node = new Node(element)

        //Default check for invalid locations of the nodes
        if(location < 0 || location > this.size) console.log("Not a valid location to add the node")

        // Adding at fisrt position then point HEAD to the new NODE
        else if(location == 0){
            let tempNode = this.head
            this.head = node
            node.next = tempNode
        }
        else{
            //Intialize the node header
            let current = this.head

            //Iterate over the list to find the node just behind the location to add your node
            let iterator = -1
            while(iterator != location -1)
            {
                current=current.next
                iterator++
            }
            let tempNode = current.next
            current.next = node
            node.next = tempNode
        }
    }

    removeFrom(location){
        //Default check for invalid locations of the nodes
        if(location < 0 || location > this.size) console.log("Not a valid location to add the node")

        // Adding at first position then point HEAD to the new NODE
        else if(location == 0){
            this.head = this.next
        }
        else{
            //Intialize the node header
            let current = this.head

            //Iterate over the list to find the node just behind the location to remove your node
            let iterator = -1
            while(iterator != location -1)
            {
                current=current.next
                iterator++
            }
        }
    }

    reverse(){
        if(this.size == 0 ) console.log('List empty cannot reverse')
        else if (this.size == 1) console.log('Only one element in the list')
        else{
            let currentNode = this.head
            let previous = null
            while(currentNode){
                let tempNode = currentNode.next
                currentNode.next=previous
                previous=currentNode
                currentNode=tempNode
            }
            this.head = previous
        }
    }

    // 19 6 52 34 13 5
    reverseRecursive(node){
        if(node.next == null){
            this.head=node
            return node
        }
        let reversedNode = this.reverseRecursive(node.next)
        reversedNode.next = node
        node.next = null
        return node
    }

    reverseKnodes(head,k){
        let current = head
        let previous=null
        let iterator = 0;
        while(current && iterator<k){
                let temp = current.next
                current.next=previous
                previous=current
                current=temp
                iterator++
        }
        if(current!=null){
            this.reverseKnodes(current,k)
        }
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
list.addElement(13)
list.addElement(34)
list.addElement(52)
list.addElement(6)
list.addElement(19)
list.reverseKnodes(list.head,3)
list.printList()
