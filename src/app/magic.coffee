extend  = (object, mixin) -> object[name] = method for name, method of mixin
include = (parent, mixin) -> extend parent.prototype, mixin
angular.component = (componentClass) -> angular.module(componentClass.module).directive   componentClass.id, MAKE_COMPONENT componentClass
angular.service   = (serviceClass)   -> angular.module(serviceClass.module).service       serviceClass.id,   MAKE_SERVICE   serviceClass
angular.directive = (directiveClass) -> angular.module(directiveClass.module).directive   directiveClass.id, MAKE_DIRECTIVE   directiveClass

MAKE_COMPONENT = (componentClass) ->
  injectables = [ '$templateCache' ]
  injectables.push v for v in componentClass.services if componentClass.services

  directiveFn = ($templateCache) ->
    services = {}
    services[v] = arguments[ i + 1 ] for v, i in componentClass.services if componentClass.services
    return {
      restrict : 'E'
      replace  : true
      scope    : componentClass.scope
      template : $templateCache.get componentClass.template
      link     : (scope, element, attributes) ->
        extend scope, new componentClass
          scope      : scope
          element    : element
          attributes : attributes
          services   : services
    }

  directiveFn::constructor.$inject = injectables
  return directiveFn


MAKE_DIRECTIVE = (directiveClass) ->
  injectables = [ ]
  injectables.push v for v in directiveClass.services if directiveClass.services

  directiveFn = () ->
    services = {}
    services[v] = arguments[ i ] for v, i in directiveClass.services if directiveClass.services
    return {
      restrict : 'A'
      scope    : directiveClass.scope
      link     : (scope, element, attributes) ->
        new directiveClass
          scope      : scope
          element    : element
          attributes : attributes
          services   : services
    }

  directiveFn::constructor.$inject = injectables
  return directiveFn


MAKE_SERVICE = (serviceClass) ->
  injectables = []
  injectables.push v for v in serviceClass.services if serviceClass.services
  serviceFn = () ->
    services = {}
    services[v] = arguments[ i ] for v, i in serviceClass.services if serviceClass.services
    return new serviceClass
      services : services

  serviceFn::constructor.$inject = injectables
  return serviceFn
