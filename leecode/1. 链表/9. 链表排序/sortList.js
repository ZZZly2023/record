var sortList = function (head) {
  if (!head || !head.next) return head;

  // 快慢指针找中点
  let slow = head, fast = head, prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null; // 断开链表为两部分

  // 递归排序左右两部分
  const l1 = sortList(head);
  const l2 = sortList(slow);

  // 合并两个有序链表
  return merge(l1, l2);
}

function merge(l1, l2) {
  const dummy = new ListNode(0);
  let current = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 || l2;
  return dummy.next;
}
