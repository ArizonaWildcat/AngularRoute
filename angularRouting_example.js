/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module("demo", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
            .when("/home" ,{
        templateUrl:"../template/home.html",
        controller:"homeController"
        })
            .when("/course" ,{
        templateUrl:"../template/course.html",
        controller:"courseController"
        })
        .when("/student" ,{
        templateUrl:"../template/student.html",
        controller:"studentController"
    })
            .otherwise({
                redirect:"/home"
    });
})
app.controller("homeController", function($scope){
    $scope.massage ="Welcome to Homepage";
    
});
app.controller("courseController", function($scope){
   var a = ["JAVA","Web Front End","SQL Server","C#"];
    $scope.Course = a;
    $scope.CourseMassage ="Here is Courses";
});
app.controller("studentController", function($scope){
   var students = ["Mark","Steave","Sunder","Satya","Premji","Prashanth","Pramod","Vaibhav","Deep","Jay","Aakanksha"];
    $scope.stds = students;
    $scope.stdsMassage ="Here is list of students";
});

