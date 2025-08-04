/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let newHead = new ListNode(undefined, head)
    let pre = newHead
    while(head) {
        if (head.val === val) {
            pre.next = head.next
        } else {
            pre.next = head
            // 只有当当前节点不等于val时，pre才后移
            // 否则pre不动，head.next会被赋值给pre.next
            // 这样就可以跳过当前节点
            pre = pre.next
        }
        head = head.next
    }
    return newHead.next
};