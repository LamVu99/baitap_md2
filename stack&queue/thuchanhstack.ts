class Stack<T> {
    container: T[] = [];

    constructor() {
    }
    push(data: T): void {
        this.container.push(data)
    }
    pop(): T | undefined {
        return this.container.pop();
    }
    size(): number {
        return this.container.length;
    }

}

let stack = new Stack<number>();
stack.push(1);
stack.push(3);
stack.push(5);
stack.push(7);

console.log(stack.pop()) // output: 7
console.log(stack.size())// 3