/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {

    // if(!head || !head.next) return head;

    // var cur = head;
    // var prev = null;

    // while(cur) {
    //     const next = cur.next;
    //     cur.next = prev;
    //     prev = cur;
    //     cur = next;
    // }
    // return prev;

    if (!head || !head.next) return head;

    var prev = null;
    
    while (head) {
        [head.next, prev, head] = [prev, head, head.next];
    }

    return prev;
};