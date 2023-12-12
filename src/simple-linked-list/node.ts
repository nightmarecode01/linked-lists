export class ListNode {
    private value: any;
    private next: ListNode;

    constructor(value: any) {
        this.value = value;
    }

    public getValue() {
        return this.value;
    }

    public setValue(value: any) {
        this.value = value;
    }

    public getNext() {
        return this.next;
    }

    public setNext(node: ListNode) {
        this.next = node;
    }
}