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

   insert(val) {
      const newNode = new Node(val)
      if (!this.root) {
         this.root = newNode
      } else {
         let tempPrev = this.root
         let tempCurr = this.root
         while (tempCurr.value > newNode.value || tempCurr.value < newNode.value) {
            if (tempCurr.value < newNode.value) {
               tempCurr = tempCurr.right
               if (tempCurr) {
                  tempPrev = tempPrev.right
                  continue
               } else {
                  tempPrev.right = newNode
               }
            } else {
               tempCurr = tempCurr.left
               if (tempCurr) {
                  tempPrev = tempPrev.left
                  continue
               } else {
                  tempPrev.left = newNode
               }
            }
            return this
         }
      }
   }
}

const tree = new BinarySearchTree()
tree.insert(3)
tree.insert(10)
tree.insert(2)
tree.insert(5)
tree.insert(12)
tree.insert(1)
tree.insert(14)

console.log(tree)
console.log(tree.root.left)
console.log(tree.root.right)
