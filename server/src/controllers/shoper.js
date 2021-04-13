app.delete("/producto", async (req, res) => {

    if (!req.query.id) {
      res.end("Not found");
      return;
    }
    const idProducto = req.query.id;
    await productoModel.eliminar(idProducto);
    res.json(true);
  });
  //Todo: separar rutas
  /*
  Compras
   */
  app.get("/detalle_venta", async (req, res) => {
    if (!req.query.id) {
      res.end("Not found");
      return;
    }
    const idVenta = req.query.id;
    const venta = await ventaModel.obtenerPorId(idVenta);
    venta.productos = await ventaModel.obtenerProductosVendidos(idVenta);
    res.json(venta);
  })

  app.get("/ventas", async (req, res) => {
    const ventas = await ventaModel.obtener();
    res.json(ventas);
  });

  app.post("/compra", async (req, res) => {
    const {nombre, direccion} = req.body;
    let total = 0;
  
    const carrito = req.session.carrito || [];
    carrito.forEach(p => total += p.precio);
    const idCliente = await clienteModel.insertar(nombre, direccion);
    const idVenta = await ventaModel.insertar(idCliente, total);
    // usamos for en lugar de foreach por el await
    for (let m = 0; m < carrito.length; m++) {
      const productoActual = carrito[m];
      await productoVendidoModel.insertar(idVenta, productoActual.id);
    }
    // Limpiar carrito...
    req.session.carrito = [];
    // ¡listo!
    res.json(true);
  });

  app.get("/carrito", (req, res) => {
    res.json(req.session.carrito || []);
  })

  // No está en un DELETE porque no permite datos en el body ._.
  app.post("/carrito/eliminar", async (req, res) => {
    const idProducto = req.body.id;
    const indice = indiceDeProducto(req.session.carrito, idProducto);
    if (indice >= 0 && req.session.carrito) {
      req.session.carrito.splice(indice, 1);
    }
    res.json(true);
  });
  
  app.post("/carrito/existe", async (req, res) => {
    const idProducto = req.body.id;
    const producto = await productoModel.obtenerPorId(idProducto);
    const existe = existeProducto(req.session.carrito || [], producto);
    res.json(existe);
  });
  
  app.post("/carrito/agregar", async (req, res) => {
    const idProducto = req.body.id;
    const producto = await productoModel.obtenerPorId(idProducto);
    if (!req.session.carrito) {
      req.session.carrito = [];
    }
    // por el momento no se pueden llevar más de dos productos iguales
    if (existeProducto(req.session.carrito, producto)) {
      res.json(true);
      return;
    }
    req.session.carrito.push(producto);
    res.json(req.body);
  });