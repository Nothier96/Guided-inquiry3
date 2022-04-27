function cutPizzaSlices(numberofSlices) {
  function people(numberofPeople) {
    let slices = numberofSlices / numberofPeople;
    return `Each person gets ${slices} slices of Pizza`;
  }
  return people;
}
var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));
console.log(sharePizza(3));
