const firestName = "islam";
const lasttName = "refaei";
const city = "fayoum";
const age = 21;

// module.exports = firestName;
// module.exports = lasttName;

function mul(x, y) {
  console.log(x * y);
}

module.exports = {
  fName: firestName,
  lName: lasttName,
  city: city,
  age: age,
  fun1: mul,
};
