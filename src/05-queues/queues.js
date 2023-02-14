class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    // Retorna el primer elemento de la fila
    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;

        return this;
    }

    dequeue() {
        if (!this.first) {
            return null;
        }

        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        this.length--;

        return this;
    }
}

console.log('\nCreo una cola y agrego 4 items:');
const myQueue = new Queue();
myQueue.enqueue("Perro")
myQueue.enqueue("Gato")
myQueue.enqueue("Conejo")
myQueue.enqueue("Leon")
console.log(myQueue);

console.log('\nHago el peek() -> ', myQueue.peek().value);

console.log('\nHago un dequeue()');
myQueue.dequeue();
console.log(myQueue);

console.log('\nHago el peek() -> ', myQueue.peek().value);
