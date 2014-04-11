var removeProperty = module.exports = function (input, property) {
  return Object.keys(input).filter(function (p) {
    return p !== property;
  }).reduce(function (prev, p) {
    var value = input[p];
    prev[p] = typeof value === 'object' ?
                        removeProperty(value, property) :
                        value;
    return prev;
  }, {});
};