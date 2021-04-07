const ItemLogic = require("../logic/item.logic");

class ItemController {
  // /**
  //  * Enrutar solicitud.
  //  * @param {JSON} req - Solicitud HTTP a la función de middleware, denominado "req" por convención.
  //  * @param {JSON} res - Respuesta HTTP a la función de middleware, denominado "res" por convención.
  //  * @param {JSON} next - Devolución de llamada a la función de middleware, denominado "next" por convención.
  //  */

  static async getAll(req, res, next) {
    //console.log("entra al controler getAll");
    const { data, code } = await ItemLogic.getAll(req);
    res.status(code).send(data);
  }

  static async save(req, res, next) {
    //console.log("entre a la controlador", req);
    const { data, code } = await ItemLogic.save(req);
    res.status(code).send(data);
  }

  static async getById(req, res) {
    const { data, code } = await ItemLogic.getById(req);
    res.status(code).send(data);
  }

  static async update(req, res) {
    const { data, code } = await ItemLogic.update(req);
    res.status(code).send(data);
  }

  static async delete(req, res) {
    const { data, code } = await ItemLogic.delete(req);
    res.status(code).send(data);
  }
}
module.exports = ItemController;
