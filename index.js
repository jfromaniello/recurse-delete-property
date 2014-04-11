var removeProperty = module.exports = function (input, property) {
  return Object.keys(input).filter(function (p) {
    return p !== property;
  }).reduce(function (prev, property) {
    var value = input[property];
    prev[property] = typeof value === 'object' ?
                        removeProperty(value, property) :
                        value;
    return prev;
  }, {});
};