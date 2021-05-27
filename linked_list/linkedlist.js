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
        this.length = 0
    }

    // Add to end of list
    append(value) {
        if (!this.tail) {
            this.head = this.tail = new Node(value)
            this.length++
        } else {
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
            this.tail.prev = oldTail
            this.length++
        }
    }

    // Add to start of list
    prepend(value) {
        if (!this.head) {
            this.head = this.tail = new Node(value)
            this.length++
        } else {
            let oldHead = this.head
            this.head = new Node(value)
            oldHead.prev = this.head
            this.head.next = oldHead
            this.length++
        }
    }

    //shift
    deleteHead() {
        if (!this.head) return null
        let removedHead = this.head
        if (this.head === this.tail) {
            this.head = this.tail = null
            this.length = 0
        } else {
            this.head = this.head.next
            this.head.prev = null
            this.length--
        }
        return removedHead.value
    }

    //pop
    deleteTail() {
        if (!this.tail) return null
        let removedTail = this.tail
        if (this.tail === this.head) {
            this.tail = this.head = null
            this.length = 0
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            this.length--
        }
        return removedTail.value
    }

    get(index) {
        if (index < 0 || index > this.length) return null
        var count, currentNode
        if (index <= this.length / 2) {
            count = 0
            currentNode = this.head
            while (count !== index) {
                currentNode = currentNode.next
                count++
            }
        } else {
            count = this.length - 1
            currentNode = this.tail
            while (count !== index) {
                currentNode = currentNode.prev
                count--
            }
        }
        return currentNode
    }

    set(index, value) {
        let node = this.get(index)
        if (node !== null) {
            node.value = value
            return true
        }
        return false
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return null
        if (index === 0) return this.removedHead()
        if (index === this.length) return this.removedTail()
        // chain node break start
        let prevNode = this.get(index - 1)
        // chain node break end
        let prevNodeNext = prevNode.next
        let newNode = new Node(value)

        //point break point start to new next node
        prevNode.next = newNode
        // point new node to prev and next
        newNode.prev = prevNode
        newNode.next = prevNodeNext
        //point brea point end to new prev node
        prevNodeNext.prev = newNode
        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index > this.length) return null
        if (index === 0) return this.removedHead()
        if (index === this.length) return this.removedTail()
        let removedNode = this.get(index)
        removedNode.prev.next = removedNode.next
        removedNode.next.prev = removedNode.prev
        removedNode.next = null
        removedNode.prev = null
        this.length--
        return removedNode
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
list.append(6) // add to the tail
list.prepend(0) // add 0 to the head


console.log(

    list.search(4),// node ref with value 4
    list.search(77), // null
    list.deleteHead(), // 0
    list.deleteTail(), // 6
    list.search(5), // null
    list.get(-1), // null
    list.get(6), // null
    list.get(3), // 4
    list.set(3, 6), // set value to 4 at index 3
    list.insert(3, "hello"), // insert "hello" to index 3
    list.get(3), // get "hello"
    list.remove(3), // remove hello
    list.get(3), // get 5

    //list


)

