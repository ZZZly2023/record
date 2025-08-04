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
var swapPairs = function(head) {
    let vnode = pre = new ListNode(undefined, head)
    let current = head, cn, cnn
    while(current && current.next) {
        // 记录下一站和下下一站
        cn = current.next
        cnn = current.next.next

        current.next.next = current
        current.next = cnn
        pre.next = cn
        
        // 指针后移
        pre = current
        current = cnn
    }
    return vnode.next
};