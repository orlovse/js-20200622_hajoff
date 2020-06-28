/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let arr = [...fields];
  let newObj = {};
  Object.keys(obj).map(key => {
    let counter = 0;
    arr.map(field => {
      if (key === field) {
        counter++;
      }
    });
    if (counter === 0) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};
