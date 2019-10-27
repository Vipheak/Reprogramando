let luis = {
    variable: 7,
    variable2: 140,

    f: () => {
        let lml = 101;
        console.log(lml);
    },

    f2: () => {
        console.log(module.exports.variable, module.exports.variable2);
    }
      
}
let variable = require("./funcion_argumento");
variable.f2();