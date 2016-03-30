# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$ ->
  ideas_viewer = React.createElement(IdeaViewer)
  react_ideas_viewer = ReactDOM.render(ideas_viewer, $('#react_ideas_viewer')[0])

  $prev = $('#prev')
  $next = $('#next')

  $prev.click ->
    react_ideas_viewer.getIdea(-1)

  $next.click ->
    react_ideas_viewer.getIdea(+1)

