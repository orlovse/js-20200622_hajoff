/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  let arr = [...fields];
  let newObj = {};
  Object.keys(obj).map(key => {
    arr.map(field => {
      if (key === field) {
        newObj[key] = obj[key]
      }
    });
  });
  return newObj;
};
