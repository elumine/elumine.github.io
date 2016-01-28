class Category
  constructor: (data) ->
    { @name, @key } = data

    @works = {};   @works[k] = new Work(v, k) for k, v of data.projects
