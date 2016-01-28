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

  getProjectsByCategory: (cats) ->
    console.log 'getProjectsByCategory', cats
    result = []

    if cats
      for searchCat in cats
        for selfCat in @categories
          console.log 'compare', searchCat, selfCat.key
          result.push selfCat if searchCat is selfCat.key
    else
      result = @categories

    result
