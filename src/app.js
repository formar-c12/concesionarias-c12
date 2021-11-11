let express = require('express')
let app = express()
const PORT = 3000

/* Enrutadores */
let indexRouter = require('./routes/indexRouter')
let marcasRouter = require('./routes/marcasRouter')

app.use('/', indexRouter)
app.use('/marcas', marcasRouter)


app.listen(PORT, () => console.log("Servidor levantado"))
