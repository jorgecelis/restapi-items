const createError = require('http-errors');
const { Validator } = require('jsonschema');

/**
 * Entidad para el manejo de errores en datos de entrada.
 */
class SchemaMiddleware {
    /**
     * Captura error cuando no consigue la URL.
     * @param {JSON} schema - Esquema para probar la instancia.
     */
    static validate(schema) {
        // console.log("validate")
        return (req, res, next) => {
            const instances = {
                
                // ...req.headers,
                ...req.params,
                // ...req.body,
                // ...req.query,
            };
            // console.log(req.params)

            const schemas = {
                // ...schema.headers,
                ...schema.params,
                // ...schema.body,
                // ...schema.query,
            };
            const validator = new Validator();
            const result = validator.validate(instances, schemas);
            console.log(validator)
            if (!result.valid)
                next(
                    createError(
                        400,
                        result.errors.map((error) => error.stack),
                    ),
                );
            else next();
        };
    }
}

module.exports = SchemaMiddleware;
