const qGen = require("./queue")

class Node {
   constructor(value) {
      this.value = value
      this.left = null
      this.right = null
   }
}

class BinarySearchTree {
   constructor() {
      this.root = null
   }

   insert(input) {
      const newNode = new Node(input)
      if (!this.root) {
         this.root = newNode
      } else {
         let temp = this.root
         while (temp.value > newNode.value || temp.value < newNode.value) {
            if (temp.value < newNode.value) {
               if (temp.right) {
                  temp = temp.right
                  continue
               }
               temp.right = newNode
            } else {
               if (temp.left) {
                  temp = temp.left
                  continue
               }
               temp.left = newNode
            }
            return this
         }
      }
   }

   find(query) {
      if (!this.root) return undefined
      if (this.root.value === query) return this.root
      let temp = this.root
      while (temp && temp.value !== query) {
         if (temp.value < query) {
            temp = temp.right
            continue
         }
         if (temp.value > query) {
            temp = temp.left
            continue
         }
      }
      return temp && temp.value === query ? temp : undefined
   }

   breadthFirstSearch() {
      //faster due to dequeue being an O(1) vs. shift needing to reindex and move elements
      if (!this.root) return undefined
      const queue = new qGen.Queue()
      let temp = this.root
      queue.enqueue(temp)
      let data = []
      while (queue.start) {
         temp = queue.dequeue()
         //because the queue class generates a seperate node class as well, I need to dig down one level
         // relabeled queue node to data instead of value to clarify which class is being worked with
         // data refers to queue nodes, value refers to tree nodes
         data.push(temp.data.value)
         //change to temp.data to see node or temp.data.value to see numbers
         if (temp.data.left) queue.enqueue(temp.data.left)
         if (temp.data.right) queue.enqueue(temp.data.right)
      }
      return data
   }

   BFS() {
      let node = this.root,
         data = [],
         queue = []

      queue.push(node)
      while (queue.length) {
         node = queue.shift()
         data.push(node.value)
         if (node.left) queue.push(node.left)
         if (node.right) queue.push(node.right)
      }
      return data
   }

   depthFirstSearch(option = "preO") {
      if (!this.root) return undefined
      const data = []
      this.traverse(this.root, data, option)
      return data
   }

   traverse(node, data, option) {
      if (option === "preO") data.push(node.value)
      if (node.left) this.traverse(node.left, data, option)
      if (option === "inO") data.push(node.value)
      if (node.right) this.traverse(node.right, data, option)
      if (option === "postO") data.push(node.value)
   }
}
 
const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(2)
tree.insert(13)
tree.insert(11)
tree.insert(7)
tree.insert(16)

console.log("tree:", tree)
// console.log(tree.root.left)
// console.log(tree.root.right)
// console.log(tree.find(11))
console.log("bfs start w/ queue:", tree.breadthFirstSearch())
//console.log("bfs with arrays:", tree.BFS())
console.log("dfs pre-order", tree.depthFirstSearch())
console.log("dfs in-order", tree.depthFirstSearch("inO"))
console.log("dfs post-order", tree.depthFirstSearch("postO"))
