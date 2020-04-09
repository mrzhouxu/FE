/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head || !head.next) return false;

    var flag = head;
    while (flag && flag.next) {
        // head = head.next;
        // flag = flag.next.next;
        [head, flag] = [head.next, flag.next.next];
        if (head === flag) {
            return true;
        }
    }
    return false;
};