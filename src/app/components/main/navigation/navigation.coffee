angular.component class Navigation
  @id       : 'navigation'
  @module   : 'app'
  @template : 'app/components/main/navigation/navigation.html'
  @scope    : true

  constructor: ->
    @links = [
      new NavigationLink 'projects/games'       , 'games'
      new NavigationLink 'projects/level-design', 'level-design'
      new NavigationLink 'projects/art'         , 'art'
      new NavigationLink 'projects/programming' , 'programming'
    ]




class NavigationLink
  constructor: (@url, @key) ->
    @imageUrl = 'build/assets/ui/navigation/' + @key + '.png'
