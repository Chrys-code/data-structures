class PriorityQueue {
    constructor() {
        this.storage = []
        this.head = 0
        this.tail = 0
    }

    enqueue(val, prio) {
        this.values.push({ val, prio })
        this.sort()
        this.tail++
    }

    dequeue() {
        this.head++
        return this.values.shift()
    }

    sort() {
        this.values.sort((a, b) => a.prio - b.prio)
    }
}