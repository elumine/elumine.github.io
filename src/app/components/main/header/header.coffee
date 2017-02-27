angular.component class Header
  @id       : 'header'
  @module   : 'app'
  @template : 'app/components/main/header/header.html'
  @scope    : true
  @services : [ '$state', 'articlesService' ]


  constructor: (options) ->
    @scope = options.scope
    @services = options.services
    @scope.progress = 0
    @scope.currentArticleIndex = 0
    @scope.currentArticle = null

    PROGRESS_BAR_VELOCITY_FACTOR = 0.05

    @changeArticle()
    setInterval =>
      @scope.progress += 0.01 * PROGRESS_BAR_VELOCITY_FACTOR
      if @scope.progress >= 1
        @scope.progress = 0
        @scope.currentArticleIndex++
        @changeArticle()
      @scope.$apply()
    , 1

  changeArticle: ->
    if @scope.currentArticleIndex > @services.articlesService.articles.length - 1
      @scope.currentArticleIndex = 0

    @scope.currentArticle = @services.articlesService.articles[ @scope.currentArticleIndex ]

    console.info @scope