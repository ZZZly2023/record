/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // 单节点，直接返回
    if (!head.next) return head
    let pre = null, slow = fast = head, temp
    // 翻转前半部分链表
    while(fast && fast.next) {
        fast = fast.next.next
        temp = slow.next
        slow.next = pre
        pre = slow
        slow = temp
    }
    // 如果fast有值， slow处于中间节点，再往前走一步
    if (fast) slow = slow.next
    // slow与pre成对
    while(slow) {
        if (slow.val !== pre.val) return false
        slow = slow.next
        pre = pre.next
    }
    return true
};