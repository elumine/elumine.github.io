angular.component class Navigation
  @id       : 'navigation'
  @module   : 'app'
  @template : 'app/components/main/navigation/navigation.html'
  @scope    : true

  constructor: ->
    @links = [
      new NavigationLink 'projects/web'         , 'web'
      new NavigationLink 'projects/art'         , 'art'
      new NavigationLink 'projects/games'       , 'games'
      new NavigationLink 'projects/programming' , 'programming'
      new NavigationLink 'about'                , 'about'
    ]




class NavigationLink
  constructor: (@url, @key) ->
