routeConfig = ($stateProvider, $urlRouterProvider) ->
  $urlRouterProvider
    .when('/feed/article/:key/' , '/feed/article/:key')
    .otherwise '/feed'

  $stateProvider
    .state('main',
      template : '<main></main>'
    )
    .state('main.analytics'
      url: '/analytics'
      template : '<analytics></analytics>'
    )
    .state('main.feed',
      url      : '/feed'
      template : '<feed></feed>'
    )
    .state('main.feed.article_viewer',
      url      : '/article/:key'
      template : '<article-viewer></article-viewer>'
      params   :
        key    : null
    )
    .state('registerAnalytics'
      url      : '/registerAnalytics?event'
      template : '<register-analytics></register-analytics>'
    )

angular
    .module('app')
    .config routeConfig
