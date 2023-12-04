const user = {
  name: "ggh",
  age: 22,
};
var Sizes;
(function (Sizes) {
  Sizes["small"] = "small";
  Sizes["medium"] = "medium";
})(Sizes || (Sizes = {}));
const button = Sizes.small;
function add(num1, num2) {
  return `${num1}` + `${num2}`;
}
console.log(add(2, 3));
