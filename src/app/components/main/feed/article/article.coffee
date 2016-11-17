angular.component class Project
  @id       : 'project'
  @module   : 'app'
  @template : 'app/components/main/content/project/project.html'
  @scope    : true
  @services : [ '$state', 'data', '$sce' ]

  constructor: (options) ->
    @projectsService = options.services.data
    @key             = options.services.$state.params.key
    @project         = @projectsService.getProjectByKey @key
    if @project.hasVideo() then @project.interpolatedVideoUrl = options.services.$sce.trustAsResourceUrl @project.video

  onImageClick: (image) ->
    window.open image
    return true