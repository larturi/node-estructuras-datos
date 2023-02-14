class Node {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
}
  
class BinarySearchTree {

    constructor() {
      this.root = null;
    }

    print(nodo = this, space = 10) {
        if (nodo?.root) {
            const newSpace = space + 5;
            this.print(nodo.root.left, newSpace);
            console.log(' '.repeat(space), nodo.root.value);
            this.print(nodo.root.right, newSpace);
        } else {
            if(nodo) {
                const newSpace = space + 5;
                this.print(nodo.left, newSpace);
                console.log(' '.repeat(space), nodo.value);
                this.print(nodo.right, newSpace);
            }
        }
    }

    insert(value) {
      const newNode = new Node(value);

      if (this.root === null) {
        this.root = newNode;
      } else {
        let currentNode = this.root;
        while (true) {
          if (value < currentNode.value) {
            if (!currentNode.left) {
              currentNode.left = newNode;
              return this;
            }
            currentNode = currentNode.left;
          } else {
            if (!currentNode.right) {
              currentNode.right = newNode;
              return this;
            }
            currentNode = currentNode.right;
          }
        }
      }
    }

  }
  console.log('\nCreo un arbol con 7 elementos:');
  const tree = new BinarySearchTree();

  tree.insert(10);
  tree.insert(4);
  tree.insert(20);
  tree.insert(2);
  tree.insert(8);
  tree.insert(17);
  tree.insert(170);

  tree.print();