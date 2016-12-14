(function() {
  angular.module('goarchitects', ['ngScrollbars']).config(function(ScrollBarsProvider) {
    ScrollBarsProvider.defaults = {
      autoHideScrollbar: false,
      setHeight: $(window).height(),
      scrollInertia: 0,
      axis: 'yx',
      advanced: {
        updateOnContentResize: true
      },
      scrollButtons: {
        scrollAmount: 'auto'
      }
    };
  }).controller('mainCtrl', function($scope) {
    $('.en').addClass('active');
    $scope.en = function() {
      return true;
    };
    $scope.ua = function() {
      return false;
    };
    $scope.swith_en = function() {
      $scope.en = function() {
        return true;
      };
      $scope.ua = function() {
        return false;
      };
      $('.en').addClass('active');
      $('.ua').removeClass('active');
    };
    $scope.swith_ua = function() {
      $scope.en = function() {
        return false;
      };
      $scope.ua = function() {
        return true;
      };
      $('.en').removeClass('active');
      $('.ua').addClass('active');
    };
    $scope.scrollbarConfig = {
      theme: 'minimal',
      scrollInertia: 800
    };
  });

}).call(this);
