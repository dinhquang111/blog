const express = require('express')
// const morgan = require('morgan')
const path = require('path')
const hbs  = require('express-handlebars');
const route = require('./routes')
const port = 3000

const app = express()

// app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended : true
}))   //post bằng form
app.use(express.json()) //post bằng axios, fetch...

//set up handlebars
app.engine('hbs', hbs({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})