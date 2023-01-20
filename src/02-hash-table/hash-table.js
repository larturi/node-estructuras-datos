class HashTable {
   constructor(size) {
      this.data = new Array(size);
   }
   hashMethod(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
         hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
   }
   set(key, value) {
      const address = this.hashMethod(key);
      if (!this.data[address]) {
         this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.data;
   }
   get(key) {
      const address = this.hashMethod(key);
      const currentBucket = this.data[address];
      if (currentBucket) {
         for (let i = 0; i < currentBucket.length; i++) {
            if (currentBucket[i][0] === key) {
               return currentBucket[i][1];
            }
         }
      }
      return undefined;
   }
   delete(key) {
      const address = this.hashMethod(key);
      const currentBucket = this.data[address];
      if (currentBucket) {
         for (let i = 0; i < currentBucket.length; i++) {
            if (currentBucket[i][0] === key) {
               let arrDeletedItems = currentBucket.splice(i, 1);
               return arrDeletedItems[0];
            }
         }
      }
      return undefined;
   }

   getAllKeys() {
      const array = this.data;
      let key = [];

      array.forEach((e) => {
         e.forEach((k) => {
            key.push(k[0]);
         });
      });
      return key;
   }
}

const myHashTable = new HashTable(50);
console.log('\nCreo tres elementos:');
myHashTable.set('Leandro', 1984);
myHashTable.set('Cande', 2015);
myHashTable.set('Test', 1111);
myHashTable.set('Lichi', 2020);
console.log(myHashTable.data);

console.log('\nBusco key=Cande =>', myHashTable.get('Cande'));

console.log('\nElimino key=Test', myHashTable.delete('Test'));
console.log(myHashTable.data);

console.log('\nGetAllKeys() =>', myHashTable.getAllKeys());
