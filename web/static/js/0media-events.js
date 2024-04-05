var x$;
x$ = angular.module('0media.events', []);
x$.controller('0media.events.main', ['$scope', '$interval', '$timeout', '$http', '0media.events.map', '0media.events.map-style'].concat(function($scope, $interval, $timeout, $http, map, mapStyle){
  var mapnode, resize, overlayAdapter;
  $scope.style = 'default';
  mapnode = $('#zm-event .eventmap');
  $scope.dim = {
    width: 0,
    height: 0,
    wtype: 'w-md',
    htype: 'h-md',
    timelineHeight: 300
  };
  resize = function(){
    return $scope.$apply(function(){
      var ref$, w, h;
      ref$ = [mapnode.width(), mapnode.height()], w = ref$[0], h = ref$[1];
      ref$ = $scope.dim;
      ref$.width = w;
      ref$.height = h;
      $scope.dim.wtype = w <= 480
        ? 'w-mc'
        : w <= 768
          ? 'w-xs'
          : w <= 991
            ? 'w-sm'
            : w <= 1199 ? 'w-md' : 'w-lg';
      $scope.dim.htype = h <= 240
        ? 'h-mc'
        : h <= 320
          ? 'h-xs'
          : h <= 480
            ? 'h-sm'
            : h <= 600 ? 'h-md' : 'h-lg';
      return $scope.dim.timelineHeight = {
        'h-mc': 120,
        'h-xs': 140,
        'h-sm': 200,
        'h-md': 300,
        'h-lg': 300
      }[$scope.dim.htype];
    });
  };
  overlayAdapter = {
    onAdd: function(overlay, root){
      var bubbles;
      bubbles = $('#zm-event .bubbles')[0];
      bubbles.parentNode.removeChild(bubbles);
      return root.appendChild(bubbles);
    },
    draw: function(overlay, map){
      var z;
      z = Math.pow(2, map.getZoom() - 6);
      return $scope.events.map(function(event, i){
        var ref$;
        event.x = (ref$ = overlay.ll2p(event.lat, event.lng)).x;
        event.y = ref$.y;
        return event.rate = z;
      });
    }
  };
  $scope.reset = function(partial){
    partial == null && (partial = false);
    $scope.events.top = 5;
    $scope.stepCount = 0;
    return $scope.events.map(function(it, i){
      it.fadeout = 1;
      it.opacity = 0.8;
      it.size = 0;
      it.circle_opacity = 0;
      it.bubble = {};
      it.first = false;
      if (!partial) {
        it.top = i * 50;
      }
      return it;
    });
  };
  $scope.setStyle = function(style){
    $scope.style = style;
    return $scope.map.set('styles', mapStyle[style]);
  };
  $scope.play = function(){
    $scope.state = 1;
    return $scope.dir = 1;
  };
  $scope.pause = function(){
    return $scope.state = 0;
  };
  $scope.speeding = function(){
    return $scope.speed = $scope.speed % 3 + 1;
  };
  $scope.step = function(dir){
    if (dir !== $scope.dir) {
      $scope.events.map(function(it, i){
        return it.bubble = {
          state: 0
        }, it.size = 0, it.circle_opacity = 0, it;
      });
    }
    $scope.dir = dir;
    return $scope.state = 2;
  };
  $scope.state = 1;
  $scope.speed = 3;
  $scope.dir = 1;
  $scope.loaded = 'loading';
  $scope.initData = function(){
    var config, k, v;
    config = {
      src: '1yY4pqGqI3rLMf5bQqe5XMztnnJ78RMUrfh-XpJdhd_o',
      color: 'default',
      ratio: 1
    };
    ((window.location.search || "").split('?').filter(function(it){
      return it;
    })[0] || "").split('&').map(function(it){
      var ret;
      ret = it.split('=');
      return config[ret[0]] = ret[1];
    });
    if ($scope.$parent.config) {
      import$(config, $scope.$parent.config);
    }
    if (config.currentURL) {
      $scope.currentURL = config.currentURL;
    } else {
      $scope.currentURL = "http://0media.tw/t/geoevent/widget/?" + (function(){
        var ref$, results$ = [];
        for (k in ref$ = config) {
          v = ref$[k];
          results$.push([k, v]);
        }
        return results$;
      }()).filter(function(it){
        return it[0] && typeof it[1] !== "undefined";
      }).map(function(it){
        return it[0] + "=" + encodeURIComponent(it[1]);
      }).join('&');
    }
    return $http({
      url: "https://spreadsheets.google.com/feeds/worksheets/" + config.src + "/public/full?alt=json",
      method: 'GET'
    }).success(function(d){
      $scope.title = d.feed.title.$t;
      return $http({
        url: "https://spreadsheets.google.com/feeds/list/" + config.src + "/1/public/values?alt=json",
        method: 'GET'
      }).success(function(d){
        var mag1, k, mag2, data, lats, lngs, stepJsAnimation, stepTransition;
        console.log(d);
        mag1 = (function(){
          var results$ = [];
          for (k in d.feed.entry[0]) {
            results$.push(k);
          }
          return results$;
        }()).map(function(it){
          return /^gsx\$mag1-(.+)$/.exec(it);
        }).filter(function(it){
          return it;
        })[0];
        mag2 = (function(){
          var results$ = [];
          for (k in d.feed.entry[0]) {
            results$.push(k);
          }
          return results$;
        }()).map(function(it){
          return /^gsx\$mag2-(.+)$/.exec(it);
        }).filter(function(it){
          return it;
        })[0];
        console.log((function(){
          var results$ = [];
          for (k in d.feed.entry[0]) {
            results$.push(k);
          }
          return results$;
        }()));
        $scope.mag1 = mag1 ? mag1[1] : 'death';
        $scope.mag2 = mag2 ? mag2[1] : 'hurt';
        mag1 = mag1 ? mag1[0] : 'gsx$death';
        mag2 = mag2 ? mag2[0] : 'gsx$wounded';
        console.log($scope.mag1, $scope.mag2);
        data = d.feed.entry.map(function(it){
          var date, dateFull, m, magsum, lat, lng, name, loc, ret;
          date = it['gsx$date'].$t.replace(/[年月]/g, '/');
          date = date.replace(/[日]/g, '');
          dateFull = new Date(date);
          m = dateFull.getMonth() + 1;
          date = (dateFull.getYear() + 1900) + "/" + (m < 10 ? "0" : "") + m;
          magsum = {
            mag1: parseInt((it[mag1] || (it[mag1] = {})).$t || 0),
            mag2: parseInt((it[mag2] || (it[mag2] = {})).$t || 0)
          };
          magsum.total = magsum.mag1 + magsum.mag2;
          magsum.radius = parseInt(Math.sqrt(magsum.total)) * 3 + 10;
          lat = parseFloat(it['gsx$latitude'].$t || 0);
          lng = parseFloat(it['gsx$longitude'].$t || 0);
          name = (it['gsx$shortname'].$t || it['gsx$event'].$t).trim();
          loc = new google.maps.LatLng(lat, lng);
          ret = {
            name: name,
            dateFull: dateFull,
            magsum: magsum,
            lat: lat,
            lng: lng,
            loc: loc,
            date: date
          };
          return ret;
        });
        data = data.filter(function(it){
          return it.lat && it.lng && it.magsum.total;
        });
        lats = data.map(function(it){
          return parseFloat(it.lat);
        }).sort(function(a, b){
          return a - b;
        });
        lngs = data.map(function(it){
          return parseFloat(it.lng);
        }).sort(function(a, b){
          return a - b;
        });
        stepJsAnimation = function(){
          var hit, chosen, lineH, lineH3, lineH133;
          hit = 0;
          chosen = false;
          lineH = $scope.dim.timelineHeight;
          lineH = $('#zm-event .timeline .line').height() * 0.9;
          lineH3 = lineH / 3;
          lineH133 = lineH * 1.33;
          if ((data[data.length - 1].top <= 67 && $scope.dir === 1) || (data[0].top >= 65 && $scope.dir === -1)) {
            $scope.state = 0;
          }
          data.map(function(it, i){
            var ref$, ref1$;
            if ($scope.state === 1) {
              it.top = it.top - 4 * $scope.dir;
            }
            if (it.top <= 67 && it.top >= 64) {
              hit = 1;
            }
            if (it.top < 65) {
              it.fadeout = 1 - (65 - it.top) / 20;
              if (it.fadeout < 0) {
                it.fadeout = 0;
              }
            }
            if (it.top > lineH) {
              it.fadeout = 1 - (it.top - lineH) / lineH3;
            }
            it.opacity = (lineH133 - it.top) / lineH133;
            (ref$ = (ref1$ = it.opacity) < 1 ? ref1$ : 1) > 0 ? ref$ : 0;
            if (it.top < -200 || it.top > lineH) {
              it.bubble.state = 0;
              it.circle_opacity = 0;
              it.size = 0;
            }
            if (it.bubble.state === 1) {
              it.bubble.state = 2;
              it.circle_opacity = 0;
              it.size = it.magsum.radius * it.rate;
            }
            if (!chosen && it.top >= 64) {
              $scope.current = it;
              it.first = true;
              if (it.bubble.state !== 2) {
                it.bubble.state = 1;
                it.circle_opacity = 1;
                it.size = 0;
              }
              chosen = true;
            }
            return it;
          });
          if (hit) {
            return $timeout(step, 910 - $scope.speed * 300);
          } else {
            return $timeout(step, 40 - $scope.speed * 10);
          }
        };
        $scope.stepCount = 0;
        stepTransition = function(){
          var aniFire, aniHold, aniHide, ref$;
          if ($scope.state) {
            aniFire = data[$scope.stepCount + $scope.dir];
            if (aniFire) {
              aniFire.circle_opacity = 1;
              aniFire.bubble.state = 1;
              aniFire.size = aniFire.magsum.radius * aniFire.rate * config.ratio;
            }
            if (aniFire) {
              $scope.current = aniFire;
            }
            aniHold = data[$scope.stepCount];
            if (aniHold) {
              aniHold.bubble.state = 2;
            }
            aniHide = data[$scope.stepCount - $scope.dir];
            if (aniHide) {
              aniHide.circle_opacity = 0;
            }
            $scope.events.top = ($scope.events.top || 5) - 50 * $scope.dir;
            if ($scope.events.top > 5) {
              $scope.events.top = 5;
              $scope.state = 0;
            }
            if ($scope.events.top < 5 - ($scope.events.length - 1) * 50) {
              $scope.events.top = 5 - ($scope.events.length - 1) * 50;
              $scope.state = 0;
            }
            $scope.stepCount += $scope.dir;
            $scope.stepCount >= 0 || ($scope.stepCount = 0);
            $scope.stepCount <= (ref$ = $scope.events.length - 1) || ($scope.stepCount = ref$);
          }
          if ($scope.state === 2) {
            $scope.state = 0;
          }
          return $timeout(stepTransition, [1600, 800, 300][$scope.speed - 1]);
        };
        $timeout(stepTransition, 0);
        $scope.events = data;
        $scope.reset();
        $scope.map = map.init(mapnode[0], [lats[0], lats[lats.length - 1]], [lngs[0], lngs[lngs.length - 1]], resize, overlayAdapter, config);
        $scope.setStyle(config.color);
        $scope.loaded = '';
        return setTimeout(resize, 0);
      });
    });
  };
  return $scope.initData();
}));
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}