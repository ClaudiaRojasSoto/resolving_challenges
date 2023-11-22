var detectCycle = function(head) {
    if (!head || !head.next) {
        return null;
    }

    let slow = head;
    let fast = head;
    let entry = head;

    // Find the meeting point in the cycle
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) { // Cycle detected
            // Find the entry point
            while (slow !== entry) {
                slow = slow.next;
                entry = entry.next;
            }
            return entry;
        }
    }

    return null; // No cycle
};

// Example usage:
let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next; // Create a cycle for the example

console.log(detectCycle(head)); // Return the node with value 2
