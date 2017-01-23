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
      @scope.categories.push k