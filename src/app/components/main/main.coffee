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

    @scope.links = [
      { href: 'www.artstation.com', text: 'artstation' },
      { href: 'www.github.com', text: 'github' },
      { href: 'www.youtube.com', text: 'youtube' },
      { href: 'www.linkedin.com', text: 'linkedin' }
    ]