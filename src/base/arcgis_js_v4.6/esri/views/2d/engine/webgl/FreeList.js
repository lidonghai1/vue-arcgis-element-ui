// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(k,h){Object.defineProperty(h,"__esModule",{value:!0});var m=function(){function c(a){this._parent=a}c.prototype.rangeCreated=function(a){};c.prototype.rangeResized=function(a,b,d){};c.prototype.findBestRange=function(a){for(var b=this._parent._freeHead;null!==b&&a>b.count;)b=b.next;return b};c.prototype.findAdjacentRanges=function(a,b){for(var d=!0,e=!1,c=null,g=this._parent._freeHead;d&&!e;){var h=null!==g?g.from:this._parent._size;a>=(null!==c?c.from+c.count:
0)&&a+b<=h?(d=!1,e=!0):null!==g?(c=g,g=g.next):d=!1}return[c,g]};return c}();k=function(){function c(){this._rangesSortedByFrom=[];this._rangesSortedByCount=[]}c.prototype.rangeCreated=function(a){this._rangesSortedByFrom.push(a);this._rangesSortedByFrom.sort(function(a,d){return a.from-d.from});this._rangesSortedByCount.push(a);this._rangesSortedByCount.sort(function(a,d){return a.count-d.count})};c.prototype.rangeResized=function(a,b,d){0===a.count?(this._rangesSortedByFrom.splice(this._rangesSortedByFrom.indexOf(a),
1),this._rangesSortedByCount.splice(this._rangesSortedByCount.indexOf(a),1)):this._rangesSortedByCount.sort(function(a,b){return a.count-b.count})};c.prototype.findBestRange=function(a){if(0===this._rangesSortedByCount.length)return null;for(var b=0,d=this._rangesSortedByCount.length-1,c=void 0;b<=d;){var f=Math.floor((b+d)/2),g=this._rangesSortedByCount[f].count;if(g===a){c=f;break}else g<a?b=f+1:g>a&&(d=f-1,c=f)}return void 0===c?null:this._rangesSortedByCount[c]};c.prototype.findAdjacentRanges=
function(a,b){if(0===this._rangesSortedByFrom.length)return[null,null];if(a+b<=this._rangesSortedByFrom[0].from)return[null,this._rangesSortedByFrom[0]];if(a>=this._rangesSortedByFrom[this._rangesSortedByFrom.length-1].from+this._rangesSortedByFrom[this._rangesSortedByFrom.length-1].count)return[this._rangesSortedByFrom[this._rangesSortedByFrom.length-1],null];for(var c=0;c<this._rangesSortedByFrom.length-1;++c){var e=this._rangesSortedByFrom[c],f=this._rangesSortedByFrom[c+1];if(a>=e.from+e.count&&
a+b<=f.from)return[e,f]}throw Error("Could not find adjacent ranges.");};return c}();h.SortingBookKeeper=k;var l=function(){function c(a,b){this._size=a;this._bookKeeper=b||new m(this);0<a?(this._freeHead={from:0,count:a,prev:null,next:null},this._bookKeeper.rangeCreated(this._freeHead)):this._freeHead=null}c.prototype.allocate=function(a){var b=this._bookKeeper.findBestRange(a);if(null===b)return-1;var d=b.from,e=b.count;b.from+=a;b.count-=a;this._bookKeeper.rangeResized(b,d,e);0===b.count&&(a=null!==
b.prev?this._freeHead:b.next,c._removeRange(b),this._freeHead=a);return d};c.prototype.free=function(a,b){var d=this._bookKeeper.findAdjacentRanges(a,b),e=d[0],d=d[1];a={from:a,count:b,prev:e,next:d};null!==e&&(e.next=a);null!==d&&(d.prev=a);this._bookKeeper.rangeCreated(a);if(null!==d&&a.from+a.count===d.from){b=a.from;var f=a.count;c._fuse(a,d);c._removeRange(d);this._bookKeeper.rangeResized(a,b,f);this._bookKeeper.rangeResized(d,void 0,0)}null!==e&&e.from+e.count===a.from&&(b=e.from,f=e.count,
c._fuse(e,a),c._removeRange(a),this._bookKeeper.rangeResized(e,b,f),this._bookKeeper.rangeResized(a,void 0,0));this._freeHead=null!==a.prev?this._freeHead:a};c._removeRange=function(a){null!==a.prev?null!==a.next?(a.prev.next=a.next,a.next.prev=a.prev):a.prev.next=null:null!==a.next&&(a.next.prev=null)};c._fuse=function(a,b){a.count+=b.count;a.next=b.next;b.from+=b.count;b.count=0;null!==b.next&&(b.next.prev=a)};return c}();h.DefaultFreeList=l;h.create=function(c){return new l(c)}});