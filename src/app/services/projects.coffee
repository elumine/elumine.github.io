angular.service class WorksService
  @id       : 'data'
  @module   : 'app'
  @services : [ '$http' ]



  constructor: (options) ->
    @http  = options.services.$http
    @categories = []

    for cat in window.PROJECTS_STORAGE.categories
      @categories.push new Category cat



  getProjectByKey: (key) ->
    project = null
    for cK, cV of @categories
      if cV.works[key] then project = cV.works[key]; break
    return project



  getProjectsByCategory: (searchCategory) ->
    result = []

    if searchCategory
      for selfCat in @categories
        result.push selfCat if searchCategory is selfCat.key
    else
      result = @categories

    result
