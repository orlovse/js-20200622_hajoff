/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const arr = [...fields];
  const newObj = {};
  Object.keys(obj).map(key => {
    if (!arr.includes(obj[key])) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};
