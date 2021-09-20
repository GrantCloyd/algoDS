class Node {
   constructor(value) {
      this.value = value
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

   shift() {
      if (!this.head) return false
      let temp = this.head
      if (this.head === this.tail) {
         this.head = null
         this.tail = null
      } else {
         this.head = this.head.next
         this.head.prev = null
         temp.next = null
      }
      this.length--
      return temp
   }

   unshift(val) {
      const node = new Node(val)
      if (!this.head) {
         this.head = node
         this.tail = node
      } else {
         node.next = this.head
         this.head.prev = node
         this.head = node
      }
      this.length++
      return this
   }

   get(index) {
      if (!this.head) return undefined
      if (this.length - 1 < index || index < 0) return undefined
      let current = null
      if (index <= this.length / 2) {
         current = this.head
         for (let i = 0; i < index; i++) {
            current = current.next
         }
      } else {
         current = this.tail
         for (let i = this.length - 1; i > index; i--) {
            current = current.prev
         }
      }
      return current
   }

   set(index, value) {
      const updateNode = this.get(index)
      if (!updateNode) return undefined
      updateNode.value = value
      return updateNode
   }

   insert(index, value) {
      const newNode = new Node(value)
      if (this.length < index || index < 0) return undefined
      if (index === 0) return this.unshift(newNode)
      if (index === this.length) return this.push(newNode)
      let prevLocationNode = this.get(index)
      newNode.next = prevLocationNode
      newNode.prev = prevLocationNode.prev
      prevLocationNode.prev.next = newNode
      prevLocationNode.prev = newNode
      this.length++
      return this
   }
}

const list = new DblLinkedList()

let i = 8

while (i > 0) {
   list.unshift(Math.floor(Math.random() * 100))
   i--
}

console.log("----PRINTING PUSH/Unshift-----")
let current = list.head
let count = 0
while (current) {
   console.log(count, current)
   current = current.next
   count++
}

let j = 3

while (j > 0) {
   let randInd = Math.floor(Math.random() * i)
   let randVal = Math.floor(Math.random() * 100)
   list.insert(randInd, randVal)
   j--
}

// console.log("---- Printing POP/Shift ----")
// while (list.head) {
//    console.log(list.head)
//    list.shift()
// }

// console.log(list)

current = list.head
count = 0
console.log("------After insert----")
while (current) {
   console.log(count, current)
   current = current.next
   count++
}
