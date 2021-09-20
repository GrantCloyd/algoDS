class Node {
   constructor(val) {
      this.value = val
      this.next = null
      this.prev = null
   }
}

class DblLinkedList {
   constructor() {
      this.head = null
      this.tail = null
      this.length = 0
   }

   push(val) {
      const node = new Node(val)
      if (!this.head) {
         this.head = node
         this.tail = node
      } else {
         this.tail.next = node
         node.prev = this.tail
         this.tail = node
      }
      this.length++
      return this
   }

   pop() {
      if (!this.head) return false
      let temp = this.tail
      if (this.head === this.tail) {
         this.head = null
         this.tail = null
      } else {
         this.tail = this.tail.prev
         this.tail.next = null
         temp.prev = null
      }
      this.length--
      return temp
   }
}

const list = new DblLinkedList()

let i = 5

while (i > 0) {
   list.push(Math.floor(Math.random() * 100))
   i--
}

console.log("----PRINTING PUSH-----")
let current = list.head
while (current) {
   console.log(current)
   current = current.next
}

console.log("Final list:", list)

console.log("---- Printing POP ----")
while (list.tail) {
   console.log(list.tail)
   list.pop()
}

console.log(list)
