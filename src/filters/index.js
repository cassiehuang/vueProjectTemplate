const upperCase = function upperCase(value) {
  if (value) {
    return value.toSting().toUpperCase();
  }
  return '';
};

const lowerCase = function lowerCase(value) {
  if (value) {
    return value.toSting().toLowerCase();
  }
  return '';
};

export default {
  upperCase,
  lowerCase,
};
