class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

class SingleLinkedList {
   constructor(value) {
      this.head = {
         value: value,
         next: null,
      };
      this.tail = this.head;
      this.length = 1;
   }

   append(value) {
      const newNode = new Node(value);

      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;

      return this;
   }

   prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;

      return this;
   }

   insert(value, index) {
      if (index >= this.length) {
         return this.append(value);
      }

      const newNode = new Node(value);
      const firstPointer = this.getTheIndex(index - 1);
      const holdingPointer = firstPointer.next;
      firstPointer.next = newNode;
      newNode.next = holdingPointer;

      this.length++;

      return this;
   }

   getTheIndex(index) {
      let counter = 0;
      let currentNode = this.head;

      while (counter !== index) {
         currentNode = currentNode.next;
         counter++;
      }

      return currentNode;
   }

   print() {
      let array = [];

      for (let i = 0; i < this.length; i++) {
         let nodeToPrint = this.head;
         for (let j = 0; j < i; j++) {
            nodeToPrint = nodeToPrint.next;
         }

         array.push(nodeToPrint.value);
      }
      console.log(array.join(', '));
   }
}

console.log('\nCreo la lista y hago append de 4 valores');
let mySingleLinkedList = new SingleLinkedList(1);
mySingleLinkedList.append(2);
mySingleLinkedList.append(3);
mySingleLinkedList.append(4);
mySingleLinkedList.append(5);
mySingleLinkedList.print();

console.log('\nHago prepend de dos valores');
mySingleLinkedList.prepend(10);
mySingleLinkedList.prepend(20);
mySingleLinkedList.print();

console.log('\nInserto uno en la posicion 3');
mySingleLinkedList.insert(100, 3);
mySingleLinkedList.print();
