/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (typeof size === 'undefined') { return string; }
  const charArr = string.split('');
  const arr = [];
  let count = 0;
  let tmpChar = '';
  charArr.forEach(char => {
    if (count >= size && char != tmpChar || char != tmpChar) {
      count = 0;
    }
    if (count < size) {
      arr.push(char);
      count++;
      tmpChar = char;
    } 
  });
  return arr.join('');
}

