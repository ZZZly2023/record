function groupAnagrams(strs) {
    const map = new Map()
    let st
    strs.forEach(str => {
        st = str.split('').sort().join('')
        if (!map.has(st)) map.set(st, [])
        map.get(st).push(str)
    })
    return Array.from(map.values())
}