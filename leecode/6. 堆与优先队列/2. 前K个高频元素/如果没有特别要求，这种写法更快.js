var topKFrequent = function(nums, k) {
    const mp = new Map()
    nums.forEach(item => {
        if (mp.has(item)) {
            let count = mp.get(item)
            mp.set(item, ++count)
        } else mp.set(item, 1)
    })
    const arr = []
    mp.forEach((val, key) => {
        arr.push({val, key})
    })
    arr.sort((v1, v2)=>{
        return v2['val'] - v1['val']
    })
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].key
        if (i == k - 1) {
            arr.length = k
            break
        }
    }
    return arr
};