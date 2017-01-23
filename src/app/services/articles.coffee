angular.service class ArticlesService
  @id       : 'articlesService'
  @module   : 'app'
  @services : [ ]


  constructor: (options) ->
    @articles = []
    @categories = {}
    DATA_STORAGE.articles.forEach (articleData) =>
      article = new Article articleData
      @articles.push article
      if not @categories[articleData.category]
        @categories[articleData.category] = []
      @categories[articleData.category].push article


  getAllArticles: () ->
   @articles

  getArticleByKey: (key) ->
    article = null
    @articles.forEach (a) =>
      if a.key is key then article = a
    article

  getArticlesByCategory: (category) ->
    if category is 'all'
      return @articles
    else
      return @categories[category] or []