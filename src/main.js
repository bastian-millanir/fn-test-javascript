const mensajePaciente = require("./mensajePaciente");

function initial() {
	console.log('Iniciando la prueba de concepto');

	const options = {
		name: 'Adrian',
		lastName: 'Higuita',
		birthday: '1989-10-01',
		gender: 'M',
	}
	return options;

	/**
	 * Construir una función que reciba el objeto "options"
	 * y devuelva otro objeto con los siguientes datos:
	 * - fullName: 'Adrian Higuita'
	 * - age: Número de años cumplidos y meses
	 * - message: 'El paciente [Nombre Completo], tienes N años y M meses y es de género [masculino/femenino]. El paciente es [mayor/menor] de edad.'
	 */

	/**
	 * TIPS:
	 * - Utilizar la función calculateAge para calcular la edad
	 */

}
module.exports = initial;

paciente1 = mensajePaciente(initial());
console.log(paciente1);
