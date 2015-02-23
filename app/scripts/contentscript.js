'use strict';

window.addEventListener("load", function() {
  var app = angular.module('MagicButton', []);

  var html = document.querySelector('html');
  html.setAttribute('ng-app', '');
  html.setAttribute('ng-csp', '');

  // Wire up a dummy controller;
  
  var viewport = document.getElementById('pagelet_bluebar');
  viewport.setAttribute('ng-controller', 'MainController');
  app.controller('MainController', function($scope) {});

  // Let's add a very basic directive;

  var magicButton = document.createElement('div');
  magicButton.setAttribute('magic-button', '');
  document.querySelector('._5142').appendChild(magicButton);

  app.directive('magicButton', [ '$sce', function($sce) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: $sce.trustAsResourceUrl(chrome.extension.getURL('templates/magic.html'))
    };
  }]);

  angular.bootstrap(html, ['MagicButton'], []);
});
