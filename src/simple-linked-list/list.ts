import { ListNode } from "./node";
import toString from 'lodash/toString';

export class LinkedList {
    
    private head: ListNode;
    private length: number;

    constructor() {
        this.length = 0;
    }

    private nullPointerError(index: number) {
        if (index >= this.length) {
            throw new Error("Null pointer error");
        }
    }

    private emptyListError() {
        if (this.head === null || this.head === undefined) {
            throw new Error("empty list");
        }
    }

    public add(value: any, index?: number, set?: boolean): void {
        const node: ListNode = new ListNode(value);
        if (this.head === null || this.head === undefined) {
            this.head = node;
        } else if (index !== null && index !== undefined) {            
            try {                
                this.nullPointerError(index);
                let actual = this.head;

                for(let i = 0; i < index-1; i++) {
                    const nextNode = actual.getNext();
                    actual = nextNode;
                }
                
                node.setNext(actual.getNext());
                actual.setNext(node);
            } catch (err) {
                if(set === true || index === this.length) {
                    this.add(value);
                } else throw err;
            }
        } else {
            let actual = this.head;
            while(actual !== null && actual !== undefined) {
                const nextNode = actual.getNext();
                if(nextNode === undefined || nextNode === null) break;
                actual = nextNode; 
            }
            actual.setNext(node);            
        }
        this.length++;
    }

    public toString(): string {
        
        this.emptyListError();

        let result;
        let actual = this.head;
        while(actual !== null && actual !== undefined) {
            const stringValue = toString(actual.getValue())
            result = result === undefined || result === null ? stringValue : `${result}, ${stringValue}`;
            actual = actual.getNext();
        }
        return result;
    }

    public set(value: any, index: number, set?: boolean) {
        this.emptyListError();
          
        try {            
            this.nullPointerError(index);
            let actual = this.head;
            for(let i = 0; i < index; i++) {
                const nextNode = actual.getNext();
                if(nextNode === undefined || nextNode === null) break;
                actual = nextNode;
            }
            actual.setValue(value);
        } catch (err) {
            if(set === true) {
                this.add(value);
            } else throw err;
        }
    }

    public remove(index: number): void {
        this.emptyListError();
        this.nullPointerError(index);

        let actual = this.head;

        for(let i = 0; i < index-1; i++) {  
            const nextNode = actual.getNext();
            actual = nextNode;
        }
        const nextNode = actual.getNext();

        if (nextNode === null || nextNode === undefined) {
            actual.setNext(null);
        } else {
            actual.setNext(nextNode.getNext());
        }
        this.length--;
    }

    public size(): number {
        return this.length;
    }
}