const { check, body, validationResult } = require('express-validator');
const { resultadoValidacion } = require('./validacionHelper');

const validarCreacionUsuario = [
    check('nombre', 'falta ingresar el nombre') // todo es una linea
        .exists()     // verifica que exista
        .not().isEmpty(),  // que no sea vacio

    check('email', 'falta ingresar el email').exists().not().isEmpty(),
    check('estado', 'falta ingresar el estado').exists().not().isEmpty(),
    (req, res, next) => {
        /*  const errors = validationResult(req);
          if (!errors.isEmpty()) {
              return res.status(400).json({errores: errors.array()})
          }*/
        resultadoValidacion(req, res, next);
    }

    /* pasando el metodo antes de async funtion me sirve la validacion pero al agregarle el atributo que falta este se queda cargando y no crea el usuario nuevo
     */


]

const validarUsuario = (req) => {

    const validacion = [];

    if (!req.body.nombre) {
        validacion.push('Nombre requerido')
    }

    if (!req.body.email) {
        validacion.push('Email requerido')
    }

    if (!req.body.estado) {
        validacion.push('Estado requerido')
    }

    return validacion;

}






module.exports = { validarCreacionUsuario, validarUsuario };