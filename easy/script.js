function exercise(sport) {
  function exe() {
    return `today's exercise: ${sport}`;
  }
  return exe;
}
var run = exercise("running");
console.log(run());
var swim = exercise("swimming");
console.log(swim());
