// Start with your code from LinkedList challenge.
class LinkedListNode {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor (){
    this.head = null;
    this.tail = null;
  }
  add(value){
    const newAdd = new LinkedListNode(value);

    if(!this.head){
      this.head = newAdd;
      this.tail = newAdd;
    } else {
      this.tail.next = newAdd;
      this.tail = newAdd;
    }
  }

  remove(){
    if(!this.head){
      return null
    }
    const remove = this.head;

    if (this.head === this.tail){
    this.head = null;
    this.tail = null;
  }
  else{
    this.head = this.head.next;
  }

  remove.next = null
  return remove.value;
  }
}
class Queue {
  constructor(){
    this.list = new linkedList();
  }
  add(number) {
    this.list.add(number);
  }
  
  remove() {
    return this.list.remove() || -1;
  }
}

const queue = new Queue()

queue.add(3)
queue.add(5)
console.log(queue.remove())
// => 3

queue.add(2)
queue.add(7)
console.log(queue.remove())
// => 5

console.log(queue.remove())
// => 2

console.log(queue.remove())
// => 7

console.log(queue.remove())
// => -1

module.exports = Queue
