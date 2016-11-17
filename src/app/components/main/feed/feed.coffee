angular.component class Feed
  @id       : 'feed'
  @module   : 'app'
  @template : 'app/components/main/feed/feed.html'
  @scope    : true
  @services : [ '$state', 'articlesService' ]


  constructor: (options) ->
    { @services } = options
    @articles = options.services.articlesService.getAllArticles()
    console.log(3, @articles)

  showArticle: (article) ->
    console.log 'show', article
    @services.$state.go('main.feed.article_viewer', { key: article.key })