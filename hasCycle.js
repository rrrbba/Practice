function hasCycle(head) {
    //use the floyds cycle finding algorithm (tortise and hare algo)
    //slow and fast pointers

    if (head === null) {
        return false
    }

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        //make slow pointer do one hop
        slow = slow.next
        //make fast pointer do two hops
        fast = fast.next.next

        //check to see slow caught up to fast
        if (slow = fast) {
            return true
        }
        return false   
    }
    

}


listt = [1,2,3,4]