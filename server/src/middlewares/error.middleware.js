const createError = require("http-errors");

/**
 * Entidad para el manejo de errores.
 */
class ErrorMiddleware {
  /**
   * Captura errores genéricos.
   * @param {JSON} err - Error HTTP de la función de middleware, denominado "err" por convención.
   * @param {JSON} req - Solicitud HTTP a la función de middleware, denominado "req" por convención.
   * @param {JSON} res - Respuesta HTTP a la función de middleware, denominado "res" por convención.
   * @param {JSON} next - Devolución de llamada a la función de middleware, denominado "next" por convención.
   */
  // eslint-disable-next-line no-unused-vars
  static catchGenericErrors(err, req, res, next) {
    let responseData = {};
    if (err.name === "JsonSchemaValidation") {
      responseData = {
        code: 400,
        status: "Bad Request",
        data: err.validations,
      };
    } else {
      responseData = {
        code: err.status || 500,
        status: err.message,
        data: err.data,
      };
    }


    res.status(responseData.code).send(responseData);
    console.log(responseData)
  }

  /**
   * Captura error cuando no consigue la URL.
   * @param {JSON} req - Solicitud HTTP a la función de middleware, denominado "req" por convención.
   * @param {JSON} res - Respuesta HTTP a la función de middleware, denominado "res" por convención.
   * @param {JSON} next - Devolución de llamada a la función de middleware, denominado "next" por convención.
   */

  static catchNotFoundError(req, res, next) {
    next(createError(404));
  }
}

module.exports = ErrorMiddleware;
