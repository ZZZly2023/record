/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1 || !list2) return list1 || list2
    let newHead = new ListNode()
    let current = newHead
    while(list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }
    current.next = list1 || list2
    // 很奇怪，下面这两句等同于上面这段代码，上面的更简洁，但下面的运行时间反而更短，内存消耗也更低
    // while(list1) {
    //     current.next = list1
    //     list1 = list1.next
    //     current = current.next
    // }
    // while(list2) {
    //     current.next = list2
    //     list2 = list2.next
    //     current = current.next
    // }
    return newHead.next
};