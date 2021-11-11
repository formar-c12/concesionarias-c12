let db = require('../database')

let controller = {
    index: (req, res) => {
        console.log(db)
    } 
  
}

module.exports = controller