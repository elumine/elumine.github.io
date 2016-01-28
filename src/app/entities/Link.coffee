class Link
  constructor: (data) ->
    { @type, @url } = data

    switch data.type
      when 'git'      then    @text = 'Source Code'
      when 'youtube'  then    @text = 'Preview'
      when 'live'     then    @text = 'Live Link'
