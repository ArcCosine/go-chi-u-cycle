(function(global){

  //define
  var _BROWSER = !!global.self;
  //var _NODE_JS = !!global.process;

  //Gochiucycle Base Class
  function GochiuCycle(){
      this.init();
  }
  GochiuCycle.prototype.init = GCInit;
  GochiuCycle.prototype.load = GCLoad;
  GochiuCycle.prototype.loadEnd = GCLoadEnd;
  GochiuCycle.prototype.render = GCRender;
  GochiuCycle.prototype.bindEvent = GCBindEvent;
  GochiuCycle.prototype.calcPos = GCCalcPos;
  GochiuCycle.prototype.rotate = GCRotate;
  GochiuCycle.prototype.rrotate = GCRRotate;
  GochiuCycle.prototype.wheel = GCWheel;
  GochiuCycle.prototype.renderCount = GCRenderCount;
  GochiuCycle.prototype.shareEvent = GCShareEvent;

  // Initialize
  function GCInit() {
      this.position = 0;
      this.load();
      this.bindEvent();
  }

  // load config
  function GCLoad() {
      var _self = this;
      var xhr = new XMLHttpRequest();
      xhr.addEventListener("readystatechange", function(){ _self.loadEnd(this) }, false );
      xhr.open("GET","./js/config.json", true);
      xhr.responseType = "json";
      xhr.send(null);
  }

  // load end
  function GCLoadEnd(xhrObj) {
      if( xhrObj.readyState === 4 && xhrObj.status === 200 && xhrObj.response ){
          this.data = xhrObj.response;
          this.render();
      }
  }

  // render datas
  function GCRender() {
      var _self = this;
      var title = document.getElementById("title");
      title.textContent = this.data.title;

      var share = document.getElementById("share");

      var shareLink = share.appendChild(document.createElement("a"));
      shareLink.href = "#";
      shareLink.textContent = this.data.share;
     shareLink.addEventListener("click", function(eve){ _self.shareEvent(eve) }, false );


      var icons = this.data.icons;

      var cycleArea = document.getElementById("cycle-area");
      icons.forEach(function(icon){
          var div = cycleArea.appendChild(document.createElement("div"));
          div.setAttribute("class", "cycle-icon");

          var img = new Image();
          img.src = icon;

          var handleObj = {
              handleEvent: function(eve){
                this.div.style.backgroundImage = "url(" + this.imgpath + ")";
              },
              imgpath: icon,
              //img: img,
              div: div
          };
          img.addEventListener("load", handleObj , false );

      });
      this.rotate();
  }

  function GCBindEvent(){
     var _self = this;
     var rotate = document.getElementById("control-rotate");
     rotate.addEventListener("click", function(eve){ _self.rotate(eve) }, false );
     var rrotate = document.getElementById("control-rrotate");
     rrotate.addEventListener("click", function(eve){ _self.rrotate(eve) }, false );

     window.addEventListener("mousewheel", function(eve){ _self.wheel(eve) }, false );

     window.addEventListener("resize", function(eve){ _self.calcPos() }, false );

  }

  function GCCalcPos() {
      var cycleIcons = document.querySelectorAll(".cycle-icon");

      var offset = document.querySelector(".control-area").offsetHeight;
      var geta = cycleIcons[0].offsetWidth;
      var r = Math.floor((document.documentElement.clientHeight-offset-geta*2)/2);
      var x = (document.body.offsetWidth / 2) - geta/2;
      var y = (document.documentElement.clientHeight-offset) < 500 ? geta*2: offset+geta;
      var limit = cycleIcons.length;
      var sep = (360/limit);
      for( var i=0; i<limit; i++ ){
          var n = this.position + i;
          var deg = n * sep;
          var theta = Math.PI/180 * deg;
          var rx = Math.floor(x + r * Math.cos(theta));
          var ry = Math.floor(y + r * Math.sin(theta));
          var style = "translateX(" + rx + "px) translateY(" + ry + "px)";
          var cycleIcon = cycleIcons[i];
          cycleIcon.style.transform = style;
      }
  }

  function GCRotate() {
      this.position++;
      this.calcPos();
      this.renderCount();
  }

  function GCRRotate() {
      this.position--;
      this.calcPos();
      this.renderCount();
  }

  function GCWheel(eve){
      var delta = -1*Math.max( -1, Math.min( 1, eve.wheelDelta));
      this.position += delta;
      this.calcPos();
      this.renderCount();
  }

  function GCRenderCount() {
      var result = document.getElementById("result");
      result.textContent = this.position + this.data.message;
  }

  function GCShareEvent(eve){
      eve.preventDefault();
      var u = location.href;
      var t = document.title;
      var text = document.getElementById("result").textContent;
      var link = ["http://twitter.com/?status=" , encodeURIComponent(text) ," - " , t , " " ,u];

      window.open(link.join(""));
  }


  //export
  global.GochiuCycle = GochiuCycle;

  document.addEventListener("DOMContentLoaded", function(){
      new GochiuCycle();
  }, false );

})(this.self || global);  //this.self as window object.
