function CompareValues() {

}

var valueOrder = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
var compareValues = function (a, b) {
    return valueOrder.indexOf(a) - valueOrder.indexOf(b);
};

CompareValues.prototype.compare = function (value, anotherValue) {
    return compareValues(value, anotherValue);
};

module.exports = CompareValues;

