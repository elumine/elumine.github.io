angular.component class RecentProjects
  @id       : 'recentProjects'
  @module   : 'app'
  @template : 'app/components/main/recent-projects/recent-projects.html'
  @scope    : true
  @services : [ 'data', '$interval' ]

  constructor: (options) ->
    @projectsService = options.services.data
    @intervalService = options.services.$interval
    @scope           = options.scope
    @changeDelay     = 500
    @projectsMap     = []

    for cK, cV of @projectsService.categories
      for pK, pV of cV.works
        if pV.poster
          @projectsMap.push
            imageUrl   : pV.poster
            projectUrl : '#project/' + pK

    @currentProject = @projectsMap[0]

    @intervalService =>
      @changePoster()
    , @changeDelay


  onPosterClick: ->
    window.location.hash = @currentProject.projectUrl

  changePoster: ->
    currentIndex = @projectsMap.indexOf @currentProject
    nextIndex = 0
    if currentIndex >= 0
      if currentIndex < (@projectsMap.length - 1)
        nextIndex = currentIndex + 1

    @currentProject = @projectsMap[nextIndex]