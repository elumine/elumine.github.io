angular.component class RecentProjects
  @id       : 'recentProjects'
  @module   : 'app'
  @template : 'app/components/main/recent-projects/recent-projects.html'
  @scope    : true
  @services : [ '$state' ]


  constructor: (options) ->
    @scope = options.scope
    @state = options.services.$state
    @setPosterUrl()

    options.scope.$on '$stateChangeSuccess', @setPosterUrl.bind @


  setPosterUrl: ->
    console.log @state.current.name
    switch @state.current.name
      when 'main.projects' then @scope.currentPosterUrl = @state.params.key
      else @scope.currentPosterUrl = 'home'