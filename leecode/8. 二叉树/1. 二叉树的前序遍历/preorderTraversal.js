
// 递归算法
// var preorderTraversal = function(root) {
//     const res = []
//     const travel = (node, res) => {
//         if (!node) return
//         res.push(node.val)
//         travel(node.left, res)
//         travel(node.right, res)
//     }
//     travel(root, res)
//     return res
// };

// 迭代算法
var preorderTraversal = function(root) {
    const res = []
    if (!root) return res
    const stack = []
    while(root || stack.length) {
        while(root) {
            res.push(root.val)
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        root = root.right
    }
    return res
}