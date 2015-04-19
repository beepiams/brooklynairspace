(function() {
    'use strict';

    angular.module('application', [
        'ui.router',
        'ngAnimate',
        'ngMap',
        'sticky',
        'duScroll',
        'iso.directives',
        'slick',
        //foundation
        'foundation',
        'foundation.dynamicRouting',
        'foundation.dynamicRouting.animations'

    ])
        .config(config)
        .controller('MyController', MyController)
        .controller('MyController2', MyController2)
        .run(run);
      

    config.$inject = ['$urlRouterProvider', '$locationProvider'];

    function config($urlProvider, $locationProvider) {
        $urlProvider.otherwise('/');

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
            // ['/classes/', '/instructors/']
        });

        $locationProvider.hashPrefix('!');
    }

    function run() {
        FastClick.attach(document.body);
    }

MyController.$inject = ['$scope', '$stateParams', '$state', '$controller'];
function MyController($scope, $stateParams, $state, $controller) {
angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));
$scope.breakpoints = [
  {
    breakpoint: 3000,
    settings: 
    {
        slidesToShow: 3,
        slidesToScroll: 3,
        // infinite: true,
        centerMode: true,
        centerPadding: '25px',
        // initialSlide: 0,
        adaptiveHeight: true,
    }
  }, {
    breakpoint: 960,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '25px',
        // initialSlide: 0,
        adaptiveHeight: true,
    }
  }, {
    breakpoint: 640,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '25px',
        // initialSlide: 0,
        adaptiveHeight: true,
    }
  }, {
    breakpoint: 0,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '25px',
        // initialSlide: 0,
        adaptiveHeight: true,
    }
  }
];
}

MyController2.$inject = ['$scope', '$stateParams', '$state', '$controller'];
function MyController2($scope, $stateParams, $state, $controller) {
angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));
$scope.breakpoints = [
  {
    breakpoint: 3000,
    settings: 
    {
        slidesToShow: 3,
        slidesToScroll: 3,
        // infinite: true,
        centerMode: true,
        centerPadding: '25px',
        // initialSlide: 0,
        // adaptiveHeight: true,
    }
  }, {
    breakpoint: 960,
    settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        centerMode: true,
        centerPadding: '15px',
        // initialSlide: 0,
        adaptiveHeight: true,
    }
  }, {
    breakpoint: 640,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '25px',
        // initialSlide: 0,
        adaptiveHeight: true,
    }
  }, {
    breakpoint: 0,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '25px',
        // initialSlide: 0,
        adaptiveHeight: true,
    }
  }
];
}


})();