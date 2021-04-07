const ItemService = require("../services/item.service.js");

/**
 * Entidad para el manejo de la lódigca de negocio.
 */
class ItemLogic {
  /**
   * Obtener toda la información y aplicar lógica de negocio.
   * @param {JSON} req - Solicitud HTTP a la función de middleware, denominado "req" por convención.
   */

  //get all users
  static async getAll(req) {
    let code = 200;
    let data;

    try {
      data = await ItemService.getAll(req);
    } catch (err) {
      data = err;
      code = 500;
    }
    return { code, data };
  }

  //save user
  static async save(req) {
    let code = 200;
    let data;

    try {
      // console.log("entre a la logica", req.body)
      data = await ItemService.save(req);
    } catch (err) {
      //console.error(`Error in service: ${JSON.stringify(err)}`);
      data = err;
      code = 500;
    }
    return { code, data };
  }

  //find one user
  static async getById(req) {
    let code = 200;
    let data;

    try {
      data = await ItemService.getById(req);
    } catch (err) {
      data = err;
      code = 500;
    }
    return { code, data };
  }

  //update user
  static async update(req) {
    let code = 200;
    let data;

    try {
      data = await ItemService.update(req);
    } catch (err) {
      data = err;
      code = 500;
    }
    return { code, data };
  }

  //delete user
  static async delete(req) {
    let code = 200;
    let data;

    try {
      data = await ItemService.delete(req);
    } catch (err) {
      data = err;
      code = 500;
    }
    return { code, data };
  }
}

module.exports = ItemLogic;
