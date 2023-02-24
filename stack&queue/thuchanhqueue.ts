class Queue<T> {
    container: T[] = [];

    constructor() {
    }
    enqueue(item: T): void {
        this.container.push(item);
    }
    dequeue(): T | undefined {
        return this.container.shift();
    }
    size(): number {
        return this.container.length
    }

}

let queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.dequeue()) // 1
console.log(queue.size())