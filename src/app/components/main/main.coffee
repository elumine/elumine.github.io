angular.component class Main
  @id       : 'main'
  @module   : 'app'
  @template : 'app/components/main/main.html'
  @scope    : true
  @services : [ '$state', 'articlesService' ]

  constructor: (options) ->
    { @services, @scope } = options

    @scope.categories = []
    for k, v of @services.articlesService.categories
      @scope.categories.push new Category
        type: k

    @scope.links = [
      new Link({ type: 'artstation', url: 'artstation.com' }),
      new Link({ type: 'git', url: 'github.com' }),
      new Link({ type: 'youtube', url: 'youtube.com' }),
      new Link({ type: 'linkedin', url: 'linkedin.com' })
    ]