
class SiteController {

   index(req, res) {
      res.render('home')
   }
   search(req, res) {
      res.send('search here')
   }
}
module.exports = new SiteController