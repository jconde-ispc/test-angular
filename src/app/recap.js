var username = "Julian";
var sum = function (a, b) {
    return a + b;
};
console.log(sum(1, 2)); //console.log(sum(1,"pedro"));
var Persona = /** @class */ (function () {
    function Persona(p_age, p_apellido) {
        this.age = p_age;
        this.apellido = p_apellido;
    }
    return Persona;
}());
var julian = new Persona(30, "Conde");
console.log(julian.age);
console.log(julian.apellido);
