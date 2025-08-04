/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head || !head.next || k <= 1) return head
    let current = head
    let newHead = new ListNode(undefined, null)
    let pre = newHead
    while(current) {
        let count = 1, localHead = current, tail
        while(current && count < k) {
            count++
            current = current.next
        }
        if (current) {
            // 满足k个
            tail = current.next
            current.next = null
            pre.next = reverse(localHead)
            localHead.next = tail

            pre = localHead
            current = tail
        } else {
            pre.next = localHead
        }
    }
    return newHead.next
};

function reverse(head) {
    if (!head || !head.next) return head
    let pre = null, current = head,  temp
    while(current) {
        temp = current.next
        current.next = pre
        pre = current
        current = temp
    }
    return pre
}