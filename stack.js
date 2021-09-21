class Node {
   constructor(val) {
      this.value = val
      this.next = null
   }
}

class Stack {
   constructor() {
      this.top = null
      this.length = 0
   }

   push(val) {
      const newNode = new Node(val)
      if (!this.top) {
         this.top = newNode
      }
      newNode.next = this.top
      this.top = newNode
      return ++this.length
   }

   pop() {
      if (!this.top) return undefined
      const oldTop = this.top
      if (this.length === 1) {
         this.top = null
      } else {
         this.top = oldTop.next
         oldTop.next = null
      }
      this.length--
      return oldTop.value
   }
}

const stack = new Stack()

stack.push(12)
stack.push(18)
stack.push(20)
stack.push(35)

console.log(stack)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
