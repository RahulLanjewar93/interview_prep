

class MinHeap {
    constructor(){
        this.heap = []
    }

    getParentIndex(idx){
        const parent = Math.floor((idx-1)/2)
        return parent
    }

    getLeftChildIndex(idx){
        const leftChild = idx*2+1
        return leftChild
    }

    getRightChildIndex(idx){
        const rightChild = idx*2+2
        return rightChild
    }

    swap(idx1,idx2){
        let temp = this.heap[idx1]
        this.heap[idx1] = this.heap[idx2]
        this.heap[idx2] = temp
    }

    push(key){
        this.heap.push(key)
        this.heapifyUp()
    }


    heapifyUp(){
        let current = this.heap.length-1

        while(this.heap[current]<this.heap[this.getParentIndex(current)]){
            this.swap(current,this.getParentIndex(current))

            current = this.getParentIndex(current)
        }
    }
}

class MaxHeap {
    constructor(){
        this.heap = []
    }

    getParentIndex(idx){
        const parent = Math.floor((idx-1)/2)
        return parent
    }

    getLeftChildIndex(idx){
        const leftChild = idx*2+1
        return leftChild
    }

    getRightChildIndex(idx){
        const rightChild = idx*2+2
        return rightChild
    }

    swap(idx1,idx2){
        let temp = this.heap[idx1]
        this.heap[idx1] = this.heap[idx2]
        this.heap[idx2] = temp
    }

    push(key){
        this.heap.push(key)
        this.heapifyUp()
    }

    heapifyUp(){
        let current = this.heap.length-1

        while(this.heap[current]>this.heap[this.getParentIndex(current)]){
            this.swap(current,this.getParentIndex(current))

            current = this.getParentIndex(current)
        }
    }

    pull(){
        const maxValue = this.heap[0]

        this.heap[0] = this.heap[this.heap.length-1]
        this.heap.length--
        this.heapifyDown()
        return maxValue
    }

    heapifyDown(){
        let current = this.heap[0]
        console.log(this.heap[0])
        while(this.heap[this.getLeftChildIndex(current)] != undefined){
            if(this.heap[this.getLeftChildIndex(current)] > this.heap[current]) {
                this.swap(current,this.getLeftChildIndex(current))
            }else if(this.heap[this.getRightChildIndex(current)] > this.heap[current]){
                this.swap(current,this.getRightChildIndex(current))
            }
        }
    }
}

let minHeap = new MinHeap()
let maxHeap = new MaxHeap()
maxHeap.push(25)
maxHeap.push(5)
maxHeap.push(40)
maxHeap.push(70)
maxHeap.push(90)
maxHeap.push(44)

console.log(maxHeap.heap)

arr= []
arr.push(maxHeap.pull())
arr.push(maxHeap.pull())
arr.push(maxHeap.pull())
arr.push(maxHeap.pull())
arr.push(maxHeap.pull())
arr.push(maxHeap.pull())

console.log(arr)