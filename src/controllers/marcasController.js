let db = require('../database')

let controller = {
  getBrands: (req, res) => {
    res.set({'content-type':'text/plain;charset=utf-8'})

    let marcas = []
   
    db.forEach(sucursal => {
       sucursal.autos.forEach(auto => {
           marcas.push(auto.marca)
       })
    });

    let arrayFiltrado = marcas.filter((x, i, a) => a.indexOf(x) == i)
                          //Marca, indice, array -- array.indexOf(marca) == indice
    res.write(`
    Nuestras Marcas: 

    _______________

    `)
    arrayFiltrado.forEach(marca => {
        res.write(`
        ${marca.toUpperCase()}
        `)
    })
    res.end()
  },
  getOneBrand: (req, res) => {
      res.send(req.params.marca)
  }
}

module.exports = controller