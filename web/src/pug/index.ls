<-(->it.apply {}) _

@mgr = new block.manager registry: (o) ->
  if o.ns == \local => return "block/index.html"
  if !o.path => o.path = "index." + ({block: \html, css: \css, js: \js}[o.type] or \html)
  return "assets/lib/#{o.name}/main/#{o.path}"

@host = "http://0media.tw/t/geoevent"
#@host = "http://zbryikt.github.io/geoevent"

@initz = 1
@autoll = true
@clat = null
@clng = null
@sid = null
@style = 'default'
@ratio = 20
@config =
  src: \1yY4pqGqI3rLMf5bQqe5XMztnnJ78RMUrfh-XpJdhd_o
  color: \default
  ratio: 20
  clat: 12.573404
  clng: -15.193685
  initz: 2

datasrc-handler = ~> @sid = if !(ret = /\/d\/([^\/]+)/.exec @datasrc) => null else ret.1
latlng-handler = ({node}) ~> @[node.getAttribute \data-name] = node.value
@set-style = -> @style = it
@set-ratio = -> @ratio = it
@update-widget = ->
  <~ setTimeout _, 1000
  if !(@sid and @style and @ratio) => return
  if !@autoll and !(@clat and @clng) => return
  @outurl = "/widget/?src=#{@sid}&color=#{@style}&ratio=#{@ratio}"
  if @clat and @clng => @outurl += "&clat=#{@clat}&clng=#{@clng}"
  if !@autoll => @outurl += "&initz=#{@initz}"
  @outurlwithhost = host + @outurl
  @embedcode = "<iframe src='#{@outurlwithhost}'></iframe>"
  view.get \result .setAttribute \src, @outurlwithhost

view = new ldview do
  root: document.body
  init: widget: ({node}) ~>
    ld$.fetch "assets/data/islamist-terrorist-attacks.csv", {method: \GET}, {type: \text}
      .then (raw) ~>
        data = Papa.parse raw .data
        console.log data
        @mgr.from {ns: \local, name: \block}, {root: node, data: {data}}
  action:
    click:
      "set-style": ({node}) ~> @style = node.getAttribute(\data-name)
      "set-ratio": ({node}) ~> @style = node.getAttribute(\data-value)
      generate: ~> @update-widget!
    input:
      latlng: latlng-handler
      datasrc: datasrc-handler
    change:
      latlng: latlng-handler
      datasrc: datasrc-handler
      initz: ({node}) ~> @initz = node.value
      autoll: ({node}) ~> @autoll = node.checked
    handler:
      "set-style": ({node}) ~> node.classList.toggle \active, @style == node.getAttribute(\data-name)
      "set-ratio": ({node}) ~> node.classList.toggle \active, @ratio == node.getAttribute(\data-value)

