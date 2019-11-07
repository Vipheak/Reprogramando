module.exports = {
  variable1: 14,
  variable2: 126,

  f: () => {
    let lml = 28;
    console.log(lml);
  }

  f2: () => {
    console.log(module.exports.variable1, module.exports.variable2);
  }

}
let variable1 = requiere("./variables.js");
variable.f2();
