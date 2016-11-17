angular.component class ArticleViewer
  @id       : 'articleViewer'
  @module   : 'app'
  @template : 'app/components/main/feed/article-viewer/article-viewer.html'
  @scope    : true
  @services : [ '$state', 'articlesService' ]


  constructor: (options) ->
    { @services } = options
    @article = options.services.articlesService.getArticleByKey options.services.$state.params.key
    console.log(4, @article)