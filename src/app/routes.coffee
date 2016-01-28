routeConfig = ($stateProvider, $urlRouterProvider) ->
  $urlRouterProvider
    .when '/about'    , '/about'
    .when '/projects' , '/projects/'
    .otherwise '/projects/'

  $stateProvider
    .state('main',
      template : '<main></main>'
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
