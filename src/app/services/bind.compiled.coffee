angular.directive class BindCompiled
  @id       : 'bindCompiled'
  @module   : 'app'
  @services : [ '$timeout', '$compile' ]
  @scope    :
    bindCompiled : '='

  constructor: (options) ->
    compileClone = ->
      options.services.$compile('<span>' + options.scope.bindCompiled + '</span>')(options.scope, (cloned, scope) -> console.log cloned; options.element.append(cloned) )

    options.services.$timeout compileClone, 0