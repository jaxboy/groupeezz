// define angular app and modules
angular.module('breakroom', ['ngRoute', 'ngResource', 'ngSanitize', 'ngAnimate'])
    .config(breakroomRouter);

// set variables for dynamically switching active class in nav
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

// controls which views are loaded when nav links are clicked
function breakroomRouter($routeProvider) {
    $routeProvider
        // load Home partial and insert active class to Home nav link
        .when('/',{templateUrl: 'partials/home.html',
        controller: function ($scope) {
            $scope.setActive('home');
        }})
        // load About page content from wordpress.com and insert active class to About nav link
        .when('/about',{template: '<div ng-repeat="post in posts.posts | filter:{ID:27}" ng-bind-html="post.content">{{post.content}}</div>',
        controller: function ($scope) {
            $scope.setActive('about');
        }})
        // load Services page content from wordpress.com and insert active class to Services nav link
        .when('/services',{template: '<div ng-repeat="post in posts.posts | filter:{ID:13}" ng-bind-html="post.content">{{post.content}}</div>',
        controller: function ($scope) {
            $scope.setActive('services');
        }})
        // load Portfolio page content from wordpress.com and insert active class to Portfolio nav link
        .when('/portfolio',{template: '<div ng-repeat="post in posts.posts | filter:{ID:15}" ng-bind-html="post.content">{{post.content}}</div>',
        controller: function ($scope) {
            $scope.setActive('portfolio');
        }})
        // load Blog page content from wordpress.com and insert active class to Blog nav link
        .when('/blog',{template: '<div ng-repeat="post in posts.posts | filter:{ID:17}" ng-bind-html="post.content">{{post.content}}</div>',
        controller: function ($scope) {
            $scope.setActive('blog');
        }})
        // load Contact partial and insert active class to Contact nav link
        .when('/contact',{templateUrl: 'partials/contact.html',
        controller: function ($scope) {
            $scope.setActive('contact');
        }})
}

// request JSON feed from delicious account
function deliciousCtrl ($scope, $http) {
    $http.jsonp('http://feeds.delicious.com/v2/json/modified65?count=5&callback=JSON_CALLBACK').then(function (response) {
          $scope.entries = response.data;
    });
}

// request JSON feed from wordpress.com account
function wordpressCtrl ($scope, $http) {
    $http.jsonp('http://public-api.wordpress.com/rest/v1/sites/modified65.wordpress.com/posts?callback=JSON_CALLBACK').then(function (response) {
          $scope.posts = response.data;
    });
}