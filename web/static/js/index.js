var x$;
x$ = angular.module('main', ['0media.events']);
x$.controller('main', ['$scope', '$timeout'].concat(function($scope, $timeout){
  var host, res$, i$, i;
  host = "http://0media.tw/t/geoevent";
  $scope.initz = 1;
  $scope.autoll = true;
  $scope.clat = null;
  $scope.clng = null;
  $scope.sid = null;
  $scope.style = 'default';
  $scope.ratio = 20;
  res$ = [];
  for (i$ = 1; i$ <= 18; ++i$) {
    i = i$;
    res$.push(i);
  }
  $scope.zlvs = res$;
  $scope.setStyle = function(it){
    return $scope.style = it;
  };
  $scope.setRatio = function(it){
    return $scope.ratio = it;
  };
  $scope.updateWidget = function(){
    return $timeout(function(){
      if (!$scope.sid || !$scope.style || !$scope.ratio) {
        return;
      }
      if (!$scope.autoll && !($scope.clat && $scope.clng)) {
        return;
      }
      $scope.outurl = "/widget/?src=" + $scope.sid + "&color=" + $scope.style + "&ratio=" + $scope.ratio;
      if ($scope.clat && $scope.clng) {
        $scope.outurl += "&clat=" + $scope.clat + "&clng=" + $scope.clng;
      }
      if (!$scope.autoll) {
        $scope.outurl += "&initz=" + $scope.initz;
      }
      $scope.outurlwithhost = host + $scope.outurl;
      $scope.embedcode = "<iframe src='" + host + $scope.outurl + "'></iframe>";
      return $('#result').attr('src', $scope.outurlwithhost);
    }, 1000);
  };
  $scope.generate = function(){
    return $scope.updateWidget();
  };
  $scope.$watch('datasrc', function(){
    var ret;
    ret = /\/d\/([^\/]+)/.exec($scope.datasrc);
    if (!ret) {
      return $scope.sid = null;
    } else {
      return $scope.sid = ret[1];
    }
  });
  return $scope.config = {
    src: '1yY4pqGqI3rLMf5bQqe5XMztnnJ78RMUrfh-XpJdhd_o',
    color: 'default',
    ratio: 20,
    clat: 12.573404,
    clng: -15.193685,
    initz: 2
  };
}));