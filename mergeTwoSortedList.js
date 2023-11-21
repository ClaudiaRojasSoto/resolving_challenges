var mergeTwoLists = function(l1, l2) {
    // create a new dummy node as a start position for the merged list
    let dummy = new ListNode(0);
    let current = dummy;
    
    // loop through both lists until one of them has been completely traversed
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    // append any remaining elements from list1 or list2 to the end of the merged list
    if (l1) {
        current.next = l1;
    } else {
        current.next = l2;
    }
    
    // return the head of the merged list
    return dummy.next;
};
