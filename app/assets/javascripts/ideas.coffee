# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$ ->
  offset = 0

  callback = (data)->
    ReactDOM.render(React.createElement(Idea, {data: data[0]}), $('#idea_wrapper')[0])

  getIdea = (change)->
    offset = if (offset + change) > 0 then offset + change else 0
    params = {offset: offset}
    $.getJSON('/api/ideas', params, callback)
  getIdea()

  $prev = $('#prev')
  $next = $('#next')

  $prev.click ->
    getIdea(-1)

  $next.click ->
    getIdea(1)

