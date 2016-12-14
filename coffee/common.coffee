$(document).ready -> 
	heightDetect = ->
		$('header').css 'height', $(window).height()
		$('.gradient').css 'height', $(window).height()
		return
	heightDetect()
	$(window).resize ->
		heightDetect()
		return
	return

$(window).on 'load', ->
  setTimeout (->
    $('.loader_inner').fadeOut()
    $('.loader').delay(400).fadeOut 'slow'
    return
  ), 500
  return