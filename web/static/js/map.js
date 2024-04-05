var x$;
x$ = angular.module('0media.events');
x$.factory('0media.events.map', [].concat(function(){
  return {
    init: function(node, lats, lngs, resize, overlay, config){
      var mapOption, mapBound, boundPtrs, simdate, map, _overlay;
      mapOption = {
        center: new google.maps.LatLng(23.624146, 120.320623),
        zoom: parseInt(config.initz || 9),
        minZoom: 1,
        maxZoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: false,
        scaleControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_CENTER
        }
      };
      if (config.clat && config.clng) {
        mapOption.center = new google.maps.LatLng(parseFloat(config.clat), parseFloat(config.clng));
      } else {
        mapBound = new google.maps.LatLngBounds();
        boundPtrs = [[lats[1], lngs[0]], [lats[0], lngs[1]]];
        boundPtrs.map(function(it){
          return new google.maps.LatLng(it[0], it[1]);
        }).map(function(it){
          return mapBound.extend(it);
        });
      }
      simdate = function(date){
        return date.getYear() + 1900;
      };
      map = new google.maps.Map(node, mapOption);
      if (mapBound) {
        map.fitBounds(mapBound);
      }
      google.maps.event.addDomListener(window, 'resize', function(){
        var ref$, w, h, b, lat1, lng1, lat2, lng2;
        if (!mapBound) {
          mapBound = map.getBounds();
        }
        ref$ = [$(node).width(), $(node).height()], w = ref$[0], h = ref$[1];
        map.fitBounds(mapBound);
        b = map.getBounds();
        ref$ = [b.getNorthEast().lat(), b.getSouthWest().lng()], lat1 = ref$[0], lng1 = ref$[1];
        ref$ = [b.getSouthWest().lat(), b.getNorthEast().lng()], lat2 = ref$[0], lng2 = ref$[1];
        return resize([lat1, lng2], [lat2, lng1]);
      });
      _overlay = import$(new google.maps.OverlayView(), {
        ll2p: function(lat, lng){
          var prj, ret;
          prj = this.getProjection();
          return ret = prj.fromLatLngToDivPixel(new google.maps.LatLng(lat, lng));
        },
        onAdd: function(){
          return overlay.onAdd(this, this.getPanes().overlayLayer);
        },
        draw: function(){
          return overlay.draw(this, map);
        }
      });
      _overlay.setMap(map);
      return map;
    }
  };
}));
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}