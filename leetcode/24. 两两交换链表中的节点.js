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
var swapPairs = function (head) {

    // if (!head || !head.next) return head;


    // var pre = new ListNode(0);
    // pre.next = head;

    // var newHead = head.next;

    // while (pre.next && pre.next.next) {
    //     var a = pre.next;
    //     var b = a.next;
    //     a.next = b.next;
    //     b.next = a;
    //     pre.next = b;
    //     pre = a;
    // }

    // return newHead;
    if (!head || !head.next) return head;


    var pre = new ListNode(0);
    pre.next = head;

    var newHead = head.next;

    while (pre.next && pre.next.next) {
        var a = pre.next;
        var b = a.next;
        [a.next, b.next, pre.next] = [b.next, a, b];
        pre = a;
    }

    return newHead;
};