export class Node<T> {
    data: T;
    next: Node<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }

    readData(): T {
        return this.data;
    }
}
export class LinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;

    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insertFirstNode(data: T): void {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;

        if (!this.tail) {
            this.tail = node
        }
        this.size++;
    }
    insertLastNode(data: T): void {
        if (!this.head){
            this.insertFirstNode(data);
        }else {
            let node = new Node(data);
            if(this.tail) {
                this.tail.next = node;
                this.tail = node;
                this.size++;
            }
        }
    }
    getSize() : number{
        return this.size;
    }
    readList(): T[] {
        let listData = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next
        }
        return listData;
    }
}
let linkedList = new LinkedList();
linkedList.insertFirstNode(1);
linkedList.insertFirstNode(2);
linkedList.insertFirstNode(3);
linkedList.insertFirstNode(30);
linkedList.insertLastNode(40);
console.log(linkedList.getSize());
console.log(linkedList.readList());