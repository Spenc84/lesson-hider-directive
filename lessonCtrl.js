angular.module('directivePractice')
.controller('lessonCtrl', function($scope){
  $scope.dataArray = ['Services', 'Routing', 'Directives', 'Review', 'Firebase',
                      'No server project', 'Node', 'Express', 'Mongo'];
  $scope.test = "This is a test of the national emergency broadcast system. Please, do not be alarmed...";
  $scope.announceDay = function(lesson, day){
    alert(lesson + " is active on " + day + ".");
  };
});
