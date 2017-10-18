function countdown(callback) {
  window.setTimeout(function() {
    callback();
  }, 2000);
}

function createMultiplier(multiplierValue) {
  var multiplier = function(n) {
    return n * multiplierValue;
  };

  return multiplier;
}

doubler = createMultiplier(2);
tripler = createMultiplier(3);

function multiplier(value1, value2) {
  return value1 * value2;
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
