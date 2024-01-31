const Degree = require ('./Degree');
const Student = require('./Student');
const Country = require('./Country');


// UN ESTUDIANTE PERTENECE A UNA SOLA CARRERA
Student.belongsTo(Degree) // Students -> degreeId

// UNA CARRERA TIENE MUCHOS ESTUDIANTES
Degree.hasMany(Student)

// UN ESTUDIANTE PERTENECE A UN SOLO PAIS
Student.belongsTo(Country) // Students -> countryId

// UN PAIS TIENE MUCHOS ESTUDIANTES
Country.hasMany(Student)