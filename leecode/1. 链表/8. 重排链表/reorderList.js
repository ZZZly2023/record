/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head.next) return head
    let slow = fast = head
    let pre = null, temp
    // 找到中点位置，将slow之前的元素先反转
    while(fast && fast.next) {
        fast = fast.next.next
        temp = slow.next
        slow.next = pre
        pre = slow
        slow = temp
    }
    let tempPre, newHead = new ListNode(undefined, null), first
    if (fast) {
        // slow 处于中间节点 这个中间节点是最终链表的最后一个节点
        newHead.next = slow
        slow = slow.next
        newHead.next.next = null
    }
    // slow和pre成对
    while(pre && slow) {
        // 保存指针
        tempPre = pre.next
        temp = slow.next
        first = newHead.next

        pre.next = slow
        newHead.next = pre
        slow.next = first

        pre = tempPre
        slow = temp
    }
    return newHead.next
};