import { LinkedList } from "./simple-linked-list/list";

class Main {
    start() {
        const linkedList = new LinkedList();
        
        linkedList.add(0);
        linkedList.add(5);
        linkedList.add(15);
        linkedList.add(15);
        linkedList.add(15);
        linkedList.add(17);

        linkedList.set(1000, 6, true);

        linkedList.remove(6);
        linkedList.remove(5);

        linkedList.add(2000);

        linkedList.add(16, 3);        
        linkedList.add(16, 6);
        linkedList.add(16, 8);

        console.log(linkedList.size());
        console.log(linkedList.toString());
    }
}

const makeApp = async (): Promise<Main> => {    
    return new Main();    
};

export default makeApp;