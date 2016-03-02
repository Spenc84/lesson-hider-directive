angular.module('directivePractice')
.directive('lessonHider', function(){
  return {
    templateUrl: './lessonHider.html',
    restrict: 'E',
    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    controller: function($scope, lessonService){
      $scope.getSchedule = lessonService.getSchedule();
    },
    link: function(scope, element, attributes){
      scope.getSchedule.then(function(res){
        scope.schedule = res.data;
        for (var i = 0; i < scope.schedule.length; i++) {
          if(scope.schedule[i].lesson === scope.lesson){
            element.css('text-decoration', 'line-through');
            scope.day = scope.schedule[i].weekday;
            // $("<button ng-click='dayAlert({lesson: lesson, day: day})'>x</button>").appendTo("li");
            scope.alerts = 'o';
            return;
          }
        }
      });
    }
  }
});
