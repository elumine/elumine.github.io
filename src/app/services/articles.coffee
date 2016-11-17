angular.service class ArticlesService
  @id       : 'articlesService'
  @module   : 'app'
  @services : [ ]


  constructor: (options) ->
    @articles = []
    DATA_STORAGE.articles.forEach (articleData) => @articles.push new Article articleData

  getAllArticles: () ->
   @articles

  getArticleByKey: (key) ->
    console.log 'get', key, @articles
    article = null
    @articles.forEach (a) =>
      if a.key is key then article = a
    article