class Link
  constructor: (data) ->
    { @type, @url } = data

    @imageUrl = 'build/assets/ui/links/' + @type + '.png'
    @url = 'http://' + @url