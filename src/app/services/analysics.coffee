angular.service class AnalyticsService
  @id       : 'analyticsService'
  @module   : 'app'
  @services : [ '$rootScope' ]


  constructor: (options) ->
    console.info 'AnalyticsService()'
    
    @analytics =
      anonymous           : {}

    @config =
      apiKey              : "AIzaSyAt3giWV5IWj0FMKWn7oO47ZhcKkgzoTWs",
      authDomain          : "iocloud-77b52.firebaseapp.com",
      databaseURL         : "https://iocloud-77b52.firebaseio.com",
      storageBucket       : "iocloud-77b52.appspot.com",
      messagingSenderId   : "267434257483"

    firebase.initializeApp @config
    firebase.auth().onAuthStateChanged (user) =>
      @user = user
      #if user then @registerAnonymous()

    firebase.database().ref('anonymous/').once('value').then (snapshot) =>
      @analytics.anonymous = snapshot.val()
      options.services.$rootScope.$broadcast 'AnalyticsService.analytics:dataChanged'


  registerAnonymous: ->
    console.info 'AnalyticsService.registerAnonymous()'
    firebase.database().ref('anonymous/' + @user.uid).set
      date: new Date().toString()


  init: ->
    #