routeConfig = ($stateProvider, $urlRouterProvider) ->
  $urlRouterProvider
    .when '/projects' , '/projects/'
    .otherwise '/home'

  $stateProvider
    .state('main',
      template : '<main></main>'
    )
    .state('main.home',
      url      : '/home'
      template : '<home></home>'
    )
    .state('main.projects',
      url      : '/projects/:key'
      params:
        key    : null
      template : '<projects></projects>'
    )
    .state('main.project',
      url      : '/project/:key'
      params:
        key    : null
      template : '<project></project>'
    )

angular
    .module('app')
    .config routeConfig
