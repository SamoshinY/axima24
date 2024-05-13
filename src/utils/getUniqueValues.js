const getUniqueValues = (arr, value) => {
  const values = arr.filter((item) => item[value]).map((item) => item[value]);
  return [...new Set(values)];
};

export default getUniqueValues;
