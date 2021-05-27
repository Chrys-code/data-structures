class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addNode(node) {
        if (!this.adjacencyList[node]) this.adjacencyList[node] = []
    }

    addEdge(node1, node2) {
        this.adjacencyList[node1].push(node2)
        this.adjacencyList[node2].push(node1)
    }

    removeEdge(node1, node2) {
        this.adjacencyList[node1] = this.adjacencyList[node1].filter(n => n !== node2)
        this.adjacencyList[node2] = this.adjacencyList[node2].filter(n => n !== node1)
    }

    removeNode(node) {
        while (this.adjacencyList[node].length) {
            const adjacentNode = this.adjacencyList[node].pop()
            this.removeEdge(node, adjacentNode)
        }
        delete this.adjacencyList[node]
    }

    dfs(startNode) {
        let result = []
        let visited = {}
        const adjacencyList = this.adjacencyList

            ; (function recDFS(node) {
                if (!node) return null
                result.push(node)
                visited[node] = true
                adjacencyList[node].forEach(neighbour => {
                    if (!visited[neighbour]) {
                        return recDFS(neighbour)
                    }
                })
            })(startNode);
        return result
    }

    bfs(startNode) {
        let result = []
        let queue = [startNode]
        let visited = { [startNode]: true }
        let currentNode
        while (queue.length) {
            currentNode = queue.shift()
            result.push(currentNode)
            this.adjacencyList[currentNode].forEach(node => {
                if (!visited[node]) {
                    console.log(visited)
                    visited[node] = true
                    queue.push(node)
                }
            })
        }
        return result
    }
}


const graph = new Graph()

graph.addNode("Edinburgh")
graph.addNode("Aberdeen")
graph.addNode("London")
graph.addNode("Cardiff")
graph.addNode("Glasgow")
graph.addNode("Southampton")

graph.addEdge("Edinburgh", "London")
graph.addEdge("Edinburgh", "Glasgow")
graph.addEdge("London", "Glasgow")
graph.addEdge("Cardiff", "London")
graph.addEdge("London", "Southampton")

console.log(
    graph.bfs("Glasgow"),
    graph)
