@App ||= {}

App.init = ->
  @initPage()

App.pageClass = ->
  # products/index
  path = $('body').data('route');
  # ProductsIndex
  pageClassName = $.camelCase('-'+path.split('/').join('-'))

  return pageClassName

App.initPage = ->
  new window[@pageClass()]


$(document).on "turbolinks:load", ->
  App.init()