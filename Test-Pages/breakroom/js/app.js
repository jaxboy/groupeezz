angular.module('breakroom', [])
    .config(breakroomRouter);

function AppCtrl ($scope) {
  $scope.setActive = function (type) {
    $scope.homeActive = '';
    $scope.aboutActive = '';
    $scope.servicesActive = '';
    $scope.portfolioActive = '';
    $scope.blogActive = '';
    $scope.contactActive = '';
    
    $scope[type + 'Active'] = 'active';
  }
}

function breakroomRouter ($routeProvider) {
    $routeProvider
        .when('/',{templateUrl: 'partials/home.html',
        controller: function ($scope) {
            $scope.setActive('home');
        }})
         .when('/about',{templateUrl: 'partials/about.html',
        controller: function ($scope) {
            $scope.setActive('about');
        }})
         .when('/services',{templateUrl: 'partials/services.html',
        controller: function ($scope) {
            $scope.setActive('services');
        }})
         .when('/portfolio',{templateUrl: 'partials/portfolio.html',
        controller: function ($scope) {
            $scope.setActive('portfolio');
        }})
         .when('/blog',{templateUrl: 'partials/blog.html',
        controller: function ($scope) {
            $scope.setActive('blog');
        }})
         .when('/contact',{templateUrl: 'partials/contact.html',
        controller: function ($scope) {
            $scope.setActive('contact');
        }})
}