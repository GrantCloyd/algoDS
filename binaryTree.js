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
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(2)
tree.insert(13)
tree.insert(11)
tree.insert(7)
tree.insert(16)

console.log(tree)
console.log(tree.root.left)
console.log(tree.root.right)
console.log(tree.find(11))
