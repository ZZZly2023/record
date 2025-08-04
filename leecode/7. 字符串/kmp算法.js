function buildNext(pattern) {
  const next = new Array(pattern.length).fill(0);
  let j = 0; // length of the previous longest prefix suffix
  for (let i = 1; i < pattern.length; i++) {
    while(j > 0 && pattern[i] !== pattern[j]) {
      j = next[j - 1]; // fall back in the pattern
    }
    if (pattern[i] === pattern[j]) {
      j++;
      next[i] = j; // update the next array
    } else {
      next[i] = 0; // no prefix suffix found
    }
  }
  return next;
}

function kmpSearch(text, pattern) {
  if (pattern.length === 0) return 0; // empty pattern
  const next = buildNext(pattern);
  let j = 0; // index for pattern
  for (let i = 0; i < text.length; i++) {
    while(j > 0 && text[i] !== pattern[j]) {
      j = next[j - 1]; // fall back in the pattern
    }
    if (text[i] === pattern[j]) j++;
    if (j === pattern.length) {
      return i - j + 1; // match found, return starting index
    }
  }
  return -1; // no match found
}

// kmp 算法时间复杂度为 O(n + m)，其中 n 是文本长度，m 是模式长度
// 空间复杂度为 O(m)，用于存储 next 数组
// https://juejin.cn/post/7160088791854612511?searchId=202507141644303BFD980C30F77DEEE0D1