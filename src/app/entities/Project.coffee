class Work
  constructor: (data, @key) ->
    { @name, @description, @text, @video, @date } = data

    @features     = [];   @features.push  feature        for feature in data.features if data.features
    @links        = [];   @links.push     new Link(link) for link    in data.links    if data.links

    @setImages data.images

  describe    : (@description) -> @
  setText     : (@text)        -> @
  setVode     : (@video)       -> @
  setImages   : (images)       ->
    @images = []
    @images.push image for image in [ 0..images ]
    @

  addFeature  : (f)            -> @features.push f;                                   @
  addLink     : (l)            -> @links.push new Link(l);                            @
  addFeatures : (features)     -> @addFeature f for f in features;                    @
  addLinks    : (links)        -> @addLink l for l in links;                          @

  hasImages   :                -> @images.length   > 0
  hasFeatures :                -> @features.length > 0
  hasLinks    :                -> @links.length    > 0
  hasVideo    :                -> @video
