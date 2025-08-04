/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let vnode = pre = new ListNode(undefined, head)
    let current = pre.next, lastVal
    while(current) {
        if (current.val === current.next?.val) {
            lastVal = current.val
            current = current.next
        } else if (current.val === lastVal) {
            current = current.next
            pre.next = current
        } else {
            current = current.next
            pre = pre.next
        }
    }
    return vnode.next
    
};