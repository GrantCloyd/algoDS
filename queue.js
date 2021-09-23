class Node {
   constructor(val) {
      this.data = val
      this.next = null
   }
}

class Queue {
   constructor() {
      this.start = null
      this.end = null
   }

   enqueue(val) {
      const newNode = new Node(val)
      if (!this.start) {
         this.start = newNode
         this.end = newNode
      } else {
         this.end.next = newNode
         this.end = newNode
      }
      return this
   }

   dequeue() {
      if (!this.start) return undefined
      let temp = this.start
      if (this.start === this.end) {
         this.start = null
         this.end = null
      }
      this.start = temp.next

      return temp
   }
}

const q = new Queue()
q.enqueue(12)
q.enqueue(13)
q.enqueue(14)
q.enqueue(26)
console.log(q.start)
console.log(q.end)
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q)

module.exports = { Queue }
