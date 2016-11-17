angular.component class Header
  @id       : 'header'
  @module   : 'app'
  @template : 'app/components/main/header/header.html'
  @scope    : true
  @services : [ '$state' ]


  constructor: (options) ->
    @scope = options.scope