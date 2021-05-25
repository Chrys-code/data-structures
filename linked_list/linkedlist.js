class Node {
    constructor(value, prev, next) {
        this.value = value
        this.prev = prev || null
        this.next = next || null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    // Add to end of list
    append(value) {
        if (!this.tail) {
            this.head = this.tail = new Node(value)
        } else {
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
            this.tail.prev = oldTail
        }
    }

    // Add to start of list
    prepend(value) {
        if (!this.head) {
            this.head = this.tail = new Node(value)
        } else {
            let oldHead = this.head
            this.head = new Node(value)
            oldHead.prev = this.head
            this.head.next = oldHead
        }
    }

    deleteHead() {
        if (!this.head) return null
        let removedHead = this.head
        if (this.head === this.tail) {
            this.head = this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
        }
        return removedHead.value
    }

    deleteTail() {
        if (!this.tail) return null
        let removedTail = this.tail
        if (this.tail === this.head) {
            this.tail = this.head = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
        }
        return removedTail.value
    }

    search(value) {
        let currentNode = this.head

        while (currentNode) {
            if (currentNode.value === value) return currentNode
            currentNode = currentNode.next
        }

        return null
    }
}


let list = new LinkedList()

list.append(1) // add to the tail
list.append(2) // add to the tail
list.append(3) // add to the tail
list.append(4) // add to the tail
list.append(5) // add to the tail

list.prepend(0) // add 0 to the head

console.log(list.search(4)) // node ref with value 4
console.log(list.search(77)) // null
console.log(list.deleteHead()) // 0
console.log(list.deleteTail()) // 5
console.log(list.search(5)) // null


console.log(list)
