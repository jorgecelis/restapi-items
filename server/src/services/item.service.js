const Products = require("../models/schema.models");

/**
 * Entidad para el manejo de servicios.
 */
class ItemService {
  /**
   * Obtener toda la información, conectándose a un servicio.
   * @param {JSON} req - Solicitud HTTP a la función de middleware, denominado "req" por convención.
   * @return {Array} todos los nombres.
   */

  //Find and show all images
  static async getAll(req) {
    // console.log(req.params);
    // console.log(req.query);
    let products = await Products.find();
    return products;
  }

  //Create images
  static async save(req) {
    //console.log("entre al service", req.body);
    let product = await Products.create(req.body);

    return product;
  }
  

  //Find one user by id
  static async getById(req) {
    let product = await Products.findById(req.params.id);

    return product;
  }

  //Update user
  static async update(req) {
    console.log("req update",req)
    let product = await Products.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        filename: req.body.filename,
        // path: '/img/uploads' + req.file.filename,
        originalname: req.file.originalname,
        // mimetype: req.file.mimetype,
        // size: req.file.size
    });
  
    return product;
  }

  //Delete user
  static async delete(req) {
    await Products.findByIdAndDelete(req.params.id);
    return "usuario eliminado";
  }
}

module.exports = ItemService;
