app = angular.module 'app', [ 'ui.router' ]

#namespace
components = {}
app.run (analyticsService) ->
  analyticsService.init()