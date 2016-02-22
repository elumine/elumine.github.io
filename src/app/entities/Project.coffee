class Work
  constructor: (data, @key) ->
    { @name, @poster, @description, @text, @video, @date } = data

    @features     = [];   @features.push  feature        for feature in data.features if data.features
    @links        = [];   @links.push     new Link(link) for link    in data.links    if data.links

    if @poster then @poster = 'build/assets/projects/' + @key + '/poster.png'

    @setImages data.images

  describe    : (@description) -> @
  setText     : (@text)        -> @
  setVideo    : (@video)       -> @
  setImages   : (images)       -> @images = []; @images.push 'build/assets/projects/' + @key + '/image' + image + '.png' for image in [ 0..images - 1 ]; @

  addFeature  : (f)            -> @features.push f;                                   @
  addLink     : (l)            -> @links.push new Link(l);                            @
  addFeatures : (features)     -> @addFeature f for f in features;                    @
  addLinks    : (links)        -> @addLink l for l in links;                          @

  hasPoster   :                -> @poster
  hasImages   :                -> @images.length   > 0
  hasFeatures :                -> @features.length > 0
  hasLinks    :                -> @links.length    > 0
  hasVideo    :                -> @video
