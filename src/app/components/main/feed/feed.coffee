angular.component class Feed
  @id       : 'feed'
  @module   : 'app'
  @template : 'app/components/main/feed/feed.html'
  @scope    : true
  @services : [ '$state', 'articlesService' ]


  constructor: (options) ->
    ga 'send', 'Feed'
    { @services } = options
    @category = @services.$state.params.category or 'all'
    @articles = options.services.articlesService.getArticlesByCategory(@category)

  showArticle: (article) ->
    ga 'send', 'Feed.showArticle'
    console.log 'show', article
    @services.$state.go('main.feed.article_viewer', { key: article.key })