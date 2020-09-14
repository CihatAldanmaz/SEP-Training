var numbers = [2, 35, 60, 200];

function getSum(total, num) {
  return total - num;
}
function myFunction(item) {
  document.getElementById("math").innerHTML = numbers.reduceRight(getSum);
}