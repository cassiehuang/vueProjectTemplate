const upperCase = function(value) {
  if (value) {
    return value.toSting().toUpperCase();
  }
  return '';
}

const lowerCase = function(value) {
  if (value) {
    return value.toSting().toLowerCase();
  }
  return '';
}

export default {
  upperCase,
  lowerCase,
}
