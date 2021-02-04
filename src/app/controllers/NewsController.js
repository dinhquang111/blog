
class NewsController {

   index(req, res) {
      res.render('news')
   }
   detail(req,res) {
      res.render('news_detail')
   }
}
module.exports = new NewsController