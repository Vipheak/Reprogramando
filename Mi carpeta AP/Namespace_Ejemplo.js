 module.exports={
  value1: 34,
  value2: "nombre",
  function: ()=> {
    console.log("hola");
  },
  showAttributes: ()=> {
    console.log(module.exports.value1, module.exports.value2);
  }
};
