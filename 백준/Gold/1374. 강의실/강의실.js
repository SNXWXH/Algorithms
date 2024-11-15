const file = process.platform === 'linux' ? 0 : './input.txt';
const [N, ...input] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

const lectures = input.map(line => line.split(' ').slice(1).map(Number));

lectures.sort((a, b) => a[0] - b[0]);

const createMinHeap = () => {
  const heap = [];

  const offer = (value) => {
    heap.push(value);
    heapifyUp();
  };

  const poll = () => {
    if (heap.length === 1) return heap.pop();
    const top = heap[0];
    heap[0] = heap.pop();
    heapifyDown();
    return top;
  };

  const peek = () => heap[0];

  const heapifyUp = () => {
    let index = heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (heap[parentIndex] <= heap[index]) break;
      [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
      index = parentIndex;
    }
  };

  const heapifyDown = () => {
    let index = 0;
    const length = heap.length;
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (leftChildIndex < length && heap[leftChildIndex] < heap[smallest]) {
        smallest = leftChildIndex;
      }

      if (rightChildIndex < length && heap[rightChildIndex] < heap[smallest]) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
      index = smallest;
    }
  };

  return { offer, poll, peek, heap };
};

const pq = createMinHeap();
pq.offer(lectures[0][1]);

for (let i = 1; i < lectures.length; i++) {
  const [startTime, endTime] = lectures[i];

  if (pq.peek() <= startTime) {
    pq.poll();
  }

  pq.offer(endTime);
}

console.log(pq.heap.length);
