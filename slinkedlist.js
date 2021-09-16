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
      const node = new Node(val)
      if (!this.head) {
         this.head = node
         this.tail = node
      } else {
         node.next = this.head
         this.head = node
      }
      this.length += 1
   }

   push(val) {
      const node = new Node(val)
      if (!this.head) {
         this.head = node
         this.tail = node
      } else {
         this.tail.next = node
         this.tail = node
      }
      this.length += 1
   }

   pop() {
      let temp = this.head
      if (!this.head) {
         return null
      } else {
         while (temp.next !== null) {
            if (temp.next.next === null) {
               const prevEnd = this.tail
               this.tail = temp
               temp.next = null
               this.length -= 1
               return prevEnd
            }
            temp = temp.next
         }
      }
   }
}

const list = new SingleLinkedList()
list.unshift(18)
list.unshift(13)
list.push(17)
list.push(24)
list.unshift(2)
list.push(10)

console.log(list.head)
console.log(list.tail)
console.log(list.length)
console.log(list)
console.log(list.pop())
console.log(list)
