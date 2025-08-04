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
var reverseList = function(head) {
  if (!head || !head.next) return head
  let pre = null, current = head, temp
  while(current) {
    temp = current.next
    current.next = pre
    pre = current
    current = temp
  }  
  return pre
};