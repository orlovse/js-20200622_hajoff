/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const newArr = [...arr];
  //   let collator = new Intl.Collator();
  //   if (param === 'asc') {
  //     return newArr.sort((a, b) => collator.compare(a, b));
  //   }
  //   if (param === 'desc') {
  //     return newArr.sort((a, b) => collator.compare(b, a));
  //   }
  if (param === 'asc') {
    return newArr.sort((a, b) => {
      let newA = a.toLowerCase();
      let newB = b.toLowerCase();
      if (newA[0] === 'ё') {
        newA = 'е';
      }
      if (newB[0] === 'ё') {
        newB = 'е';
      }
      if (newA > newB) {
        return 1;
      }
      if (newA < newB) {
        return -1;
      }
      if (newA === newB) {
        return -1;
      }
    });
  }
  if (param === 'desc') {
    return newArr.sort((a, b) => {
      let newA = a.toLowerCase();
      let newB = b.toLowerCase();
      if (newA[0] === 'ё') {
        newA = 'е';
      }
      if (newB[0] === 'ё') {
        newB = 'е';
      }
      if (newA > newB) {
        return -1;
      }
      if (newA < newB) {
        return 1;
      }
      if (newA === newB) {
        return -1;
      }
    });
  }
}
  