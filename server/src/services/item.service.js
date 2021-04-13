const Image = require("../models/schema.models");

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
    let images = await Image.find();
    return images;
  }

  //Create images
  static async save(req) {
    //console.log("entre al service", req.body);
    let images = await Image.create(req.body);

    return images;
  }
  

  //Find one user by id
  static async getById(req) {
    let images = await Image.findById(req.params.id);

    return images;
  }

  //Update user
  static async update(req) {
    let images = await Image.findByIdAndUpdate(req.params.id, {

        title: req.body.title,
        description: req.body.description,
        filename: req.file.filename,
        path: '/img/uploads' + req.file.filename,
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size
        
      
    });

    return images;
  }

  //Delete user
  static async delete(req) {
    await Image.findByIdAndDelete(req.params.id);
    return "usuario eliminado";
  }
}

module.exports = ItemService;
