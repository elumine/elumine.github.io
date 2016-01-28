angular.component class Projects
  @id       : 'projects'
  @module   : 'app'
  @template : 'app/components/main/content/projects/projects.html'
  @scope    : true
  @services : [ '$state', 'data' ]

  constructor: (options) ->
    @worksService = options.services.data
    @key          = options.services.$state.params.key
    @filters      = @parseKey @key
    @displayables = @worksService.getProjectsByCategory if @hasKey() then @filters else null

   parseKey: (key) ->
    filters = []

    switch key
      when 'art' then filters = [ '2d-art', '3d-art' ]
      else filters = [ key ]

    filters

  hasKey: ->
    @key isnt null and @key isnt 'true'
