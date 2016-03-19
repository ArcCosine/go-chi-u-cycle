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
  GochiuCycle.prototype.inverserotate = GCInverseRotate;
  GochiuCycle.prototype.wheel = GCWheel;
  GochiuCycle.prototype.renderCount = GCRenderCount;
  GochiuCycle.prototype.shareEvent = GCShareEvent;
  GochiuCycle.prototype.isMobile = GCIsMobile;


  // Initialize
  function GCInit() {
      this.position = 0;
      this.isMobile = this.isMobile();
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

      var rotate = document.getElementById("control-rotate");
      rotate.value = this.data.rotate;
      var inverserotate = document.getElementById("control-inverserotate");
      inverserotate.value = this.data.inverserotate;


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
      this.calcPos();
  }

  function GCBindEvent(){
     var _self = this;
     var rotate = document.getElementById("control-rotate");
     var inverserotate = document.getElementById("control-inverserotate");
     if( this.isMobile ){
        rotate.addEventListener("touchstart", function(eve){ _self.rotate(eve) }, false );
        inverserotate.addEventListener("touchstart", function(eve){ _self.inverserotate(eve) }, false );
     }
     rotate.addEventListener("click", function(eve){ _self.rotate(eve) }, false );
     inverserotate.addEventListener("click", function(eve){ _self.inverserotate(eve) }, false );


     window.addEventListener("mousewheel", function(eve){ _self.wheel(eve) }, false );
     window.addEventListener("resize", function(eve){ _self.calcPos() }, false );

  }

  function GCCalcPos() {
      var cycleIcons = document.querySelectorAll(".cycle-icon");

      var offset = document.querySelector(".control-area").clientHeight;
      var geta = cycleIcons[0].clientHeight;
      var r = Math.floor((document.documentElement.clientHeight-offset-geta*2)/2);
      var x = (document.body.clientWidth / 2) - geta/2;
      var y = r;
      var limit = cycleIcons.length;
      var sep = Math.floor(360/limit);
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

      this.renderCount();
  }

  function GCRotate(eve) {
      eve.preventDefault();
      this.position++;
      this.calcPos();
  }

  function GCInverseRotate(eve) {
      eve.preventDefault();
      this.position--;
      this.calcPos();
  }

  function GCWheel(eve){
      var delta = -1*Math.max( -1, Math.min( 1, eve.wheelDelta));
      this.position += delta;
      this.calcPos();
  }

  function GCRenderCount() {
      var result = document.getElementById("result");
      result.textContent = this.data.message.replace(/#{counter}/,this.position );
  }

 function GCIsMobile(){
     var a =navigator.userAgent||navigator.vendor||window.opera;
     if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))){
         return true;
     }else{
         return false;
     }
 }

  function GCShareEvent(eve){
      eve.preventDefault();
      var u = location.href;
      var t = document.title;
      var text = document.getElementById("result").textContent;
      var link = ["http://twitter.com/?status=" , encodeURIComponent(text) ," - " , t , " " ,u];
      if( this.isMobile ){
          link = ["twitter://post?message=" , encodeURIComponent(text) ," - " , t , " " ,u];
      }
      window.open(link.join(""));
  }


  //export
  global.GochiuCycle = GochiuCycle;

  document.addEventListener("DOMContentLoaded", function(){
      new GochiuCycle();
  }, false );

})(this.self || global);  //this.self as window object.
