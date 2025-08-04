// var inorderTraversal = function(root) {
//     const res = []
//     if (!root) return res
//     const travel = (node) => {
//         if (!node) return
//         if (node.left) travel(node.left)
//         res.push(node.val)
//         if (node.right) travel(node.right)
//     }
//     travel(root)
//     return res
// };

// 迭代
var inorderTraversal = function(root) {
    const res = []
    const stack = []
    let cur = root
    while(cur || stack.length) {
        while(cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        res.push(cur.val)
        cur = cur.right
    }
    return res
}