angular.module 'goarchitects', ['ngScrollbars']
	.config (ScrollBarsProvider) ->
		ScrollBarsProvider.defaults =
			autoHideScrollbar: false
			setHeight: $(window).height()
			scrollInertia: 0
			axis: 'yx'
			advanced: updateOnContentResize: true
			scrollButtons:
				scrollAmount: 'auto'
				# enable: true
		return


	.controller 'mainCtrl', ($scope) -> 
		
		$('.en').addClass 'active'
		$scope.en = ->
			true
		$scope.ua = ->
			false

		$scope.swith_en = ->
			$scope.en = ->
				true

			$scope.ua = ->
				false
			$('.en').addClass 'active'
			$('.ua').removeClass 'active'
			return

		$scope.swith_ua = ->
			$scope.en = ->
				false

			$scope.ua = ->
				true
			$('.en').removeClass 'active'
			$('.ua').addClass 'active'
			return




		$scope.scrollbarConfig = 
			theme: 'minimal',
			scrollInertia: 800
		return
		
