//using array to model tree/node structure with children being placed at 2n + 1 or 2n + 2 distance (left vs right)

class MaxBinaryHeap {
   constructor() {
      this.values = []
   }

   insert(val) {
      const data = this.values
      data.push(val)
      this.bubbleUp()
   }

   bubbleUp() {
      const dataArr = this.values
      if (dataArr.length === 1) return dataArr
      let index = dataArr.length - 1
      let parentIndex = Math.floor((index - 1) / 2)

      while (dataArr[index] > dataArr[parentIndex]) {
         ;[dataArr[index], dataArr[parentIndex]] = [dataArr[parentIndex], dataArr[index]]
         index = parentIndex
      }
      return dataArr
   }

   extractMax() {
      const max = this.values[0]
      const end = this.values.pop()
      if (this.values.length > 0) {
         this.values[0] = end
         this.sinkDown()
      }
      return max
   }
   sinkDown() {
      let index = 0
      const length = this.values.length
      const element = this.values[0]
      while (true) {
         let leftChildIdx = 2 * index + 1
         let rightChildIdx = 2 * index + 2
         let leftChild, rightChild
         let swap = null

         if (leftChildIdx < length) {
            leftChild = this.values[leftChildIdx]
            if (leftChild > element) {
               swap = leftChildIdx
            }
         }
         if (rightChildIdx < length) {
            rightChild = this.values[rightChildIdx]
            if (
               (swap === null && rightChild > element) ||
               (swap !== null && rightChild > leftChild)
            ) {
               swap = rightChildIdx
            }
         }

         if (swap === null) break
         this.values[index] = this.values[swap]
         this.values[swap] = element
         idx = swap
      }
   }
}

let heap = new MaxBinaryHeap()

heap.insert(11)
heap.insert(35)
heap.insert(70)
heap.insert(27)
heap.insert(39)
heap.insert(25)
console.log(heap.values)
heap.extractMax()
console.log(heap.values)
