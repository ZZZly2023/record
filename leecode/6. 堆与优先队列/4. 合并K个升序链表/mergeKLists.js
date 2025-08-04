var mergeKLists = function(lists) {
    if (lists.length === 0 || (lists.length === 1 && !lists[0])) return null
    if (lists.length === 1) return lists[0]
    let loopList = [...lists]
    while(loopList.length >= 2) {
      let tempList = []
      for (let i = 0; i < loopList.length; i += 2) {
        if (i + 1 < loopList.length) {
          tempList.push(mergeList(loopList[i], loopList[i + 1]))
        } else {
          tempList.push(loopList[i])
        }
      }
      loopList = tempList
    }
    return loopList[0]
};

function mergeList(list1, list2) {
  // list1 或者 list2 至少有一个为空
  if (!list1 || !list2) return list1 || list2
  const newHead = new ListNode()
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
  return newHead.next
}