angular.component class Projects
  @id       : 'projects'
  @module   : 'app'
  @template : 'app/components/main/content/projects/projects.html'
  @scope    : true
  @services : [ '$state', 'data' ]

  constructor: (options) ->
    @worksService = options.services.data
    @key          = options.services.$state.params.key
    @displayables = @worksService.getProjectsByCategory if @hasKey() then @key else null


  hasKey: ->
    @key isnt null and @key isnt 'true'
