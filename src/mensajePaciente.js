const calculateAge = require('./calcularEdad.js');

function mensajePaciente(paciente){
    const fullName = paciente.name + ' '+ paciente.lastName;
    const age = calculateAge(paciente.birthday);
    const gender = paciente.gender === 'M'? 'Masculino' : 'Femenino';
    const isAdult = age.years >= 18;
    const message = `El paciente ${fullName}, tienes ${age.years} años y ${age.months} meses y es de género ${gender}. El paciente es ${isAdult? 'mayor de edad':'menor de edad'}.`;
    
    return message;
}

module.exports = mensajePaciente;
