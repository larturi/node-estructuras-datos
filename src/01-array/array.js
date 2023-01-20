class MyArray {
   constructor() {
      this.length = 0;
      this.data = {};
   }

   get(index) {
      return this.data[index];
   }

   push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.data;
   }

   pop() {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
   }

   delete(index) {
      const item = this.data[index];
      this.shiftIndex(index);
      return item;
   }

   shiftIndex(index) {
      for (let i = index; i < this.length - 1; i++) {
         this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
   }

   unshift(item) {
      if (!item) return this.length;

      if (this.length !== 0) {
         for (let i = this.length - 1; i >= 0; i--) {
            this.data[i + 1] = this.data[i];
         }
      }

      this.data[0] = item;
      this.length++;
      return this.length;
   }

   shift() {
      if (this.length === 0) return undefined;

      const itemDeleted = this.data[0];

      for (let i = 0; i < this.length - 1; i++) {
         this.data[i] = this.data[i + 1];
      }

      this.length--;
      delete this.data[this.length];
      return itemDeleted;
   }
}

const myArray = new MyArray();

console.log('\nAgrego 4 items al array:');
myArray.push('A');
myArray.push('B');
myArray.push('C');
myArray.push('D');
console.log(myArray);

console.log('\nPop: Borro al ultimo elemento:');
myArray.pop();
console.log(myArray);

console.log('\nDelete al elemento 1:');
myArray.delete(1);
console.log(myArray);

console.log('\nUnshift: Agrego 2 elementos al inicio:');
myArray.unshift('X');
myArray.unshift('Y');
console.log(myArray);

console.log('\nShift: Borro el primer elemento');
myArray.shift();
console.log(myArray);
