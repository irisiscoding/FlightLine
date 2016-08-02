var myApp = angular.module('myApp', ['ngRoute', 'ngMessages']);

myApp.config(function($routeProvider){
    $routeProvider
    
    .when('/', {
        templateUrl: '/partials/main.html'
    })
    .when('/about', {
        templateUrl: '/partials/about.html'
    })
    .when('/menu', {
        templateUrl: '/partials/menu.html'
    })
    .when('/reviews', {
        templateUrl: '/partials/review.html'
    })
    .when('/add_review', {
        templateUrl: '/partials/addReview.html'
    })
    .when('/contact', {
        templateUrl: '/partials/contact.html'
    })
    .otherwise({
        redirectTo: '/'
    })
})
