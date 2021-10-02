class Graph {
   constructor() {
      this.adjacencyList = {}
   }

   addVertex(vertex) {
      if (vertex === null || vertex === "") return undefined
      if (this.hasOwnProperty(vertex)) return undefined
      this.adjacencyList[vertex] = []
   }

   addEdge(vertex1, vertex2) {
      if (
         !vertex1 ||
         !vertex2 ||
         !this.adjacencyList[vertex1] ||
         !this.adjacencyList[vertex2] ||
         this.adjacencyList[vertex1].includes(vertex2)
      )
         return undefined
      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex2].push(vertex1)
   }

   removeEdge(vertex1, vertex2) {
      if (!vertex1 || !vertex2 || !this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
         return undefined
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(ver => ver !== vertex2)
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(ver => ver !== vertex1)
   }

   removeVertex(vertex) {
      if (!vertex || !this.adjacencyList[vertex]) return undefined
      while (this.adjacencyList[vertex].length) {
         const connectedVertex = this.adjacencyList[vertex].pop()
         this.adjacencyList[connectedVertex] = this.adjacencyList[connectedVertex].filter(
            v => v !== vertex
         )
      }
      delete this.adjacencyList[vertex]
   }
}

const graph = new Graph()
graph.addVertex("Dallas")
graph.addVertex("Aspen")
graph.addVertex("LA")
graph.addEdge("LA", "Dallas")
graph.addEdge("LA", "Aspen")
graph.addEdge("Nope", "Not here")

console.log(graph)

graph.removeEdge("LA", "Aspen")
graph.removeEdge("Dallas", "LA")
graph.addEdge("Dallas", "LA")
console.log(graph)
graph.removeVertex("LA")
graph.removeVertex("WHYYYYY WOULD YOU BREAK ME")
console.log(graph)
