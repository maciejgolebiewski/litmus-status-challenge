var app = angular.module("status", ["ngRoute"]); // create the module

app.config(function($routeProvider) {
  $routeProvider.when("/litmus-application", {
    templateUrl: "views/litmus-application.html",
    controller:"displaynav"
  });
  $routeProvider.when("/email-previews", {
    templateUrl: "views/email-previews.html",
    controller: "displaynav"
  });
  $routeProvider.when("/web-page-previews", {
    templateUrl: "views/web-page-previews.html",
    controller: "displaynav"
  });
  $routeProvider.when("/spam-filters", {
    templateUrl: "views/spam-filters.html",
    controller: "displaynav"
  });
  $routeProvider.when("/email-analytics", {
    templateUrl: "views/email-analytics.html",
    controller: "displaynav"
  });
  $routeProvider.when("/reseller-api", {
    templateUrl: "views/reseller-api.html",
    controller: "displaynav"
  });
  $routeProvider.when("/labs", {
    templateUrl: "views/labs.html",
    controller: "displaynav"
  });
  $routeProvider.otherwise({
    redirectTo: "/litmus-application"
  });

});
