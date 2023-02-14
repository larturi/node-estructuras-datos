class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    // Retorna el ultimo elemento de la pila
    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);

        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.top) {
          return null;
        }
        if (this.top === this.bottom) {
          this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
    
        return this;
    }
}

console.log('\nCreo una pila y agrego 4 items:');
const myStack = new Stack();
myStack.push("Rojo")
myStack.push("Verde")
myStack.push("Amarillo")
myStack.push("Azul")
console.log(myStack);

console.log('\nHago el peek() -> ', myStack.peek().value);

console.log('\nHago un pop()');
myStack.pop();
console.log(myStack);

console.log('\nHago el peek() -> ', myStack.peek().value);
