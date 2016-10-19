// Ionic Dev Server: Dev Logger

/**
 * StackTrace.js makes it easy to pick apart a stack trace in a cross-browser way.
 */
!function(e,t){"use strict";"function"==typeof define&&define.amd?define("stackframe",[],t):"object"==typeof exports?module.exports=t():e.StackFrame=t()}(this,function(){"use strict";function e(e){return!isNaN(parseFloat(e))&&isFinite(e)}function t(e,t,r,n,i,o){void 0!==e&&this.setFunctionName(e),void 0!==t&&this.setArgs(t),void 0!==r&&this.setFileName(r),void 0!==n&&this.setLineNumber(n),void 0!==i&&this.setColumnNumber(i),void 0!==o&&this.setSource(o)}return t.prototype={getFunctionName:function(){return this.functionName},setFunctionName:function(e){this.functionName=String(e)},getArgs:function(){return this.args},setArgs:function(e){if("[object Array]"!==Object.prototype.toString.call(e))throw new TypeError("Args must be an Array");this.args=e},getFileName:function(){return this.fileName},setFileName:function(e){this.fileName=String(e)},getLineNumber:function(){return this.lineNumber},setLineNumber:function(t){if(!e(t))throw new TypeError("Line Number must be a Number");this.lineNumber=Number(t)},getColumnNumber:function(){return this.columnNumber},setColumnNumber:function(t){if(!e(t))throw new TypeError("Column Number must be a Number");this.columnNumber=Number(t)},getSource:function(){return this.source},setSource:function(e){this.source=String(e)},toString:function(){var t=this.getFunctionName()||"{anonymous}",r="("+(this.getArgs()||[]).join(",")+")",n=this.getFileName()?"@"+this.getFileName():"",i=e(this.getLineNumber())?":"+this.getLineNumber():"",o=e(this.getColumnNumber())?":"+this.getColumnNumber():"";return t+r+n+i+o}},t}),function(e,t){"use strict";"function"==typeof define&&define.amd?define("error-stack-parser",["stackframe"],t):"object"==typeof exports?module.exports=t(require("stackframe")):e.ErrorStackParser=t(e.StackFrame)}(this,function(e){"use strict";function t(e,t,r){if("function"==typeof Array.prototype.map)return e.map(t,r);for(var n=new Array(e.length),i=0;i<e.length;i++)n[i]=t.call(r,e[i]);return n}function r(e,t,r){if("function"==typeof Array.prototype.filter)return e.filter(t,r);for(var n=[],i=0;i<e.length;i++)t.call(r,e[i])&&n.push(e[i]);return n}function n(e,t){if("function"==typeof Array.prototype.indexOf)return e.indexOf(t);for(var r=0;r<e.length;r++)if(e[r]===t)return r;return-1}var i=/(^|@)\S+\:\d+/,o=/^\s*at .*(\S+\:\d+|\(native\))/m,a=/^(eval@)?(\[native code\])?$/;return{parse:function(e){if("undefined"!=typeof e.stacktrace||"undefined"!=typeof e["opera#sourceloc"])return this.parseOpera(e);if(e.stack&&e.stack.match(o))return this.parseV8OrIE(e);if(e.stack)return this.parseFFOrSafari(e);throw new Error("Cannot parse given Error object")},extractLocation:function(e){if(-1===e.indexOf(":"))return[e];var t=/(.+?)(?:\:(\d+))?(?:\:(\d+))?$/,r=t.exec(e.replace(/[\(\)]/g,""));return[r[1],r[2]||void 0,r[3]||void 0]},parseV8OrIE:function(i){var a=r(i.stack.split("\n"),function(e){return!!e.match(o)},this);return t(a,function(t){t.indexOf("(eval ")>-1&&(t=t.replace(/eval code/g,"eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g,""));var r=t.replace(/^\s+/,"").replace(/\(eval code/g,"(").split(/\s+/).slice(1),i=this.extractLocation(r.pop()),o=r.join(" ")||void 0,a=n(["eval","<anonymous>"],i[0])>-1?void 0:i[0];return new e(o,void 0,a,i[1],i[2],t)},this)},parseFFOrSafari:function(n){var i=r(n.stack.split("\n"),function(e){return!e.match(a)},this);return t(i,function(t){if(t.indexOf(" > eval")>-1&&(t=t.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g,":$1")),-1===t.indexOf("@")&&-1===t.indexOf(":"))return new e(t);var r=t.split("@"),n=this.extractLocation(r.pop()),i=r.join("@")||void 0;return new e(i,void 0,n[0],n[1],n[2],t)},this)},parseOpera:function(e){return!e.stacktrace||e.message.indexOf("\n")>-1&&e.message.split("\n").length>e.stacktrace.split("\n").length?this.parseOpera9(e):e.stack?this.parseOpera11(e):this.parseOpera10(e)},parseOpera9:function(t){for(var r=/Line (\d+).*script (?:in )?(\S+)/i,n=t.message.split("\n"),i=[],o=2,a=n.length;a>o;o+=2){var s=r.exec(n[o]);s&&i.push(new e(void 0,void 0,s[2],s[1],void 0,n[o]))}return i},parseOpera10:function(t){for(var r=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,n=t.stacktrace.split("\n"),i=[],o=0,a=n.length;a>o;o+=2){var s=r.exec(n[o]);s&&i.push(new e(s[3]||void 0,void 0,s[2],s[1],void 0,n[o]))}return i},parseOpera11:function(n){var o=r(n.stack.split("\n"),function(e){return!!e.match(i)&&!e.match(/^Error created at/)},this);return t(o,function(t){var r,n=t.split("@"),i=this.extractLocation(n.pop()),o=n.shift()||"",a=o.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^\)]*\)/g,"")||void 0;o.match(/\(([^\)]*)\)/)&&(r=o.replace(/^[^\(]+\(([^\)]*)\)$/,"$1"));var s=void 0===r||"[arguments not available]"===r?void 0:r.split(",");return new e(a,s,i[0],i[1],i[2],t)},this)}}});



var IonicDevServer = {
  start: function() {
    console.log('dev server enabled');

    this.bindKeyboardEvents();
  },
  handleError: function(err) {
    console.log('IONIC DEV SERVER HANDLING ERR', err);

    if(!this._errorWindow) {
      var d = document.createElement('div');
      d.className = '_ionic-error-view';

      var stackFrames = ErrorStackParser.parse(err);

      var stackOut = [];
      var frame;
      var fileName;
      for(var i = 0; i < Math.min(4, stackFrames.length); i++) {
        frame = stackFrames[i];
        fileName = frame.fileName && frame.fileName.substring(frame.fileName.lastIndexOf('/')) || '';
        stackOut.push('<div class="stack-frame"><div class="stack-frame-fn">' + frame.functionName +
        '</div><div class="stack-frame-file">' + fileName + ':' + frame.lineNumber + '</div>');
      }

      d.innerHTML = '<div class="message">' + err.message + '</div><div class="stack">' + stackOut.join('\n') + '</div>';
      this._errorWindow = d;
      document.body.appendChild(this._errorWindow);
      window.requestAnimationFrame(function() {
        d.classList.add('show');
      })
    }
  },
  reloadApp: function() {
    console.log('RELOAD');

    if(window.cordova) {
      window.location.reload(true);
    }
  },
  showDebugMenu: function() {
    if(window.IonicDevtools) {
      window.IonicDevtools.showDebugMenu();
    }
  },
  bindKeyboardEvents: function() {
    var self = this;

    document.addEventListener('keydown', function(event) {
      var key = event.keyCode || event.charCode || 0;

      // Check for reload command (cmd/ctrl+R)
      if(key == 82 && (event.metaKey || event.ctrlKey)) {
        self.reloadApp();
      }

      // Check for debugger command (cmd/ctrl+D)
      if(key == 68 && (event.metaKey || event.ctrlKey)) {
        self.showDebugMenu();
      }
    });
  }
};

IonicDevServer.start();
