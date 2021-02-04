const newsRouter = require('./news')
const siteController = require('../app/controllers/SiteController')


function route(app) {
   app.use('/news', newsRouter)
   app.get('/search', siteController.search)
   app.get('/', siteController.index) 
}

module.exports = route