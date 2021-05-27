// based on Dijkstra's pseudocode

class PriorityQueue {
    constructor() {
        this.storage = []
        this.head = 0
        this.tail = 0
    }

    enqueue(val, prio) {
        this.storage.push({ val, prio })
        this.sort()
        this.tail++
    }

    dequeue() {
        this.head++
        return this.storage.shift()
    }

    sort() {
        this.storage.sort((a, b) => a.prio - b.prio)
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }

    addNode(node) {
        if (!this.adjacencyList[node]) this.adjacencyList[node] = []
    }

    addEdge(node1, node2, weight) {
        this.adjacencyList[node1].push({ node: node2, weight })
        this.adjacencyList[node2].push({ node: node1, weight })
    }

    Dijsktra(start, end) {
        const nodes = new PriorityQueue()
        const distances = {}
        // storing steps to compare and update based on distance
        const previous = {}
        let path = []
        let smallest;

        // build up initial state
        for (let node in this.adjacencyList) {
            if (node === start) {
                distances[node] = 0
                nodes.enqueue(node, 0)
            } else {
                distances[node] = Infinity
                nodes.enqueue(node, Infinity)
            }
            previous[node] = null
        }

        while (nodes.storage.length) {
            smallest = nodes.dequeue().val
            console.log(smallest)
            if (smallest === end) {
                // Done and build path
                while (previous[smallest]) {
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break;
            }

            if (smallest || distances[smallest] !== Infinity) {
                for (let neightbour in this.adjacencyList[smallest]) {

                    // get neighbour node
                    let nextNode = this.adjacencyList[smallest][neightbour]
                    // calc new distance
                    let nextNeighbour = nextNode.node
                    let cand = distances[smallest] + nextNode.weight
                    if (cand < distances[nextNeighbour]) {
                        // update smallest distance
                        distances[nextNeighbour] = cand
                        // update source
                        previous[nextNeighbour] = smallest
                        // enqueue in priroity with new prio
                        nodes.enqueue(nextNeighbour, cand)
                    }

                }
            }
        }
        return path.concat(smallest).reverse()
    }
}

const graph = new WeightedGraph()

graph.addNode("Edinburgh")
graph.addNode("Aberdeen")
graph.addNode("London")
graph.addNode("Cardiff")
graph.addNode("Glasgow")
graph.addNode("Southampton")


graph.addEdge("Edinburgh", "London", 2)
graph.addEdge("Edinburgh", "Glasgow", 1)
graph.addEdge("London", "Glasgow", 4)
graph.addEdge("Cardiff", "London", 5)
graph.addEdge("London", "Southampton", 1)

console.log(
    graph.Dijsktra("London", "Glasgow"))