<-(->it.apply {}) _

mapnode = document.querySelector('#zm-event .eventmap')

overlay-adapter =
  onAdd: (overlay, root) ->
    bubbles = $('#zm-event .bubbles')0
    bubbles.parentNode.removeChild(bubbles)
    root.appendChild(bubbles)
  draw: (overlay, map) ->
    z = Math.pow(2, map.getZoom! - 6)
    $scope.events.map (event, i) ->
      event <<< overlay.ll2p(event.lat, event.lng){x,y}
      event.rate = z

@ <<<
  state: 1, speed: 3, dir: 1, loaded: \loading, style: \default
  dim: {width: 0, height: 0, wtype: 'w-md', htype: 'h-md', timeline-height: 300}

@ <<<
  resize: ->
    [w,h] = [mapnode.width!, mapnode.height!]
    @dim <<< {width: w,height: h}
    @dim.wtype = if w <= 480 => 'w-mc'
      else if w <= 768 => 'w-xs'
      else if w <= 991 => 'w-sm'
      else if w <= 1199 => 'w-md'
      else 'w-lg'
    @dim.htype = if h <=240 => 'h-mc'
      else if h <= 320 => 'h-xs'
      else if h <= 480 => 'h-sm'
      else if h <= 600 => 'h-md'
      else 'h-lg'
    @dim.timeline-height = {'h-mc':120, 'h-xs': 140, 'h-sm': 200, 'h-md': 300, 'h-lg': 300}[@dim.htype]
  reset: (partial = false) -> 
    @events.top = 5
    @step-count = 0
    @events.map (it, i) -> 
      it <<< fadeout: 1, opacity: 0.8, size: 0, circle_opacity: 0, bubble: {}, first: false
      if !partial => it.top = i * 50
  set-style: (s) -> @map.set \styles, map-style[@style = s]
  play: -> @ <<< state: 1, dir: 1
  pause: -> @state = 0
  speeding: -> @speed = (@speed % 3) + 1
  step: (dir) -> 
    if dir != @dir => @events.map (d, i) -> d <<< bubble: {state: 0}, size: 0, circle_opacity: 0
    @ <<< {dir, state: 2}


@init-data = ->
@init-data2 = ->
  cfg = src: \1yY4pqGqI3rLMf5bQqe5XMztnnJ78RMUrfh-XpJdhd_o, color: \default, ratio: 1
  ((window.location.search or "").split(\?).filter(->it).0 or "").split \& .map -> 
    ret = it.split \=
    cfg[ret.0] = ret.1

  # TODO find a better approach
  #if $scope.$parent.cfg => cfg <<< $scope.$parent.config
  @currentURL = if cfg.currentURL => that
  else
    params = [[k,v] for k,v of cfg]
      .filter (d) -> d.0 and typeof(d.1) != \undefined
      .map (d) -> "#{d.0}=#{encodeURIComponent d.1}"
      .join \&
    "http://0media.tw/t/geoevent/widget/?" + params

  # first request, get spreadsheet title
  url = "https://spreadsheets.google.com/feeds/worksheets/#{cfg.src}/public/full?alt=json"
  ld$.fetch url, {method: \GET}, {type: \json}
    .then (d) ~> @title = d.feed.title.$t
    .then ~>
      # second request, get workbook content
      url = "https://spreadsheets.google.com/feeds/list/#{cfg.src}/1/public/values?alt=json"
      ld$.fetch url, {method: \GET}, {type: \json}
    .then (d) ~>

      mag1 = [k for k of d.feed.entry.0]map(->/^gsx\$mag1-(.+)$/.exec it)filter(->it)0
      mag2 = [k for k of d.feed.entry.0]map(->/^gsx\$mag2-(.+)$/.exec it)filter(->it)0
      @mag1 = if mag1 => mag1.1 else \death
      @mag2 = if mag2 => mag2.1 else \hurt
      mag1 = if mag1 => mag1.0 else \gsx$death
      mag2 = if mag2 => mag2.0 else \gsx$wounded

      return

      data = d.feed.entry.map ->
        date = it['gsx$date']$t.replace /[年月]/g, '/'
        date = date.replace /[日]/g, ''
        dateFull = new Date(date)
        m = dateFull.getMonth! + 1
        date = (dateFull.getYear! + 1900) + "/" + (if m < 10 => "0" else "") + m
        magsum = do
          mag1: parseInt(it.{}[mag1].$t or 0)
          mag2: parseInt(it.{}[mag2].$t or 0)
        magsum.total = magsum.mag1 + magsum.mag2
        magsum.radius = parseInt( Math.sqrt(magsum.total ) ) * 3 + 10
        lat = parseFloat(it['gsx$latitude']$t or 0)
        lng = parseFloat(it['gsx$longitude']$t or 0)
        name = (it['gsx$shortname']$t or it['gsx$event']$t)trim!
        loc = new google.maps.LatLng(lat, lng)
        ret = {name, dateFull, magsum, lat, lng, loc, date}
        ret
      data = data.filter -> it.lat and it.lng and it.magsum.total
      lats = data.map(->parseFloat it.lat)sort (a,b) -> a - b
      lngs = data.map(->parseFloat it.lng)sort (a,b) -> a - b
      @step-count = 0
      step-transition = ~>
        if @state => 
          ani-fire = data[@step-count + @dir]
          if ani-fire => 
            ani-fire.circle_opacity = 1
            ani-fire.bubble.state = 1
            ani-fire.size = ani-fire.magsum.radius * ani-fire.rate * cfg.ratio
          if ani-fire => @current = ani-fire
          ani-hold = data[@step-count]
          if ani-hold => ani-hold.bubble.state = 2
          ani-hide = data[@step-count - @dir]
          if ani-hide => ani-hide.circle_opacity = 0
          @events.top = (@events.top or 5) - 50 * @dir
          if @events.top > 5 =>
            @events.top = 5
            @state = 0
          if @events.top < (5 - ( @events.length - 1 ) * 50) =>
            @events.top = 5 - ( @events.length - 1 ) * 50
            @state = 0
          @step-count += @dir
          @step-count >?= 0
          @step-count <?= ( @events.length - 1)
        if @state == 2 => @state = 0
        setTimeout step-transition, [1600 800 300][@speed - 1]
      setTimeout step-transition, 0
      @events = data
      @reset!
      @map = map.init mapnode.0, [lats.0, lats[* - 1]], [lngs.0, lngs[* - 1]], resize, overlay-adapter, cfg
      @set-style cfg.color
      @loaded = ''
      setTimeout resize, 0

@initData!
