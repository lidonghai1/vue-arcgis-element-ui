// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ./Geometry ./Point ./SpatialReference ../core/lang ./support/spatialReferenceUtils ./support/webMercatorUtils ./support/coordsUtils".split(" "),function(r,B,x,f,k,y,m,v,z,w,q,A){function p(k,b,f){return null==b?f:null==f?b:k(b,f)}r=function(r){function b(){for(var a=[],d=0;d<arguments.length;d++)a[d]=arguments[d];a=r.apply(this,a)||this;a.type="extent";a.xmin=0;a.ymin=
0;a.mmin=void 0;a.zmin=void 0;a.xmax=0;a.ymax=0;a.mmax=void 0;a.zmax=void 0;return a}x(b,r);t=b;b.prototype.normalizeCtorArgs=function(a,d,c,b,e){return!a||"esri.SpatialReference"!==a.declaredClass&&null==a.wkid?"object"===typeof a?(a.spatialReference=null!=a.spatialReference?a.spatialReference:v.WGS84,a):{xmin:a,ymin:d,xmax:c,ymax:b,spatialReference:null!=e?e:v.WGS84}:{spatialReference:a,xmin:0,ymin:0,xmax:0,ymax:0}};Object.defineProperty(b.prototype,"center",{get:function(){var a=new m({x:.5*(this.xmin+
this.xmax),y:.5*(this.ymin+this.ymax),spatialReference:this.spatialReference});this.hasZ&&(a.z=.5*(this.zmin+this.zmax));this.hasM&&(a.m=.5*(this.mmin+this.mmax));return a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"extent",{get:function(){return this.clone()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasM",{get:function(){return null!=this.mmin&&null!=this.mmax},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasZ",{get:function(){return null!=
this.zmin&&null!=this.zmax},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"height",{get:function(){return Math.abs(this.ymax-this.ymin)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"width",{get:function(){return Math.abs(this.xmax-this.xmin)},enumerable:!0,configurable:!0});b.prototype.centerAt=function(a){var d=this.center;return null!=a.z&&this.hasZ?this.offset(a.x-d.x,a.y-d.y,a.z-d.z):this.offset(a.x-d.x,a.y-d.y)};b.prototype.clone=function(){var a=new t;
a.xmin=this.xmin;a.ymin=this.ymin;a.xmax=this.xmax;a.ymax=this.ymax;a.spatialReference=this.spatialReference;null!=this.zmin&&(a.zmin=this.zmin,a.zmax=this.zmax);null!=this.mmin&&(a.mmin=this.mmin,a.mmax=this.mmax);return a};b.prototype.contains=function(a){if(!a)return!1;if("point"===a.type){var d=this.spatialReference,c=a.spatialReference,b=void 0,e=a.x,b=a.y;a=a.z;d&&c&&!d.equals(c)&&q.canProject(d,c)&&(b=d.isWebMercator?q.lngLatToXY(e,b):q.xyToLngLat(e,b,[0,0],0,!0),e=b[0],b=b[1]);if(e>=this.xmin&&
e<=this.xmax&&b>=this.ymin&&b<=this.ymax)return null!=a&&this.hasZ?a>=this.zmin&&a<=this.zmax:!0}else if("extent"===a.type)return this._containsExtent(a);return!1};b.prototype.equals=function(a){if(!a)return!1;var d=this.spatialReference;if(!d.equals(a.spatialReference))if(q.canProject(a.spatialReference,d))a=q.project(a,d);else return!1;return this.xmin===a.xmin&&this.ymin===a.ymin&&this.zmin===a.zmin&&this.mmin===a.mmin&&this.xmax===a.xmax&&this.ymax===a.ymax&&this.zmax===a.zmax&&this.mmax===a.mmax};
b.prototype.expand=function(a){a=.5*(1-a);var d=this.width*a,c=this.height*a;this.xmin+=d;this.ymin+=c;this.xmax-=d;this.ymax-=c;this.hasZ&&(d=(this.zmax-this.zmin)*a,this.zmin+=d,this.zmax-=d);this.hasM&&(a*=this.mmax-this.mmin,this.mmin+=a,this.mmax-=a);return this};b.prototype.intersects=function(a){if(!a)return!1;var d=this.spatialReference,c=a.spatialReference;d&&c&&!d.equals(c)&&q.canProject(d,c)&&(a=d.isWebMercator?q.geographicToWebMercator(a):q.webMercatorToGeographic(a,!0));switch(a.type){case "point":return this.contains(a);
case "multipoint":return this._intersectsMultipoint(a);case "extent":return this._intersectsExtent(a);case "polygon":return this._intersectsPolygon(a);case "polyline":return this._intersectsPolyline(a)}};b.prototype.normalize=function(){var a=this._normalize(!1,!0);return Array.isArray(a)?a:[a]};b.prototype.offset=function(a,d,c){this.xmin+=a;this.ymin+=d;this.xmax+=a;this.ymax+=d;null!=c&&(this.zmin+=c,this.zmax+=c);return this};b.prototype.shiftCentralMeridian=function(){return this._normalize(!0)};
b.prototype.union=function(a){this.xmin=Math.min(this.xmin,a.xmin);this.ymin=Math.min(this.ymin,a.ymin);this.xmax=Math.max(this.xmax,a.xmax);this.ymax=Math.max(this.ymax,a.ymax);if(this.hasZ||a.hasZ)this.zmin=p(Math.min,this.zmin,a.zmin),this.zmax=p(Math.max,this.zmax,a.zmax);if(this.hasM||a.hasM)this.mmin=p(Math.min,this.mmin,a.mmin),this.mmax=p(Math.max,this.mmax,a.mmax);return this};b.prototype.intersection=function(a){if(!this._intersectsExtent(a))return null;this.xmin=Math.max(this.xmin,a.xmin);
this.ymin=Math.max(this.ymin,a.ymin);this.xmax=Math.min(this.xmax,a.xmax);this.ymax=Math.min(this.ymax,a.ymax);if(this.hasZ||a.hasZ)this.zmin=p(Math.max,this.zmin,a.zmin),this.zmax=p(Math.min,this.zmax,a.zmax);if(this.hasM||a.hasM)this.mmin=p(Math.max,this.mmin,a.mmin),this.mmax=p(Math.min,this.mmax,a.mmax);return this};b.prototype.toJSON=function(a){return this.write(null,a)};b.prototype._containsExtent=function(a){var d=a.xmin,c=a.ymin,b=a.zmin,e=a.xmax,h=a.ymax,g=a.zmax;a=a.spatialReference;return null!=
b&&this.hasZ?this.contains(new m(d,c,b,a))&&this.contains(new m(d,h,b,a))&&this.contains(new m(e,h,b,a))&&this.contains(new m(e,c,b,a))&&this.contains(new m(d,c,g,a))&&this.contains(new m(d,h,g,a))&&this.contains(new m(e,h,g,a))&&this.contains(new m(e,c,g,a)):this.contains(new m(d,c,a))&&this.contains(new m(d,h,a))&&this.contains(new m(e,h,a))&&this.contains(new m(e,c,a))};b.prototype._intersectsMultipoint=function(a){for(var d=a.points.length,c=0;c<d;c++)if(this.contains(a.getPoint(c)))return!0;
return!1};b.prototype._intersectsExtent=function(a){var d=this.hasZ&&a.hasZ,c;if(this.xmin<=a.xmin){if(c=a.xmin,this.xmax<c)return!1}else if(c=this.xmin,a.xmax<c)return!1;if(this.ymin<=a.ymin){if(c=a.ymin,this.ymax<c)return!1}else if(c=this.ymin,a.ymax<c)return!1;if(d&&a.hasZ)if(this.zmin<=a.zmin){if(d=a.zmin,this.zmax<d)return!1}else if(d=this.zmin,a.zmax<d)return!1;return!0};b.prototype._intersectsPolygon=function(a){for(var d=[this.xmin,this.ymax],c=[this.xmax,this.ymax],b=[this.xmin,this.ymin],
e=[this.xmax,this.ymin],h=[d,c,b,e],g=new m(0,0,this.spatialReference),u=h.length,n=0;n<u;n++)if(g.x=h[n][0],g.y=h[n][1],a.contains(g))return!0;g.set({x:0,y:0,spatialReference:a.spatialReference});a=a.rings;h=a.length;d=[[b,d],[d,c],[c,e],[e,b]];for(n=0;n<h;n++)if(c=a[n],b=c.length){e=c[0];g.x=e[0];g.y=e[1];if(this.contains(g))return!0;for(u=1;u<b;u++){var l=c[u];g.x=l[0];g.y=l[1];if(this.contains(g)||this._intersectsLine([e,l],d))return!0;e=l}}return!1};b.prototype._intersectsPolyline=function(a){var d=
[[[this.xmin,this.ymin],[this.xmin,this.ymax]],[[this.xmin,this.ymax],[this.xmax,this.ymax]],[[this.xmax,this.ymax],[this.xmax,this.ymin]],[[this.xmax,this.ymin],[this.xmin,this.ymin]]],c=a.paths,b=c.length;a=new m(0,0,a.spatialReference);for(var e=0;e<b;e++){var h=c[e],g=h.length;if(g){var u=h[0];a.x=u[0];a.y=u[1];if(this.contains(a))return!0;for(var n=1;n<g;n++){var l=h[n];a.x=l[0];a.y=l[1];if(this.contains(a)||this._intersectsLine([u,l],d))return!0;u=l}}}return!1};b.prototype._intersectsLine=function(a,
d){for(var c=0;c<d.length;c++)if(A._getLineIntersection2(a,d[c]))return!0;return!1};b.prototype._shiftCM=function(a){void 0===a&&(a=w.getInfo(this.spatialReference));if(!a||!this.spatialReference)return this;var d=this.spatialReference,c=this._getCM(a);if(c){var b=d.isWebMercator?q.webMercatorToGeographic(c):c;this.xmin-=c.x;this.xmax-=c.x;d.isWebMercator||(b.x=this._normalizeX(b.x,a).x);this.spatialReference=new v(z.substitute({Central_Meridian:b.x},d.isWGS84?a.altTemplate:a.wkTemplate))}return this};
b.prototype._getCM=function(a){var d=null,c=a.valid;a=c[0];var c=c[1],b=this.xmin,e=this.xmax;b>=a&&b<=c&&e>=a&&e<=c||(d=this.center);return d};b.prototype._normalize=function(a,d,c){var b=this.spatialReference;if(!b)return this;c=c||w.getInfo(b);if(!c)return this;var e=this._getParts(c).map(function(a){return a.extent});if(2>e.length)return e[0]||this;if(2<e.length)return a?this._shiftCM(c):this.set({xmin:c.valid[0],xmax:c.valid[1]});if(a)return this._shiftCM(c);if(d)return e;var h=!0,g=!0;e.forEach(function(a){a.hasZ||
(h=!1);a.hasM||(g=!1)});return{rings:e.map(function(a){var c=[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]];if(h)for(var d=(a.zmax-a.zmin)/2,b=0;b<c.length;b++)c[b].push(d);if(g)for(a=(a.mmax-a.mmin)/2,b=0;b<c.length;b++)c[b].push(a);return c}),hasZ:h,hasM:g,spatialReference:b}};b.prototype._getParts=function(a){var b=this.cache._parts;if(!b){var b=[],c=this.ymin,f=this.ymax,e=this.spatialReference,h=this.width,g=this.xmin,k=this.xmax,n=void 0;a=a||w.getInfo(e);
var l=a.valid,m=l[0],q=l[1],n=this._normalizeX(this.xmin,a),p=n.x,l=n.frameId,n=this._normalizeX(this.xmax,a),r=n.x;a=n.frameId;n=p===r&&0<h;if(h>2*q){h=new t(g<k?p:r,c,q,f,e);g=new t(m,c,g<k?r:p,f,e);k=new t(0,c,q,f,e);c=new t(m,c,0,f,e);f=[];e=[];h.contains(k)&&f.push(l);h.contains(c)&&e.push(l);g.contains(k)&&f.push(a);g.contains(c)&&e.push(a);for(m=l+1;m<a;m++)f.push(m),e.push(m);b.push({extent:h,frameIds:[l]},{extent:g,frameIds:[a]},{extent:k,frameIds:f},{extent:c,frameIds:e})}else p>r||n?b.push({extent:new t(p,
c,q,f,e),frameIds:[l]},{extent:new t(m,c,r,f,e),frameIds:[a]}):b.push({extent:new t(p,c,r,f,e),frameIds:[l]});this.cache._parts=b}a=this.hasZ;c=this.hasM;if(a||c)for(l={},a&&(l.zmin=this.zmin,l.zmax=this.zmax),c&&(l.mmin=this.mmin,l.mmax=this.mmax),a=0;a<b.length;a++)b[a].extent.set(l);return b};b.prototype._normalizeX=function(a,b){var c=b.valid;b=c[0];var d=c[1],c=2*d,e=0;a>d?(b=Math.ceil(Math.abs(a-d)/c),a-=b*c,e=b):a<b&&(b=Math.ceil(Math.abs(a-b)/c),a+=b*c,e=-b);return{x:a,frameId:e}};f([k.property({dependsOn:"xmin ymin zmin mmin xmax ymax zmax mmax spatialReference".split(" ")})],
b.prototype,"cache",void 0);f([k.property({readOnly:!0,dependsOn:["cache"]})],b.prototype,"center",null);f([k.property({readOnly:!0,dependsOn:["cache"]})],b.prototype,"extent",null);f([k.property({readOnly:!0,dependsOn:["mmin","mmax"],json:{write:{enabled:!1,overridePolicy:null}}})],b.prototype,"hasM",null);f([k.property({readOnly:!0,dependsOn:["zmin","zmax"],json:{write:{enabled:!1,overridePolicy:null}}})],b.prototype,"hasZ",null);f([k.property({readOnly:!0,dependsOn:["ymin","ymax"]})],b.prototype,
"height",null);f([k.property({readOnly:!0,dependsOn:["xmin","xmax"]})],b.prototype,"width",null);f([k.property({type:Number,json:{write:!0}})],b.prototype,"xmin",void 0);f([k.property({type:Number,json:{write:!0}})],b.prototype,"ymin",void 0);f([k.property({type:Number,json:{write:{overridePolicy:function(){return{enabled:this.hasM}}}}})],b.prototype,"mmin",void 0);f([k.property({type:Number,json:{write:{overridePolicy:function(){return{enabled:this.hasZ}}}}})],b.prototype,"zmin",void 0);f([k.property({type:Number,
json:{write:!0}})],b.prototype,"xmax",void 0);f([k.property({type:Number,json:{write:!0}})],b.prototype,"ymax",void 0);f([k.property({type:Number,json:{write:{overridePolicy:function(){return{enabled:this.hasM}}}}})],b.prototype,"mmax",void 0);f([k.property({type:Number,json:{write:{overridePolicy:function(){return{enabled:this.hasZ}}}}})],b.prototype,"zmax",void 0);return b=t=f([k.subclass("esri.geometry.Extent")],b);var t}(k.declared(y));r.prototype.toJSON.isDefaultToJSON=!0;return r});