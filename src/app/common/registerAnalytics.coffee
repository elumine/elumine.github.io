angular.component class RegisterAnalytics
  @id       : 'registerAnalytics'
  @module   : 'app'
  @template : '<div>Register Analytics</div>'
  @scope    : true
  @services : [ '$state' ]


  constructor: (options) ->
    { @services, @scope } = options
    e = null

    console.info 'RegisterAnalytics()'

    setTimeout =>
      try
        e = JSON.parse(@services.$state.params.event)
      catch err
        console.warn '\t error while parsing event data', err

      console.log '\t event: ', e, 'user', firebase.auth().currentUser
      firebase.database().ref('registerAnalytics/' + firebase.auth().currentUser.uid).set
        date: new Date().toString()
        event: e
    , 1000