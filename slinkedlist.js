class Node {
   constructor(val) {
      this.value = val
      this.next = null
   }
}

class SingleLinkedList {
   constructor() {
      this.head = null
      this.tail = null
      this.length = 0
   }

   unshift(val) {
      if (typeof val !== "number") return false
      const node = new Node(val)
      if (!this.head) {
         this.head = node
         this.tail = node
      } else {
         node.next = this.head
         this.head = node
      }
      this.length += 1
      return this.head
   }

   push(val) {
      if (typeof val !== "number") return false
      const node = new Node(val)
      if (!this.head) {
         this.head = node
         this.tail = node
      } else {
         this.tail.next = node
         this.tail = node
      }
      this.length += 1
      return this.tail
   }

   shift() {
      if (!this.head) {
         return undefined
      } else {
         const temp = this.head
         this.head = temp.next
         temp.next = null
         this.length -= 1
         if (this.length === 0) {
            this.tail = null
            this.head = null
         }
         return temp
      }
   }

   pop() {
      let temp = this.head
      if (!this.head) {
         return undefined
      } else {
         while (temp.next) {
            if (!temp.next.next) {
               const prevEnd = this.tail
               this.tail = temp
               temp.next = null
               this.length -= 1
               if (this.length === 0) {
                  this.head = null
                  this.tail = null
               }
               return prevEnd
            }
            temp = temp.next
         }
      }
   }

   getNode(location) {
      if (!this.head || typeof location !== "number" || location < 0 || location > this.length) {
         return undefined
      } else {
         let temp = this.head
         for (let i = 0; i <= location; i++) {
            if (i === location) {
               return temp
            }
            temp = temp.next
         }
      }
   }

   setNode(location, updatedValue) {
      if (typeof updatedValue !== "number") return undefined
      let node = this.getNode(location)
      if (!node) return undefined
      node.value = updatedValue
      return node
   }

   insertNode(location, value) {
      if (location === this.length) return this.push(value)
      if (location === 0) return this.unshift(value)
      const insertNode = new Node(value)
      const nodeBeforeInsert = this.getNode(location - 1)
      if (!nodeBeforeInsert) return undefined
      insertNode.next = nodeBeforeInsert.next
      nodeBeforeInsert.next = insertNode
      this.length++
      return insertNode
   }

   removeNode(location) {
      if (location === this.length - 1) return this.pop()
      if (location === 0) return this.shift()
      const prevNode = this.getNode(location - 1)
      if (!prevNode || !prevNode.next.next) return undefined
      const removedNode = prevNode.next
      prevNode.next = removedNode.next
      this.length--
      return removedNode
   }

   reverse() {
      if (!this.head) return undefined
      if (this.head === this.tail) return this
      let temp = this.head
      this.head = this.tail
      this.tail = temp
      let prevNode = null
      let nextNode = null
      for (let i = 0; i < this.length; i++) {
         nextNode = temp.next
         temp.next = prevNode
         prevNode = temp
         temp = nextNode
      }
      return list
   }
}

const list = new SingleLinkedList()
list.unshift(18) //18
list.unshift(13) // 13, 18
list.unshift(2) // 2, 13, 18
list.push(17) // 2, 13, 18, 17
list.push(24) // 2, 13, 18, 17, 24
list.push(10)

//should be 2,13,18,17, 24, 10, length of 6
console.log(list)

list.getNode(3) // 17
list.setNode(3, 100) // 17 => 100
list.insertNode(2, 35) // 35 inserted before 18 and then 35 point to 18
list.removeNode(2) // 35 is gone, 18 points to 100
list.insertNode(0, 55) // 55 points to 2
console.log("\n---- STARTING LIST DISPLAY ----\n")
for (let i = 0; i < list.length; i++) {
   console.log(list.getNode(i))
}
console.log(list.length)

// should be 55, 2, 13, 18, 100, 24, 10 length of 7
list.reverse()
console.log("\n---- STARTING REVERSE DISPLAY ----\n")
for (let i = 0; i < list.length; i++) {
   console.log(list.getNode(i))
}
