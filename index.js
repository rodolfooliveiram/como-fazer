const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())

const port = process.env.port || 3000

app.get('/', async (request, response) => {
  response.render('index')
})

app.use('/categorias', categorias)
app.use('/publicacoes', publicacoes)


app.listen(port, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log('Como-fazer server is running on port:', port)
  }
})