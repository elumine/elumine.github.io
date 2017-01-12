angular.component class AnalyticsComponent
  @id       : 'analytics'
  @module   : 'app'
  @template : 'app/components/main/analytics/analytics.html'
  @scope    : true
  @services : [ 'analyticsService', '$rootScope' ]


  constructor: (options) ->
    ga 'send', 'AnalyticsComponent'
    { @services, @scope } = options

    @services.$rootScope.$on 'AnalyticsService.analytics:dataChanged', (e, data) =>
      @scope.analytics = @services.analyticsService.analytics
      @scope.$digest()