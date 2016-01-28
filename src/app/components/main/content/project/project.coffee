angular.component class Project
  @id       : 'project'
  @module   : 'app'
  @template : 'app/components/main/content/project/project.html'
  @scope    : true
  @services : [ '$state', 'data' ]

  constructor: (options) ->
    @projectsService = options.services.data
    @key             = options.services.$state.params.key
    @project         = @projectsService.getProjectByKey @key
