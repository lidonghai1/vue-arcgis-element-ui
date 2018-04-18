// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","../../support/projectionUtils","../../lib/glMatrix","../../webgl-engine/lib/Util"],function(A,r,p,h,z){Object.defineProperty(r,"__esModule",{value:!0});r.ReprojectionTypes={PER_VERTEX:"perVertex",NO_REPROJECTION:"noReprojection"};var g=new Float64Array(3E3);r.reprojectPoints=function(b,a,c,e,l,k){if(b===r.ReprojectionTypes.PER_VERTEX){b=a.data;var m=a.offsetIdx;a=a.strideIdx;var u=h.mat4d.create();p.computeLinearTransformation(e,c,u,k);var d=h.mat4d.create();h.mat4d.inverse(u,
d);var q=h.mat4d.create();h.mat4d.identity(q);var t=[0,0,0],y=b.length/a;p.vectorToVector(c,e,t,l);for(c=0;c<y;c+=1E3){e=Math.min(1E3,y-c);for(var f=0;f<e;f++){var n=m+a*(c+f);g[3*f]=b[n]+t[0];g[3*f+1]=b[n+1]+t[1];g[3*f+2]=b[n+2]+t[2]}p.bufferToBuffer(g,l,0,g,k,0,e);for(f=0;f<e;f++){var v=g[3*f],w=g[3*f+1],x=g[3*f+2],n=m+a*(c+f);b[n]=d[0]*v+d[4]*w+d[8]*x+d[12];b[n+1]=d[1]*v+d[5]*w+d[9]*x+d[13];b[n+2]=d[2]*v+d[6]*w+d[10]*x+d[14]}}k={localTrafo:q,globalTrafo:u}}else l=h.mat4d.create(),h.mat4d.identity(l),
b=h.mat4d.create(),p.computeLinearTransformation(e,c,b,k),k={localTrafo:l,globalTrafo:b};return k};r.reprojectNormalsPerVertex=function(b,a,c,e,l){z.assert(e.equals(p.SphericalECEFSpatialReference));e=h.mat4d.create();p.computeLinearTransformation(c,a,e,l);a=h.mat4d.create();h.mat4d.inverse(e,a);c=b.data;l=b.offsetIdx;b=b.strideIdx;e=c.length/b;for(var k=0;k<e;k++){var m=l+b*k,g=c[m],d=c[m+1],q=c[m+2];c[m]=a[0]*g+a[4]*d+a[8]*q;c[m+1]=a[1]*g+a[5]*d+a[9]*q;c[m+2]=a[2]*g+a[6]*d+a[10]*q}}});