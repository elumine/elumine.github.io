routeConfig = ($stateProvider, $urlRouterProvider) ->
  $urlRouterProvider
    .when('/feed/article/:key/' , '/feed/article/:key')
    .otherwise '/feed'

  $stateProvider
    .state('main',
      template : '<main></main>'
    )
    .state('main.feed',
      url      : '/feed'
      template : '<feed></feed>'
      controller: -> console.log 321
    )
    .state('main.feed.article_viewer',
      url      : '/article/:key'
      template : '<article-viewer></article-viewer>'
      params   :
        key    : null
      controller: -> console.log 123
    )

angular
    .module('app')
    .config routeConfig
