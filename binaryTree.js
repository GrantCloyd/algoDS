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
         let temp = this.root
         //  let tempCurr = this.root
         while (temp.value > newNode.value || temp.value < newNode.value) {
            if (temp.value < newNode.value) {
               //    tempCurr = tempCurr.right
               if (temp.right) {
                  temp = temp.right
                  continue
               } else {
                  temp.right = newNode
               }
            } else {
               //    tempCurr = tempCurr.left
               if (temp.left) {
                  temp = temp.left
                  continue
               } else {
                  temp.left = newNode
               }
            }
            return this
         }
      }
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
