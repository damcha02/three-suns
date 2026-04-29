(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Bo="181",xd=0,Pc=1,gd=2,$l=1,_d=2,Dn=3,ni=0,Yt=1,Mt=2,Nn=0,Xi=1,dt=2,Dc=3,Ic=4,vd=5,fi=100,Md=101,Sd=102,yd=103,bd=104,Ed=200,Td=201,Ad=202,wd=203,Gs=204,Hs=205,Rd=206,Cd=207,Ld=208,Pd=209,Dd=210,Id=211,Ud=212,Nd=213,Fd=214,ks=0,Ws=1,Xs=2,Zi=3,qs=4,Ys=5,$s=6,Ks=7,zo=0,Od=1,Bd=2,ei=0,zd=1,Vd=2,Gd=3,Hd=4,kd=5,Wd=6,Xd=7,Kl=300,ji=301,Ji=302,Zs=303,js=304,Wa=306,Js=1e3,In=1001,Qs=1002,Qt=1003,qd=1004,Yr=1005,an=1006,rs=1007,mi=1008,En=1009,Zl=1010,jl=1011,Rr=1012,Vo=1013,_i=1014,Un=1015,tr=1016,Go=1017,Ho=1018,Cr=1020,Jl=35902,Ql=35899,eu=1021,tu=1022,fn=1023,Lr=1026,Pr=1027,nu=1028,ko=1029,Wo=1030,Xo=1031,qo=1033,Ma=33776,Sa=33777,ya=33778,ba=33779,eo=35840,to=35841,no=35842,io=35843,ro=36196,ao=37492,so=37496,oo=37808,co=37809,lo=37810,uo=37811,ho=37812,fo=37813,po=37814,mo=37815,xo=37816,go=37817,_o=37818,vo=37819,Mo=37820,So=37821,yo=36492,bo=36494,Eo=36495,To=36283,Ao=36284,wo=36285,Ro=36286,Yd=3200,$d=3201,Yo=0,Kd=1,Jn="",Vt="srgb",Qi="srgb-linear",Aa="linear",rt="srgb",Ti=7680,Uc=519,Zd=512,jd=513,Jd=514,iu=515,Qd=516,eh=517,th=518,nh=519,Co=35044,Nc="300 es",Sn=2e3,wa=2001;function ru(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ih(){const i=Ra("canvas");return i.style.display="block",i}const Fc={};function Ca(...i){const e="THREE."+i.shift();console.log(e,...i)}function Pe(...i){const e="THREE."+i.shift();console.warn(e,...i)}function gt(...i){const e="THREE."+i.shift();console.error(e,...i)}function Dr(...i){const e=i.join(" ");e in Fc||(Fc[e]=!0,Pe(...i))}function rh(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}class nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oc=1234567;const br=Math.PI/180,Ir=180/Math.PI;function Fn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function $o(i,e){return(i%e+e)%e}function ah(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function sh(i,e,t){return i!==e?(t-i)/(e-i):0}function Er(i,e,t){return(1-t)*i+t*e}function oh(i,e,t,n){return Er(i,e,1-Math.exp(-t*n))}function ch(i,e=1){return e-Math.abs($o(i,e*2)-e)}function lh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function uh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function dh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function hh(i,e){return i+Math.random()*(e-i)}function fh(i){return i*(.5-Math.random())}function ph(i){i!==void 0&&(Oc=i);let e=Oc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mh(i){return i*br}function xh(i){return i*Ir}function gh(i){return(i&i-1)===0&&i!==0}function _h(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mh(i,e,t,n,r){const a=Math.cos,s=Math.sin,o=a(t/2),c=s(t/2),l=a((e+n)/2),u=s((e+n)/2),d=a((e-n)/2),f=s((e-n)/2),m=a((n-e)/2),g=s((n-e)/2);switch(r){case"XYX":i.set(o*u,c*d,c*f,o*l);break;case"YZY":i.set(c*f,o*u,c*d,o*l);break;case"ZXZ":i.set(c*d,c*f,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*m,o*l);break;case"YXY":i.set(c*m,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*m,o*u,o*l);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qe(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const qe={DEG2RAD:br,RAD2DEG:Ir,generateUUID:Fn,clamp:We,euclideanModulo:$o,mapLinear:ah,inverseLerp:sh,lerp:Er,damp:oh,pingpong:ch,smoothstep:lh,smootherstep:uh,randInt:dh,randFloat:hh,randFloatSpread:fh,seededRandom:ph,degToRad:mh,radToDeg:xh,isPowerOfTwo:gh,ceilPowerOfTwo:_h,floorPowerOfTwo:vh,setQuaternionFromProperEuler:Mh,normalize:Qe,denormalize:hn};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let c=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3],f=a[s+0],m=a[s+1],g=a[s+2],v=a[s+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o>=1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==f||l!==m||u!==g){let x=c*f+l*m+u*g+d*v;x<0&&(f=-f,m=-m,g=-g,v=-v,x=-x);let h=1-o;if(x<.9995){const A=Math.acos(x),E=Math.sin(A);h=Math.sin(h*A)/E,o=Math.sin(o*A)/E,c=c*h+f*o,l=l*h+m*o,u=u*h+g*o,d=d*h+v*o}else{c=c*h+f*o,l=l*h+m*o,u=u*h+g*o,d=d*h+v*o;const A=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=A,l*=A,u*=A,d*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],d=a[s],f=a[s+1],m=a[s+2],g=a[s+3];return e[t]=o*g+u*d+c*m-l*f,e[t+1]=c*g+u*f+l*d-o*m,e[t+2]=l*g+u*m+o*f-c*d,e[t+3]=u*g-o*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),d=o(a/2),f=c(n/2),m=c(r/2),g=c(a/2);switch(s){case"XYZ":this._x=f*u*d+l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d+f*m*g;break;case"YZX":this._x=f*u*d+l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d-f*m*g;break;case"XZY":this._x=f*u*d-l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d+f*m*g;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(a-l)*m,this._z=(s-r)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(a-l)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(s-r)/m,this._x=(a+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+s*o+r*l-a*c,this._y=r*u+s*c+a*o-n*l,this._z=a*u+s*l+n*c-r*o,this._w=s*u-n*o-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,a=-a,s=-s,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+a*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+a*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*r-o*n),u=2*(o*t-a*r),d=2*(a*n-s*t);return this.x=t+c*l+s*d-o*u,this.y=n+c*u+o*l-a*d,this.z=r+c*d+a*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=r*c-a*o,this.y=a*s-n*c,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return as.copy(this).projectOnVector(e),this.sub(as)}reflect(e){return this.sub(as.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const as=new L,Bc=new zr;class Oe{constructor(e,t,n,r,a,s,o,c,l){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l)}set(e,t,n,r,a,s,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=c,u[6]=n,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],m=n[5],g=n[8],v=r[0],x=r[3],h=r[6],A=r[1],E=r[4],w=r[7],D=r[2],T=r[5],P=r[8];return a[0]=s*v+o*A+c*D,a[3]=s*x+o*E+c*T,a[6]=s*h+o*w+c*P,a[1]=l*v+u*A+d*D,a[4]=l*x+u*E+d*T,a[7]=l*h+u*w+d*P,a[2]=f*v+m*A+g*D,a[5]=f*x+m*E+g*T,a[8]=f*h+m*w+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*o*l-n*a*u+n*o*c+r*a*l-r*s*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*s-o*l,f=o*c-u*a,m=l*a-s*c,g=t*d+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*l-u*n)*v,e[2]=(o*n-r*s)*v,e[3]=f*v,e[4]=(u*t-r*c)*v,e[5]=(r*a-o*t)*v,e[6]=m*v,e[7]=(n*c-l*t)*v,e[8]=(s*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-r*l,r*c,-r*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ss.makeScale(e,t)),this}rotate(e){return this.premultiply(ss.makeRotation(-e)),this}translate(e,t){return this.premultiply(ss.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ss=new Oe,zc=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vc=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sh(){const i={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===rt&&(r.r=On(r.r),r.g=On(r.g),r.b=On(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===rt&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Jn?Aa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Dr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Dr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qi]:{primaries:e,whitePoint:n,transfer:Aa,toXYZ:zc,fromXYZ:Vc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:zc,fromXYZ:Vc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}const Ke=Sh();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ai;class yh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ai===void 0&&(Ai=Ra("canvas")),Ai.width=e.width,Ai.height=e.height;const r=Ai.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ai}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ra("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=On(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(On(t[n]/255)*255):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bh=0;class Ko{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=Fn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(os(r[s].image)):a.push(os(r[s]))}else a=os(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function os(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let Eh=0;const cs=new L;class Nt extends nr{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=In,r=In,a=an,s=mi,o=fn,c=En,l=Nt.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Fn(),this.name="",this.source=new Ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cs).x}get height(){return this.source.getSize(cs).y}get depth(){return this.source.getSize(cs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Js:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Js:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Kl;Nt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],m=c[5],g=c[9],v=c[2],x=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+x)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,w=(m+1)/2,D=(h+1)/2,T=(u+f)/4,P=(d+v)/4,O=(g+x)/4;return E>w&&E>D?E<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(E),r=T/n,a=P/n):w>D?w<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(w),n=T/r,a=O/r):D<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(D),n=P/a,r=O/a),this.set(n,r,a,t),this}let A=Math.sqrt((x-g)*(x-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(x-g)/A,this.y=(d-v)/A,this.z=(f-u)/A,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Th extends nr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:n.depth},a=new Nt(r);this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ko(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends Th{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class au extends Nt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ah extends Nt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ir{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,ln):ln.fromBufferAttribute(a,s),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),Kr.subVectors(this.max,ur),wi.subVectors(e.a,ur),Ri.subVectors(e.b,ur),Ci.subVectors(e.c,ur),kn.subVectors(Ri,wi),Wn.subVectors(Ci,Ri),si.subVectors(wi,Ci);let t=[0,-kn.z,kn.y,0,-Wn.z,Wn.y,0,-si.z,si.y,kn.z,0,-kn.x,Wn.z,0,-Wn.x,si.z,0,-si.x,-kn.y,kn.x,0,-Wn.y,Wn.x,0,-si.y,si.x,0];return!ls(t,wi,Ri,Ci,Kr)||(t=[1,0,0,0,1,0,0,0,1],!ls(t,wi,Ri,Ci,Kr))?!1:(Zr.crossVectors(kn,Wn),t=[Zr.x,Zr.y,Zr.z],ls(t,wi,Ri,Ci,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const An=[new L,new L,new L,new L,new L,new L,new L,new L],ln=new L,$r=new ir,wi=new L,Ri=new L,Ci=new L,kn=new L,Wn=new L,si=new L,ur=new L,Kr=new L,Zr=new L,oi=new L;function ls(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){oi.fromArray(i,a);const o=r.x*Math.abs(oi.x)+r.y*Math.abs(oi.y)+r.z*Math.abs(oi.z),c=e.dot(oi),l=t.dot(oi),u=n.dot(oi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const wh=new ir,dr=new L,us=new L;class Vr{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wh.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);const t=dr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(dr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(us.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(us)),this.expandByPoint(dr.copy(e.center).sub(us))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wn=new L,ds=new L,jr=new L,Xn=new L,hs=new L,Jr=new L,fs=new L;class Xa{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ds.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(ds);const a=e.distanceTo(t)*.5,s=-this.direction.dot(jr),o=Xn.dot(this.direction),c=-Xn.dot(jr),l=Xn.lengthSq(),u=Math.abs(1-s*s);let d,f,m,g;if(u>0)if(d=s*c-o,f=s*o-c,g=a*u,d>=0)if(f>=-g)if(f<=g){const v=1/u;d*=v,f*=v,m=d*(d+s*f+2*o)+f*(s*d+f+2*c)+l}else f=a,d=Math.max(0,-(s*f+o)),m=-d*d+f*(f+2*c)+l;else f=-a,d=Math.max(0,-(s*f+o)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-s*a+o)),f=d>0?-a:Math.min(Math.max(-a,-c),a),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-a,-c),a),m=f*(f+2*c)+l):(d=Math.max(0,-(s*a+o)),f=d>0?a:Math.min(Math.max(-a,-c),a),m=-d*d+f*(f+2*c)+l);else f=s>0?-a:a,d=Math.max(0,-(s*f+o)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ds).addScaledVector(jr,f),m}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const n=wn.dot(this.direction),r=wn.dot(wn)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(a=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(a=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,r,a){hs.subVectors(t,e),Jr.subVectors(n,e),fs.crossVectors(hs,Jr);let s=this.direction.dot(fs),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Xn.subVectors(this.origin,e);const c=o*this.direction.dot(Jr.crossVectors(Xn,Jr));if(c<0)return null;const l=o*this.direction.dot(hs.cross(Xn));if(l<0||c+l>s)return null;const u=-o*Xn.dot(fs);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,r,a,s,o,c,l,u,d,f,m,g,v,x){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l,u,d,f,m,g,v,x)}set(e,t,n,r,a,s,o,c,l,u,d,f,m,g,v,x){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=a,h[5]=s,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=v,h[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Li.setFromMatrixColumn(e,0).length(),a=1/Li.setFromMatrixColumn(e,1).length(),s=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const f=s*u,m=s*d,g=o*u,v=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=g+m*l,t[10]=s*c}else if(e.order==="YXZ"){const f=c*u,m=c*d,g=l*u,v=l*d;t[0]=f+v*o,t[4]=g*o-m,t[8]=s*l,t[1]=s*d,t[5]=s*u,t[9]=-o,t[2]=m*o-g,t[6]=v+f*o,t[10]=s*c}else if(e.order==="ZXY"){const f=c*u,m=c*d,g=l*u,v=l*d;t[0]=f-v*o,t[4]=-s*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=s*u,t[9]=v-f*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const f=s*u,m=s*d,g=o*u,v=o*d;t[0]=c*u,t[4]=g*l-m,t[8]=f*l+v,t[1]=c*d,t[5]=v*l+f,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const f=s*c,m=s*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-f*d,t[8]=g*d+m,t[1]=d,t[5]=s*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*d+g,t[10]=f-v*d}else if(e.order==="XZY"){const f=s*c,m=s*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+v,t[5]=s*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rh,e,Ch)}lookAt(e,t,n){const r=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),qn.crossVectors(n,Zt),qn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),qn.crossVectors(n,Zt)),qn.normalize(),Qr.crossVectors(Zt,qn),r[0]=qn.x,r[4]=Qr.x,r[8]=Zt.x,r[1]=qn.y,r[5]=Qr.y,r[9]=Zt.y,r[2]=qn.z,r[6]=Qr.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],m=n[13],g=n[2],v=n[6],x=n[10],h=n[14],A=n[3],E=n[7],w=n[11],D=n[15],T=r[0],P=r[4],O=r[8],y=r[12],S=r[1],I=r[5],V=r[9],W=r[13],K=r[2],X=r[6],H=r[10],J=r[14],G=r[3],te=r[7],ie=r[11],_e=r[15];return a[0]=s*T+o*S+c*K+l*G,a[4]=s*P+o*I+c*X+l*te,a[8]=s*O+o*V+c*H+l*ie,a[12]=s*y+o*W+c*J+l*_e,a[1]=u*T+d*S+f*K+m*G,a[5]=u*P+d*I+f*X+m*te,a[9]=u*O+d*V+f*H+m*ie,a[13]=u*y+d*W+f*J+m*_e,a[2]=g*T+v*S+x*K+h*G,a[6]=g*P+v*I+x*X+h*te,a[10]=g*O+v*V+x*H+h*ie,a[14]=g*y+v*W+x*J+h*_e,a[3]=A*T+E*S+w*K+D*G,a[7]=A*P+E*I+w*X+D*te,a[11]=A*O+E*V+w*H+D*ie,a[15]=A*y+E*W+w*J+D*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],v=e[7],x=e[11],h=e[15];return g*(+a*c*d-r*l*d-a*o*f+n*l*f+r*o*m-n*c*m)+v*(+t*c*m-t*l*f+a*s*f-r*s*m+r*l*u-a*c*u)+x*(+t*l*d-t*o*m-a*s*d+n*s*m+a*o*u-n*l*u)+h*(-r*o*u-t*c*d+t*o*f+r*s*d-n*s*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],v=e[13],x=e[14],h=e[15],A=d*x*l-v*f*l+v*c*m-o*x*m-d*c*h+o*f*h,E=g*f*l-u*x*l-g*c*m+s*x*m+u*c*h-s*f*h,w=u*v*l-g*d*l+g*o*m-s*v*m-u*o*h+s*d*h,D=g*d*c-u*v*c-g*o*f+s*v*f+u*o*x-s*d*x,T=t*A+n*E+r*w+a*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return e[0]=A*P,e[1]=(v*f*a-d*x*a-v*r*m+n*x*m+d*r*h-n*f*h)*P,e[2]=(o*x*a-v*c*a+v*r*l-n*x*l-o*r*h+n*c*h)*P,e[3]=(d*c*a-o*f*a-d*r*l+n*f*l+o*r*m-n*c*m)*P,e[4]=E*P,e[5]=(u*x*a-g*f*a+g*r*m-t*x*m-u*r*h+t*f*h)*P,e[6]=(g*c*a-s*x*a-g*r*l+t*x*l+s*r*h-t*c*h)*P,e[7]=(s*f*a-u*c*a+u*r*l-t*f*l-s*r*m+t*c*m)*P,e[8]=w*P,e[9]=(g*d*a-u*v*a-g*n*m+t*v*m+u*n*h-t*d*h)*P,e[10]=(s*v*a-g*o*a+g*n*l-t*v*l-s*n*h+t*o*h)*P,e[11]=(u*o*a-s*d*a-u*n*l+t*d*l+s*n*m-t*o*m)*P,e[12]=D*P,e[13]=(u*v*r-g*d*r+g*n*f-t*v*f-u*n*x+t*d*x)*P,e[14]=(g*o*r-s*v*r-g*n*c+t*v*c+s*n*x-t*o*x)*P,e[15]=(s*d*r-u*o*r+u*n*c-t*d*c-s*n*f+t*o*f)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,c=e.z,l=a*s,u=a*o;return this.set(l*s+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*s,0,l*c-r*o,u*c+r*s,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,u=s+s,d=o+o,f=a*l,m=a*u,g=a*d,v=s*u,x=s*d,h=o*d,A=c*l,E=c*u,w=c*d,D=n.x,T=n.y,P=n.z;return r[0]=(1-(v+h))*D,r[1]=(m+w)*D,r[2]=(g-E)*D,r[3]=0,r[4]=(m-w)*T,r[5]=(1-(f+h))*T,r[6]=(x+A)*T,r[7]=0,r[8]=(g+E)*P,r[9]=(x-A)*P,r[10]=(1-(f+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Li.set(r[0],r[1],r[2]).length();const s=Li.set(r[4],r[5],r[6]).length(),o=Li.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],un.copy(this);const l=1/a,u=1/s,d=1/o;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=d,un.elements[9]*=d,un.elements[10]*=d,t.setFromRotationMatrix(un),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s,o=Sn,c=!1){const l=this.elements,u=2*a/(t-e),d=2*a/(n-r),f=(t+e)/(t-e),m=(n+r)/(n-r);let g,v;if(c)g=a/(s-a),v=s*a/(s-a);else if(o===Sn)g=-(s+a)/(s-a),v=-2*s*a/(s-a);else if(o===wa)g=-s/(s-a),v=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=Sn,c=!1){const l=this.elements,u=2/(t-e),d=2/(n-r),f=-(t+e)/(t-e),m=-(n+r)/(n-r);let g,v;if(c)g=1/(s-a),v=s/(s-a);else if(o===Sn)g=-2/(s-a),v=-(s+a)/(s-a);else if(o===wa)g=-1/(s-a),v=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Li=new L,un=new lt,Rh=new L(0,0,0),Ch=new L(1,1,1),qn=new L,Qr=new L,Zt=new L,Gc=new lt,Hc=new zr;class xn{constructor(e=0,t=0,n=0,r=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-We(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hc.setFromEuler(this),this.setFromQuaternion(Hc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class Zo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lh=0;const kc=new L,Pi=new zr,Rn=new lt,ea=new L,hr=new L,Ph=new L,Dh=new zr,Wc=new L(1,0,0),Xc=new L(0,1,0),qc=new L(0,0,1),Yc={type:"added"},Ih={type:"removed"},Di={type:"childadded",child:null},ps={type:"childremoved",child:null};class Pt extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new L,t=new xn,n=new zr,r=new L(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new Oe}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(Wc,e)}rotateY(e){return this.rotateOnAxis(Xc,e)}rotateZ(e){return this.rotateOnAxis(qc,e)}translateOnAxis(e,t){return kc.copy(e).applyQuaternion(this.quaternion),this.position.add(kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wc,e)}translateY(e){return this.translateOnAxis(Xc,e)}translateZ(e){return this.translateOnAxis(qc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ea.copy(e):ea.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(hr,ea,this.up):Rn.lookAt(ea,hr,this.up),this.quaternion.setFromRotationMatrix(Rn),r&&(Rn.extractRotation(r.matrixWorld),Pi.setFromRotationMatrix(Rn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yc),Di.child=e,this.dispatchEvent(Di),Di.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ih),ps.child=e,this.dispatchEvent(ps),ps.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yc),Di.child=e,this.dispatchEvent(Di),Di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,Ph),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Dh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];a(e.shapes,d)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),d=s(e.shapes),f=s(e.skeletons),m=s(e.animations),g=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function s(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new L(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new L,Cn=new L,ms=new L,Ln=new L,Ii=new L,Ui=new L,$c=new L,xs=new L,gs=new L,_s=new L,vs=new at,Ms=new at,Ss=new at;class rn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),dn.subVectors(e,t),r.cross(dn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){dn.subVectors(r,t),Cn.subVectors(n,t),ms.subVectors(e,t);const s=dn.dot(dn),o=dn.dot(Cn),c=dn.dot(ms),l=Cn.dot(Cn),u=Cn.dot(ms),d=s*l-o*o;if(d===0)return a.set(0,0,0),null;const f=1/d,m=(l*c-o*u)*f,g=(s*u-o*c)*f;return a.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,r,a,s,o,c){return this.getBarycoord(e,t,n,r,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Ln.x),c.addScaledVector(s,Ln.y),c.addScaledVector(o,Ln.z),c)}static getInterpolatedAttribute(e,t,n,r,a,s){return vs.setScalar(0),Ms.setScalar(0),Ss.setScalar(0),vs.fromBufferAttribute(e,t),Ms.fromBufferAttribute(e,n),Ss.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(vs,a.x),s.addScaledVector(Ms,a.y),s.addScaledVector(Ss,a.z),s}static isFrontFacing(e,t,n,r){return dn.subVectors(n,t),Cn.subVectors(e,t),dn.cross(Cn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),dn.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;Ii.subVectors(r,n),Ui.subVectors(a,n),xs.subVectors(e,n);const c=Ii.dot(xs),l=Ui.dot(xs);if(c<=0&&l<=0)return t.copy(n);gs.subVectors(e,r);const u=Ii.dot(gs),d=Ui.dot(gs);if(u>=0&&d<=u)return t.copy(r);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(n).addScaledVector(Ii,s);_s.subVectors(e,a);const m=Ii.dot(_s),g=Ui.dot(_s);if(g>=0&&m<=g)return t.copy(a);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ui,o);const x=u*g-m*d;if(x<=0&&d-u>=0&&m-g>=0)return $c.subVectors(a,r),o=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector($c,o);const h=1/(x+v+f);return s=v*h,o=f*h,t.copy(n).addScaledVector(Ii,s).addScaledVector(Ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},ta={h:0,s:0,l:0};function ys(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ke.workingColorSpace){if(e=$o(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=ys(s,a,e+1/3),this.g=ys(s,a,e),this.b=ys(s,a,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=Vt){function n(a){a!==void 0&&parseFloat(a)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=su[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Ke.workingToColorSpace(It.copy(this),e),Math.round(We(It.r*255,0,255))*65536+Math.round(We(It.g*255,0,255))*256+Math.round(We(It.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(It.copy(this),t);const n=It.r,r=It.g,a=It.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let c,l;const u=(o+s)/2;if(o===s)c=0,l=0;else{const d=s-o;switch(l=u<=.5?d/(s+o):d/(2-s-o),s){case n:c=(r-a)/d+(r<a?6:0);break;case r:c=(a-n)/d+2;break;case a:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Vt){Ke.workingToColorSpace(It.copy(this),e);const t=It.r,n=It.g,r=It.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(ta);const n=Er(Yn.h,ta.h,t),r=Er(Yn.s,ta.s,t),a=Er(Yn.l,ta.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Ie;Ie.NAMES=su;let Uh=0;class Hn extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=Xi,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gs,this.blendDst=Hs,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gs&&(n.blendSrc=this.blendSrc),this.blendDst!==Hs&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class St extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new L,na=new Ne;let Nh=0;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Co,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array),a=Qe(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Co&&(e.usage=this.usage),e}}class ou extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cu extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bt extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Fh=0;const nn=new lt,bs=new Pt,Ni=new L,jt=new ir,fr=new ir,Ct=new L;class Et extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ru(e)?cu:ou)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Oe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return bs.lookAt(e),bs.updateMatrix(),this.applyMatrix4(bs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new bt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];jt.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(jt.min,fr.min),jt.expandByPoint(Ct),Ct.addVectors(jt.max,fr.max),jt.expandByPoint(Ct)):(jt.expandByPoint(fr.min),jt.expandByPoint(fr.max))}jt.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)Ct.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Ct));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ct.fromBufferAttribute(o,l),c&&(Ni.fromBufferAttribute(e,l),Ct.add(Ni)),r=Math.max(r,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let O=0;O<n.count;O++)o[O]=new L,c[O]=new L;const l=new L,u=new L,d=new L,f=new Ne,m=new Ne,g=new Ne,v=new L,x=new L;function h(O,y,S){l.fromBufferAttribute(n,O),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,S),f.fromBufferAttribute(a,O),m.fromBufferAttribute(a,y),g.fromBufferAttribute(a,S),u.sub(l),d.sub(l),m.sub(f),g.sub(f);const I=1/(m.x*g.y-g.x*m.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(I),x.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(I),o[O].add(v),o[y].add(v),o[S].add(v),c[O].add(x),c[y].add(x),c[S].add(x))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let O=0,y=A.length;O<y;++O){const S=A[O],I=S.start,V=S.count;for(let W=I,K=I+V;W<K;W+=3)h(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const E=new L,w=new L,D=new L,T=new L;function P(O){D.fromBufferAttribute(r,O),T.copy(D);const y=o[O];E.copy(y),E.sub(D.multiplyScalar(D.dot(y))).normalize(),w.crossVectors(T,y);const I=w.dot(c[O])<0?-1:1;s.setXYZW(O,E.x,E.y,E.z,I)}for(let O=0,y=A.length;O<y;++O){const S=A[O],I=S.start,V=S.count;for(let W=I,K=I+V;W<K;W+=3)P(e.getX(W+0)),P(e.getX(W+1)),P(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new L,a=new L,s=new L,o=new L,c=new L,l=new L,u=new L,d=new L;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),v=e.getX(f+1),x=e.getX(f+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),u.subVectors(s,a),d.subVectors(r,a),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,a),d.subVectors(r,a),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let v=0,x=c.length;v<x;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*u;for(let h=0;h<u;h++)f[g++]=l[m++]}return new kt(f,u,d)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let u=0,d=l.length;u<d;u++){const f=l[u],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const a=e.morphAttributes;for(const l in a){const u=[],d=a[l];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const d=s[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kc=new lt,ci=new Xa,ia=new Vr,Zc=new L,ra=new L,aa=new L,sa=new L,Es=new L,oa=new L,jc=new L,ca=new L;class tt extends Pt{constructor(e=new Et,t=new St){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){oa.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=o[c],d=a[c];u!==0&&(Es.fromBufferAttribute(d,e),s?oa.addScaledVector(Es,u):oa.addScaledVector(Es.sub(t),u))}t.add(oa)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(a),ci.copy(e.ray).recast(e.near),!(ia.containsPoint(ci.origin)===!1&&(ci.intersectSphere(ia,Zc)===null||ci.origin.distanceToSquared(Zc)>(e.far-e.near)**2))&&(Kc.copy(a).invert(),ci.copy(e.ray).applyMatrix4(Kc),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,f=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,v=f.length;g<v;g++){const x=f[g],h=s[x.materialIndex],A=Math.max(x.start,m.start),E=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let w=A,D=E;w<D;w+=3){const T=o.getX(w),P=o.getX(w+1),O=o.getX(w+2);r=la(this,h,e,n,l,u,d,T,P,O),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let x=g,h=v;x<h;x+=3){const A=o.getX(x),E=o.getX(x+1),w=o.getX(x+2);r=la(this,s,e,n,l,u,d,A,E,w),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,v=f.length;g<v;g++){const x=f[g],h=s[x.materialIndex],A=Math.max(x.start,m.start),E=Math.min(c.count,Math.min(x.start+x.count,m.start+m.count));for(let w=A,D=E;w<D;w+=3){const T=w,P=w+1,O=w+2;r=la(this,h,e,n,l,u,d,T,P,O),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let x=g,h=v;x<h;x+=3){const A=x,E=x+1,w=x+2;r=la(this,s,e,n,l,u,d,A,E,w),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function Oh(i,e,t,n,r,a,s,o){let c;if(e.side===Yt?c=n.intersectTriangle(s,a,r,!0,o):c=n.intersectTriangle(r,a,s,e.side===ni,o),c===null)return null;ca.copy(o),ca.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ca);return l<t.near||l>t.far?null:{distance:l,point:ca.clone(),object:i}}function la(i,e,t,n,r,a,s,o,c,l){i.getVertexPosition(o,ra),i.getVertexPosition(c,aa),i.getVertexPosition(l,sa);const u=Oh(i,e,t,n,ra,aa,sa,jc);if(u){const d=new L;rn.getBarycoord(jc,ra,aa,sa,d),r&&(u.uv=rn.getInterpolatedAttribute(r,o,c,l,d,new Ne)),a&&(u.uv1=rn.getInterpolatedAttribute(a,o,c,l,d,new Ne)),s&&(u.normal=rn.getInterpolatedAttribute(s,o,c,l,d,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new L,materialIndex:0};rn.getNormal(ra,aa,sa,f.normal),u.face=f,u.barycoord=d}return u}class Gr extends Et{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const c=[],l=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,s,a,0),g("z","y","x",1,-1,n,t,-e,s,a,1),g("x","z","y",1,1,e,n,t,r,s,2),g("x","z","y",1,-1,e,n,-t,r,s,3),g("x","y","z",1,-1,e,t,n,r,a,4),g("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(d,2));function g(v,x,h,A,E,w,D,T,P,O,y){const S=w/P,I=D/O,V=w/2,W=D/2,K=T/2,X=P+1,H=O+1;let J=0,G=0;const te=new L;for(let ie=0;ie<H;ie++){const _e=ie*I-W;for(let Xe=0;Xe<X;Xe++){const Ye=Xe*S-V;te[v]=Ye*A,te[x]=_e*E,te[h]=K,l.push(te.x,te.y,te.z),te[v]=0,te[x]=0,te[h]=T>0?1:-1,u.push(te.x,te.y,te.z),d.push(Xe/P),d.push(1-ie/O),J+=1}}for(let ie=0;ie<O;ie++)for(let _e=0;_e<P;_e++){const Xe=f+_e+X*ie,Ye=f+_e+X*(ie+1),je=f+(_e+1)+X*(ie+1),Je=f+(_e+1)+X*ie;c.push(Xe,Ye,Je),c.push(Ye,je,Je),G+=6}o.addGroup(m,G,y),m+=G,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function er(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function zt(i){const e={};for(let t=0;t<i.length;t++){const n=er(i[t]);for(const r in n)e[r]=n[r]}return e}function Bh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const zh={clone:er,merge:zt};var Vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vh,this.fragmentShader=Gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=Bh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class uu extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new L,Jc=new Ne,Qc=new Ne;class Jt extends uu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,Jc,Qc),t.subVectors(Qc,Jc)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(br*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/c,t-=s.offsetY*n/l,r*=s.width/c,n*=s.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fi=-90,Oi=1;class Hh extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(Fi,Oi,e,t);r.layers=this.layers,this.add(r);const a=new Jt(Fi,Oi,e,t);a.layers=this.layers,this.add(a);const s=new Jt(Fi,Oi,e,t);s.layers=this.layers,this.add(s);const o=new Jt(Fi,Oi,e,t);o.layers=this.layers,this.add(o);const c=new Jt(Fi,Oi,e,t);c.layers=this.layers,this.add(c);const l=new Jt(Fi,Oi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,c]=t;for(const l of t)this.remove(l);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class du extends Nt{constructor(e=[],t=ji,n,r,a,s,o,c,l,u){super(e,t,n,r,a,s,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kh extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new du(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Gr(5,5,5),a=new Bn({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Nn});a.uniforms.tEquirect.value=t;const s=new tt(r,a),o=t.minFilter;return t.minFilter===mi&&(t.minFilter=an),new Hh(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}class Ht extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wh={type:"move"};class Ts{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,n),h=this._getHandJoint(l,v);x!==null&&(h.matrix.fromArray(x.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=x.radius),h.visible=x!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wh)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class jo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new jo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Xh extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class qh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Co,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bt=new L;class La{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array),a=Qe(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){Ca("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new La(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ca("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class qa extends Hn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Bi;const pr=new L,zi=new L,Vi=new L,Gi=new Ne,mr=new Ne,hu=new lt,ua=new L,xr=new L,da=new L,el=new Ne,As=new Ne,tl=new Ne;class Jo extends Pt{constructor(e=new qa){if(super(),this.isSprite=!0,this.type="Sprite",Bi===void 0){Bi=new Et;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qh(t,5);Bi.setIndex([0,1,2,0,2,3]),Bi.setAttribute("position",new La(n,3,0,!1)),Bi.setAttribute("uv",new La(n,2,3,!1))}this.geometry=Bi,this.material=e,this.center=new Ne(.5,.5),this.count=1}raycast(e,t){e.camera===null&&gt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zi.setFromMatrixScale(this.matrixWorld),hu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zi.multiplyScalar(-Vi.z);const n=this.material.rotation;let r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));const s=this.center;ha(ua.set(-.5,-.5,0),Vi,s,zi,r,a),ha(xr.set(.5,-.5,0),Vi,s,zi,r,a),ha(da.set(.5,.5,0),Vi,s,zi,r,a),el.set(0,0),As.set(1,0),tl.set(1,1);let o=e.ray.intersectTriangle(ua,xr,da,!1,pr);if(o===null&&(ha(xr.set(-.5,.5,0),Vi,s,zi,r,a),As.set(0,1),o=e.ray.intersectTriangle(ua,da,xr,!1,pr),o===null))return;const c=e.ray.origin.distanceTo(pr);c<e.near||c>e.far||t.push({distance:c,point:pr.clone(),uv:rn.getInterpolation(pr,ua,xr,da,el,As,tl,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ha(i,e,t,n,r,a){Gi.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(mr.x=a*Gi.x-r*Gi.y,mr.y=r*Gi.x+a*Gi.y):mr.copy(Gi),i.copy(e),i.x+=mr.x,i.y+=mr.y,i.applyMatrix4(hu)}class Yh extends Nt{constructor(e=null,t=1,n=1,r,a,s,o,c,l=Qt,u=Qt,d,f){super(null,s,o,c,l,u,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ws=new L,$h=new L,Kh=new Oe;class Zn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ws.subVectors(n,t).cross($h.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ws),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Kh.getNormalMatrix(e),r=this.coplanarPoint(ws).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new Vr,Zh=new Ne(.5,.5),fa=new L;class Qo{constructor(e=new Zn,t=new Zn,n=new Zn,r=new Zn,a=new Zn,s=new Zn){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn,n=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],c=a[2],l=a[3],u=a[4],d=a[5],f=a[6],m=a[7],g=a[8],v=a[9],x=a[10],h=a[11],A=a[12],E=a[13],w=a[14],D=a[15];if(r[0].setComponents(l-s,m-u,h-g,D-A).normalize(),r[1].setComponents(l+s,m+u,h+g,D+A).normalize(),r[2].setComponents(l+o,m+d,h+v,D+E).normalize(),r[3].setComponents(l-o,m-d,h-v,D-E).normalize(),n)r[4].setComponents(c,f,x,w).normalize(),r[5].setComponents(l-c,m-f,h-x,D-w).normalize();else if(r[4].setComponents(l-c,m-f,h-x,D-w).normalize(),t===Sn)r[5].setComponents(l+c,m+f,h+x,D+w).normalize();else if(t===wa)r[5].setComponents(c,f,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){li.center.set(0,0,0);const t=Zh.distanceTo(e.center);return li.radius=.7071067811865476+t,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(fa.x=r.normal.x>0?e.max.x:e.min.x,fa.y=r.normal.y>0?e.max.y:e.min.y,fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pa extends Hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Da=new L,Ia=new L,nl=new lt,gr=new Xa,pa=new Vr,Rs=new L,il=new L;class ec extends Pt{constructor(e=new Et,t=new Pa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Da.fromBufferAttribute(t,r-1),Ia.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Da.distanceTo(Ia);e.setAttribute("lineDistance",new bt(n,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),pa.radius+=a,e.ray.intersectsSphere(pa)===!1)return;nl.copy(r).invert(),gr.copy(e.ray).applyMatrix4(nl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const m=Math.max(0,s.start),g=Math.min(u.count,s.start+s.count);for(let v=m,x=g-1;v<x;v+=l){const h=u.getX(v),A=u.getX(v+1),E=ma(this,e,gr,c,h,A,v);E&&t.push(E)}if(this.isLineLoop){const v=u.getX(g-1),x=u.getX(m),h=ma(this,e,gr,c,v,x,g-1);h&&t.push(h)}}else{const m=Math.max(0,s.start),g=Math.min(f.count,s.start+s.count);for(let v=m,x=g-1;v<x;v+=l){const h=ma(this,e,gr,c,v,v+1,v);h&&t.push(h)}if(this.isLineLoop){const v=ma(this,e,gr,c,g-1,m,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function ma(i,e,t,n,r,a,s){const o=i.geometry.attributes.position;if(Da.fromBufferAttribute(o,r),Ia.fromBufferAttribute(o,a),t.distanceSqToSegment(Da,Ia,Rs,il)>n)return;Rs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Rs);if(!(l<e.near||l>e.far))return{distance:l,point:il.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const rl=new L,al=new L;class jh extends ec{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)rl.fromBufferAttribute(t,r),al.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+rl.distanceTo(al);e.setAttribute("lineDistance",new bt(n,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ya extends Hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sl=new lt,Lo=new Xa,xa=new Vr,ga=new L;class tc extends Pt{constructor(e=new Et,t=new Ya){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(r),xa.radius+=a,e.ray.intersectsSphere(xa)===!1)return;sl.copy(r).invert(),Lo.copy(e.ray).applyMatrix4(sl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,s.start),m=Math.min(l.count,s.start+s.count);for(let g=f,v=m;g<v;g++){const x=l.getX(g);ga.fromBufferAttribute(d,x),ol(ga,x,c,r,e,t,this)}}else{const f=Math.max(0,s.start),m=Math.min(d.count,s.start+s.count);for(let g=f,v=m;g<v;g++)ga.fromBufferAttribute(d,g),ol(ga,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function ol(i,e,t,n,r,a,s){const o=Lo.distanceSqToPoint(i);if(o<t){const c=new L;Lo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class $a extends Nt{constructor(e,t,n,r,a,s,o,c,l){super(e,t,n,r,a,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fu extends Nt{constructor(e,t,n=_i,r,a,s,o=Qt,c=Qt,l,u=Lr,d=1){if(u!==Lr&&u!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,a,s,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ko(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pu extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class nc extends Et{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const a=[],s=[],o=[],c=[],l=new L,u=new Ne;s.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const m=n+d/t*r;l.x=e*Math.cos(m),l.y=e*Math.sin(m),s.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(s[f]/e+1)/2,u.y=(s[f+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new bt(s,3)),this.setAttribute("normal",new bt(o,3)),this.setAttribute("uv",new bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Hr extends Et{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,d=e/o,f=t/c,m=[],g=[],v=[],x=[];for(let h=0;h<u;h++){const A=h*f-s;for(let E=0;E<l;E++){const w=E*d-a;g.push(w,-A,0),v.push(0,0,1),x.push(E/o),x.push(1-h/c)}}for(let h=0;h<c;h++)for(let A=0;A<o;A++){const E=A+l*h,w=A+l*(h+1),D=A+1+l*(h+1),T=A+1+l*h;m.push(E,w,T),m.push(w,D,T)}this.setIndex(m),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(v,3)),this.setAttribute("uv",new bt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wt extends Et{constructor(e=.5,t=1,n=32,r=1,a=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:a,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let d=e;const f=(t-e)/r,m=new L,g=new Ne;for(let v=0;v<=r;v++){for(let x=0;x<=n;x++){const h=a+x/n*s;m.x=d*Math.cos(h),m.y=d*Math.sin(h),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,u.push(g.x,g.y)}d+=f}for(let v=0;v<r;v++){const x=v*(n+1);for(let h=0;h<n;h++){const A=h+x,E=A,w=A+n+1,D=A+n+2,T=A+1;o.push(E,w,T),o.push(w,D,T)}}this.setIndex(o),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class rr extends Et{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(s+o,Math.PI);let l=0;const u=[],d=new L,f=new L,m=[],g=[],v=[],x=[];for(let h=0;h<=n;h++){const A=[],E=h/n;let w=0;h===0&&s===0?w=.5/t:h===n&&c===Math.PI&&(w=-.5/t);for(let D=0;D<=t;D++){const T=D/t;d.x=-e*Math.cos(r+T*a)*Math.sin(s+E*o),d.y=e*Math.cos(s+E*o),d.z=e*Math.sin(r+T*a)*Math.sin(s+E*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),x.push(T+w,1-E),A.push(l++)}u.push(A)}for(let h=0;h<n;h++)for(let A=0;A<t;A++){const E=u[h][A+1],w=u[h][A],D=u[h+1][A],T=u[h+1][A+1];(h!==0||s>0)&&m.push(E,w,T),(h!==n-1||c<Math.PI)&&m.push(w,D,T)}this.setIndex(m),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(v,3)),this.setAttribute("uv",new bt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ar extends Et{constructor(e=1,t=.4,n=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:a},n=Math.floor(n),r=Math.floor(r);const s=[],o=[],c=[],l=[],u=new L,d=new L,f=new L;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){const v=g/r*a,x=m/n*Math.PI*2;d.x=(e+t*Math.cos(x))*Math.cos(v),d.y=(e+t*Math.cos(x))*Math.sin(v),d.z=t*Math.sin(x),o.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),f.subVectors(d,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){const v=(r+1)*m+g-1,x=(r+1)*(m-1)+g-1,h=(r+1)*(m-1)+g,A=(r+1)*m+g;s.push(v,x,A),s.push(x,h,A)}this.setIndex(s),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(c,3)),this.setAttribute("uv",new bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Jh extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qh extends Hn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ie(16777215),this.specular=new Ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ef extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tf extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class mu extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Cs=new lt,cl=new L,ll=new L;class nf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qo,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cl.setFromMatrixPosition(e.matrixWorld),t.position.copy(cl),ll.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ll),t.updateMatrixWorld(),Cs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cs,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ul=new lt,_r=new L,Ls=new L;class rf extends nf{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),_r.setFromMatrixPosition(e.matrixWorld),n.position.copy(_r),Ls.copy(n.position),Ls.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ls),n.updateMatrixWorld(),r.makeTranslation(-_r.x,-_r.y,-_r.z),ul.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul,n.coordinateSystem,n.reversedDepth)}}class af extends mu{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new rf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sf extends uu{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class of extends mu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class cf extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class lf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const dl=new lt;class uf{constructor(e,t,n=0,r=1/0){this.ray=new Xa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Zo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):gt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return dl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dl),this}intersectObject(e,t=!0,n=[]){return Po(e,this,n,t),n.sort(hl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)Po(e[r],this,n,t);return n.sort(hl),n}}function hl(i,e){return i.distance-e.distance}function Po(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const a=i.children;for(let s=0,o=a.length;s<o;s++)Po(a[s],e,t,!0)}}function fl(i,e,t,n){const r=df(n);switch(t){case eu:return i*e;case nu:return i*e/r.components*r.byteLength;case ko:return i*e/r.components*r.byteLength;case Wo:return i*e*2/r.components*r.byteLength;case Xo:return i*e*2/r.components*r.byteLength;case tu:return i*e*3/r.components*r.byteLength;case fn:return i*e*4/r.components*r.byteLength;case qo:return i*e*4/r.components*r.byteLength;case Ma:case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ya:case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case to:case io:return Math.max(i,16)*Math.max(e,8)/4;case eo:case no:return Math.max(i,8)*Math.max(e,8)/2;case ro:case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case co:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case uo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case go:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case So:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yo:case bo:case Eo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case To:case Ao:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wo:case Ro:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function df(i){switch(i){case En:case Zl:return{byteLength:1,components:1};case Rr:case jl:case tr:return{byteLength:2,components:1};case Go:case Ho:return{byteLength:2,components:4};case _i:case Vo:case Un:return{byteLength:4,components:1};case Jl:case Ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bo}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bo);function xu(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function hf(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,u);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],v=d[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const v=d[m];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:a,update:s}}var ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Af=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ff=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Of=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ep=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ap=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,op=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,up=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Np=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,e0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,n0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,o0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,d0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const h0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,v0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,M0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,S0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,w0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,P0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,I0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,U0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,O0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,W0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:ff,alphahash_pars_fragment:pf,alphamap_fragment:mf,alphamap_pars_fragment:xf,alphatest_fragment:gf,alphatest_pars_fragment:_f,aomap_fragment:vf,aomap_pars_fragment:Mf,batching_pars_vertex:Sf,batching_vertex:yf,begin_vertex:bf,beginnormal_vertex:Ef,bsdfs:Tf,iridescence_fragment:Af,bumpmap_pars_fragment:wf,clipping_planes_fragment:Rf,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:Lf,clipping_planes_vertex:Pf,color_fragment:Df,color_pars_fragment:If,color_pars_vertex:Uf,color_vertex:Nf,common:Ff,cube_uv_reflection_fragment:Of,defaultnormal_vertex:Bf,displacementmap_pars_vertex:zf,displacementmap_vertex:Vf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Hf,colorspace_fragment:kf,colorspace_pars_fragment:Wf,envmap_fragment:Xf,envmap_common_pars_fragment:qf,envmap_pars_fragment:Yf,envmap_pars_vertex:$f,envmap_physical_pars_fragment:ap,envmap_vertex:Kf,fog_vertex:Zf,fog_pars_vertex:jf,fog_fragment:Jf,fog_pars_fragment:Qf,gradientmap_pars_fragment:ep,lightmap_pars_fragment:tp,lights_lambert_fragment:np,lights_lambert_pars_fragment:ip,lights_pars_begin:rp,lights_toon_fragment:sp,lights_toon_pars_fragment:op,lights_phong_fragment:cp,lights_phong_pars_fragment:lp,lights_physical_fragment:up,lights_physical_pars_fragment:dp,lights_fragment_begin:hp,lights_fragment_maps:fp,lights_fragment_end:pp,logdepthbuf_fragment:mp,logdepthbuf_pars_fragment:xp,logdepthbuf_pars_vertex:gp,logdepthbuf_vertex:_p,map_fragment:vp,map_pars_fragment:Mp,map_particle_fragment:Sp,map_particle_pars_fragment:yp,metalnessmap_fragment:bp,metalnessmap_pars_fragment:Ep,morphinstance_vertex:Tp,morphcolor_vertex:Ap,morphnormal_vertex:wp,morphtarget_pars_vertex:Rp,morphtarget_vertex:Cp,normal_fragment_begin:Lp,normal_fragment_maps:Pp,normal_pars_fragment:Dp,normal_pars_vertex:Ip,normal_vertex:Up,normalmap_pars_fragment:Np,clearcoat_normal_fragment_begin:Fp,clearcoat_normal_fragment_maps:Op,clearcoat_pars_fragment:Bp,iridescence_pars_fragment:zp,opaque_fragment:Vp,packing:Gp,premultiplied_alpha_fragment:Hp,project_vertex:kp,dithering_fragment:Wp,dithering_pars_fragment:Xp,roughnessmap_fragment:qp,roughnessmap_pars_fragment:Yp,shadowmap_pars_fragment:$p,shadowmap_pars_vertex:Kp,shadowmap_vertex:Zp,shadowmask_pars_fragment:jp,skinbase_vertex:Jp,skinning_pars_vertex:Qp,skinning_vertex:e0,skinnormal_vertex:t0,specularmap_fragment:n0,specularmap_pars_fragment:i0,tonemapping_fragment:r0,tonemapping_pars_fragment:a0,transmission_fragment:s0,transmission_pars_fragment:o0,uv_pars_fragment:c0,uv_pars_vertex:l0,uv_vertex:u0,worldpos_vertex:d0,background_vert:h0,background_frag:f0,backgroundCube_vert:p0,backgroundCube_frag:m0,cube_vert:x0,cube_frag:g0,depth_vert:_0,depth_frag:v0,distanceRGBA_vert:M0,distanceRGBA_frag:S0,equirect_vert:y0,equirect_frag:b0,linedashed_vert:E0,linedashed_frag:T0,meshbasic_vert:A0,meshbasic_frag:w0,meshlambert_vert:R0,meshlambert_frag:C0,meshmatcap_vert:L0,meshmatcap_frag:P0,meshnormal_vert:D0,meshnormal_frag:I0,meshphong_vert:U0,meshphong_frag:N0,meshphysical_vert:F0,meshphysical_frag:O0,meshtoon_vert:B0,meshtoon_frag:z0,points_vert:V0,points_frag:G0,shadow_vert:H0,shadow_frag:k0,sprite_vert:W0,sprite_frag:X0},oe={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},vn={basic:{uniforms:zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:zt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:zt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:zt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:zt([oe.points,oe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:zt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:zt([oe.common,oe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:zt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:zt([oe.sprite,oe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:zt([oe.common,oe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:zt([oe.lights,oe.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};vn.physical={uniforms:zt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const _a={r:0,b:0,g:0},ui=new xn,q0=new lt;function Y0(i,e,t,n,r,a,s){const o=new Ie(0);let c=a===!0?0:1,l,u,d=null,f=0,m=null;function g(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?t:e).get(w)),w}function v(E){let w=!1;const D=g(E);D===null?h(o,c):D&&D.isColor&&(h(D,1),w=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(E,w){const D=g(w);D&&(D.isCubeTexture||D.mapping===Wa)?(u===void 0&&(u=new tt(new Gr(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:er(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ui.copy(w.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(q0.makeRotationFromEuler(ui)),u.material.toneMapped=Ke.getTransfer(D.colorSpace)!==rt,(d!==D||f!==D.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=D,f=D.version,m=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(l===void 0&&(l=new tt(new Hr(2,2),new Bn({name:"BackgroundMaterial",uniforms:er(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=D,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(D.colorSpace)!==rt,D.matrixAutoUpdate===!0&&D.updateMatrix(),l.material.uniforms.uvTransform.value.copy(D.matrix),(d!==D||f!==D.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=D,f=D.version,m=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function h(E,w){E.getRGB(_a,lu(i)),n.buffers.color.setClear(_a.r,_a.g,_a.b,w,s)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,w=1){o.set(E),c=w,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,h(o,c)},render:v,addToRenderList:x,dispose:A}}function $0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let a=r,s=!1;function o(S,I,V,W,K){let X=!1;const H=d(W,V,I);a!==H&&(a=H,l(a.object)),X=m(S,W,V,K),X&&g(S,W,V,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(X||s)&&(s=!1,w(S,I,V,W),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function d(S,I,V){const W=V.wireframe===!0;let K=n[S.id];K===void 0&&(K={},n[S.id]=K);let X=K[I.id];X===void 0&&(X={},K[I.id]=X);let H=X[W];return H===void 0&&(H=f(c()),X[W]=H),H}function f(S){const I=[],V=[],W=[];for(let K=0;K<t;K++)I[K]=0,V[K]=0,W[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:W,object:S,attributes:{},index:null}}function m(S,I,V,W){const K=a.attributes,X=I.attributes;let H=0;const J=V.getAttributes();for(const G in J)if(J[G].location>=0){const ie=K[G];let _e=X[G];if(_e===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor)),ie===void 0||ie.attribute!==_e||_e&&ie.data!==_e.data)return!0;H++}return a.attributesNum!==H||a.index!==W}function g(S,I,V,W){const K={},X=I.attributes;let H=0;const J=V.getAttributes();for(const G in J)if(J[G].location>=0){let ie=X[G];ie===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor));const _e={};_e.attribute=ie,ie&&ie.data&&(_e.data=ie.data),K[G]=_e,H++}a.attributes=K,a.attributesNum=H,a.index=W}function v(){const S=a.newAttributes;for(let I=0,V=S.length;I<V;I++)S[I]=0}function x(S){h(S,0)}function h(S,I){const V=a.newAttributes,W=a.enabledAttributes,K=a.attributeDivisors;V[S]=1,W[S]===0&&(i.enableVertexAttribArray(S),W[S]=1),K[S]!==I&&(i.vertexAttribDivisor(S,I),K[S]=I)}function A(){const S=a.newAttributes,I=a.enabledAttributes;for(let V=0,W=I.length;V<W;V++)I[V]!==S[V]&&(i.disableVertexAttribArray(V),I[V]=0)}function E(S,I,V,W,K,X,H){H===!0?i.vertexAttribIPointer(S,I,V,K,X):i.vertexAttribPointer(S,I,V,W,K,X)}function w(S,I,V,W){v();const K=W.attributes,X=V.getAttributes(),H=I.defaultAttributeValues;for(const J in X){const G=X[J];if(G.location>=0){let te=K[J];if(te===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),te!==void 0){const ie=te.normalized,_e=te.itemSize,Xe=e.get(te);if(Xe===void 0)continue;const Ye=Xe.buffer,je=Xe.type,Je=Xe.bytesPerElement,q=je===i.INT||je===i.UNSIGNED_INT||te.gpuType===Vo;if(te.isInterleavedBufferAttribute){const Z=te.data,he=Z.stride,Fe=te.offset;if(Z.isInstancedInterleavedBuffer){for(let Me=0;Me<G.locationSize;Me++)h(G.location+Me,Z.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Me=0;Me<G.locationSize;Me++)x(G.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let Me=0;Me<G.locationSize;Me++)E(G.location+Me,_e/G.locationSize,je,ie,he*Je,(Fe+_e/G.locationSize*Me)*Je,q)}else{if(te.isInstancedBufferAttribute){for(let Z=0;Z<G.locationSize;Z++)h(G.location+Z,te.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Z=0;Z<G.locationSize;Z++)x(G.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let Z=0;Z<G.locationSize;Z++)E(G.location+Z,_e/G.locationSize,je,ie,_e*Je,_e/G.locationSize*Z*Je,q)}}else if(H!==void 0){const ie=H[J];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(G.location,ie);break;case 3:i.vertexAttrib3fv(G.location,ie);break;case 4:i.vertexAttrib4fv(G.location,ie);break;default:i.vertexAttrib1fv(G.location,ie)}}}}A()}function D(){O();for(const S in n){const I=n[S];for(const V in I){const W=I[V];for(const K in W)u(W[K].object),delete W[K];delete I[V]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const V in I){const W=I[V];for(const K in W)u(W[K].object),delete W[K];delete I[V]}delete n[S.id]}function P(S){for(const I in n){const V=n[I];if(V[S.id]===void 0)continue;const W=V[S.id];for(const K in W)u(W[K].object),delete W[K];delete V[S.id]}}function O(){y(),s=!0,a!==r&&(a=r,l(a.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:O,resetDefaultState:y,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:x,disableUnusedAttributes:A}}function K0(i,e,t){let n;function r(l){n=l}function a(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function s(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,n,1)}function c(l,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)s(l[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*f[v];t.update(g,n,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Z0(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(P){return!(P!==fn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const O=P===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==En&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Un&&!O)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Pe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:w,vertexTextures:D,maxSamples:T}}function j0(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new Zn,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,v=d.clipIntersection,x=d.clipShadows,h=i.get(d);if(!r||g===null||g.length===0||a&&!x)a?u(null):l();else{const A=a?0:n,E=A*4;let w=h.clippingState||null;c.value=w,w=u(g,f,E,m);for(let D=0;D!==E;++D)w[D]=t[D];h.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,g){const v=d!==null?d.length:0;let x=null;if(v!==0){if(x=c.value,g!==!0||x===null){const h=m+v*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(x===null||x.length<h)&&(x=new Float32Array(h));for(let E=0,w=m;E!==v;++E,w+=4)s.copy(d[E]).applyMatrix4(A,o),s.normal.toArray(x,w),x[w+3]=s.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function J0(i){let e=new WeakMap;function t(s,o){return o===Zs?s.mapping=ji:o===js&&(s.mapping=Ji),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===Zs||o===js)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new kh(c.height);return l.fromEquirectangularTexture(i,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const Qn=4,pl=[.125,.215,.35,.446,.526,.582],pi=20,Q0=256,vr=new sf,ml=new Ie;let Ps=null,Ds=0,Is=0,Us=!1;const em=new L;class xl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:s=256,position:o=em}=a;Ps=this._renderer.getRenderTarget(),Ds=this._renderer.getActiveCubeFace(),Is=this._renderer.getActiveMipmapLevel(),Us=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ps,Ds,Is),this._renderer.xr.enabled=Us,e.scissorTest=!1,Hi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ps=this._renderer.getRenderTarget(),Ds=this._renderer.getActiveCubeFace(),Is=this._renderer.getActiveMipmapLevel(),Us=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:tr,format:fn,colorSpace:Qi,depthBuffer:!1},r=gl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gl(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tm(a)),this._blurMaterial=im(a,e,t),this._ggxMaterial=nm(a,e,t)}return r}_compileMaterial(e){const t=new tt(new Et,e);this._renderer.compile(t,vr)}_sceneToCubeUV(e,t,n,r,a){const c=new Jt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(ml),d.toneMapping=ei,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tt(new Gr,new St({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,x=v.material;let h=!1;const A=e.background;A?A.isColor&&(x.color.copy(A),e.background=null,h=!0):(x.color.copy(ml),h=!0);for(let E=0;E<6;E++){const w=E%3;w===0?(c.up.set(0,l[E],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+u[E],a.y,a.z)):w===1?(c.up.set(0,0,l[E]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+u[E],a.z)):(c.up.set(0,l[E],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+u[E]));const D=this._cubeSize;Hi(r,w*D,E>2?D:0,D,D),d.setRenderTarget(r),h&&d.render(v,c),d.render(e,c)}d.toneMapping=m,d.autoClear=f,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ji||e.mapping===Ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_l());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;Hi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,vr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;const c=s.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),f=.05+l*.95,m=d*f,{_lodMax:g}=this,v=this._sizeLods[n],x=3*v*(n>g-Qn?n-g+Qn:0),h=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=g-t,Hi(a,x,h,3*v,2*v),r.setRenderTarget(a),r.render(o,vr),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=g-n,Hi(e,x,h,3*v,2*v),r.setRenderTarget(e),r.render(o,vr)}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&gt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=l;const f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*pi-1),v=a/g,x=isFinite(a)?1+Math.floor(u*v):pi;x>pi&&Pe(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${pi}`);const h=[];let A=0;for(let P=0;P<pi;++P){const O=P/v,y=Math.exp(-O*O/2);h.push(y),P===0?A+=y:P<x&&(A+=2*y)}for(let P=0;P<h.length;P++)h[P]=h[P]/A;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=h,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const w=this._sizeLods[r],D=3*w*(r>E-Qn?r-E+Qn:0),T=4*(this._cubeSize-w);Hi(t,D,T,3*w,2*w),c.setRenderTarget(t),c.render(d,vr)}}function tm(i){const e=[],t=[],n=[];let r=i;const a=i-Qn+1+pl.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);e.push(o);let c=1/o;s>i-Qn?c=pl[s-i+Qn-1]:s===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,v=3,x=2,h=1,A=new Float32Array(v*g*m),E=new Float32Array(x*g*m),w=new Float32Array(h*g*m);for(let T=0;T<m;T++){const P=T%3*2/3-1,O=T>2?0:-1,y=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];A.set(y,v*g*T),E.set(f,x*g*T);const S=[T,T,T,T,T,T];w.set(S,h*g*T)}const D=new Et;D.setAttribute("position",new kt(A,v)),D.setAttribute("uv",new kt(E,x)),D.setAttribute("faceIndex",new kt(w,h)),n.push(new tt(D,null)),r>Qn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function gl(i,e,t){const n=new vi(i,e,t);return n.texture.mapping=Wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function nm(i,e,t){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Q0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ka(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function im(i,e,t){const n=new Float32Array(pi),r=new L(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function _l(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function vl(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ka(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Zs||c===js,u=c===ji||c===Ji;if(l||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new xl(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new xl(i)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function am(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Dr("WebGLRenderer: "+n+" extension not supported."),r}}}function sm(i,e,t,n){const r={},a=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete r[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function l(d){const f=[],m=d.index,g=d.attributes.position;let v=0;if(m!==null){const A=m.array;v=m.version;for(let E=0,w=A.length;E<w;E+=3){const D=A[E+0],T=A[E+1],P=A[E+2];f.push(D,T,T,P,P,D)}}else if(g!==void 0){const A=g.array;v=g.version;for(let E=0,w=A.length/3-1;E<w;E+=3){const D=E+0,T=E+1,P=E+2;f.push(D,T,T,P,P,D)}}else return;const x=new(ru(f)?cu:ou)(f,1);x.version=v;const h=a.get(d);h&&e.remove(h),a.set(d,x)}function u(d){const f=a.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return a.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function om(i,e,t){let n;function r(f){n=f}let a,s;function o(f){a=f.type,s=f.bytesPerElement}function c(f,m){i.drawElements(n,m,a,f*s),t.update(m,n,1)}function l(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,a,f*s,g),t.update(m,n,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,f,0,g);let x=0;for(let h=0;h<g;h++)x+=m[h];t.update(x,n,1)}function d(f,m,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let h=0;h<f.length;h++)l(f[h]/s,m[h],v[h]);else{x.multiDrawElementsInstancedWEBGL(n,m,0,a,f,0,v,0,g);let h=0;for(let A=0;A<g;A++)h+=m[A]*v[A];t.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function cm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:gt("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function lm(i,e,t){const n=new WeakMap,r=new at;function a(s,o,c){const l=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let S=function(){O.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var m=S;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let w=0;g===!0&&(w=1),v===!0&&(w=2),x===!0&&(w=3);let D=o.attributes.position.count*w,T=1;D>e.maxTextureSize&&(T=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const P=new Float32Array(D*T*4*d),O=new au(P,D,T,d);O.type=Un,O.needsUpdate=!0;const y=w*4;for(let I=0;I<d;I++){const V=h[I],W=A[I],K=E[I],X=D*T*4*I;for(let H=0;H<V.count;H++){const J=H*y;g===!0&&(r.fromBufferAttribute(V,H),P[X+J+0]=r.x,P[X+J+1]=r.y,P[X+J+2]=r.z,P[X+J+3]=0),v===!0&&(r.fromBufferAttribute(W,H),P[X+J+4]=r.x,P[X+J+5]=r.y,P[X+J+6]=r.z,P[X+J+7]=0),x===!0&&(r.fromBufferAttribute(K,H),P[X+J+8]=r.x,P[X+J+9]=r.y,P[X+J+10]=r.z,P[X+J+11]=K.itemSize===4?r.w:1)}}f={count:d,texture:O,size:new Ne(D,T)},n.set(o,f),o.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let g=0;for(let x=0;x<l.length;x++)g+=l[x];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function um(i,e,t,n){let r=new WeakMap;function a(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function s(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:s}}const gu=new Nt,Ml=new fu(1,1),_u=new au,vu=new Ah,Mu=new du,Sl=[],yl=[],bl=new Float32Array(16),El=new Float32Array(9),Tl=new Float32Array(4);function sr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Sl[r];if(a===void 0&&(a=new Float32Array(r),Sl[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Za(i,e){let t=yl[e];t===void 0&&(t=new Int32Array(e),yl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function mm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;Tl.set(n),i.uniformMatrix2fv(this.addr,!1,Tl),Rt(t,n)}}function xm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;El.set(n),i.uniformMatrix3fv(this.addr,!1,El),Rt(t,n)}}function gm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;bl.set(n),i.uniformMatrix4fv(this.addr,!1,bl),Rt(t,n)}}function _m(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function Mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function Sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function ym(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function Em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function Tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function Am(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Ml.compareFunction=iu,a=Ml):a=gu,t.setTexture2D(e||a,r)}function wm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||vu,r)}function Rm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Mu,r)}function Cm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||_u,r)}function Lm(i){switch(i){case 5126:return dm;case 35664:return hm;case 35665:return fm;case 35666:return pm;case 35674:return mm;case 35675:return xm;case 35676:return gm;case 5124:case 35670:return _m;case 35667:case 35671:return vm;case 35668:case 35672:return Mm;case 35669:case 35673:return Sm;case 5125:return ym;case 36294:return bm;case 36295:return Em;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Cm}}function Pm(i,e){i.uniform1fv(this.addr,e)}function Dm(i,e){const t=sr(e,this.size,2);i.uniform2fv(this.addr,t)}function Im(i,e){const t=sr(e,this.size,3);i.uniform3fv(this.addr,t)}function Um(i,e){const t=sr(e,this.size,4);i.uniform4fv(this.addr,t)}function Nm(i,e){const t=sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Fm(i,e){const t=sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Om(i,e){const t=sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Bm(i,e){i.uniform1iv(this.addr,e)}function zm(i,e){i.uniform2iv(this.addr,e)}function Vm(i,e){i.uniform3iv(this.addr,e)}function Gm(i,e){i.uniform4iv(this.addr,e)}function Hm(i,e){i.uniform1uiv(this.addr,e)}function km(i,e){i.uniform2uiv(this.addr,e)}function Wm(i,e){i.uniform3uiv(this.addr,e)}function Xm(i,e){i.uniform4uiv(this.addr,e)}function qm(i,e,t){const n=this.cache,r=e.length,a=Za(t,r);wt(n,a)||(i.uniform1iv(this.addr,a),Rt(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||gu,a[s])}function Ym(i,e,t){const n=this.cache,r=e.length,a=Za(t,r);wt(n,a)||(i.uniform1iv(this.addr,a),Rt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||vu,a[s])}function $m(i,e,t){const n=this.cache,r=e.length,a=Za(t,r);wt(n,a)||(i.uniform1iv(this.addr,a),Rt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Mu,a[s])}function Km(i,e,t){const n=this.cache,r=e.length,a=Za(t,r);wt(n,a)||(i.uniform1iv(this.addr,a),Rt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||_u,a[s])}function Zm(i){switch(i){case 5126:return Pm;case 35664:return Dm;case 35665:return Im;case 35666:return Um;case 35674:return Nm;case 35675:return Fm;case 35676:return Om;case 5124:case 35670:return Bm;case 35667:case 35671:return zm;case 35668:case 35672:return Vm;case 35669:case 35673:return Gm;case 5125:return Hm;case 36294:return km;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Km}}class jm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lm(t.type)}}class Jm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zm(t.type)}}class Qm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const Ns=/(\w+)(\])?(\[|\.)?/g;function Al(i,e){i.seq.push(e),i.map[e.id]=e}function ex(i,e,t){const n=i.name,r=n.length;for(Ns.lastIndex=0;;){const a=Ns.exec(n),s=Ns.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===r){Al(t,l===void 0?new jm(o,i,e):new Jm(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Qm(o),Al(t,d)),t=d}}}class Ea{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);ex(a,s,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function wl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const tx=37297;let nx=0;function ix(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const Rl=new Oe;function rx(i){Ke._getMatrix(Rl,Ke.workingColorSpace,i);const e=`mat3( ${Rl.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Aa:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Cl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+ix(i.getShaderSource(e),o)}else return a}function ax(i,e){const t=rx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sx(i,e){let t;switch(e){case zd:t="Linear";break;case Vd:t="Reinhard";break;case Gd:t="Cineon";break;case Hd:t="ACESFilmic";break;case Wd:t="AgX";break;case Xd:t="Neutral";break;case kd:t="Custom";break;default:Pe("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const va=new L;function ox(){Ke.getLuminanceCoefficients(va);const i=va.x.toFixed(4),e=va.y.toFixed(4),t=va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function lx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ux(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Mr(i){return i!==""}function Ll(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(i){return i.replace(dx,fx)}const hx=new Map;function fx(i,e){let t=Be[e];if(t===void 0){const n=hx.get(e);if(n!==void 0)t=Be[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Do(t)}const px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dl(i){return i.replace(px,mx)}function mx(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Il(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$l?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===_d?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function gx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ji:case Ji:e="ENVMAP_TYPE_CUBE";break;case Wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _x(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ji&&(e="ENVMAP_MODE_REFRACTION"),e}function vx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zo:e="ENVMAP_BLENDING_MULTIPLY";break;case Od:e="ENVMAP_BLENDING_MIX";break;case Bd:e="ENVMAP_BLENDING_ADD";break}return e}function Mx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Sx(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=xx(t),l=gx(t),u=_x(t),d=vx(t),f=Mx(t),m=cx(t),g=lx(a),v=r.createProgram();let x,h,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mr).join(`
`),x.length>0&&(x+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mr).join(`
`),h.length>0&&(h+=`
`)):(x=[Il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),h=[Il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?Be.tonemapping_pars_fragment:"",t.toneMapping!==ei?sx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,ax("linearToOutputTexel",t.outputColorSpace),ox(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mr).join(`
`)),s=Do(s),s=Ll(s,t),s=Pl(s,t),o=Do(o),o=Ll(o,t),o=Pl(o,t),s=Dl(s),o=Dl(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,h=["#define varying in",t.glslVersion===Nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=A+x+s,w=A+h+o,D=wl(r,r.VERTEX_SHADER,E),T=wl(r,r.FRAGMENT_SHADER,w);r.attachShader(v,D),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(I){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(v)||"",W=r.getShaderInfoLog(D)||"",K=r.getShaderInfoLog(T)||"",X=V.trim(),H=W.trim(),J=K.trim();let G=!0,te=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,D,T);else{const ie=Cl(r,D,"vertex"),_e=Cl(r,T,"fragment");gt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+ie+`
`+_e)}else X!==""?Pe("WebGLProgram: Program Info Log:",X):(H===""||J==="")&&(te=!1);te&&(I.diagnostics={runnable:G,programLog:X,vertexShader:{log:H,prefix:x},fragmentShader:{log:J,prefix:h}})}r.deleteShader(D),r.deleteShader(T),O=new Ea(r,v),y=ux(r,v)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,tx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=T,this}let yx=0;class bx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ex(e),t.set(e,n)),n}}class Ex{constructor(e){this.id=yx++,this.code=e,this.usedTimes=0}}function Tx(i,e,t,n,r,a,s){const o=new Zo,c=new bx,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,S,I,V,W){const K=V.fog,X=W.geometry,H=y.isMeshStandardMaterial?V.environment:null,J=(y.isMeshStandardMaterial?t:e).get(y.envMap||H),G=J&&J.mapping===Wa?J.image.height:null,te=g[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&Pe("WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ie=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_e=ie!==void 0?ie.length:0;let Xe=0;X.morphAttributes.position!==void 0&&(Xe=1),X.morphAttributes.normal!==void 0&&(Xe=2),X.morphAttributes.color!==void 0&&(Xe=3);let Ye,je,Je,q;if(te){const nt=vn[te];Ye=nt.vertexShader,je=nt.fragmentShader}else Ye=y.vertexShader,je=y.fragmentShader,c.update(y),Je=c.getVertexShaderID(y),q=c.getFragmentShaderID(y);const Z=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),Fe=W.isInstancedMesh===!0,Me=W.isBatchedMesh===!0,Ve=!!y.map,Lt=!!y.matcap,ze=!!J,ht=!!y.aoMap,R=!!y.lightMap,Ge=!!y.bumpMap,He=!!y.normalMap,ct=!!y.displacementMap,xe=!!y.emissiveMap,ft=!!y.metalnessMap,ye=!!y.roughnessMap,Ue=y.anisotropy>0,b=y.clearcoat>0,_=y.dispersion>0,F=y.iridescence>0,Y=y.sheen>0,j=y.transmission>0,k=Ue&&!!y.anisotropyMap,ve=b&&!!y.clearcoatMap,ce=b&&!!y.clearcoatNormalMap,be=b&&!!y.clearcoatRoughnessMap,ge=F&&!!y.iridescenceMap,Q=F&&!!y.iridescenceThicknessMap,re=Y&&!!y.sheenColorMap,we=Y&&!!y.sheenRoughnessMap,Te=!!y.specularMap,de=!!y.specularColorMap,Le=!!y.specularIntensityMap,C=j&&!!y.transmissionMap,le=j&&!!y.thicknessMap,ae=!!y.gradientMap,se=!!y.alphaMap,ee=y.alphaTest>0,$=!!y.alphaHash,pe=!!y.extensions;let De=ei;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(De=i.toneMapping);const ut={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:Ye,fragmentShader:je,defines:y.defines,customVertexShaderID:Je,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Me,batchingColor:Me&&W._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&W.instanceColor!==null,instancingMorph:Fe&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Qi,alphaToCoverage:!!y.alphaToCoverage,map:Ve,matcap:Lt,envMap:ze,envMapMode:ze&&J.mapping,envMapCubeUVHeight:G,aoMap:ht,lightMap:R,bumpMap:Ge,normalMap:He,displacementMap:f&&ct,emissiveMap:xe,normalMapObjectSpace:He&&y.normalMapType===Kd,normalMapTangentSpace:He&&y.normalMapType===Yo,metalnessMap:ft,roughnessMap:ye,anisotropy:Ue,anisotropyMap:k,clearcoat:b,clearcoatMap:ve,clearcoatNormalMap:ce,clearcoatRoughnessMap:be,dispersion:_,iridescence:F,iridescenceMap:ge,iridescenceThicknessMap:Q,sheen:Y,sheenColorMap:re,sheenRoughnessMap:we,specularMap:Te,specularColorMap:de,specularIntensityMap:Le,transmission:j,transmissionMap:C,thicknessMap:le,gradientMap:ae,opaque:y.transparent===!1&&y.blending===Xi&&y.alphaToCoverage===!1,alphaMap:se,alphaTest:ee,alphaHash:$,combine:y.combine,mapUv:Ve&&v(y.map.channel),aoMapUv:ht&&v(y.aoMap.channel),lightMapUv:R&&v(y.lightMap.channel),bumpMapUv:Ge&&v(y.bumpMap.channel),normalMapUv:He&&v(y.normalMap.channel),displacementMapUv:ct&&v(y.displacementMap.channel),emissiveMapUv:xe&&v(y.emissiveMap.channel),metalnessMapUv:ft&&v(y.metalnessMap.channel),roughnessMapUv:ye&&v(y.roughnessMap.channel),anisotropyMapUv:k&&v(y.anisotropyMap.channel),clearcoatMapUv:ve&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:ce&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:re&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(y.sheenRoughnessMap.channel),specularMapUv:Te&&v(y.specularMap.channel),specularColorMapUv:de&&v(y.specularColorMap.channel),specularIntensityMapUv:Le&&v(y.specularIntensityMap.channel),transmissionMapUv:C&&v(y.transmissionMap.channel),thicknessMapUv:le&&v(y.thicknessMap.channel),alphaMapUv:se&&v(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(He||Ue),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!X.attributes.uv&&(Ve||se),fog:!!K,useFog:y.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:he,skinning:W.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:Ve&&y.map.isVideoTexture===!0&&Ke.getTransfer(y.map.colorSpace)===rt,decodeVideoTextureEmissive:xe&&y.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(y.emissiveMap.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mt,flipSided:y.side===Yt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:pe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&y.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function h(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)S.push(I),S.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(A(S,y),E(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function A(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function E(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function w(y){const S=g[y.type];let I;if(S){const V=vn[S];I=zh.clone(V.uniforms)}else I=y.uniforms;return I}function D(y,S){let I;for(let V=0,W=u.length;V<W;V++){const K=u[V];if(K.cacheKey===S){I=K,++I.usedTimes;break}}return I===void 0&&(I=new Sx(i,S,y,a),u.push(I)),I}function T(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function P(y){c.remove(y)}function O(){c.dispose()}return{getParameters:x,getProgramCacheKey:h,getUniforms:w,acquireProgram:D,releaseProgram:T,releaseShaderCache:P,programs:u,dispose:O}}function Ax(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,c){i.get(s)[o]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function wx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ul(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nl(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(d,f,m,g,v,x){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:x},i[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=v,h.group=x),e++,h}function o(d,f,m,g,v,x){const h=s(d,f,m,g,v,x);m.transmission>0?n.push(h):m.transparent===!0?r.push(h):t.push(h)}function c(d,f,m,g,v,x){const h=s(d,f,m,g,v,x);m.transmission>0?n.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function l(d,f){t.length>1&&t.sort(d||wx),n.length>1&&n.sort(f||Ul),r.length>1&&r.sort(f||Ul)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:c,finish:u,sort:l}}function Rx(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new Nl,i.set(n,[s])):r>=a.length?(s=new Nl,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ie};break;case"SpotLight":t={position:new L,direction:new L,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Lx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Px=0;function Dx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ix(i){const e=new Cx,t=Lx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const r=new L,a=new lt,s=new lt;function o(l){let u=0,d=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,g=0,v=0,x=0,h=0,A=0,E=0,w=0,D=0,T=0,P=0;l.sort(Dx);for(let y=0,S=l.length;y<S;y++){const I=l[y],V=I.color,W=I.intensity,K=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=V.r*W,d+=V.g*W,f+=V.b*W;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],W);P++}else if(I.isDirectionalLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,G=t.get(I);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=I.shadow.matrix,A++}n.directional[m]=H,m++}else if(I.isSpotLight){const H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(V).multiplyScalar(W),H.distance=K,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[v]=H;const J=I.shadow;if(I.map&&(n.spotLightMap[D]=I.map,D++,J.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[v]=J.matrix,I.castShadow){const G=t.get(I);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=X,w++}v++}else if(I.isRectAreaLight){const H=e.get(I);H.color.copy(V).multiplyScalar(W),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[x]=H,x++}else if(I.isPointLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){const J=I.shadow,G=t.get(I);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=H,g++}else if(I.isHemisphereLight){const H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(W),H.groundColor.copy(I.groundColor).multiplyScalar(W),n.hemi[h]=H,h++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const O=n.hash;(O.directionalLength!==m||O.pointLength!==g||O.spotLength!==v||O.rectAreaLength!==x||O.hemiLength!==h||O.numDirectionalShadows!==A||O.numPointShadows!==E||O.numSpotShadows!==w||O.numSpotMaps!==D||O.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=x,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=w+D-T,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,O.directionalLength=m,O.pointLength=g,O.spotLength=v,O.rectAreaLength=x,O.hemiLength=h,O.numDirectionalShadows=A,O.numPointShadows=E,O.numSpotShadows=w,O.numSpotMaps=D,O.numLightProbes=P,n.version=Px++)}function c(l,u){let d=0,f=0,m=0,g=0,v=0;const x=u.matrixWorldInverse;for(let h=0,A=l.length;h<A;h++){const E=l[h];if(E.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(x),d++}else if(E.isSpotLight){const w=n.spot[m];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(x),m++}else if(E.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(x),s.identity(),a.copy(E.matrixWorld),a.premultiply(x),s.extractRotation(a),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),g++}else if(E.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(x),f++}else if(E.isHemisphereLight){const w=n.hemi[v];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(x),v++}}}return{setup:o,setupView:c,state:n}}function Fl(i){const e=new Ix(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function a(u){t.push(u)}function s(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:s}}function Ux(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new Fl(i),e.set(r,[o])):a>=s.length?(o=new Fl(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Nx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ox(i,e,t){let n=new Qo;const r=new Ne,a=new Ne,s=new at,o=new ef({depthPacking:$d}),c=new tf,l={},u=t.maxTextureSize,d={[ni]:Yt,[Yt]:ni,[Mt]:Mt},f=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Nx,fragmentShader:Fx}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new tt(g,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let h=this.type;this.render=function(T,P,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||T.length===0)return;const y=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Nn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const W=h!==Dn&&this.type===Dn,K=h===Dn&&this.type!==Dn;for(let X=0,H=T.length;X<H;X++){const J=T[X],G=J.shadow;if(G===void 0){Pe("WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const te=G.getFrameExtents();if(r.multiply(te),a.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/te.x),r.x=a.x*te.x,G.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/te.y),r.y=a.y*te.y,G.mapSize.y=a.y)),G.map===null||W===!0||K===!0){const _e=this.type!==Dn?{minFilter:Qt,magFilter:Qt}:{};G.map!==null&&G.map.dispose(),G.map=new vi(r.x,r.y,_e),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ie=G.getViewportCount();for(let _e=0;_e<ie;_e++){const Xe=G.getViewport(_e);s.set(a.x*Xe.x,a.y*Xe.y,a.x*Xe.z,a.y*Xe.w),V.viewport(s),G.updateMatrices(J,_e),n=G.getFrustum(),w(P,O,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===Dn&&A(G,O),G.needsUpdate=!1}h=this.type,x.needsUpdate=!1,i.setRenderTarget(y,S,I)};function A(T,P){const O=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new vi(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,O,f,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,O,m,v,null)}function E(T,P,O,y){let S=null;const I=O.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)S=I;else if(S=O.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const V=S.uuid,W=P.uuid;let K=l[V];K===void 0&&(K={},l[V]=K);let X=K[W];X===void 0&&(X=S.clone(),K[W]=X,P.addEventListener("dispose",D)),S=X}if(S.visible=P.visible,S.wireframe=P.wireframe,y===Dn?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:d[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,O.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=i.properties.get(S);V.light=O}return S}function w(T,P,O,y,S){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Dn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld);const W=e.update(T),K=T.material;if(Array.isArray(K)){const X=W.groups;for(let H=0,J=X.length;H<J;H++){const G=X[H],te=K[G.materialIndex];if(te&&te.visible){const ie=E(T,te,y,S);T.onBeforeShadow(i,T,P,O,W,ie,G),i.renderBufferDirect(O,null,W,ie,T,G),T.onAfterShadow(i,T,P,O,W,ie,G)}}}else if(K.visible){const X=E(T,K,y,S);T.onBeforeShadow(i,T,P,O,W,X,null),i.renderBufferDirect(O,null,W,X,T,null),T.onAfterShadow(i,T,P,O,W,X,null)}}const V=T.children;for(let W=0,K=V.length;W<K;W++)w(V[W],P,O,y,S)}function D(T){T.target.removeEventListener("dispose",D);for(const O in l){const y=l[O],S=T.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const Bx={[ks]:Ws,[Xs]:$s,[qs]:Ks,[Zi]:Ys,[Ws]:ks,[$s]:Xs,[Ks]:qs,[Ys]:Zi};function zx(i,e){function t(){let C=!1;const le=new at;let ae=null;const se=new at(0,0,0,0);return{setMask:function(ee){ae!==ee&&!C&&(i.colorMask(ee,ee,ee,ee),ae=ee)},setLocked:function(ee){C=ee},setClear:function(ee,$,pe,De,ut){ut===!0&&(ee*=De,$*=De,pe*=De),le.set(ee,$,pe,De),se.equals(le)===!1&&(i.clearColor(ee,$,pe,De),se.copy(le))},reset:function(){C=!1,ae=null,se.set(-1,0,0,0)}}}function n(){let C=!1,le=!1,ae=null,se=null,ee=null;return{setReversed:function($){if(le!==$){const pe=e.get("EXT_clip_control");$?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),le=$;const De=ee;ee=null,this.setClear(De)}},getReversed:function(){return le},setTest:function($){$?Z(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function($){ae!==$&&!C&&(i.depthMask($),ae=$)},setFunc:function($){if(le&&($=Bx[$]),se!==$){switch($){case ks:i.depthFunc(i.NEVER);break;case Ws:i.depthFunc(i.ALWAYS);break;case Xs:i.depthFunc(i.LESS);break;case Zi:i.depthFunc(i.LEQUAL);break;case qs:i.depthFunc(i.EQUAL);break;case Ys:i.depthFunc(i.GEQUAL);break;case $s:i.depthFunc(i.GREATER);break;case Ks:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=$}},setLocked:function($){C=$},setClear:function($){ee!==$&&(le&&($=1-$),i.clearDepth($),ee=$)},reset:function(){C=!1,ae=null,se=null,ee=null,le=!1}}}function r(){let C=!1,le=null,ae=null,se=null,ee=null,$=null,pe=null,De=null,ut=null;return{setTest:function(nt){C||(nt?Z(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(nt){le!==nt&&!C&&(i.stencilMask(nt),le=nt)},setFunc:function(nt,gn,cn){(ae!==nt||se!==gn||ee!==cn)&&(i.stencilFunc(nt,gn,cn),ae=nt,se=gn,ee=cn)},setOp:function(nt,gn,cn){($!==nt||pe!==gn||De!==cn)&&(i.stencilOp(nt,gn,cn),$=nt,pe=gn,De=cn)},setLocked:function(nt){C=nt},setClear:function(nt){ut!==nt&&(i.clearStencil(nt),ut=nt)},reset:function(){C=!1,le=null,ae=null,se=null,ee=null,$=null,pe=null,De=null,ut=null}}}const a=new t,s=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,m=[],g=null,v=!1,x=null,h=null,A=null,E=null,w=null,D=null,T=null,P=new Ie(0,0,0),O=0,y=!1,S=null,I=null,V=null,W=null,K=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=J>=2);let te=null,ie={};const _e=i.getParameter(i.SCISSOR_BOX),Xe=i.getParameter(i.VIEWPORT),Ye=new at().fromArray(_e),je=new at().fromArray(Xe);function Je(C,le,ae,se){const ee=new Uint8Array(4),$=i.createTexture();i.bindTexture(C,$),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pe=0;pe<ae;pe++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(le+pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return $}const q={};q[i.TEXTURE_2D]=Je(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),s.setFunc(Zi),Ge(!1),He(Pc),Z(i.CULL_FACE),ht(Nn);function Z(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function he(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function Fe(C,le){return d[C]!==le?(i.bindFramebuffer(C,le),d[C]=le,C===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=le),C===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=le),!0):!1}function Me(C,le){let ae=m,se=!1;if(C){ae=f.get(le),ae===void 0&&(ae=[],f.set(le,ae));const ee=C.textures;if(ae.length!==ee.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let $=0,pe=ee.length;$<pe;$++)ae[$]=i.COLOR_ATTACHMENT0+$;ae.length=ee.length,se=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,se=!0);se&&i.drawBuffers(ae)}function Ve(C){return g!==C?(i.useProgram(C),g=C,!0):!1}const Lt={[fi]:i.FUNC_ADD,[Md]:i.FUNC_SUBTRACT,[Sd]:i.FUNC_REVERSE_SUBTRACT};Lt[yd]=i.MIN,Lt[bd]=i.MAX;const ze={[Ed]:i.ZERO,[Td]:i.ONE,[Ad]:i.SRC_COLOR,[Gs]:i.SRC_ALPHA,[Dd]:i.SRC_ALPHA_SATURATE,[Ld]:i.DST_COLOR,[Rd]:i.DST_ALPHA,[wd]:i.ONE_MINUS_SRC_COLOR,[Hs]:i.ONE_MINUS_SRC_ALPHA,[Pd]:i.ONE_MINUS_DST_COLOR,[Cd]:i.ONE_MINUS_DST_ALPHA,[Id]:i.CONSTANT_COLOR,[Ud]:i.ONE_MINUS_CONSTANT_COLOR,[Nd]:i.CONSTANT_ALPHA,[Fd]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(C,le,ae,se,ee,$,pe,De,ut,nt){if(C===Nn){v===!0&&(he(i.BLEND),v=!1);return}if(v===!1&&(Z(i.BLEND),v=!0),C!==vd){if(C!==x||nt!==y){if((h!==fi||w!==fi)&&(i.blendEquation(i.FUNC_ADD),h=fi,w=fi),nt)switch(C){case Xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dt:i.blendFunc(i.ONE,i.ONE);break;case Dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ic:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:gt("WebGLState: Invalid blending: ",C);break}else switch(C){case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Dc:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ic:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",C);break}A=null,E=null,D=null,T=null,P.set(0,0,0),O=0,x=C,y=nt}return}ee=ee||le,$=$||ae,pe=pe||se,(le!==h||ee!==w)&&(i.blendEquationSeparate(Lt[le],Lt[ee]),h=le,w=ee),(ae!==A||se!==E||$!==D||pe!==T)&&(i.blendFuncSeparate(ze[ae],ze[se],ze[$],ze[pe]),A=ae,E=se,D=$,T=pe),(De.equals(P)===!1||ut!==O)&&(i.blendColor(De.r,De.g,De.b,ut),P.copy(De),O=ut),x=C,y=!1}function R(C,le){C.side===Mt?he(i.CULL_FACE):Z(i.CULL_FACE);let ae=C.side===Yt;le&&(ae=!ae),Ge(ae),C.blending===Xi&&C.transparent===!1?ht(Nn):ht(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),s.setFunc(C.depthFunc),s.setTest(C.depthTest),s.setMask(C.depthWrite),a.setMask(C.colorWrite);const se=C.stencilWrite;o.setTest(se),se&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),xe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(C){S!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),S=C)}function He(C){C!==xd?(Z(i.CULL_FACE),C!==I&&(C===Pc?i.cullFace(i.BACK):C===gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),I=C}function ct(C){C!==V&&(H&&i.lineWidth(C),V=C)}function xe(C,le,ae){C?(Z(i.POLYGON_OFFSET_FILL),(W!==le||K!==ae)&&(i.polygonOffset(le,ae),W=le,K=ae)):he(i.POLYGON_OFFSET_FILL)}function ft(C){C?Z(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function ye(C){C===void 0&&(C=i.TEXTURE0+X-1),te!==C&&(i.activeTexture(C),te=C)}function Ue(C,le,ae){ae===void 0&&(te===null?ae=i.TEXTURE0+X-1:ae=te);let se=ie[ae];se===void 0&&(se={type:void 0,texture:void 0},ie[ae]=se),(se.type!==C||se.texture!==le)&&(te!==ae&&(i.activeTexture(ae),te=ae),i.bindTexture(C,le||q[C]),se.type=C,se.texture=le)}function b(){const C=ie[te];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(C){C("WebGLState:",C)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(C){C("WebGLState:",C)}}function Y(){try{i.texSubImage2D(...arguments)}catch(C){C("WebGLState:",C)}}function j(){try{i.texSubImage3D(...arguments)}catch(C){C("WebGLState:",C)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(C){C("WebGLState:",C)}}function ve(){try{i.compressedTexSubImage3D(...arguments)}catch(C){C("WebGLState:",C)}}function ce(){try{i.texStorage2D(...arguments)}catch(C){C("WebGLState:",C)}}function be(){try{i.texStorage3D(...arguments)}catch(C){C("WebGLState:",C)}}function ge(){try{i.texImage2D(...arguments)}catch(C){C("WebGLState:",C)}}function Q(){try{i.texImage3D(...arguments)}catch(C){C("WebGLState:",C)}}function re(C){Ye.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Ye.copy(C))}function we(C){je.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),je.copy(C))}function Te(C,le){let ae=l.get(le);ae===void 0&&(ae=new WeakMap,l.set(le,ae));let se=ae.get(C);se===void 0&&(se=i.getUniformBlockIndex(le,C.name),ae.set(C,se))}function de(C,le){const se=l.get(le).get(C);c.get(le)!==se&&(i.uniformBlockBinding(le,se,C.__bindingPointIndex),c.set(le,se))}function Le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},te=null,ie={},d={},f=new WeakMap,m=[],g=null,v=!1,x=null,h=null,A=null,E=null,w=null,D=null,T=null,P=new Ie(0,0,0),O=0,y=!1,S=null,I=null,V=null,W=null,K=null,Ye.set(0,0,i.canvas.width,i.canvas.height),je.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:Z,disable:he,bindFramebuffer:Fe,drawBuffers:Me,useProgram:Ve,setBlending:ht,setMaterial:R,setFlipSided:Ge,setCullFace:He,setLineWidth:ct,setPolygonOffset:xe,setScissorTest:ft,activeTexture:ye,bindTexture:Ue,unbindTexture:b,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:ge,texImage3D:Q,updateUBOMapping:Te,uniformBlockBinding:de,texStorage2D:ce,texStorage3D:be,texSubImage2D:Y,texSubImage3D:j,compressedTexSubImage2D:k,compressedTexSubImage3D:ve,scissor:re,viewport:we,reset:Le}}function Vx(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return m?new OffscreenCanvas(b,_):Ra("canvas")}function v(b,_,F){let Y=1;const j=Ue(b);if((j.width>F||j.height>F)&&(Y=F/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const k=Math.floor(Y*j.width),ve=Math.floor(Y*j.height);d===void 0&&(d=g(k,ve));const ce=_?g(k,ve):d;return ce.width=k,ce.height=ve,ce.getContext("2d").drawImage(b,0,0,k,ve),Pe("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+k+"x"+ve+")."),ce}else return"data"in b&&Pe("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function x(b){return b.generateMipmaps}function h(b){i.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(b,_,F,Y,j=!1){if(b!==null){if(i[b]!==void 0)return i[b];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let k=_;if(_===i.RED&&(F===i.FLOAT&&(k=i.R32F),F===i.HALF_FLOAT&&(k=i.R16F),F===i.UNSIGNED_BYTE&&(k=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(k=i.R8UI),F===i.UNSIGNED_SHORT&&(k=i.R16UI),F===i.UNSIGNED_INT&&(k=i.R32UI),F===i.BYTE&&(k=i.R8I),F===i.SHORT&&(k=i.R16I),F===i.INT&&(k=i.R32I)),_===i.RG&&(F===i.FLOAT&&(k=i.RG32F),F===i.HALF_FLOAT&&(k=i.RG16F),F===i.UNSIGNED_BYTE&&(k=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(k=i.RG8UI),F===i.UNSIGNED_SHORT&&(k=i.RG16UI),F===i.UNSIGNED_INT&&(k=i.RG32UI),F===i.BYTE&&(k=i.RG8I),F===i.SHORT&&(k=i.RG16I),F===i.INT&&(k=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(k=i.RGB8UI),F===i.UNSIGNED_SHORT&&(k=i.RGB16UI),F===i.UNSIGNED_INT&&(k=i.RGB32UI),F===i.BYTE&&(k=i.RGB8I),F===i.SHORT&&(k=i.RGB16I),F===i.INT&&(k=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),F===i.UNSIGNED_INT&&(k=i.RGBA32UI),F===i.BYTE&&(k=i.RGBA8I),F===i.SHORT&&(k=i.RGBA16I),F===i.INT&&(k=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(k=i.R11F_G11F_B10F)),_===i.RGBA){const ve=j?Aa:Ke.getTransfer(Y);F===i.FLOAT&&(k=i.RGBA32F),F===i.HALF_FLOAT&&(k=i.RGBA16F),F===i.UNSIGNED_BYTE&&(k=ve===rt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function w(b,_){let F;return b?_===null||_===_i||_===Cr?F=i.DEPTH24_STENCIL8:_===Un?F=i.DEPTH32F_STENCIL8:_===Rr&&(F=i.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===_i||_===Cr?F=i.DEPTH_COMPONENT24:_===Un?F=i.DEPTH_COMPONENT32F:_===Rr&&(F=i.DEPTH_COMPONENT16),F}function D(b,_){return x(b)===!0||b.isFramebufferTexture&&b.minFilter!==Qt&&b.minFilter!==an?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function T(b){const _=b.target;_.removeEventListener("dispose",T),O(_),_.isVideoTexture&&u.delete(_)}function P(b){const _=b.target;_.removeEventListener("dispose",P),S(_)}function O(b){const _=n.get(b);if(_.__webglInit===void 0)return;const F=b.source,Y=f.get(F);if(Y){const j=Y[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(b),Object.keys(Y).length===0&&f.delete(F)}n.remove(b)}function y(b){const _=n.get(b);i.deleteTexture(_.__webglTexture);const F=b.source,Y=f.get(F);delete Y[_.__cacheKey],s.memory.textures--}function S(b){const _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let j=0;j<_.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=b.textures;for(let Y=0,j=F.length;Y<j;Y++){const k=n.get(F[Y]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),s.memory.textures--),n.remove(F[Y])}n.remove(b)}let I=0;function V(){I=0}function W(){const b=I;return b>=r.maxTextures&&Pe("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),I+=1,b}function K(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function X(b,_){const F=n.get(b);if(b.isVideoTexture&&ft(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){const Y=b.image;if(Y===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,b,_);return}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function H(b,_){const F=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){q(F,b,_);return}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function J(b,_){const F=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){q(F,b,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function G(b,_){const F=n.get(b);if(b.version>0&&F.__version!==b.version){Z(F,b,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const te={[Js]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Qs]:i.MIRRORED_REPEAT},ie={[Qt]:i.NEAREST,[qd]:i.NEAREST_MIPMAP_NEAREST,[Yr]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[rs]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},_e={[Zd]:i.NEVER,[nh]:i.ALWAYS,[jd]:i.LESS,[iu]:i.LEQUAL,[Jd]:i.EQUAL,[th]:i.GEQUAL,[Qd]:i.GREATER,[eh]:i.NOTEQUAL};function Xe(b,_){if(_.type===Un&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===an||_.magFilter===rs||_.magFilter===Yr||_.magFilter===mi||_.minFilter===an||_.minFilter===rs||_.minFilter===Yr||_.minFilter===mi)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,te[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,te[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,te[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ie[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ie[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,_e[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Qt||_.minFilter!==Yr&&_.minFilter!==mi||_.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ye(b,_){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",T));const Y=_.source;let j=f.get(Y);j===void 0&&(j={},f.set(Y,j));const k=K(_);if(k!==b.__cacheKey){j[k]===void 0&&(j[k]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,F=!0),j[k].usedTimes++;const ve=j[b.__cacheKey];ve!==void 0&&(j[b.__cacheKey].usedTimes--,ve.usedTimes===0&&y(_)),b.__cacheKey=k,b.__webglTexture=j[k].texture}return F}function je(b,_,F){return Math.floor(Math.floor(b/F)/_)}function Je(b,_,F,Y){const k=b.updateRanges;if(k.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,Y,_.data);else{k.sort((Q,re)=>Q.start-re.start);let ve=0;for(let Q=1;Q<k.length;Q++){const re=k[ve],we=k[Q],Te=re.start+re.count,de=je(we.start,_.width,4),Le=je(re.start,_.width,4);we.start<=Te+1&&de===Le&&je(we.start+we.count-1,_.width,4)===de?re.count=Math.max(re.count,we.start+we.count-re.start):(++ve,k[ve]=we)}k.length=ve+1;const ce=i.getParameter(i.UNPACK_ROW_LENGTH),be=i.getParameter(i.UNPACK_SKIP_PIXELS),ge=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Q=0,re=k.length;Q<re;Q++){const we=k[Q],Te=Math.floor(we.start/4),de=Math.ceil(we.count/4),Le=Te%_.width,C=Math.floor(Te/_.width),le=de,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Le),i.pixelStorei(i.UNPACK_SKIP_ROWS,C),t.texSubImage2D(i.TEXTURE_2D,0,Le,C,le,ae,F,Y,_.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ce),i.pixelStorei(i.UNPACK_SKIP_PIXELS,be),i.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function q(b,_,F){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);const j=Ye(b,_),k=_.source;t.bindTexture(Y,b.__webglTexture,i.TEXTURE0+F);const ve=n.get(k);if(k.version!==ve.__version||j===!0){t.activeTexture(i.TEXTURE0+F);const ce=Ke.getPrimaries(Ke.workingColorSpace),be=_.colorSpace===Jn?null:Ke.getPrimaries(_.colorSpace),ge=_.colorSpace===Jn||ce===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Q=v(_.image,!1,r.maxTextureSize);Q=ye(_,Q);const re=a.convert(_.format,_.colorSpace),we=a.convert(_.type);let Te=E(_.internalFormat,re,we,_.colorSpace,_.isVideoTexture);Xe(Y,_);let de;const Le=_.mipmaps,C=_.isVideoTexture!==!0,le=ve.__version===void 0||j===!0,ae=k.dataReady,se=D(_,Q);if(_.isDepthTexture)Te=w(_.format===Pr,_.type),le&&(C?t.texStorage2D(i.TEXTURE_2D,1,Te,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Te,Q.width,Q.height,0,re,we,null));else if(_.isDataTexture)if(Le.length>0){C&&le&&t.texStorage2D(i.TEXTURE_2D,se,Te,Le[0].width,Le[0].height);for(let ee=0,$=Le.length;ee<$;ee++)de=Le[ee],C?ae&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,de.width,de.height,re,we,de.data):t.texImage2D(i.TEXTURE_2D,ee,Te,de.width,de.height,0,re,we,de.data);_.generateMipmaps=!1}else C?(le&&t.texStorage2D(i.TEXTURE_2D,se,Te,Q.width,Q.height),ae&&Je(_,Q,re,we)):t.texImage2D(i.TEXTURE_2D,0,Te,Q.width,Q.height,0,re,we,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){C&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,Te,Le[0].width,Le[0].height,Q.depth);for(let ee=0,$=Le.length;ee<$;ee++)if(de=Le[ee],_.format!==fn)if(re!==null)if(C){if(ae)if(_.layerUpdates.size>0){const pe=fl(de.width,de.height,_.format,_.type);for(const De of _.layerUpdates){const ut=de.data.subarray(De*pe/de.data.BYTES_PER_ELEMENT,(De+1)*pe/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,De,de.width,de.height,1,re,ut)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,Q.depth,re,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Te,de.width,de.height,Q.depth,0,de.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,Q.depth,re,we,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Te,de.width,de.height,Q.depth,0,re,we,de.data)}else{C&&le&&t.texStorage2D(i.TEXTURE_2D,se,Te,Le[0].width,Le[0].height);for(let ee=0,$=Le.length;ee<$;ee++)de=Le[ee],_.format!==fn?re!==null?C?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,de.width,de.height,re,de.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Te,de.width,de.height,0,de.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?ae&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,de.width,de.height,re,we,de.data):t.texImage2D(i.TEXTURE_2D,ee,Te,de.width,de.height,0,re,we,de.data)}else if(_.isDataArrayTexture)if(C){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,Te,Q.width,Q.height,Q.depth),ae)if(_.layerUpdates.size>0){const ee=fl(Q.width,Q.height,_.format,_.type);for(const $ of _.layerUpdates){const pe=Q.data.subarray($*ee/Q.data.BYTES_PER_ELEMENT,($+1)*ee/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,re,we,pe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,re,we,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,Q.width,Q.height,Q.depth,0,re,we,Q.data);else if(_.isData3DTexture)C?(le&&t.texStorage3D(i.TEXTURE_3D,se,Te,Q.width,Q.height,Q.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,re,we,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Te,Q.width,Q.height,Q.depth,0,re,we,Q.data);else if(_.isFramebufferTexture){if(le)if(C)t.texStorage2D(i.TEXTURE_2D,se,Te,Q.width,Q.height);else{let ee=Q.width,$=Q.height;for(let pe=0;pe<se;pe++)t.texImage2D(i.TEXTURE_2D,pe,Te,ee,$,0,re,we,null),ee>>=1,$>>=1}}else if(Le.length>0){if(C&&le){const ee=Ue(Le[0]);t.texStorage2D(i.TEXTURE_2D,se,Te,ee.width,ee.height)}for(let ee=0,$=Le.length;ee<$;ee++)de=Le[ee],C?ae&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,re,we,de):t.texImage2D(i.TEXTURE_2D,ee,Te,re,we,de);_.generateMipmaps=!1}else if(C){if(le){const ee=Ue(Q);t.texStorage2D(i.TEXTURE_2D,se,Te,ee.width,ee.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,we,Q)}else t.texImage2D(i.TEXTURE_2D,0,Te,re,we,Q);x(_)&&h(Y),ve.__version=k.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Z(b,_,F){if(_.image.length!==6)return;const Y=Ye(b,_),j=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+F);const k=n.get(j);if(j.version!==k.__version||Y===!0){t.activeTexture(i.TEXTURE0+F);const ve=Ke.getPrimaries(Ke.workingColorSpace),ce=_.colorSpace===Jn?null:Ke.getPrimaries(_.colorSpace),be=_.colorSpace===Jn||ve===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const ge=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,re=[];for(let $=0;$<6;$++)!ge&&!Q?re[$]=v(_.image[$],!0,r.maxCubemapSize):re[$]=Q?_.image[$].image:_.image[$],re[$]=ye(_,re[$]);const we=re[0],Te=a.convert(_.format,_.colorSpace),de=a.convert(_.type),Le=E(_.internalFormat,Te,de,_.colorSpace),C=_.isVideoTexture!==!0,le=k.__version===void 0||Y===!0,ae=j.dataReady;let se=D(_,we);Xe(i.TEXTURE_CUBE_MAP,_);let ee;if(ge){C&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Le,we.width,we.height);for(let $=0;$<6;$++){ee=re[$].mipmaps;for(let pe=0;pe<ee.length;pe++){const De=ee[pe];_.format!==fn?Te!==null?C?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,0,0,De.width,De.height,Te,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,Le,De.width,De.height,0,De.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,0,0,De.width,De.height,Te,de,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,Le,De.width,De.height,0,Te,de,De.data)}}}else{if(ee=_.mipmaps,C&&le){ee.length>0&&se++;const $=Ue(re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Le,$.width,$.height)}for(let $=0;$<6;$++)if(Q){C?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,re[$].width,re[$].height,Te,de,re[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Le,re[$].width,re[$].height,0,Te,de,re[$].data);for(let pe=0;pe<ee.length;pe++){const ut=ee[pe].image[$].image;C?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,0,0,ut.width,ut.height,Te,de,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,Le,ut.width,ut.height,0,Te,de,ut.data)}}else{C?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Te,de,re[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Le,Te,de,re[$]);for(let pe=0;pe<ee.length;pe++){const De=ee[pe];C?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,0,0,Te,de,De.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,Le,Te,de,De.image[$])}}}x(_)&&h(i.TEXTURE_CUBE_MAP),k.__version=j.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function he(b,_,F,Y,j,k){const ve=a.convert(F.format,F.colorSpace),ce=a.convert(F.type),be=E(F.internalFormat,ve,ce,F.colorSpace),ge=n.get(_),Q=n.get(F);if(Q.__renderTarget=_,!ge.__hasExternalTextures){const re=Math.max(1,_.width>>k),we=Math.max(1,_.height>>k);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,k,be,re,we,_.depth,0,ve,ce,null):t.texImage2D(j,k,be,re,we,0,ve,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,Q.__webglTexture,0,ct(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,Q.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(b,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){const Y=_.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,k=w(_.stencilBuffer,j),ve=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=ct(_);xe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,k,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,k,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,k,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,b)}else{const Y=_.textures;for(let j=0;j<Y.length;j++){const k=Y[j],ve=a.convert(k.format,k.colorSpace),ce=a.convert(k.type),be=E(k.internalFormat,ve,ce,k.colorSpace),ge=ct(_);F&&xe(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,be,_.width,_.height):xe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,be,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,be,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);const j=Y.__webglTexture,k=ct(_);if(_.depthTexture.format===Lr)xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(_.depthTexture.format===Pr)xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ve(b){const _=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=Y}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const Y=b.texture.mipmaps;Y&&Y.length>0?Me(_.__webglFramebuffer[0],b):Me(_.__webglFramebuffer,b)}else if(F){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),Fe(_.__webglDepthbuffer[Y],b,!1);else{const j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,k)}}else{const Y=b.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Fe(_.__webglDepthbuffer,b,!1);else{const j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,k)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(b,_,F){const Y=n.get(b);_!==void 0&&he(Y.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ve(b)}function ze(b){const _=b.texture,F=n.get(b),Y=n.get(_);b.addEventListener("dispose",P);const j=b.textures,k=b.isWebGLCubeRenderTarget===!0,ve=j.length>1;if(ve||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,s.memory.textures++),k){F.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[ce]=[];for(let be=0;be<_.mipmaps.length;be++)F.__webglFramebuffer[ce][be]=i.createFramebuffer()}else F.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let ce=0;ce<_.mipmaps.length;ce++)F.__webglFramebuffer[ce]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ve)for(let ce=0,be=j.length;ce<be;ce++){const ge=n.get(j[ce]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),s.memory.textures++)}if(b.samples>0&&xe(b)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ce=0;ce<j.length;ce++){const be=j[ce];F.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ce]);const ge=a.convert(be.format,be.colorSpace),Q=a.convert(be.type),re=E(be.internalFormat,ge,Q,be.colorSpace,b.isXRRenderTarget===!0),we=ct(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,we,re,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,F.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,_);for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0)for(let be=0;be<_.mipmaps.length;be++)he(F.__webglFramebuffer[ce][be],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be);else he(F.__webglFramebuffer[ce],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);x(_)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ce=0,be=j.length;ce<be;ce++){const ge=j[ce],Q=n.get(ge);let re=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(re=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,Q.__webglTexture),Xe(re,ge),he(F.__webglFramebuffer,b,ge,i.COLOR_ATTACHMENT0+ce,re,0),x(ge)&&h(re)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ce=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,Y.__webglTexture),Xe(ce,_),_.mipmaps&&_.mipmaps.length>0)for(let be=0;be<_.mipmaps.length;be++)he(F.__webglFramebuffer[be],b,_,i.COLOR_ATTACHMENT0,ce,be);else he(F.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,ce,0);x(_)&&h(ce),t.unbindTexture()}b.depthBuffer&&Ve(b)}function ht(b){const _=b.textures;for(let F=0,Y=_.length;F<Y;F++){const j=_[F];if(x(j)){const k=A(b),ve=n.get(j).__webglTexture;t.bindTexture(k,ve),h(k),t.unbindTexture()}}}const R=[],Ge=[];function He(b){if(b.samples>0){if(xe(b)===!1){const _=b.textures,F=b.width,Y=b.height;let j=i.COLOR_BUFFER_BIT;const k=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(b),ce=_.length>1;if(ce)for(let ge=0;ge<_.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const be=b.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ge=0;ge<_.length;ge++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[ge]);const Q=n.get(_[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,j,i.NEAREST),c===!0&&(R.length=0,Ge.length=0,R.push(i.COLOR_ATTACHMENT0+ge),b.depthBuffer&&b.resolveDepthBuffer===!1&&(R.push(k),Ge.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let ge=0;ge<_.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,ve.__webglColorRenderbuffer[ge]);const Q=n.get(_[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ct(b){return Math.min(r.maxSamples,b.samples)}function xe(b){const _=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ft(b){const _=s.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function ye(b,_){const F=b.colorSpace,Y=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Qi&&F!==Jn&&(Ke.getTransfer(F)===rt?(Y!==fn||j!==En)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",F)),_}function Ue(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=V,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=Lt,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=he,this.useMultisampledRTT=xe}function Gx(i,e){function t(n,r=Jn){let a;const s=Ke.getTransfer(r);if(n===En)return i.UNSIGNED_BYTE;if(n===Go)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ho)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ql)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zl)return i.BYTE;if(n===jl)return i.SHORT;if(n===Rr)return i.UNSIGNED_SHORT;if(n===Vo)return i.INT;if(n===_i)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===tr)return i.HALF_FLOAT;if(n===eu)return i.ALPHA;if(n===tu)return i.RGB;if(n===fn)return i.RGBA;if(n===Lr)return i.DEPTH_COMPONENT;if(n===Pr)return i.DEPTH_STENCIL;if(n===nu)return i.RED;if(n===ko)return i.RED_INTEGER;if(n===Wo)return i.RG;if(n===Xo)return i.RG_INTEGER;if(n===qo)return i.RGBA_INTEGER;if(n===Ma||n===Sa||n===ya||n===ba)if(s===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ma)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ma)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ba)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eo||n===to||n===no||n===io)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===eo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===to)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===no)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===io)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ro||n===ao||n===so)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ro||n===ao)return s===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===so)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oo||n===co||n===lo||n===uo||n===ho||n===fo||n===po||n===mo||n===xo||n===go||n===_o||n===vo||n===Mo||n===So)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===oo)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===co)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lo)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uo)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ho)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fo)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===po)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mo)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xo)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===go)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_o)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vo)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mo)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===So)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yo||n===bo||n===Eo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===yo)return s===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===To||n===Ao||n===wo||n===Ro)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===To)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Ao)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ro)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Wx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new pu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Bn({vertexShader:Hx,fragmentShader:kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new Hr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xx extends nr{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",c=1,l=null,u=null,d=null,f=null,m=null,g=null;const v=typeof XRWebGLBinding<"u",x=new Wx,h={},A=t.getContextAttributes();let E=null,w=null;const D=[],T=[],P=new Ne;let O=null;const y=new Jt;y.viewport=new at;const S=new Jt;S.viewport=new at;const I=[y,S],V=new cf;let W=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=D[q];return Z===void 0&&(Z=new Ts,D[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=D[q];return Z===void 0&&(Z=new Ts,D[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=D[q];return Z===void 0&&(Z=new Ts,D[q]=Z),Z.getHandSpace()};function X(q){const Z=T.indexOf(q.inputSource);if(Z===-1)return;const he=D[Z];he!==void 0&&(he.update(q.inputSource,q.frame,l||s),he.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",J);for(let q=0;q<D.length;q++){const Z=T[q];Z!==null&&(T[q]=null,D[q].disconnect(Z))}W=null,K=null,x.reset();for(const q in h)delete h[q];e.setRenderTarget(E),m=null,f=null,d=null,r=null,w=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",H),r.addEventListener("inputsourceschange",J),A.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Fe=null,Me=null;A.depth&&(Me=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=A.stencil?Pr:Lr,Fe=A.stencil?Cr:_i);const Ve={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(Ve),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new vi(f.textureWidth,f.textureHeight,{format:fn,type:En,depthTexture:new fu(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const he={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new vi(m.framebufferWidth,m.framebufferHeight,{format:fn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(o),Je.setContext(r),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(q){for(let Z=0;Z<q.removed.length;Z++){const he=q.removed[Z],Fe=T.indexOf(he);Fe>=0&&(T[Fe]=null,D[Fe].disconnect(he))}for(let Z=0;Z<q.added.length;Z++){const he=q.added[Z];let Fe=T.indexOf(he);if(Fe===-1){for(let Ve=0;Ve<D.length;Ve++)if(Ve>=T.length){T.push(he),Fe=Ve;break}else if(T[Ve]===null){T[Ve]=he,Fe=Ve;break}if(Fe===-1)break}const Me=D[Fe];Me&&Me.connect(he)}}const G=new L,te=new L;function ie(q,Z,he){G.setFromMatrixPosition(Z.matrixWorld),te.setFromMatrixPosition(he.matrixWorld);const Fe=G.distanceTo(te),Me=Z.projectionMatrix.elements,Ve=he.projectionMatrix.elements,Lt=Me[14]/(Me[10]-1),ze=Me[14]/(Me[10]+1),ht=(Me[9]+1)/Me[5],R=(Me[9]-1)/Me[5],Ge=(Me[8]-1)/Me[0],He=(Ve[8]+1)/Ve[0],ct=Lt*Ge,xe=Lt*He,ft=Fe/(-Ge+He),ye=ft*-Ge;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ye),q.translateZ(ft),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Me[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Ue=Lt+ft,b=ze+ft,_=ct-ye,F=xe+(Fe-ye),Y=ht*ze/b*Ue,j=R*ze/b*Ue;q.projectionMatrix.makePerspective(_,F,Y,j,Ue,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function _e(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let Z=q.near,he=q.far;x.texture!==null&&(x.depthNear>0&&(Z=x.depthNear),x.depthFar>0&&(he=x.depthFar)),V.near=S.near=y.near=Z,V.far=S.far=y.far=he,(W!==V.near||K!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),W=V.near,K=V.far),V.layers.mask=q.layers.mask|6,y.layers.mask=V.layers.mask&3,S.layers.mask=V.layers.mask&5;const Fe=q.parent,Me=V.cameras;_e(V,Fe);for(let Ve=0;Ve<Me.length;Ve++)_e(Me[Ve],Fe);Me.length===2?ie(V,y,S):V.projectionMatrix.copy(y.projectionMatrix),Xe(q,V,Fe)};function Xe(q,Z,he){he===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ir*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(V)},this.getCameraTexture=function(q){return h[q]};let Ye=null;function je(q,Z){if(u=Z.getViewerPose(l||s),g=Z,u!==null){const he=u.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let Fe=!1;he.length!==V.cameras.length&&(V.cameras.length=0,Fe=!0);for(let ze=0;ze<he.length;ze++){const ht=he[ze];let R=null;if(m!==null)R=m.getViewport(ht);else{const He=d.getViewSubImage(f,ht);R=He.viewport,ze===0&&(e.setRenderTargetTextures(w,He.colorTexture,He.depthStencilTexture),e.setRenderTarget(w))}let Ge=I[ze];Ge===void 0&&(Ge=new Jt,Ge.layers.enable(ze),Ge.viewport=new at,I[ze]=Ge),Ge.matrix.fromArray(ht.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(ht.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(R.x,R.y,R.width,R.height),ze===0&&(V.matrix.copy(Ge.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Fe===!0&&V.cameras.push(Ge)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const ze=d.getDepthInformation(he[0]);ze&&ze.isValid&&ze.texture&&x.init(ze,r.renderState)}if(Me&&Me.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let ze=0;ze<he.length;ze++){const ht=he[ze].camera;if(ht){let R=h[ht];R||(R=new pu,h[ht]=R);const Ge=d.getCameraImage(ht);R.sourceTexture=Ge}}}}for(let he=0;he<D.length;he++){const Fe=T[he],Me=D[he];Fe!==null&&Me!==void 0&&Me.update(Fe,Z,l||s)}Ye&&Ye(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Je=new xu;Je.setAnimationLoop(je),this.setAnimationLoop=function(q){Ye=q},this.dispose=function(){}}}const di=new xn,qx=new lt;function Yx(i,e){function t(x,h){x.matrixAutoUpdate===!0&&x.updateMatrix(),h.value.copy(x.matrix)}function n(x,h){h.color.getRGB(x.fogColor.value,lu(i)),h.isFog?(x.fogNear.value=h.near,x.fogFar.value=h.far):h.isFogExp2&&(x.fogDensity.value=h.density)}function r(x,h,A,E,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(x,h):h.isMeshToonMaterial?(a(x,h),d(x,h)):h.isMeshPhongMaterial?(a(x,h),u(x,h)):h.isMeshStandardMaterial?(a(x,h),f(x,h),h.isMeshPhysicalMaterial&&m(x,h,w)):h.isMeshMatcapMaterial?(a(x,h),g(x,h)):h.isMeshDepthMaterial?a(x,h):h.isMeshDistanceMaterial?(a(x,h),v(x,h)):h.isMeshNormalMaterial?a(x,h):h.isLineBasicMaterial?(s(x,h),h.isLineDashedMaterial&&o(x,h)):h.isPointsMaterial?c(x,h,A,E):h.isSpriteMaterial?l(x,h):h.isShadowMaterial?(x.color.value.copy(h.color),x.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(x,h){x.opacity.value=h.opacity,h.color&&x.diffuse.value.copy(h.color),h.emissive&&x.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(x.map.value=h.map,t(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,t(h.alphaMap,x.alphaMapTransform)),h.bumpMap&&(x.bumpMap.value=h.bumpMap,t(h.bumpMap,x.bumpMapTransform),x.bumpScale.value=h.bumpScale,h.side===Yt&&(x.bumpScale.value*=-1)),h.normalMap&&(x.normalMap.value=h.normalMap,t(h.normalMap,x.normalMapTransform),x.normalScale.value.copy(h.normalScale),h.side===Yt&&x.normalScale.value.negate()),h.displacementMap&&(x.displacementMap.value=h.displacementMap,t(h.displacementMap,x.displacementMapTransform),x.displacementScale.value=h.displacementScale,x.displacementBias.value=h.displacementBias),h.emissiveMap&&(x.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,x.emissiveMapTransform)),h.specularMap&&(x.specularMap.value=h.specularMap,t(h.specularMap,x.specularMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest);const A=e.get(h),E=A.envMap,w=A.envMapRotation;E&&(x.envMap.value=E,di.copy(w),di.x*=-1,di.y*=-1,di.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),x.envMapRotation.value.setFromMatrix4(qx.makeRotationFromEuler(di)),x.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=h.reflectivity,x.ior.value=h.ior,x.refractionRatio.value=h.refractionRatio),h.lightMap&&(x.lightMap.value=h.lightMap,x.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,x.lightMapTransform)),h.aoMap&&(x.aoMap.value=h.aoMap,x.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,x.aoMapTransform))}function s(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,h.map&&(x.map.value=h.map,t(h.map,x.mapTransform))}function o(x,h){x.dashSize.value=h.dashSize,x.totalSize.value=h.dashSize+h.gapSize,x.scale.value=h.scale}function c(x,h,A,E){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.size.value=h.size*A,x.scale.value=E*.5,h.map&&(x.map.value=h.map,t(h.map,x.uvTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,t(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function l(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.rotation.value=h.rotation,h.map&&(x.map.value=h.map,t(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,t(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function u(x,h){x.specular.value.copy(h.specular),x.shininess.value=Math.max(h.shininess,1e-4)}function d(x,h){h.gradientMap&&(x.gradientMap.value=h.gradientMap)}function f(x,h){x.metalness.value=h.metalness,h.metalnessMap&&(x.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,x.metalnessMapTransform)),x.roughness.value=h.roughness,h.roughnessMap&&(x.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,x.roughnessMapTransform)),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)}function m(x,h,A){x.ior.value=h.ior,h.sheen>0&&(x.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),x.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(x.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,x.sheenColorMapTransform)),h.sheenRoughnessMap&&(x.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,x.sheenRoughnessMapTransform))),h.clearcoat>0&&(x.clearcoat.value=h.clearcoat,x.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(x.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,x.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(x.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Yt&&x.clearcoatNormalScale.value.negate())),h.dispersion>0&&(x.dispersion.value=h.dispersion),h.iridescence>0&&(x.iridescence.value=h.iridescence,x.iridescenceIOR.value=h.iridescenceIOR,x.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(x.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,x.iridescenceMapTransform)),h.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),h.transmission>0&&(x.transmission.value=h.transmission,x.transmissionSamplerMap.value=A.texture,x.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(x.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,x.transmissionMapTransform)),x.thickness.value=h.thickness,h.thicknessMap&&(x.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=h.attenuationDistance,x.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(x.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(x.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=h.specularIntensity,x.specularColor.value.copy(h.specularColor),h.specularColorMap&&(x.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,x.specularColorMapTransform)),h.specularIntensityMap&&(x.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,h){h.matcap&&(x.matcap.value=h.matcap)}function v(x,h){const A=e.get(h).light;x.referencePosition.value.setFromMatrixPosition(A.matrixWorld),x.nearDistance.value=A.shadow.camera.near,x.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $x(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,E){const w=E.program;n.uniformBlockBinding(A,w)}function l(A,E){let w=r[A.id];w===void 0&&(g(A),w=u(A),r[A.id]=w,A.addEventListener("dispose",x));const D=E.program;n.updateUBOMapping(A,D);const T=e.render.frame;a[A.id]!==T&&(f(A),a[A.id]=T)}function u(A){const E=d();A.__bindingPointIndex=E;const w=i.createBuffer(),D=A.__size,T=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,D,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,w),w}function d(){for(let A=0;A<o;A++)if(s.indexOf(A)===-1)return s.push(A),A;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const E=r[A.id],w=A.uniforms,D=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,P=w.length;T<P;T++){const O=Array.isArray(w[T])?w[T]:[w[T]];for(let y=0,S=O.length;y<S;y++){const I=O[y];if(m(I,T,y,D)===!0){const V=I.__offset,W=Array.isArray(I.value)?I.value:[I.value];let K=0;for(let X=0;X<W.length;X++){const H=W[X],J=v(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,V+K,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,K),K+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,E,w,D){const T=A.value,P=E+"_"+w;if(D[P]===void 0)return typeof T=="number"||typeof T=="boolean"?D[P]=T:D[P]=T.clone(),!0;{const O=D[P];if(typeof T=="number"||typeof T=="boolean"){if(O!==T)return D[P]=T,!0}else if(O.equals(T)===!1)return O.copy(T),!0}return!1}function g(A){const E=A.uniforms;let w=0;const D=16;for(let P=0,O=E.length;P<O;P++){const y=Array.isArray(E[P])?E[P]:[E[P]];for(let S=0,I=y.length;S<I;S++){const V=y[S],W=Array.isArray(V.value)?V.value:[V.value];for(let K=0,X=W.length;K<X;K++){const H=W[K],J=v(H),G=w%D,te=G%J.boundary,ie=G+te;w+=te,ie!==0&&D-ie<J.storage&&(w+=D-ie),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=w,w+=J.storage}}}const T=w%D;return T>0&&(w+=D-T),A.__size=w,A.__cache={},this}function v(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pe("WebGLRenderer: Unsupported uniform value type.",A),E}function x(A){const E=A.target;E.removeEventListener("dispose",x);const w=s.indexOf(E.__bindingPointIndex);s.splice(w,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete a[E.id]}function h(){for(const A in r)i.deleteBuffer(r[A]);s=[],r={},a={}}return{bind:c,update:l,dispose:h}}const Kx=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Pn=null;function Zx(){return Pn===null&&(Pn=new Yh(Kx,32,32,Wo,tr),Pn.minFilter=an,Pn.magFilter=an,Pn.wrapS=In,Pn.wrapT=In,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}class jx{constructor(e={}){const{canvas:t=ih(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const g=new Set([qo,Xo,ko]),v=new Set([En,_i,Rr,Cr,Go,Ho]),x=new Uint32Array(4),h=new Int32Array(4);let A=null,E=null;const w=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let P=!1;this._outputColorSpace=Vt;let O=0,y=0,S=null,I=-1,V=null;const W=new at,K=new at;let X=null;const H=new Ie(0);let J=0,G=t.width,te=t.height,ie=1,_e=null,Xe=null;const Ye=new at(0,0,G,te),je=new at(0,0,G,te);let Je=!1;const q=new Qo;let Z=!1,he=!1;const Fe=new lt,Me=new L,Ve=new at,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function ht(){return S===null?ie:1}let R=n;function Ge(M,U){return t.getContext(M,U)}try{const M={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bo}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",pe,!1),R===null){const U="webgl2";if(R=Ge(U,M),R===null)throw Ge(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw M("WebGLRenderer: "+M.message),M}let He,ct,xe,ft,ye,Ue,b,_,F,Y,j,k,ve,ce,be,ge,Q,re,we,Te,de,Le,C,le;function ae(){He=new am(R),He.init(),Le=new Gx(R,He),ct=new Z0(R,He,e,Le),xe=new zx(R,He),ct.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),ft=new cm(R),ye=new Ax,Ue=new Vx(R,He,xe,ye,ct,Le,ft),b=new J0(T),_=new rm(T),F=new hf(R),C=new $0(R,F),Y=new sm(R,F,ft,C),j=new um(R,Y,F,ft),we=new lm(R,ct,Ue),ge=new j0(ye),k=new Tx(T,b,_,He,ct,C,ge),ve=new Yx(T,ye),ce=new Rx,be=new Ux(He),re=new Y0(T,b,_,xe,j,m,c),Q=new Ox(T,j,ct),le=new $x(R,ft,ct,xe),Te=new K0(R,He,ft),de=new om(R,He,ft),ft.programs=k.programs,T.capabilities=ct,T.extensions=He,T.properties=ye,T.renderLists=ce,T.shadowMap=Q,T.state=xe,T.info=ft}ae();const se=new Xx(T,R);this.xr=se,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=He.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=He.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(M){M!==void 0&&(ie=M,this.setSize(G,te,!1))},this.getSize=function(M){return M.set(G,te)},this.setSize=function(M,U,B=!0){if(se.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}G=M,te=U,t.width=Math.floor(M*ie),t.height=Math.floor(U*ie),B===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(G*ie,te*ie).floor()},this.setDrawingBufferSize=function(M,U,B){G=M,te=U,ie=B,t.width=Math.floor(M*B),t.height=Math.floor(U*B),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(W)},this.getViewport=function(M){return M.copy(Ye)},this.setViewport=function(M,U,B,z){M.isVector4?Ye.set(M.x,M.y,M.z,M.w):Ye.set(M,U,B,z),xe.viewport(W.copy(Ye).multiplyScalar(ie).round())},this.getScissor=function(M){return M.copy(je)},this.setScissor=function(M,U,B,z){M.isVector4?je.set(M.x,M.y,M.z,M.w):je.set(M,U,B,z),xe.scissor(K.copy(je).multiplyScalar(ie).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(M){xe.setScissorTest(Je=M)},this.setOpaqueSort=function(M){_e=M},this.setTransparentSort=function(M){Xe=M},this.getClearColor=function(M){return M.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,B=!0){let z=0;if(M){let N=!1;if(S!==null){const ne=S.texture.format;N=g.has(ne)}if(N){const ne=S.texture.type,ue=v.has(ne),me=re.getClearColor(),fe=re.getClearAlpha(),Ae=me.r,Re=me.g,Se=me.b;ue?(x[0]=Ae,x[1]=Re,x[2]=Se,x[3]=fe,R.clearBufferuiv(R.COLOR,0,x)):(h[0]=Ae,h[1]=Re,h[2]=Se,h[3]=fe,R.clearBufferiv(R.COLOR,0,h))}else z|=R.COLOR_BUFFER_BIT}U&&(z|=R.DEPTH_BUFFER_BIT),B&&(z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),re.dispose(),ce.dispose(),be.dispose(),ye.dispose(),b.dispose(),_.dispose(),j.dispose(),C.dispose(),le.dispose(),k.dispose(),se.dispose(),se.removeEventListener("sessionstart",Ec),se.removeEventListener("sessionend",Tc),ri.stop()};function ee(M){M.preventDefault(),Ca("WebGLRenderer: Context Lost."),P=!0}function $(){Ca("WebGLRenderer: Context Restored."),P=!1;const M=ft.autoReset,U=Q.enabled,B=Q.autoUpdate,z=Q.needsUpdate,N=Q.type;ae(),ft.autoReset=M,Q.enabled=U,Q.autoUpdate=B,Q.needsUpdate=z,Q.type=N}function pe(M){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function De(M){const U=M.target;U.removeEventListener("dispose",De),ut(U)}function ut(M){nt(M),ye.remove(M)}function nt(M){const U=ye.get(M).programs;U!==void 0&&(U.forEach(function(B){k.releaseProgram(B)}),M.isShaderMaterial&&k.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,B,z,N,ne){U===null&&(U=Lt);const ue=N.isMesh&&N.matrixWorld.determinant()<0,me=ud(M,U,B,z,N);xe.setMaterial(z,ue);let fe=B.index,Ae=1;if(z.wireframe===!0){if(fe=Y.getWireframeAttribute(B),fe===void 0)return;Ae=2}const Re=B.drawRange,Se=B.attributes.position;let ke=Re.start*Ae,it=(Re.start+Re.count)*Ae;ne!==null&&(ke=Math.max(ke,ne.start*Ae),it=Math.min(it,(ne.start+ne.count)*Ae)),fe!==null?(ke=Math.max(ke,0),it=Math.min(it,fe.count)):Se!=null&&(ke=Math.max(ke,0),it=Math.min(it,Se.count));const _t=it-ke;if(_t<0||_t===1/0)return;C.setup(N,z,me,B,fe);let vt,st=Te;if(fe!==null&&(vt=F.get(fe),st=de,st.setIndex(vt)),N.isMesh)z.wireframe===!0?(xe.setLineWidth(z.wireframeLinewidth*ht()),st.setMode(R.LINES)):st.setMode(R.TRIANGLES);else if(N.isLine){let Ee=z.linewidth;Ee===void 0&&(Ee=1),xe.setLineWidth(Ee*ht()),N.isLineSegments?st.setMode(R.LINES):N.isLineLoop?st.setMode(R.LINE_LOOP):st.setMode(R.LINE_STRIP)}else N.isPoints?st.setMode(R.POINTS):N.isSprite&&st.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Dr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))st.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ee=N._multiDrawStarts,pt=N._multiDrawCounts,$e=N._multiDrawCount,$t=fe?F.get(fe).bytesPerElement:1,Ei=ye.get(z).currentProgram.getUniforms();for(let Kt=0;Kt<$e;Kt++)Ei.setValue(R,"_gl_DrawID",Kt),st.render(Ee[Kt]/$t,pt[Kt])}else if(N.isInstancedMesh)st.renderInstances(ke,_t,N.count);else if(B.isInstancedBufferGeometry){const Ee=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,pt=Math.min(B.instanceCount,Ee);st.renderInstances(ke,_t,pt)}else st.render(ke,_t)};function gn(M,U,B){M.transparent===!0&&M.side===Mt&&M.forceSinglePass===!1?(M.side=Yt,M.needsUpdate=!0,qr(M,U,B),M.side=ni,M.needsUpdate=!0,qr(M,U,B),M.side=Mt):qr(M,U,B)}this.compile=function(M,U,B=null){B===null&&(B=M),E=be.get(B),E.init(U),D.push(E),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(E.pushLight(N),N.castShadow&&E.pushShadow(N))}),M!==B&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(E.pushLight(N),N.castShadow&&E.pushShadow(N))}),E.setupLights();const z=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ne=N.material;if(ne)if(Array.isArray(ne))for(let ue=0;ue<ne.length;ue++){const me=ne[ue];gn(me,B,N),z.add(me)}else gn(ne,B,N),z.add(ne)}),E=D.pop(),z},this.compileAsync=function(M,U,B=null){const z=this.compile(M,U,B);return new Promise(N=>{function ne(){if(z.forEach(function(ue){ye.get(ue).currentProgram.isReady()&&z.delete(ue)}),z.size===0){N(M);return}setTimeout(ne,10)}He.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let cn=null;function ld(M){cn&&cn(M)}function Ec(){ri.stop()}function Tc(){ri.start()}const ri=new xu;ri.setAnimationLoop(ld),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(M){cn=M,se.setAnimationLoop(M),M===null?ri.stop():ri.start()},se.addEventListener("sessionstart",Ec),se.addEventListener("sessionend",Tc),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(U),U=se.getCamera()),M.isScene===!0&&M.onBeforeRender(T,M,U,S),E=be.get(M,D.length),E.init(U),D.push(E),Fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Fe,Sn,U.reversedDepth),he=this.localClippingEnabled,Z=ge.init(this.clippingPlanes,he),A=ce.get(M,w.length),A.init(),w.push(A),se.enabled===!0&&se.isPresenting===!0){const ne=T.xr.getDepthSensingMesh();ne!==null&&ns(ne,U,-1/0,T.sortObjects)}ns(M,U,0,T.sortObjects),A.finish(),T.sortObjects===!0&&A.sort(_e,Xe),ze=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ze&&re.addToRenderList(A,M),this.info.render.frame++,Z===!0&&ge.beginShadows();const B=E.state.shadowsArray;Q.render(B,M,U),Z===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=A.opaque,N=A.transmissive;if(E.setupLights(),U.isArrayCamera){const ne=U.cameras;if(N.length>0)for(let ue=0,me=ne.length;ue<me;ue++){const fe=ne[ue];wc(z,N,M,fe)}ze&&re.render(M);for(let ue=0,me=ne.length;ue<me;ue++){const fe=ne[ue];Ac(A,M,fe,fe.viewport)}}else N.length>0&&wc(z,N,M,U),ze&&re.render(M),Ac(A,M,U);S!==null&&y===0&&(Ue.updateMultisampleRenderTarget(S),Ue.updateRenderTargetMipmap(S)),M.isScene===!0&&M.onAfterRender(T,M,U),C.resetDefaultState(),I=-1,V=null,D.pop(),D.length>0?(E=D[D.length-1],Z===!0&&ge.setGlobalState(T.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?A=w[w.length-1]:A=null};function ns(M,U,B,z){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){z&&Ve.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Fe);const ue=j.update(M),me=M.material;me.visible&&A.push(M,ue,me,B,Ve.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||q.intersectsObject(M))){const ue=j.update(M),me=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ve.copy(M.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ve.copy(ue.boundingSphere.center)),Ve.applyMatrix4(M.matrixWorld).applyMatrix4(Fe)),Array.isArray(me)){const fe=ue.groups;for(let Ae=0,Re=fe.length;Ae<Re;Ae++){const Se=fe[Ae],ke=me[Se.materialIndex];ke&&ke.visible&&A.push(M,ue,ke,B,Ve.z,Se)}}else me.visible&&A.push(M,ue,me,B,Ve.z,null)}}const ne=M.children;for(let ue=0,me=ne.length;ue<me;ue++)ns(ne[ue],U,B,z)}function Ac(M,U,B,z){const{opaque:N,transmissive:ne,transparent:ue}=M;E.setupLightsView(B),Z===!0&&ge.setGlobalState(T.clippingPlanes,B),z&&xe.viewport(W.copy(z)),N.length>0&&Xr(N,U,B),ne.length>0&&Xr(ne,U,B),ue.length>0&&Xr(ue,U,B),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function wc(M,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;E.state.transmissionRenderTarget[z.id]===void 0&&(E.state.transmissionRenderTarget[z.id]=new vi(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?tr:En,minFilter:mi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ne=E.state.transmissionRenderTarget[z.id],ue=z.viewport||W;ne.setSize(ue.z*T.transmissionResolutionScale,ue.w*T.transmissionResolutionScale);const me=T.getRenderTarget(),fe=T.getActiveCubeFace(),Ae=T.getActiveMipmapLevel();T.setRenderTarget(ne),T.getClearColor(H),J=T.getClearAlpha(),J<1&&T.setClearColor(16777215,.5),T.clear(),ze&&re.render(B);const Re=T.toneMapping;T.toneMapping=ei;const Se=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),Z===!0&&ge.setGlobalState(T.clippingPlanes,z),Xr(M,B,z),Ue.updateMultisampleRenderTarget(ne),Ue.updateRenderTargetMipmap(ne),He.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let it=0,_t=U.length;it<_t;it++){const vt=U[it],{object:st,geometry:Ee,material:pt,group:$e}=vt;if(pt.side===Mt&&st.layers.test(z.layers)){const $t=pt.side;pt.side=Yt,pt.needsUpdate=!0,Rc(st,B,z,Ee,pt,$e),pt.side=$t,pt.needsUpdate=!0,ke=!0}}ke===!0&&(Ue.updateMultisampleRenderTarget(ne),Ue.updateRenderTargetMipmap(ne))}T.setRenderTarget(me,fe,Ae),T.setClearColor(H,J),Se!==void 0&&(z.viewport=Se),T.toneMapping=Re}function Xr(M,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ne=M.length;N<ne;N++){const ue=M[N],{object:me,geometry:fe,group:Ae}=ue;let Re=ue.material;Re.allowOverride===!0&&z!==null&&(Re=z),me.layers.test(B.layers)&&Rc(me,U,B,fe,Re,Ae)}}function Rc(M,U,B,z,N,ne){M.onBeforeRender(T,U,B,z,N,ne),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(T,U,B,z,M,ne),N.transparent===!0&&N.side===Mt&&N.forceSinglePass===!1?(N.side=Yt,N.needsUpdate=!0,T.renderBufferDirect(B,U,z,N,M,ne),N.side=ni,N.needsUpdate=!0,T.renderBufferDirect(B,U,z,N,M,ne),N.side=Mt):T.renderBufferDirect(B,U,z,N,M,ne),M.onAfterRender(T,U,B,z,N,ne)}function qr(M,U,B){U.isScene!==!0&&(U=Lt);const z=ye.get(M),N=E.state.lights,ne=E.state.shadowsArray,ue=N.state.version,me=k.getParameters(M,N.state,ne,U,B),fe=k.getProgramCacheKey(me);let Ae=z.programs;z.environment=M.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(M.isMeshStandardMaterial?_:b).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ae===void 0&&(M.addEventListener("dispose",De),Ae=new Map,z.programs=Ae);let Re=Ae.get(fe);if(Re!==void 0){if(z.currentProgram===Re&&z.lightsStateVersion===ue)return Lc(M,me),Re}else me.uniforms=k.getUniforms(M),M.onBeforeCompile(me,T),Re=k.acquireProgram(me,fe),Ae.set(fe,Re),z.uniforms=me.uniforms;const Se=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Se.clippingPlanes=ge.uniform),Lc(M,me),z.needsLights=hd(M),z.lightsStateVersion=ue,z.needsLights&&(Se.ambientLightColor.value=N.state.ambient,Se.lightProbe.value=N.state.probe,Se.directionalLights.value=N.state.directional,Se.directionalLightShadows.value=N.state.directionalShadow,Se.spotLights.value=N.state.spot,Se.spotLightShadows.value=N.state.spotShadow,Se.rectAreaLights.value=N.state.rectArea,Se.ltc_1.value=N.state.rectAreaLTC1,Se.ltc_2.value=N.state.rectAreaLTC2,Se.pointLights.value=N.state.point,Se.pointLightShadows.value=N.state.pointShadow,Se.hemisphereLights.value=N.state.hemi,Se.directionalShadowMap.value=N.state.directionalShadowMap,Se.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Se.spotShadowMap.value=N.state.spotShadowMap,Se.spotLightMatrix.value=N.state.spotLightMatrix,Se.spotLightMap.value=N.state.spotLightMap,Se.pointShadowMap.value=N.state.pointShadowMap,Se.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Re,z.uniformsList=null,Re}function Cc(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Ea.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Lc(M,U){const B=ye.get(M);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function ud(M,U,B,z,N){U.isScene!==!0&&(U=Lt),Ue.resetTextureUnits();const ne=U.fog,ue=z.isMeshStandardMaterial?U.environment:null,me=S===null?T.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Qi,fe=(z.isMeshStandardMaterial?_:b).get(z.envMap||ue),Ae=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Re=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Se=!!B.morphAttributes.position,ke=!!B.morphAttributes.normal,it=!!B.morphAttributes.color;let _t=ei;z.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(_t=T.toneMapping);const vt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,st=vt!==void 0?vt.length:0,Ee=ye.get(z),pt=E.state.lights;if(Z===!0&&(he===!0||M!==V)){const Ot=M===V&&z.id===I;ge.setState(z,M,Ot)}let $e=!1;z.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==pt.state.version||Ee.outputColorSpace!==me||N.isBatchedMesh&&Ee.batching===!1||!N.isBatchedMesh&&Ee.batching===!0||N.isBatchedMesh&&Ee.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ee.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ee.instancing===!1||!N.isInstancedMesh&&Ee.instancing===!0||N.isSkinnedMesh&&Ee.skinning===!1||!N.isSkinnedMesh&&Ee.skinning===!0||N.isInstancedMesh&&Ee.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ee.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ee.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ee.instancingMorph===!1&&N.morphTexture!==null||Ee.envMap!==fe||z.fog===!0&&Ee.fog!==ne||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ge.numPlanes||Ee.numIntersection!==ge.numIntersection)||Ee.vertexAlphas!==Ae||Ee.vertexTangents!==Re||Ee.morphTargets!==Se||Ee.morphNormals!==ke||Ee.morphColors!==it||Ee.toneMapping!==_t||Ee.morphTargetsCount!==st)&&($e=!0):($e=!0,Ee.__version=z.version);let $t=Ee.currentProgram;$e===!0&&($t=qr(z,U,N));let Ei=!1,Kt=!1,lr=!1;const mt=$t.getUniforms(),Xt=Ee.uniforms;if(xe.useProgram($t.program)&&(Ei=!0,Kt=!0,lr=!0),z.id!==I&&(I=z.id,Kt=!0),Ei||V!==M){xe.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),mt.setValue(R,"projectionMatrix",M.projectionMatrix),mt.setValue(R,"viewMatrix",M.matrixWorldInverse);const qt=mt.map.cameraPosition;qt!==void 0&&qt.setValue(R,Me.setFromMatrixPosition(M.matrixWorld)),ct.logarithmicDepthBuffer&&mt.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&mt.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),V!==M&&(V=M,Kt=!0,lr=!0)}if(N.isSkinnedMesh){mt.setOptional(R,N,"bindMatrix"),mt.setOptional(R,N,"bindMatrixInverse");const Ot=N.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),mt.setValue(R,"boneTexture",Ot.boneTexture,Ue))}N.isBatchedMesh&&(mt.setOptional(R,N,"batchingTexture"),mt.setValue(R,"batchingTexture",N._matricesTexture,Ue),mt.setOptional(R,N,"batchingIdTexture"),mt.setValue(R,"batchingIdTexture",N._indirectTexture,Ue),mt.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&mt.setValue(R,"batchingColorTexture",N._colorsTexture,Ue));const tn=B.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&we.update(N,B,$t),(Kt||Ee.receiveShadow!==N.receiveShadow)&&(Ee.receiveShadow=N.receiveShadow,mt.setValue(R,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Xt.envMap.value=fe,Xt.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Xt.envMapIntensity.value=U.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=Zx()),Kt&&(mt.setValue(R,"toneMappingExposure",T.toneMappingExposure),Ee.needsLights&&dd(Xt,lr),ne&&z.fog===!0&&ve.refreshFogUniforms(Xt,ne),ve.refreshMaterialUniforms(Xt,z,ie,te,E.state.transmissionRenderTarget[M.id]),Ea.upload(R,Cc(Ee),Xt,Ue)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ea.upload(R,Cc(Ee),Xt,Ue),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&mt.setValue(R,"center",N.center),mt.setValue(R,"modelViewMatrix",N.modelViewMatrix),mt.setValue(R,"normalMatrix",N.normalMatrix),mt.setValue(R,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ot=z.uniformsGroups;for(let qt=0,is=Ot.length;qt<is;qt++){const ai=Ot[qt];le.update(ai,$t),le.bind(ai,$t)}}return $t}function dd(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function hd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(M,U,B){const z=ye.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),ye.get(M.texture).__webglTexture=U,ye.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const B=ye.get(M);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const fd=R.createFramebuffer();this.setRenderTarget=function(M,U=0,B=0){S=M,O=U,y=B;let z=!0,N=null,ne=!1,ue=!1;if(M){const fe=ye.get(M);if(fe.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(R.FRAMEBUFFER,null),z=!1;else if(fe.__webglFramebuffer===void 0)Ue.setupRenderTarget(M);else if(fe.__hasExternalTextures)Ue.rebindTextures(M,ye.get(M.texture).__webglTexture,ye.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Se=M.depthTexture;if(fe.__boundDepthTexture!==Se){if(Se!==null&&ye.has(Se)&&(M.width!==Se.image.width||M.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(M)}}const Ae=M.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ue=!0);const Re=ye.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?N=Re[U][B]:N=Re[U],ne=!0):M.samples>0&&Ue.useMultisampledRTT(M)===!1?N=ye.get(M).__webglMultisampledFramebuffer:Array.isArray(Re)?N=Re[B]:N=Re,W.copy(M.viewport),K.copy(M.scissor),X=M.scissorTest}else W.copy(Ye).multiplyScalar(ie).floor(),K.copy(je).multiplyScalar(ie).floor(),X=Je;if(B!==0&&(N=fd),xe.bindFramebuffer(R.FRAMEBUFFER,N)&&z&&xe.drawBuffers(M,N),xe.viewport(W),xe.scissor(K),xe.setScissorTest(X),ne){const fe=ye.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,fe.__webglTexture,B)}else if(ue){const fe=U;for(let Ae=0;Ae<M.textures.length;Ae++){const Re=ye.get(M.textures[Ae]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ae,Re.__webglTexture,B,fe)}}else if(M!==null&&B!==0){const fe=ye.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,fe.__webglTexture,B)}I=-1},this.readRenderTargetPixels=function(M,U,B,z,N,ne,ue,me=0){if(!(M&&M.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(fe=fe[ue]),fe){xe.bindFramebuffer(R.FRAMEBUFFER,fe);try{const Ae=M.textures[me],Re=Ae.format,Se=Ae.type;if(!ct.textureFormatReadable(Re)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Se)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-z&&B>=0&&B<=M.height-N&&(M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+me),R.readPixels(U,B,z,N,Le.convert(Re),Le.convert(Se),ne))}finally{const Ae=S!==null?ye.get(S).__webglFramebuffer:null;xe.bindFramebuffer(R.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(M,U,B,z,N,ne,ue,me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(fe=fe[ue]),fe)if(U>=0&&U<=M.width-z&&B>=0&&B<=M.height-N){xe.bindFramebuffer(R.FRAMEBUFFER,fe);const Ae=M.textures[me],Re=Ae.format,Se=Ae.type;if(!ct.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ke),R.bufferData(R.PIXEL_PACK_BUFFER,ne.byteLength,R.STREAM_READ),M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+me),R.readPixels(U,B,z,N,Le.convert(Re),Le.convert(Se),0);const it=S!==null?ye.get(S).__webglFramebuffer:null;xe.bindFramebuffer(R.FRAMEBUFFER,it);const _t=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await rh(R,_t,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ke),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ne),R.deleteBuffer(ke),R.deleteSync(_t),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,B=0){const z=Math.pow(2,-B),N=Math.floor(M.image.width*z),ne=Math.floor(M.image.height*z),ue=U!==null?U.x:0,me=U!==null?U.y:0;Ue.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,ue,me,N,ne),xe.unbindTexture()};const pd=R.createFramebuffer(),md=R.createFramebuffer();this.copyTextureToTexture=function(M,U,B=null,z=null,N=0,ne=null){ne===null&&(N!==0?(Dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=N,N=0):ne=0);let ue,me,fe,Ae,Re,Se,ke,it,_t;const vt=M.isCompressedTexture?M.mipmaps[ne]:M.image;if(B!==null)ue=B.max.x-B.min.x,me=B.max.y-B.min.y,fe=B.isBox3?B.max.z-B.min.z:1,Ae=B.min.x,Re=B.min.y,Se=B.isBox3?B.min.z:0;else{const tn=Math.pow(2,-N);ue=Math.floor(vt.width*tn),me=Math.floor(vt.height*tn),M.isDataArrayTexture?fe=vt.depth:M.isData3DTexture?fe=Math.floor(vt.depth*tn):fe=1,Ae=0,Re=0,Se=0}z!==null?(ke=z.x,it=z.y,_t=z.z):(ke=0,it=0,_t=0);const st=Le.convert(U.format),Ee=Le.convert(U.type);let pt;U.isData3DTexture?(Ue.setTexture3D(U,0),pt=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ue.setTexture2DArray(U,0),pt=R.TEXTURE_2D_ARRAY):(Ue.setTexture2D(U,0),pt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const $e=R.getParameter(R.UNPACK_ROW_LENGTH),$t=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ei=R.getParameter(R.UNPACK_SKIP_PIXELS),Kt=R.getParameter(R.UNPACK_SKIP_ROWS),lr=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,vt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,vt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ae),R.pixelStorei(R.UNPACK_SKIP_ROWS,Re),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Se);const mt=M.isDataArrayTexture||M.isData3DTexture,Xt=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const tn=ye.get(M),Ot=ye.get(U),qt=ye.get(tn.__renderTarget),is=ye.get(Ot.__renderTarget);xe.bindFramebuffer(R.READ_FRAMEBUFFER,qt.__webglFramebuffer),xe.bindFramebuffer(R.DRAW_FRAMEBUFFER,is.__webglFramebuffer);for(let ai=0;ai<fe;ai++)mt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.get(M).__webglTexture,N,Se+ai),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.get(U).__webglTexture,ne,_t+ai)),R.blitFramebuffer(Ae,Re,ue,me,ke,it,ue,me,R.DEPTH_BUFFER_BIT,R.NEAREST);xe.bindFramebuffer(R.READ_FRAMEBUFFER,null),xe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||ye.has(M)){const tn=ye.get(M),Ot=ye.get(U);xe.bindFramebuffer(R.READ_FRAMEBUFFER,pd),xe.bindFramebuffer(R.DRAW_FRAMEBUFFER,md);for(let qt=0;qt<fe;qt++)mt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,tn.__webglTexture,N,Se+qt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,tn.__webglTexture,N),Xt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ot.__webglTexture,ne,_t+qt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ot.__webglTexture,ne),N!==0?R.blitFramebuffer(Ae,Re,ue,me,ke,it,ue,me,R.COLOR_BUFFER_BIT,R.NEAREST):Xt?R.copyTexSubImage3D(pt,ne,ke,it,_t+qt,Ae,Re,ue,me):R.copyTexSubImage2D(pt,ne,ke,it,Ae,Re,ue,me);xe.bindFramebuffer(R.READ_FRAMEBUFFER,null),xe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Xt?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(pt,ne,ke,it,_t,ue,me,fe,st,Ee,vt.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(pt,ne,ke,it,_t,ue,me,fe,st,vt.data):R.texSubImage3D(pt,ne,ke,it,_t,ue,me,fe,st,Ee,vt):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ne,ke,it,ue,me,st,Ee,vt.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ne,ke,it,vt.width,vt.height,st,vt.data):R.texSubImage2D(R.TEXTURE_2D,ne,ke,it,ue,me,st,Ee,vt);R.pixelStorei(R.UNPACK_ROW_LENGTH,$e),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,$t),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ei),R.pixelStorei(R.UNPACK_SKIP_ROWS,Kt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,lr),ne===0&&U.generateMipmaps&&R.generateMipmap(pt),xe.unbindTexture()},this.initRenderTarget=function(M){ye.get(M).__webglFramebuffer===void 0&&Ue.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ue.setTextureCube(M,0):M.isData3DTexture?Ue.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ue.setTexture2DArray(M,0):Ue.setTexture2D(M,0),xe.unbindTexture()},this.resetState=function(){O=0,y=0,S=null,xe.reset(),C.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}window.THREE={Box3:ir,BufferAttribute:kt,BufferGeometry:Et,CanvasTexture:$a,CircleGeometry:nc,DoubleSide:Mt,Group:Ht,Mesh:tt,MeshBasicMaterial:St,MeshPhongMaterial:Qh,PlaneGeometry:Hr,Points:tc,PointsMaterial:Ya,TorusGeometry:ar,Vector3:L};const Jx=document.querySelector("#game-canvas"),Qx=document.querySelector("#danger-vignette"),eg=document.querySelector("#days"),tg=document.querySelector("#health"),ng=document.querySelector("#health-fill"),Su=document.querySelector(".health-bar"),ig=document.querySelector("#run-mode-readout"),rg=document.querySelector("#level-row"),ag=document.querySelector("#level-readout"),sg=document.querySelector("#next-level-row"),og=document.querySelector("#next-level-readout"),Ol=document.querySelector("#high-score"),cg=document.querySelector("#warnings"),lg=document.querySelector("#heat-meter"),ug=document.querySelector("#cold-meter"),dg=document.querySelector("#chaos-meter"),ic=document.querySelector("#signal-meter"),Fs=document.querySelector("#hint-line"),Tr=document.querySelector("#toast-line"),Yi=document.querySelector("#level-banner"),hg=document.querySelector("#level-banner-title"),fg=document.querySelector("#level-banner-subtitle"),pg=document.querySelector("#level-banner-name"),yu=document.querySelector("#mode-readout"),bu=document.querySelector("#mode-name"),Eu=document.querySelector("#mode-effect"),mg=document.querySelector("#focus-status"),Ua=document.querySelector("#death-screen"),xg=document.querySelector("#death-title"),gg=document.querySelector("#death-stats"),_g=document.querySelector("#death-message"),vg=document.querySelector("#death-high-score"),Mg=document.querySelector("#restart-button"),Sg=document.querySelector("#next-button"),yg=document.querySelector("#share-button"),Ur=document.querySelector("#share-status"),Si=document.querySelector("#pause-menu"),bg=document.querySelector("#resume-button"),Eg=document.querySelector("#pause-restart-button"),rc=document.querySelector("#mute-button"),Tg=document.querySelector("#pause-next-button"),Ag=document.querySelector("#pause-copy-button"),wg=document.querySelector("#controls-button"),ac=document.querySelector("#controls-screen"),Rg=document.querySelector("#portal-badge"),Sr=document.querySelector("#run-mode-toggle"),yi=document.querySelector("#info-screen"),bi=document.querySelector("#story-screen"),sc=document.querySelector("#leaderboard-screen"),Os=document.querySelector("#leaderboard-content"),Cg=document.querySelector("#publish-button"),oc=document.querySelector("#publish-form"),Na=document.querySelector("#publish-name-input"),Lg=document.querySelector("#publish-confirm-button"),Tu=document.querySelector("#tutorial-box"),Pg=document.querySelector("#tutorial-title"),Dg=document.querySelector("#tutorial-text"),Ig=document.querySelector("#tutorial-got-it"),Ug=document.querySelector("#tutorial-skip"),Ng=document.querySelector("#info-tutorial-button"),Fg=document.querySelector("#info-story-button"),Au=[...document.querySelectorAll("[data-mode]")],Og=[...document.querySelectorAll("[data-action]")],Mi=new jx({canvas:Jx,antialias:!0,alpha:!1,powerPreference:"high-performance"});Mi.setPixelRatio(Math.min(window.devicePixelRatio,2));Mi.setClearColor(131850,1);const Ft=new Xh;Ft.fog=new jo(131850,.018);const yn=new Jt(55,1,.1,220);yn.position.set(0,0,56);const Bl=new uf,Bs=new Ne,Bg=new Zn(new L(0,0,1),0),Kn=new L,zg=new lf,Vg=1.5,Gg=.033,Io=2.8,Hg=3,kg=1.15,Wg=8,Xg=3,ja=100,qg=28,zl=.6,Yg=.999,$g=.9994,Kg=.9,Vl=1.28,Zg=2.65,jg=1.15,Jg=1.5,Qg=30,e_=23,wu=4,Ru="three-suns-tutorial-complete",Cu="three-suns-run-mode",Lu="three-suns-highest-level",Pu="three-suns-leaderboard",t_=24,n_=15,ki=5,Gl=3,Du="https://eakybrckrrtvmgycgsey.supabase.co",Hl="sb_publishable_bifkfp00l6aTu22tvWXYpg_oVoC1Jjb",Iu={apikey:Hl,Authorization:`Bearer ${Hl}`,"Content-Type":"application/json"},i_=2,cc=2.8,lc=.9,uc="threesuns_volume",Nr=new URLSearchParams(window.location.search),dc=Nr.get("portal")==="true"||Nr.get("portal")==="1",Uu=["username","color","speed","hp","team","avatar_url","speed_x","speed_y","speed_z","rotation_x","rotation_y","rotation_z"],zn=Object.fromEntries(Uu.flatMap(i=>Nr.has(i)?[[i,Nr.get(i)]]:[])),Uo={x:-24,y:12,z:0},r_={x:90,y:-50,z:0},Nu=new L(18.4,-12.2,0),Ut={shield:{label:"SHIELD",toast:"SHIELD MODE",effect:"SHIELD: red heat aura resistance ↑ cold/chaos risk modest ↑",heatDamage:.25,heatBuildup:.3,coldDamage:1.12,coldBuildup:1.1,chaosDamage:1.08,chaosBuildup:1.08,regen:1,anchorCost:1,anchorPull:1,color:16765802},hibernation:{label:"SLEEP",toast:"SLEEP MODE",effect:"SLEEP: blue cold aura resistance ↑ signal regen ↑ chaos risk modest ↑",heatDamage:1.08,heatBuildup:1.08,coldDamage:.25,coldBuildup:.3,chaosDamage:1.12,chaosBuildup:1.12,regen:1.35,anchorCost:1,anchorPull:1,color:10414079},observatory:{label:"OBSERVE",toast:"OBSERVATORY MODE",effect:"OBSERVE: gamma chaos aura resistance ↑ clearer omens ↑ anchor cost ↓",heatDamage:1.08,heatBuildup:1.08,coldDamage:1.08,coldBuildup:1.08,chaosDamage:.5,chaosBuildup:.55,regen:1,anchorCost:.65,anchorPull:1.14,color:16777215}},hc=[{level:1,day:20,name:"FIRST DAWN"},{level:2,day:40,name:"ORBITAL APPRENTICE"},{level:3,day:60,name:"STELLAR NAVIGATOR"},{level:4,day:90,name:"GRAVITY SAINT"},{level:5,day:120,name:"LAST WORLD KEEPER"}],kl=["Click/tap = gravity anchor","Suns kill on contact, auras drain health","Switch modes: Shield heat, Sleep cold, Observe chaos","Space / FOCUS slows the dawn","Stay warm, but do not touch the suns"];zn.username&&(window.selfUsername=zn.username);zn.speed&&(window.currentSpeed=Number.parseFloat(zn.speed)||void 0);const pn={red:new Ie(16724559),blue:new Ie(12185599),gold:new Ie(16761933),violet:new Ie(11761663)};let p,Ce,xt=null,Ze=null,ot=null,Gt=localStorage.getItem("threesuns_muted")==="true",_n=!0,bn=localStorage.getItem(Cu)==="level"?"level":"survival",on={music:1,sfx:1};try{const i=JSON.parse(localStorage.getItem(uc)||"{}");typeof i.music=="number"&&(on.music=i.music),typeof i.sfx=="number"&&(on.sfx=i.sfx)}catch{}const yt={active:!1,index:0,timer:0},fc=[{title:"THIS IS YOUR WORLD",text:"Keep it alive.",highlight:"planet"},{title:"READ THE SUNS",text:"Touching a sun kills instantly. Auras damage health.",highlight:"sun"},{title:"PLACE AN ANCHOR",text:"Click or tap to place a gravity anchor. Anchors bend your path.",highlight:"planet"},{title:"ANCHORS COST SIGNAL",text:"Signal limits anchor spam and refills while you fly well.",highlight:"signal"},{title:"SWITCH MODES",text:"Shield protects from red heat aura. Sleep protects from blue cold aura. Observe protects from yellow/gamma chaos aura.",highlight:"modes"},{title:"FOCUS SLOWS TIME",text:"Press Space or tap FOCUS to bend a dangerous moment.",highlight:"focus"},{title:"DO NOT CAMP THE VOID",text:"Stay close enough for warmth, far enough to survive. The outer dark will freeze you if you camp outside.",highlight:"sun"},{title:"SURVIVE THE DAWN",text:"Survival Mode is endless. Level Mode rewards day milestones. Watch for comet warnings.",highlight:"planet"}];function Fu(i,e=!0){const n=document.createElement("canvas");n.width=128,n.height=128;const r=n.getContext("2d"),a=r.createRadialGradient(128/2,128/2,2,128/2,128/2,128/2);a.addColorStop(0,i),a.addColorStop(e?.36:.55,i),a.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=a,r.fillRect(0,0,128,128);const s=new $a(n);return s.colorSpace=Vt,s}function Ou(i="surface"){const t=document.createElement("canvas");t.width=256,t.height=256;const n=t.getContext("2d");if(n.fillStyle=i==="clouds"?"rgba(0,0,0,0)":"#123f73",n.fillRect(0,0,256,256),i==="clouds")for(let a=0;a<120;a+=1){const s=Math.random()*256,o=Math.random()*256,c=18+Math.random()*46,l=2+Math.random()*7;n.fillStyle=`rgba(255,255,255,${.05+Math.random()*.11})`,n.beginPath(),n.ellipse(s,o,c,l,Math.random()*Math.PI,0,Math.PI*2),n.fill()}else{const a=n.createLinearGradient(0,0,256,256);a.addColorStop(0,"#1b6fa8"),a.addColorStop(.55,"#113c76"),a.addColorStop(1,"#081a3f"),n.fillStyle=a,n.fillRect(0,0,256,256);for(let s=0;s<34;s+=1){const o=Math.random()*256,c=Math.random()*256,l=10+Math.random()*24;n.fillStyle=Math.random()>.35?"#2d7742":"#8b7045",n.beginPath();for(let u=0;u<Math.PI*2;u+=Math.PI/8){const d=l*(.62+Math.random()*.68),f=o+Math.cos(u)*d,m=c+Math.sin(u)*d*(.45+Math.random()*.6);u===0?n.moveTo(f,m):n.lineTo(f,m)}n.closePath(),n.globalAlpha=.58,n.fill(),n.globalAlpha=1}for(let s=0;s<80;s+=1)n.fillStyle="rgba(255,226,142,0.55)",n.fillRect(Math.random()*256,Math.random()*256,1,1)}const r=new $a(t);return r.colorSpace=Vt,r}const a_=Fu("rgba(255,255,255,1)"),s_=Ou("surface"),o_=Ou("clouds");function Tn(i,e,t=1){const n=new qa({map:a_,color:i,transparent:!0,opacity:t,blending:dt,depthWrite:!1}),r=new Jo(n);return r.scale.set(e,e,1),r}function c_(i,e="#d7c4ff"){const t=document.createElement("canvas");t.width=512,t.height=128;const n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.fillStyle=e,n.font="700 34px Arial, sans-serif",n.textAlign="center",n.shadowColor="rgba(179, 119, 255, 0.8)",n.shadowBlur=18,n.fillText(i,t.width/2,72);const r=new $a(t);r.colorSpace=Vt;const a=new qa({map:r,transparent:!0,opacity:.72,depthWrite:!1}),s=new Jo(a);return s.scale.set(8,2,1),s}function l_(i){const{id:e,name:t,color:n,size:r,phase:a,heat:s,pull:o,deathCause:c,dangerType:l}=i,u=new Ht,d=new tt(new rr(r,32,24),new St({color:n})),f=Tn(n,r*5.8,.43),m=new af(n,2.55,68,1.45);u.add(f,d,m);const g=[],v=new St({color:n,transparent:!0,opacity:.22,blending:dt,side:Mt,depthWrite:!1});for(let P=0;P<3;P+=1){const O=new tt(new Wt(1,1.025,96),v.clone());O.userData.offset=P/3,u.add(O),g.push(O)}const x=r,h=x+zl*.72,A=x*2.35,E=x*4+zl,w=Tn(n,E*2,.075);u.add(w);const D=new tt(new Wt(h-.06,h,72),new St({color:n,transparent:!0,opacity:.18,blending:dt,side:Mt,depthWrite:!1})),T=new tt(new Wt(E-.06,E,72),new St({color:n,transparent:!0,opacity:.09,blending:dt,side:Mt,depthWrite:!1}));return u.add(D,T),Ft.add(u),{id:e,name:t,color:n,size:r,visualRadius:x,killRadius:h,dangerRadius:A,auraRadius:E,phase:a,heat:s,pull:o,deathCause:c,dangerType:l,group:u,core:d,glow:f,auraGlow:w,rings:g,killRing:D,dangerRing:T,pos:new L,vel:new L,worldPos:new L,lastDistance:1/0}}function Bu(i,e,t){const n=new Float32Array(i*3),r=new Float32Array(i*3),a=new Et;a.setAttribute("position",new kt(n,3)),a.setAttribute("color",new kt(r,3));const s=new Ya({size:t,vertexColors:!0,transparent:!0,opacity:.72,blending:dt,depthWrite:!1}),o=new tc(a,s);return Ft.add(o),{capacity:i,index:0,color:new Ie(e),geometry:a,positions:n,colorsArray:r,points:o}}function No(i,e,t=1){const n=i.index%i.capacity;i.positions[n*3]=e.x,i.positions[n*3+1]=e.y,i.positions[n*3+2]=e.z;const r=qe.clamp(t,.08,1);i.colorsArray[n*3]=i.color.r*r,i.colorsArray[n*3+1]=i.color.g*r,i.colorsArray[n*3+2]=i.color.b*r,i.index+=1,i.geometry.attributes.position.needsUpdate=!0,i.geometry.attributes.color.needsUpdate=!0}function Wl(i,e){for(let t=0;t<i.colorsArray.length;t+=1)i.colorsArray[t]*=e;i.geometry.attributes.color.needsUpdate=!0}function zs(i,e,t,n,r=112,a=70){const s=new tc(new Et,new Ya({color:14277887,size:e,transparent:!0,opacity:t,depthWrite:!1})),o=new Float32Array(i*3);for(let c=0;c<i;c+=1)o[c*3]=(Math.random()-.5)*r,o[c*3+1]=(Math.random()-.5)*a,o[c*3+2]=n-Math.random()*22;return s.geometry.setAttribute("position",new kt(o,3)),Ft.add(s),s}const zu=[zs(320,.045,.54,-46),zs(240,.075,.44,-34,96,62),zs(90,.12,.34,-24,74,48)],u_=Fu("rgba(119,68,180,1)"),Ja=new Ht;for(let i=0;i<3;i+=1){const e=new Jo(new qa({map:u_,color:i===1?2578538:4991602,transparent:!0,opacity:i===2?.04:.065,blending:dt,depthWrite:!1}));e.position.set((i-1)*22,i===1?-9:7,-42-i*4),e.scale.set(42+i*16,24+i*7,1),Ja.add(e)}Ft.add(Ja);const d_=new of(7239082,.34);Ft.add(d_);const h_=[{id:"alpha",name:"red",color:pn.red,size:1.95,phase:.2,heat:1.22,pull:13.2,deathCause:"burned",dangerType:"heat"},{id:"beta",name:"blue",color:pn.blue,size:1.55,phase:2.5,heat:.72,pull:10.8,deathCause:"frozen",dangerType:"cold"},{id:"gamma",name:"gold",color:pn.gold,size:1.78,phase:4.1,heat:1,pull:13.8,deathCause:"scattered",dangerType:"chaos"}],At=h_.map(l_),sn=new Ht,Fr=new tt(new rr(.58,32,18),new Jh({map:s_,color:16777215,roughness:.72,metalness:.02,emissive:464425,emissiveIntensity:.46})),Vu=new tt(new rr(.596,32,18),new St({map:o_,transparent:!0,opacity:.42,blending:dt,depthWrite:!1})),ti=new tt(new ar(.86,.024,8,96),new St({color:10485716,transparent:!0,opacity:.85,blending:dt}));ti.rotation.x=Math.PI/2.45;const pc=Tn(9240534,2.8,.22),Fo=Tn(8900607,2.15,.18),mc=new tt(new ar(1.04,.018,8,96),new St({color:16765802,transparent:!0,opacity:0,blending:dt}));mc.rotation.x=Math.PI/2.2;const Gu=Tn(10414079,2.35,0),Fa=new tt(new Wt(1.08,1.1,72,1,0,Math.PI*1.35),new St({color:16777215,transparent:!0,opacity:0,blending:dt,side:Mt}));Fa.rotation.x=Math.PI/2.55;const xc=new tt(new Wt(.64,.67,9),new St({color:16739118,transparent:!0,opacity:0,blending:dt,wireframe:!0}));xc.rotation.x=Math.PI/2.7;const Hu=Tn(10414079,2,0),Wi=new tt(new ar(1.16,.012,8,96),new St({color:14203135,transparent:!0,opacity:0,blending:dt}));Wi.rotation.x=Math.PI/2.05;sn.add(Fr,Vu,ti,pc,Fo,mc,Gu,Fa,xc,Hu,Wi);Ft.add(sn);if(zn.color)try{const i=new Ie(zn.color);Fr.material.color.lerp(i,.45),ti.material.color.copy(i),pc.material.color.copy(i)}catch{}const f_=new Ht;Ft.add(f_);const Vn=new Ht;Ft.add(Vn);const en=new Ht;Ft.add(en);const gc=new Ht;Ft.add(gc);const _c=new Ht;_c.position.copy(Nu);const Oa=new tt(new Wt(.55,.62,48),new St({color:5898175,transparent:!0,opacity:.34,blending:dt,side:Mt}));Oa.rotation.x=Math.PI/2;const vc=c_("VIBE JAM","#9fffd4");vc.position.set(0,1.1,0);vc.scale.set(3.2,.8,1);_c.add(Oa,vc,Tn(5898175,1.45,.12));Ft.add(_c);const gi=[],$i=[],Ki=[],xi=[],Mc=[],Mn=new tt(new Wt(.9,1.02,96),new St({color:16777215,transparent:!0,opacity:0,blending:dt,side:Mt,depthWrite:!1}));Mn.rotation.x=Math.PI/2;Mn.visible=!1;en.add(Mn);for(let i=0;i<3;i+=1){const e=new tt(new Wt(.62,.65,96),new St({color:pn.violet,transparent:!0,opacity:0,blending:dt,side:Mt}));e.rotation.x=Math.PI/2,e.visible=!1,en.add(e),Mc.push({ring:e,age:99,delay:i*.15})}const Qa=At.map(i=>Bu(170,i.color,.12)),Ar=Bu(220,10485716,.1);function p_(i){const e=new Ht;e.position.copy(i);const t=new tt(new Wt(.42,.46,48),new St({color:pn.violet,transparent:!0,opacity:.45,blending:dt,side:Mt})),n=new tt(new Wt(.86,.88,48),new St({color:pn.violet,transparent:!0,opacity:.26,blending:dt,side:Mt})),r=new jh(new Et().setFromPoints([new L(-1.02,0,0),new L(-.55,0,0),new L(.55,0,0),new L(1.02,0,0),new L(0,-1.02,0),new L(0,-.55,0),new L(0,.55,0),new L(0,1.02,0)]),new Pa({color:pn.violet,transparent:!0,opacity:.42,blending:dt}));t.rotation.x=Math.PI/2,n.rotation.x=Math.PI/2;const a=new ec(new Et().setFromPoints([i,i]),new Pa({color:pn.violet,transparent:!0,opacity:.45,blending:dt}));return e.add(t,n,r,Tn(8208895,1.8,.12)),Vn.add(e),Vn.add(a),{pos:i.clone(),age:0,group:e,well:t,halo:n,arms:r,line:a}}function kr(){if(Ce||!window.AudioContext&&!window.webkitAudioContext)return Ce;const i=window.AudioContext||window.webkitAudioContext;try{const e=new i,t=e.createDynamicsCompressor();t.threshold.value=-6,t.knee.value=3,t.ratio.value=20,t.attack.value=.001,t.release.value=.1,t.connect(e.destination);const n=e.createGain();n.gain.value=1,n.connect(t);const r=e.createGain();r.gain.value=Gt?0:on.music*cc,r.connect(n);const a=e.createGain();a.gain.value=Gt?0:on.sfx*lc,a.connect(n),Ce={ctx:e,master:n,musicGain:r,sfxGain:a}}catch{Ce=null}return Ce}function jn(i,e=.09,t="sine",n=.8){if(p?.muted)return;const r=kr();if(!r)return;r.ctx.state==="suspended"&&r.ctx.resume().catch(()=>{});const a=r.ctx.createOscillator(),s=r.ctx.createGain();a.type=t,a.frequency.setValueAtTime(i,r.ctx.currentTime),a.frequency.exponentialRampToValueAtTime(Math.max(40,i*.55),r.ctx.currentTime+e),s.gain.setValueAtTime(0,r.ctx.currentTime),s.gain.linearRampToValueAtTime(n,r.ctx.currentTime+.012),s.gain.exponentialRampToValueAtTime(.001,r.ctx.currentTime+e),a.connect(s).connect(r.sfxGain),a.start(),a.stop(r.ctx.currentTime+e+.02)}function Gn(i){i==="anchor"?jn(440,.11,"triangle",.75):i==="danger"?jn(210,.16,"square",.42):i==="nearMiss"?jn(760,.12,"sine",.55):i==="death"?(jn(p?.deathCause==="frozen"?148:118,.44,"sine",.28),window.setTimeout(S_,60)):i==="highScore"&&(jn(520,.08,"triangle",.45),window.setTimeout(()=>jn(780,.12,"sine",.42),90))}function m_(){if(xt||!Ce)return;const i=Ce.ctx,e=i.createGain();e.gain.value=0,e.connect(Ce.musicGain);const t=i.createBiquadFilter();t.type="lowpass",t.frequency.value=1800,t.Q.value=.7,t.connect(e);const n=i.createGain();n.gain.value=0,n.connect(t);const r=i.createOscillator();r.type="sine",r.frequency.value=55,r.start(),r.connect(n);const a=i.createOscillator();a.type="triangle",a.frequency.value=82,a.start(),a.connect(n);const s=i.createOscillator();s.type="sine",s.frequency.value=.07,s.start();const o=i.createGain();o.gain.value=2.5,s.connect(o),o.connect(r.frequency),o.connect(a.frequency);const c=i.createGain();c.gain.value=0,c.connect(t);const l=i.createOscillator();l.type="sine",l.frequency.value=220,l.start(),l.connect(c);const u=i.createDelay(.5);u.delayTime.value=.26;const d=i.createGain();d.gain.value=.34,n.connect(u),u.connect(d),d.connect(u);const f=i.createGain();f.gain.value=.18,u.connect(f),f.connect(e);const m=i.createGain();m.gain.value=0,m.connect(e);const g=i.createOscillator();g.type="sawtooth",g.frequency.value=38,g.start(),g.connect(m);const v=i.createGain();v.gain.value=0,v.connect(e);const x=i.createOscillator();x.type="sine",x.frequency.value=62,x.start(),x.connect(v),xt={musicMaster:e,filter:t,droneGain:n,drone1:r,drone2:a,lfo:s,lfoGain:o,harmGain:c,harm:l,delayOut:f,collapseGain:m,collapseOsc:g,heartGain:v,heartOsc:x,lastHeartbeat:0},Gt||e.gain.setTargetAtTime(.9,i.currentTime+.1,1.8)}function x_(){if(!Ce)return;if(!xt){m_();return}const i=Ce.ctx;i.state==="suspended"&&i.resume().catch(()=>{});const e=i.currentTime,t=p?.lastThreat||{proximityIntensity:0},n=qe.clamp(t.proximityIntensity||0,0,1),r=(p?.focus||0)>0,a=p?.dead||!1,s=a?.04:.9+n*1.1;xt.musicMaster.gain.setTargetAtTime(s,e,a?.8:.6);const o=r?500+n*300:1400+n*1600;if(xt.filter.frequency.setTargetAtTime(o,e,.25),xt.lfo.frequency.setTargetAtTime(.05+n*.28,e,.8),xt.lfoGain.gain.setTargetAtTime(2+n*9,e,.5),xt.harmGain.gain.setTargetAtTime(r?.08:n*.55,e,.7),p){const c=(r?165:220)+Math.sin(p.time*.09)*12;xt.harm.frequency.setTargetAtTime(c,e,2)}if(xt.collapseGain.gain.setTargetAtTime(0,e,.4),a?M_():(ot||Wu(),C_()),!a&&n>.6&&p){const c=.55-n*.28;p.time-xt.lastHeartbeat>c&&(xt.lastHeartbeat=p.time,xt.heartGain.gain.cancelScheduledValues(e),xt.heartGain.gain.setValueAtTime(0,e),xt.heartGain.gain.linearRampToValueAtTime(.55*n,e+.025),xt.heartGain.gain.exponentialRampToValueAtTime(.001,e+.2))}else n<=.6&&xt.heartGain.gain.setTargetAtTime(0,e,.15)}const Xl=[220,261.63,329.63,392,329.63,261.63],g_=.62;function __(){if(Ze||!Ce)return;const i=Ce.ctx,e=i.createGain();e.gain.value=0;try{const s=i.createStereoPanner();e.connect(s),s.connect(Ce.musicGain),Ze={master:e,panner:s}}catch{e.connect(Ce.musicGain),Ze={master:e,panner:null}}const t=i.createBiquadFilter();t.type="lowpass",t.frequency.value=1100,t.Q.value=.5,t.connect(e);const n=i.createDelay(.8);n.delayTime.value=.33;const r=i.createGain();r.gain.value=.25,n.connect(r),r.connect(n);const a=i.createGain();a.gain.value=.18,n.connect(a),a.connect(e),Object.assign(Ze,{filter:t,delay:n,fb:r,delayOut:a,nextNoteAt:0,noteIndex:0})}function v_(i){if(!Ce||!Ze)return;const e=Ce.ctx,t=Ze.noteIndex%Xl.length,n=Xl[t],r=t===0,a=e.createOscillator();a.type="triangle",a.frequency.value=n;const s=e.createGain();if(s.gain.setValueAtTime(0,i),s.gain.linearRampToValueAtTime(r?.52:.36,i+.038),s.gain.exponentialRampToValueAtTime(.001,i+.52),a.connect(s),s.connect(Ze.filter),s.connect(Ze.delay),a.start(i),a.stop(i+.55),r){const o=e.createOscillator();o.type="sine",o.frequency.value=n/2;const c=e.createGain();c.gain.setValueAtTime(0,i),c.gain.linearRampToValueAtTime(.2,i+.06),c.gain.exponentialRampToValueAtTime(.001,i+.72),o.connect(c),c.connect(Ze.filter),o.start(i),o.stop(i+.75);try{const l=e.createBuffer(1,Math.floor(e.sampleRate*.018),e.sampleRate),u=l.getChannelData(0);for(let g=0;g<u.length;g++)u[g]=(Math.random()*2-1)*(1-g/u.length);const d=e.createBufferSource();d.buffer=l;const f=e.createBiquadFilter();f.type="bandpass",f.frequency.value=820,f.Q.value=.9;const m=e.createGain();m.gain.value=.07,d.connect(f),f.connect(m),m.connect(Ze.master),d.start(i)}catch{}}Ze.noteIndex+=1}function M_(){if(!Ze||!Ce)return;const e=Ce.ctx.currentTime;for(Ze.nextNoteAt<e&&(Ze.nextNoteAt=e);Ze.nextNoteAt<e+.12;)v_(Ze.nextNoteAt),Ze.nextNoteAt+=g_;Ze.panner&&Ze.panner.pan.setTargetAtTime(Math.sin(e*.21)*.28,e,.9)}function S_(){if(kr(),!Ce||(L_(),__(),!Ze))return;const i=Ce.ctx.currentTime;Ze.nextNoteAt=i+.15,Ze.noteIndex=0,Ze.master.gain.cancelScheduledValues(i),Ze.master.gain.setValueAtTime(Ze.master.gain.value,i),Ze.master.gain.linearRampToValueAtTime(.55,i+.5)}function y_(){if(!Ze||!Ce)return;const i=Ce.ctx.currentTime;Ze.master.gain.cancelScheduledValues(i),Ze.master.gain.setValueAtTime(Ze.master.gain.value,i),Ze.master.gain.linearRampToValueAtTime(0,i+.3)}const ku=60/75,yr=ku/4,b_=ku*4,E_=yr*.13,T_=[[110,82.41],[87.31,130.81],[130.81,98],[98,146.83]],A_=[[220,261.63,329.63,392],[261.63,329.63,392,493.88]];function w_(){if(ot||!Ce)return;const i=Ce.ctx,e=i.createGain();e.gain.value=0;const t=i.createBiquadFilter();t.type="lowpass",t.frequency.value=9e3,t.Q.value=.4,t.connect(e),e.connect(Ce.musicGain);const n=i.createDelay(.6);n.delayTime.value=.22;const r=i.createGain();r.gain.value=.22,n.connect(r),r.connect(n);const a=i.createGain();a.gain.value=.14,n.connect(a),a.connect(t),ot={master:e,warmth:t,delay:n,fb:r,delayOut:a,nextBarAt:0,barIndex:0}}function R_(i,e){if(!Ce||!ot)return;const t=Ce.ctx,n=ot.warmth,r=ot.delay;[0,8].forEach(o=>{const c=i+o*yr+(Math.random()-.5)*.006,l=t.createOscillator();l.type="sine",l.frequency.setValueAtTime(145,c),l.frequency.exponentialRampToValueAtTime(38,c+.13);const u=t.createGain();u.gain.setValueAtTime(0,c),u.gain.linearRampToValueAtTime(.72,c+.006),u.gain.exponentialRampToValueAtTime(.001,c+.2),l.connect(u),u.connect(n),l.start(c),l.stop(c+.22)}),[4,12].forEach(o=>{const c=i+o*yr+(Math.random()-.5)*.008,l=Math.floor(t.sampleRate*.09),u=t.createBuffer(1,l,t.sampleRate),d=u.getChannelData(0);for(let h=0;h<l;h++)d[h]=(Math.random()*2-1)*(1-h/l);const f=t.createBufferSource();f.buffer=u;const m=t.createBiquadFilter();m.type="bandpass",m.frequency.value=2e3,m.Q.value=.7;const g=t.createGain();g.gain.setValueAtTime(.26,c),g.gain.exponentialRampToValueAtTime(.001,c+.11),f.connect(m),m.connect(g),g.connect(n),f.start(c);const v=t.createOscillator();v.type="triangle",v.frequency.setValueAtTime(195,c),v.frequency.exponentialRampToValueAtTime(95,c+.07);const x=t.createGain();x.gain.setValueAtTime(.14,c),x.gain.exponentialRampToValueAtTime(.001,c+.09),v.connect(x),x.connect(n),v.start(c),v.stop(c+.11)});for(let o=0;o<16;o+=2){if(Math.random()<.11)continue;const c=o%4===2?E_:0,l=i+o*yr+c+(Math.random()-.5)*.005,u=.055+Math.random()*.055,d=Math.floor(t.sampleRate*.035),f=t.createBuffer(1,d,t.sampleRate),m=f.getChannelData(0);for(let h=0;h<d;h++)m[h]=(Math.random()*2-1)*(1-h/d);const g=t.createBufferSource();g.buffer=f;const v=t.createBiquadFilter();v.type="highpass",v.frequency.value=7500;const x=t.createGain();x.gain.value=u,g.connect(v),v.connect(x),x.connect(n),g.start(l)}const[a,s]=T_[e%4];[[0,a],[8,s]].forEach(([o,c])=>{const l=i+o*yr+(Math.random()-.5)*.006,u=t.createOscillator();u.type="triangle",u.frequency.value=c;const d=t.createBiquadFilter();d.type="lowpass",d.frequency.value=480,d.Q.value=.4;const f=t.createGain();f.gain.setValueAtTime(0,l),f.gain.linearRampToValueAtTime(.48,l+.025),f.gain.exponentialRampToValueAtTime(.001,l+.52),u.connect(d),d.connect(f),f.connect(n),f.connect(r),u.start(l),u.stop(l+.55)}),e%2===0&&A_[e/2%2].forEach((c,l)=>{const u=i+l*.016,d=t.createOscillator();d.type="triangle",d.frequency.value=c*(1+(Math.random()-.5)*.003);const f=t.createBiquadFilter();f.type="lowpass",f.frequency.value=1600;const m=t.createGain();m.gain.setValueAtTime(0,u),m.gain.linearRampToValueAtTime(Math.max(.01,.065-l*.01),u+.05),m.gain.exponentialRampToValueAtTime(.001,u+1.1),d.connect(f),f.connect(m),m.connect(n),m.connect(r),d.start(u),d.stop(u+1.2)})}function C_(){if(!ot||!Ce)return;const i=Ce.ctx.currentTime;for(ot.nextBarAt<i&&(ot.nextBarAt=i);ot.nextBarAt<i+.25;)R_(ot.nextBarAt,ot.barIndex),ot.nextBarAt+=b_,ot.barIndex=(ot.barIndex+1)%8}function Wu(){if(kr(),!Ce||(w_(),!ot))return;const i=Ce.ctx.currentTime;ot.nextBarAt=i+.3,ot.barIndex=0,ot.master.gain.cancelScheduledValues(i),ot.master.gain.setValueAtTime(ot.master.gain.value,i),ot.master.gain.linearRampToValueAtTime(.36,i+.8)}function L_(){if(!ot||!Ce)return;const i=Ce.ctx.currentTime;ot.master.gain.cancelScheduledValues(i),ot.master.gain.setValueAtTime(ot.master.gain.value,i),ot.master.gain.linearRampToValueAtTime(0,i+.5)}function P_(){if(sn.userData.portalContinuity=zn,!!window.initVibeJamPortals)try{window.initVibeJamPortals({scene:Ft,getPlayer:()=>sn,spawnPoint:Uo,exitPosition:r_}),window.setTimeout(D_,0)}catch(i){console.warn("[Three Suns] Vibe Jam portal init skipped:",i)}}function D_(){Ft.traverse(i=>{!i.isGroup||i.userData.threeSunsTamed||!i.children.some(t=>t.geometry?.type==="TorusGeometry"&&t.geometry.parameters?.radius===15)||(i.userData.threeSunsTamed=!0,i.scale.setScalar(.08),i.children.forEach(t=>{t.material&&(t.material.opacity=Math.min(t.material.opacity??.5,.34))}))})}function I_(){const i=new URLSearchParams(window.location.search);return Uu.forEach(e=>{!i.has(e)&&zn[e]&&i.set(e,zn[e])}),i.set("portal","true"),i.set("ref",`${window.location.origin}${window.location.pathname}`),i.set("speed",String(window.currentSpeed||1)),i.set("hp",String(Math.ceil(p?.health??100))),i.set("speed_x",String(Number(p?.planetVel?.x||0).toFixed(2))),i.set("speed_y",String(Number(p?.planetVel?.y||0).toFixed(2))),i.set("speed_z","0"),i.set("rotation_x",String(Number(sn.rotation.x).toFixed(2))),i.set("rotation_y",String(Number(sn.rotation.y).toFixed(2))),i.set("rotation_z",String(Number(sn.rotation.z).toFixed(2))),`https://vibej.am/portal/2026?${i.toString()}`}function Wr(){window.location.href=I_()}function hi(i,e){const t=Number.parseFloat(Nr.get(i));return Number.isFinite(t)?t:e}function et(i,e){return i+Math.random()*(e-i)}function Or(){const i=Math.random()*Math.PI*2;return new L(Math.cos(i),Math.sin(i),0)}function Br(i){return i.pull*Kg*(i.id==="gamma"?Zg:1)}function Ta(i=null,e=At){const t=new Set(e),n=At.filter(r=>!t.has(r)).map(r=>({sun:r,pos:r.pos.clone()}));for(let r=0;r<e.length;r+=1){const a=e[r];let s=null;for(let l=0;l<140;l+=1){const u=Math.random()*Math.PI*2,d=et(a.id==="gamma"?6:7.8,17),f=new L(Math.cos(u)*d+et(-3.2,3.2),Math.sin(u)*d*.76+et(-2.2,2.2),0),m=n.every(v=>f.distanceTo(v.pos)>Math.max(a.killRadius+v.sun.killRadius+5.2,(a.auraRadius+v.sun.auraRadius)*.72)),g=!i||f.distanceTo(i)>Math.max(a.auraRadius+3.2,a.killRadius+6);if(m&&g){s=f;break}}if(!s){const l=i&&i.lengthSq()>.001?Math.atan2(-i.y,-i.x):Math.random()*Math.PI*2;for(let u=0;u<18;u+=1){const d=l+u/18*Math.PI*2+r*1.65,f=new L(Math.cos(d)*16.5,Math.sin(d)*12.25,0),m=n.every(v=>f.distanceTo(v.pos)>Math.max(a.killRadius+v.sun.killRadius+5.2,(a.auraRadius+v.sun.auraRadius)*.72)),g=!i||f.distanceTo(i)>Math.max(a.auraRadius+3.2,a.killRadius+6);if(m&&g){s=f;break}}}s||(s=Or().multiplyScalar(et(14.4,17.3)));const o=new L(-s.y,s.x,0).normalize().multiplyScalar(et(.16,.46)*Vl),c=Or().multiplyScalar(et(.02,.16)*Vl);a.pos.copy(s),a.vel.copy(o.add(c)),a.group.position.copy(a.pos),a.worldPos.copy(a.pos),n.push({sun:a,pos:s})}}function U_(i){Ta();let e=null;for(let u=0;u<140;u+=1){const d=new L(et(-17,17),et(-10.8,10.8),0);if(At.every(m=>{const g=Math.max(m.auraRadius+1.2,m.size*3.8);return d.distanceTo(m.pos)>g})){e=d;break}}if(!e){const u=At.reduce((d,f)=>d.add(f.pos),new L).multiplyScalar(-1);u.lengthSq()<.001&&u.copy(Or()),u.normalize(),e=u.multiplyScalar(14.8)}let t=At[0],n=-1/0;for(const u of At){const d=Math.max(e.distanceToSquared(u.pos),1),f=Br(u)/d;f>n&&(n=f,t=u)}const r=t.pos.clone().sub(e),a=Math.max(r.length(),1),s=Math.random()<.5?-1:1,o=new L(-r.y,r.x,0).normalize().multiplyScalar(s),c=Math.sqrt(Br(t)/a)*et(.78,1.12),l=o.multiplyScalar(c).add(Or().multiplyScalar(et(.08,.36))).add(i.clone().multiplyScalar(dc?.25:.08));return Uo.x=e.x,Uo.y=e.y,{planetPos:e,planetVel:l}}function or(i=bn){bn=i==="level"?"level":"survival",localStorage.setItem(Cu,bn);const e=qe.clamp(hi("speed",1),.4,3.2),t=dc?new L(qe.clamp(hi("speed_x",.7*e),-2.8,2.8),qe.clamp(hi("speed_y",.25*e),-2.8,2.8),0):new L(2.2,1.08,0),n=U_(t);p={time:0,days:0,difficulty:.88,runMode:bn,currentLevel:0,nextLevelIndex:0,levelGravityBonus:0,levelAuraBonus:0,levelBannerUntil:0,levelBannerFadeAt:0,meteorShower:null,health:qe.clamp(hi("hp",100),35,100),signal:ja,mode:"shield",paused:!1,muted:Gt,highQuality:_n,dead:!1,deathFreeze:0,deathToken:0,deathCause:"",deathWasHighScore:!1,focus:0,focusCooldown:0,shake:0,damageFlash:0,supernovaFlash:0,supernovaCooldown:0,voidExposure:0,grace:Xg,lastDangerCue:-99,lastNearMiss:-99,lastModeBlock:-99,nearMissArmed:!1,prevNearest:1/0,flashOmen:"",flashOmenUntil:0,toast:"",toastUntil:0,nextCometWarnAt:et(16,22),pendingComet:null,critical:{burned:0,frozen:0,scattered:0,collapse:0},lastProximityWarn:-99,lastDamageType:"",lastThreat:{burn:0,cold:0,chaos:0,safe:!0,proximityIntensity:0,damageType:""},anchors:[],planetPos:n.planetPos,planetVel:n.planetVel},sn.rotation.set(hi("rotation_x",0),hi("rotation_y",0),hi("rotation_z",0));for(const r of[...Vn.children])Vn.remove(r);for(const r of[...Qa,Ar])r.positions.fill(0),r.colorsArray.fill(0),r.geometry.attributes.position.needsUpdate=!0,r.geometry.attributes.color.needsUpdate=!0,r.index=0;for(const r of[...gi])en.remove(r.mesh);gi.length=0;for(const r of[...$i])en.remove(r.mesh);$i.length=0;for(const r of[...Ki])en.remove(r.sprite);Ki.length=0;for(const r of[...xi])Oo(r);xi.length=0,Ua.classList.add("hidden"),Ua.removeAttribute("data-cause"),Yi.classList.add("hidden"),Yi.classList.remove("fading"),Si.classList.add("hidden"),yi.classList.add("hidden"),bi.classList.add("hidden"),sc.classList.add("hidden"),ac.classList.add("hidden"),oc.classList.add("hidden"),y_(),Wu(),Ur.textContent="",yc(),W_(),wr(p.mode),ad(0,0,0,["omens quiet"])}function Ba(){return Number.parseInt(localStorage.getItem("three-suns-high-score")||"0",10)||0}function N_(i){i>Ba()&&localStorage.setItem("three-suns-high-score",String(i)),yc()}function za(){return Number.parseInt(localStorage.getItem(Lu)||"0",10)||0}function Xu(i){i>za()&&localStorage.setItem(Lu,String(i)),yc()}function qu(){try{return JSON.parse(localStorage.getItem(Pu)||"[]")}catch{return[]}}function F_(i,e,t,n){const r=qu();r.push({player_name:i,mode:e,days:t,level:n,created_at:new Date().toISOString()}),r.sort((a,s)=>{const o=a.mode==="level"?a.level:0,c=s.mode==="level"?s.level:0;return c!==o?c-o:s.days-a.days}),localStorage.setItem(Pu,JSON.stringify(r.slice(0,20)))}async function O_(i){const e=i==="level"?"&mode=eq.level&order=level.desc,days.desc":"&mode=eq.survival&order=days.desc";try{const t=await fetch(`${Du}/rest/v1/scores?select=*${e}&limit=10`,{headers:Iu});if(!t.ok)throw new Error("fetch failed");return await t.json()}catch{return qu().filter(t=>t.mode===i).slice(0,10)}}async function B_(i,e,t,n){try{if(!(await fetch(`${Du}/rest/v1/scores`,{method:"POST",headers:{...Iu,Prefer:"return=minimal"},body:JSON.stringify({player_name:i,mode:e,days:t,level:n})})).ok)throw new Error("insert failed");return!0}catch{return F_(i,e,t,n),!1}}function z_(i){return String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Sc(i){const e=document.querySelector("#lb-tab-survival"),t=document.querySelector("#lb-tab-level");e.classList.toggle("active",i==="survival"),e.setAttribute("aria-selected",String(i==="survival")),t.classList.toggle("active",i==="level"),t.setAttribute("aria-selected",String(i==="level")),V_(i)}async function V_(i){Os.innerHTML='<p class="leaderboard-empty">Loading…</p>';const e=await O_(i);if(!e.length){Os.innerHTML='<p class="leaderboard-empty">No records yet. Survive a run first.</p>';return}const t=e.map((r,a)=>{const s=a+1,o=i==="level"?`Lv ${r.level} / ${r.days}d`:`${r.days} days`;return`<tr class="${s<=3?`rank-${s}`:""}"><td>${s}</td><td>${z_(r.player_name||"Pilot")}</td><td>${o}</td></tr>`}).join(""),n=i==="level"?"Score":"Days";Os.innerHTML=`<table class="leaderboard-table"><thead><tr><th>#</th><th>Name</th><th>${n}</th></tr></thead><tbody>${t}</tbody></table>`}function G_(){p&&(yi.classList.add("hidden"),bi.classList.add("hidden"),Si.classList.add("hidden"),sc.classList.remove("hidden"),p.dead||(p.paused=!0),Sc(p.runMode==="level"?"level":"survival"))}function H_(){!p||!p.dead||(oc.classList.remove("hidden"),Na.value="",Na.focus())}async function Yu(){if(!p)return;const i=Na.value.trim()||"Pilot";oc.classList.add("hidden"),Ur.textContent="Publishing…";const e=await B_(i,p.runMode,p.days,p.currentLevel);Ur.textContent=e?"Score published!":"Could not reach leaderboard. Try again later."}function k_(i){return hc.find(e=>e.level===i)?.name||"UNCHARTED"}function yc(){!p||p.runMode==="survival"?Ol.textContent=String(Ba()):Ol.textContent=`L${za()}`}function W_(){if(!Sr)return;const i=p?.runMode||bn;Sr.textContent=i==="level"?"LEVEL":"SURVIVAL",Sr.title=i==="level"?"Level: reach milestones and level up":"Survival: endless run — survive as long as possible",Sr.classList.toggle("active",i==="level")}function X_(i){bn=i==="level"?"level":"survival",ii(),or(bn),mn(bn==="level"?"LEVEL MODE":"SURVIVAL MODE",1.2),cr(bn==="level"?16777215:10485716,.9)}function $u(){Su.classList.remove("tutorial-highlight"),ic.classList.remove("tutorial-highlight"),document.querySelector("#mode-controls")?.classList.remove("tutorial-highlight"),document.querySelector("#mode-info")?.classList.remove("tutorial-highlight"),document.querySelector("#mobile-controls")?.classList.remove("tutorial-highlight"),Mn.visible=!1,Mn.material.opacity=0}function Ku(){if(!yt.active)return;const i=fc[yt.index];Pg.textContent=i.title,Dg.textContent=i.text,Tu.classList.remove("hidden"),$u(),i.highlight==="signal"&&ic.classList.add("tutorial-highlight"),i.highlight==="modes"&&(document.querySelector("#mode-controls")?.classList.add("tutorial-highlight"),document.querySelector("#mobile-controls")?.classList.add("tutorial-highlight")),i.highlight==="focus"&&(document.querySelector("#mode-info")?.classList.add("tutorial-highlight"),document.querySelector("#mobile-controls")?.classList.add("tutorial-highlight"))}function Zu(i=!1){!p||p.dead||!i&&(dc||localStorage.getItem(Ru))||(yi.classList.add("hidden"),bi.classList.add("hidden"),Si.classList.add("hidden"),p.paused=!1,p.grace=Math.max(p.grace,4),p.health=Math.max(p.health,70),yt.active=!0,yt.index=0,yt.timer=0,Ku())}function es(){yt.active&&(yt.active=!1,Tu.classList.add("hidden"),$u(),localStorage.setItem(Ru,"true"),p&&!p.dead&&(p.grace=Math.max(p.grace,2),p.flashOmen="SURVIVE THE DAWN",p.flashOmenUntil=p.time+1.4))}function q_(){if(yt.active){if(yt.index>=fc.length-1){es();return}yt.index+=1,yt.timer=0,Ku()}}function Va(i){yt.active&&(i==="anchor"||i==="mode"||i==="focus")&&cr(Ut[p.mode].color,.45)}function Y_(){!yt.active||!p||p.dead||(p.grace=Math.max(p.grace,.35),p.health=Math.max(p.health,45),p.voidExposure=Math.min(p.voidExposure,1.5))}function $_(){if(!yt.active)return;const i=fc[yt.index];if(i.highlight!=="planet"&&i.highlight!=="sun")return;const e=At.reduce((r,a)=>!r||a.lastDistance<r.lastDistance?a:r,null),t=i.highlight==="planet"?p.planetPos:e?.pos;if(!t)return;const n=i.highlight==="planet"?2.3:e.auraRadius;Mn.visible=!0,Mn.position.copy(t),Mn.scale.setScalar(n*(1+Math.sin(p.time*4.8)*.08)),Mn.material.color.setHex(i.highlight==="planet"?10485716:e.color.getHex()),Mn.material.opacity=.34+Math.sin(p.time*5.6)*.12}function wr(i){if(!(!Ut[i]||!p)){if(p.mode=i,document.body.classList.remove("mode-shield","mode-hibernation","mode-observatory"),document.body.classList.add(`mode-${i}`),yu.textContent=Ut[i].label,bu.textContent=`MODE: ${Ut[i].label}`,Eu.textContent=Ut[i].effect,Au.forEach(e=>e.classList.toggle("active",e.dataset.mode===i)),mn(`${Ut[i].label} ACTIVE`,1.1),cr(Ut[i].color,1.05),p.damageFlash=Math.max(p.damageFlash,.25),xt&&Ce&&!Gt){const e=Ce.ctx.currentTime;xt.musicMaster.gain.cancelScheduledValues(e),xt.musicMaster.gain.setValueAtTime(xt.musicMaster.gain.value,e),xt.musicMaster.gain.linearRampToValueAtTime(2.2,e+.07),xt.musicMaster.gain.setTargetAtTime(.9,e+.07,.45)}p.flashOmen=rd(p.lastThreat.burn,p.lastThreat.cold,p.lastThreat.chaos,p.lastThreat.nearest||1/0,p.lastThreat.speed||0)[0],p.flashOmenUntil=p.mode==="observatory"?p.time+.15:p.time,Va("mode")}}function mn(i,e=.9){p&&(p.toast=i,p.toastUntil=p.time+e,Tr.textContent=i,Tr.classList.add("visible"))}function ju(i,e,t=""){hg.textContent=i,fg.textContent=e||"Difficulty increased",pg.textContent=t,Yi.classList.remove("hidden","fading"),p.levelBannerFadeAt=p.time+2,p.levelBannerUntil=p.time+2.45}function K_(i,e,t){ju(`LEVEL ${i} REACHED`,t,e)}function Z_(){!p||p.levelBannerUntil<=0||(Yi.classList.toggle("fading",p.time>=p.levelBannerFadeAt),p.time>=p.levelBannerUntil&&(Yi.classList.add("hidden"),Yi.classList.remove("fading"),p.levelBannerUntil=0))}function j_(){if(!p||p.runMode!=="level")return;const i=hc[p.nextLevelIndex];if(!i||p.days<i.day)return;p.currentLevel=i.level,p.nextLevelIndex+=1;let e="Difficulty increased";i.level>1&&i.level%2===0?(p.levelAuraBonus+=.05,e="Aura damage increased"):i.level>1&&(p.levelGravityBonus+=.05,e="Gravity increased"),p.health=qe.clamp(p.health+20,0,100),p.signal=qe.clamp(p.signal+38,0,ja),Xu(p.currentLevel),mn(`LEVEL ${i.level} — ${i.name}`,2.4),K_(i.level,i.name,e),p.flashOmen=`LEVEL ${i.level} — ${i.name}`,p.flashOmenUntil=p.time+2.4,cr(16777215,1.1),Gn("highScore"),i.level%3===0&&J_()}function J_(){!p||p.runMode!=="level"||(p.meteorShower={startAt:p.time+2.2,nextAt:p.time+2.2,remaining:7,activeUntil:p.time+9},p.flashOmen="METEOR SHOWER — THE SKY IS BREAKING",p.flashOmenUntil=p.time+2.2,window.setTimeout(()=>{p?.meteorShower&&ju("METEOR SHOWER","The sky is breaking","Move between the falling lights")},700),Gn("danger"))}function cr(i,e=.7){Mc.forEach(t=>{t.age=-t.delay,t.ring.visible=!0,t.ring.position.copy(p.planetPos),t.ring.material.color.setHex(i),t.duration=e})}function ts(i){!p||p.dead||(p.paused=typeof i=="boolean"?i:!p.paused,Si.classList.toggle("hidden",!p.paused))}function Ju(){p&&(yt.active&&es(),bi.classList.add("hidden"),Si.classList.add("hidden"),yi.classList.remove("hidden"),p.dead||(p.paused=!0))}function bc(){p&&(yi.classList.add("hidden"),Si.classList.add("hidden"),bi.classList.remove("hidden"),p.dead||(p.paused=!0))}function ii(){yi.classList.add("hidden"),bi.classList.add("hidden"),sc.classList.add("hidden"),ac.classList.add("hidden"),localStorage.setItem("threesuns_seen_info","true"),p&&!p.dead&&(p.paused=!1)}function Qu(){if(Gt=!Gt,p&&(p.muted=Gt),localStorage.setItem("threesuns_muted",String(Gt)),rc.textContent=Gt?"Unmute":"Mute",Ce){const i=Ce.ctx.currentTime;Ce.musicGain.gain.setTargetAtTime(Gt?0:on.music*cc,i,.3),Ce.sfxGain.gain.setTargetAtTime(Gt?0:on.sfx*lc,i,.3)}}function Q_(i){on.music=i,localStorage.setItem(uc,JSON.stringify(on)),Ce&&!Gt&&Ce.musicGain.gain.setTargetAtTime(i*cc,Ce.ctx.currentTime,.05)}function ev(i){on.sfx=i,localStorage.setItem(uc,JSON.stringify(on)),Ce&&!Gt&&Ce.sfxGain.gain.setTargetAtTime(i*lc,Ce.ctx.currentTime,.05)}function tv(){_n=!_n,p&&(p.highQuality=_n),Mi.setPixelRatio(_n?Math.min(window.devicePixelRatio,2):1),Ja.visible=_n,Qa.forEach(i=>{i.points.visible=_n}),Ar.points.material.opacity=_n?.72:.38,zu[2].visible=_n,mn(_n?"LOW FX OFF":"LOW FX ON",1)}function nv(i,e=0){const t=p?.difficulty||1;p&&e>0&&!p.dead&&At.forEach(n=>{const r=new L;for(const s of At){if(s===n)continue;const o=s.pos.clone().sub(n.pos),c=Math.max(o.lengthSq(),18);r.addScaledVector(o.normalize(),Br(s)*(1+(p.levelGravityBonus||0))*.046/c)}const a=Math.max(0,n.pos.length()-14.5);a>0&&r.addScaledVector(n.pos.clone().normalize(),-a*.018),n.vel.addScaledVector(r,e),n.vel.length()>3&&n.vel.setLength(3),n.vel.multiplyScalar($g),n.pos.addScaledVector(n.vel,e),n.pos.z=Math.sin(i*.34+n.phase)*.65}),At.forEach((n,r)=>{const a=n.phase;n.group.position.copy(n.pos),n.worldPos.copy(n.pos),n.core.rotation.y+=.01+r*.004;const s=n.id==="alpha"?3.1:n.id==="beta"?1.45:4.4;n.glow.material.opacity=.32+Math.sin(i*s+a)*.1,n.auraGlow.material.opacity=.055+Math.sin(i*(s*.55)+a)*.018,n.auraGlow.scale.setScalar(n.auraRadius*2*(1+Math.sin(i*1.2+a)*.025)),n.rings.forEach(l=>{const u=(i*(.32+r*.07+t*.025)+l.userData.offset+Math.sin(i*.18+a)*.08)%1,d=n.size*(2.4+u*(7.6+t*.8));l.scale.set(d,d,d),l.rotation.z=i*(.1+r*.03),l.material.opacity=(1-u)*(.16+t*.04)}),No(Qa[r],n.pos,.75);const c=n.lastDistance>n.killRadius&&n.lastDistance<=n.dangerRadius?1-qe.smoothstep(n.lastDistance,n.killRadius,n.dangerRadius):0;n.killRing.rotation.z=i*.22+a,n.killRing.material.opacity=(.13+Math.sin(i*1.8+a)*.05)*(1+c*2.8),n.dangerRing.rotation.z=-(i*.1+a),n.dangerRing.material.opacity=.075+Math.sin(i*1.1+a+1.5)*.03})}function iv(){if(!p||p.dead||yt.active||p.supernovaCooldown>0)return;const i=new Set,e=new Map(At.map(c=>[c,new Set]));for(let c=0;c<At.length;c+=1)for(let l=c+1;l<At.length;l+=1){const u=At[c],d=At[l],f=u.pos.distanceTo(d.pos),m=u.size+d.size+jg;f<=m&&(i.add(u),i.add(d),e.get(u).add(d),e.get(d).add(u))}if(!i.size)return;const t=i.values().next().value,n=[],r=[t],a=new Set;for(;r.length;){const c=r.pop();a.has(c)||(a.add(c),n.push(c),e.get(c).forEach(l=>r.push(l)))}const s=n.reduce((c,l)=>c.add(l.pos),new L).multiplyScalar(1/n.length),o=n.reduce((c,l,u)=>{for(let d=u+1;d<n.length;d+=1)c=Math.min(c,l.pos.distanceTo(n[d].pos));return c},1/0);ov(s,o,n)}function rv(i,e){if(p.dead||p.paused)return;kr(),Ce?.ctx.state==="suspended"&&Ce.ctx.resume().catch(()=>{});const t=Ut[p.mode],n=qg*t.anchorCost;if(p.signal<n){p.flashOmen="SIGNAL TOO FAINT",p.flashOmenUntil=p.time+.75,Gn("danger");return}const r=Mi.domElement.getBoundingClientRect();if(Bs.x=(i-r.left)/r.width*2-1,Bs.y=-((e-r.top)/r.height)*2+1,Bl.setFromCamera(Bs,yn),Bl.ray.intersectPlane(Bg,Kn),Kn.x=qe.clamp(Kn.x,-25,25),Kn.y=qe.clamp(Kn.y,-16,16),Kn.z=0,p.anchors.length>=Hg){const a=p.anchors.shift();Vn.remove(a.group),Vn.remove(a.line)}p.signal=Math.max(0,p.signal-n),p.anchors.push(p_(Kn)),p.flashOmen="ANCHOR SINGS BRIEFLY",p.flashOmenUntil=p.time+.75,av(Kn,pn.violet.getHex(),.5,4.6,.68),cr(pn.violet.getHex(),.42),Va("anchor"),Gn("anchor")}function ed(){if(!(p.dead||p.paused)){if(p.focusCooldown>0){Va("focus"),mn("FOCUS RECHARGING",.8);return}kr(),p.focus=kg,p.focusCooldown=Wg,p.flashOmen="TIME DILATED",p.flashOmenUntil=p.time+1.1,mn("FOCUS ACTIVE",1.1),cr(Ut[p.mode].color,.85),Va("focus"),jn(180,.34,"sine",.9)}}function td(i){p.lastNearMiss=p.time,p.flashOmen="NEAR MISS: THE SUN BLINKED FIRST",p.flashOmenUntil=p.time+1.2;const e=new tt(new Wt(.9,1.02,72),new St({color:16777215,transparent:!0,opacity:.8,blending:dt,side:Mt}));e.position.copy(i),e.rotation.x=Math.PI/2,en.add(e),gi.push({mesh:e,age:0}),Gn("nearMiss")}function av(i,e=16777215,t=.55,n=5.2,r=.62){const a=new tt(new Wt(.45,.52,64),new St({color:e,transparent:!0,opacity:r,blending:dt,side:Mt,depthWrite:!1}));a.position.copy(i),a.rotation.x=Math.PI/2,en.add(a),gi.push({mesh:a,age:0,duration:t,speed:n,opacity:r})}function sv(i){for(let e=gi.length-1;e>=0;e-=1){const t=gi[e];t.age+=i;const n=t.duration||.7,r=1-t.age/n;t.mesh.scale.setScalar(1+t.age*(t.speed||5.8)),t.mesh.material.opacity=Math.max(0,r)*(t.opacity||.72),t.age>=n&&(en.remove(t.mesh),gi.splice(e,1))}}function ov(i,e,t=At){if(!p||p.dead||p.supernovaCooldown>0)return;const n=t.length>=3,r=n?1.25:1;p.supernovaCooldown=2.6,p.supernovaFlash=r,p.shake=Math.max(p.shake,n?1.65:1.25),p.flashOmen=n?"THREE DAWNS SHATTERED":"BINARY IMPACT",p.flashOmenUntil=p.time+1.15,mn(n?"THREE NEW DAWNS IGNITE":"TWIN STARS REIGNITE",1.8);const a=new tt(new Wt(.8,1.08,112),new St({color:16312831,transparent:!0,opacity:.95,blending:dt,side:Mt,depthWrite:!1}));a.position.copy(i),a.rotation.x=Math.PI/2,en.add(a),$i.push({mesh:a,age:0,power:r}),nd(i,n?16312831:t[0]?.color.getHex()||16777215,n?18:12,r);const s=p.planetPos.distanceTo(i);if(s<(n?6.5:5.4)){Ta(p.planetPos,t),Ga(e<1.3?"collapse":"scattered");return}const o=1-qe.smoothstep(s,n?6.5:5.4,n?30:25);if(o>0){const c=qe.lerp(12,n?78:56,o**1.25);if(p.health=Math.max(0,p.health-c),p.damageFlash=Math.max(p.damageFlash,.9),p.lastDamageType="chaos",p.health<=0){Ta(p.planetPos,t),Ga("collapse");return}}Ta(p.planetPos,t),p.grace=Math.max(p.grace,Jg),p.nearMissArmed=!1,p.prevNearest=1/0,jn(52,.58,"sawtooth",.85)}function nd(i,e=16777215,t=10,n=1,r=null){const a=r?Math.atan2(r.y,r.x):0;for(let s=0;s<t;s+=1){const o=Tn(e,et(.16,.34)*n,.9);o.position.copy(i);const c=r?et(-.75,.75):et(0,Math.PI*2),l=r?a+c:c,u=new L(Math.cos(l),Math.sin(l),0).multiplyScalar(et(7,14)*n);en.add(o),Ki.push({sprite:o,vel:u,age:0,life:et(.45,.85),size:o.scale.x})}}function cv(i){for(let e=Ki.length-1;e>=0;e-=1){const t=Ki[e];t.age+=i,t.sprite.position.addScaledVector(t.vel,i),t.vel.multiplyScalar(1-i*1.8);const n=Math.max(0,1-t.age/t.life);t.sprite.material.opacity=n*.85,t.sprite.scale.setScalar(t.size*(1+t.age*2.5)),t.age>=t.life&&(en.remove(t.sprite),Ki.splice(e,1))}}function lv(i){p&&(p.supernovaFlash=Math.max(0,p.supernovaFlash-i*1.15),p.supernovaCooldown=Math.max(0,p.supernovaCooldown-i));for(let e=$i.length-1;e>=0;e-=1){const t=$i[e];t.age+=i;const n=1-t.age/1.15;t.mesh.scale.setScalar(1+t.age*23*(t.power||1)),t.mesh.material.opacity=Math.max(0,n)*.95,t.mesh.material.color.lerp(pn.gold,i*1.8),t.age>=1.15&&(en.remove(t.mesh),$i.splice(e,1))}}function uv(i){return Math.abs(i.x)>Math.abs(i.y)?i.x>0?"WEST VECTOR":"EAST VECTOR":i.y>0?"SOUTH VECTOR":"NORTH VECTOR"}function dv(){const i=Math.floor(Math.random()*4),e=new L(i===0?-34:i===1?34:et(-30,30),i===2?-22:i===3?22:et(-18,18),0),n=new L(et(-9,9),et(-6,6),0).sub(e).normalize();p.pendingComet={at:p.time+i_,start:e,dir:n},p.nextCometWarnAt=1/0,p.flashOmen=p.mode==="observatory"?`COMET INBOUND — ${uv(n)}`:"COMET INBOUND",p.flashOmenUntil=p.time+1.75,Gn("danger")}function id(i){const e=!!i.isMeteor,t=new tt(new rr(e?.17:.28,14,10),new St({color:16777215})),n=Tn(e?13103871:16773304,e?1.15:1.9,e?.28:.34),r=new ec(new Et().setFromPoints([new L,i.dir.clone().multiplyScalar(e?-3.4:-5)]),new Pa({color:16765802,transparent:!0,opacity:.78,blending:dt})),a=new Ht;a.add(r,n,t),a.position.copy(i.start),gc.add(a),xi.push({group:a,head:t,glow:n,trail:r,pos:i.start.clone(),vel:i.dir.clone().multiplyScalar(i.speed||et(13.5,16.5)),age:0,isMeteor:e,damage:i.damage||70,impulse:i.impulse||3.7})}function Oo(i){gc.remove(i.group)}function hv(i){p.health=Math.max(0,p.health-i.damage),p.planetVel.addScaledVector(i.vel.clone().normalize(),i.impulse),p.shake=Math.max(p.shake,i.isMeteor?.72:1.1),p.damageFlash=Math.max(p.damageFlash,.95),p.lastDamageType="chaos",p.flashOmen=i.isMeteor?"METEOR IMPACT":"COMET IMPACT",p.flashOmenUntil=p.time+1.25,mn(i.isMeteor?"METEOR IMPACT":"COMET IMPACT",1.25),td(p.planetPos),nd(p.planetPos,i.isMeteor?13103871:16765802,i.isMeteor?7:10,i.isMeteor?.62:.9,i.vel.clone().normalize()),p.health<=0&&Ga("impact")}function fv(){const i=Math.floor(Math.random()*4),e=new L(i===0?-36:i===1?36:et(-28,28),i===2?-24:i===3?24:et(-18,18),0);let t=p.planetPos.clone().add(new L(et(-9,9),et(-7,7),0));t.distanceTo(p.planetPos)<4.5&&t.add(Or().multiplyScalar(5.2)),id({start:e,dir:t.sub(e).normalize(),isMeteor:!0,speed:et(10.5,13.2),damage:et(20,35),impulse:1.6})}function pv(){if(!p?.meteorShower||p.dead||yt.active)return;const i=p.meteorShower;p.time<i.startAt||(i.remaining>0&&p.time>=i.nextAt&&(fv(),i.remaining-=1,i.nextAt=p.time+et(.55,1.05)),p.time>i.activeUntil&&i.remaining<=0&&(p.meteorShower=null))}function mv(i){if(!(!p||p.dead||yt.active)){pv(),!p.pendingComet&&p.time>=p.nextCometWarnAt&&dv(),p.pendingComet&&p.time>=p.pendingComet.at&&(id(p.pendingComet),p.pendingComet=null,p.nextCometWarnAt=p.time+et(20,40));for(let e=xi.length-1;e>=0;e-=1){const t=xi[e];if(t.age+=i,t.isMeteor){const r=new L;for(const a of At){const s=a.pos.clone().sub(t.pos),o=Math.max(s.lengthSq(),8);r.addScaledVector(s.normalize(),Br(a)*(1+(p.levelGravityBonus||0))*.18/o)}r.length()>2.4&&r.setLength(2.4),t.vel.addScaledVector(r,i)}if(t.pos.addScaledVector(t.vel,i),t.group.position.copy(t.pos),t.group.rotation.z=Math.atan2(t.vel.y,t.vel.x),t.trail.geometry.setFromPoints([new L(0,0,0),t.vel.clone().normalize().multiplyScalar(t.isMeteor?-3.8:-5.6)]),t.glow.material.opacity=.22+Math.sin(p.time*12)*.08,t.pos.distanceTo(p.planetPos)<.95){hv(t),Oo(t),xi.splice(e,1);continue}(At.some(r=>t.pos.distanceTo(r.pos)<r.killRadius+.65)||t.age>7||Math.abs(t.pos.x)>42||Math.abs(t.pos.y)>28)&&(Oo(t),xi.splice(e,1))}}}function xv(i){Mc.forEach(e=>{if(!e.ring.visible||(e.age+=i,e.age<0))return;const t=e.duration||.85,n=1-e.age/t;e.ring.position.copy(p.planetPos),e.ring.scale.setScalar(1+e.age*4.4),e.ring.material.opacity=Math.max(0,n)*.58,e.age>=t&&(e.ring.visible=!1,e.ring.material.opacity=0)})}const Vs=new L,ql=new L;function gv(i){const e=p.planetPos,t=p.planetVel,n=new L;let r=1/0,a=null,s=null,o=1/0,c=0,l=0,u=0,d=0,f="",m=0,g="";sn.position.copy(e),sn.updateMatrixWorld(),sn.getWorldPosition(ql);for(const H of At){H.group.updateMatrixWorld(),H.group.getWorldPosition(Vs),H.worldPos.copy(Vs);const J=Vs.clone().sub(ql),G=Math.max(J.length(),1e-4),te=J.divideScalar(G);H.lastDistance=G,G<r&&(r=G,a=H),G<=H.killRadius&&G<o&&(s=H,o=G);const ie=Math.max(G*G,3.8),_e=Br(H)*p.difficulty*(1+(p.levelGravityBonus||0))/ie;if(n.addScaledVector(te,_e),G<=H.auraRadius){const Ye=qe.clamp((H.auraRadius-G)/Math.max(.001,H.auraRadius-H.killRadius),0,1)**1.35,je=Ut[p.mode],Je=H.dangerType==="heat"?je.heatDamage:H.dangerType==="cold"?je.coldDamage:je.chaosDamage,q=H.dangerType==="heat"?48:H.dangerType==="cold"?40:44,Z=qe.lerp(2.2,q,Ye)*Je*(1+(p.levelAuraBonus||0)),he=qe.clamp(Ye*Je,0,1.4);Ye>.35&&Je<=.55&&(g=H.dangerType),H.dangerType==="heat"?c=Math.max(c,he):H.dangerType==="cold"?l=Math.max(l,he):u=Math.max(u,he),d+=Z,Z>m&&(m=Z,f=H.dangerType)}}for(const H of p.anchors){const J=H.age/Io,G=Math.sin((1-J)*Math.PI*.5)**.75,te=H.pos.clone().sub(e),ie=Math.max(te.length(),.001),_e=Math.max(ie,1.35)**1.9;n.addScaledVector(te.divideScalar(ie),qe.clamp(15*Ut[p.mode].anchorPull*G/_e,0,5))}const v=e.clone().multiplyScalar(-.006-Math.max(0,e.length()-20)*.0015);n.add(v);const x=t_-Math.abs(e.x),h=n_-Math.abs(e.y);x<ki&&(n.x-=Math.sign(e.x)*qe.smoothstep(ki-x,0,ki)*Gl),h<ki&&(n.y-=Math.sign(e.y)*qe.smoothstep(ki-h,0,ki)*Gl),n.length()>8&&n.setLength(8),t.addScaledVector(n,i);const A=Math.min(18.5,10.6+p.difficulty*2.6);t.length()>A&&t.setLength(A),t.multiplyScalar(Yg),e.addScaledVector(t,i);const E=t.length(),w=Ut[p.mode],D=d>0,T=e.length()>Qg||r>e_;p.voidExposure=T?p.voidExposure+i:Math.max(0,p.voidExposure-i*1.8);const P=qe.clamp((p.voidExposure-wu)/11,0,1),O=qe.clamp((p.voidExposure-1.2)/10,0,1),y=P>0?1.5+17*P**1.35:0,S=p.grace>0?.28:1;if(D){const H=d*S*i;p.health=Math.max(0,p.health-H),p.damageFlash=Math.max(p.damageFlash,qe.clamp(H*.09+m*.012,.18,.85)),p.lastDamageType=f,p.shake=Math.max(p.shake,qe.clamp(Math.max(c,l,u)*.7,0,.85)),p.time-p.lastProximityWarn>.7&&(p.lastProximityWarn=p.time,p.flashOmen=f==="heat"?"HEAT RISING":f==="cold"?"FREEZE WARNING":"ORBIT UNSTABLE",p.flashOmenUntil=p.time+.7)}if(y>0){const H=y*S*i;p.health=Math.max(0,p.health-H),p.damageFlash=Math.max(p.damageFlash,qe.clamp(.16+P*.55,.16,.72)),p.lastDamageType="cold",l=Math.max(l,.28+P*.82),p.time-p.lastProximityWarn>1.1&&(p.lastProximityWarn=p.time,p.flashOmen=p.voidExposure>8?"NO SUNLIGHT DETECTED":"VOID COLD RISING",p.flashOmenUntil=p.time+.9)}else O>0&&(l=Math.max(l,O*.42));!D&&!T&&(p.health=qe.clamp(p.health+4.8*w.regen*i,0,100)),p.damageFlash=Math.max(0,p.damageFlash-i*1.8);const I=!D&&!T,V=(5.8+(I?7.2:1.3)+(p.health>72?2.2:0))*w.regen*1.2;p.signal=qe.clamp(p.signal+V*i,0,ja),T&&!f&&(f="cold");const W=Math.max(c,l,u,O*.72),K=qe.smoothstep(E,8.8,13.2)*.34;u=Math.max(u,K),p.lastThreat={burn:c,cold:l,chaos:u,safe:I,nearest:r,speed:E,proximityIntensity:W,damageType:f},p.time-p.lastModeBlock>1.25&&(p.mode==="shield"&&g==="heat"?(p.lastModeBlock=p.time,mn("SOLAR AURA HELD",.75)):p.mode==="hibernation"&&g==="cold"?(p.lastModeBlock=p.time,mn("DEEP COLD HELD",.75)):p.mode==="observatory"&&g==="chaos"&&(p.lastModeBlock=p.time,mn("RESONANCE DAMPED",.75))),p.prevNearest<(a?.killRadius??2.5)+.75&&(p.nearMissArmed=!0),p.nearMissArmed&&r>(a?.killRadius??2.5)+2.1&&r>p.prevNearest&&p.time-p.lastNearMiss>2.3&&(p.nearMissArmed=!1,td(e)),p.prevNearest=r,D&&p.time-p.lastDangerCue>3.2&&(p.lastDangerCue=p.time,Gn("danger"));let X=null;s?X=s.deathCause:p.health<=0&&(X=p.lastDamageType==="heat"?"burned":p.lastDamageType==="cold"?"frozen":p.lastDamageType==="chaos"?"scattered":"collapse"),X&&yt.active&&(X=null,p.health=Math.max(p.health,45),p.damageFlash=Math.max(p.damageFlash,.35),s&&p.planetVel.addScaledVector(p.planetPos.clone().sub(s.pos).normalize(),1.8)),X&&Ga(X),ad(c,l,u,rd(c,l,u,r,E))}function rd(i,e,t,n,r){if(p.flashOmen&&p.time<p.flashOmenUntil)return[p.flashOmen];const a=[],s=p.mode==="observatory";return p.grace>0&&a.push("CIVILIZATION DREAMING"),p.voidExposure>wu&&a.push(p.voidExposure>8?"NO SUNLIGHT DETECTED":"VOID COLD RISING"),i>.55&&a.push(s?"HEAT RISING — ALPHA AURA":"HEAT RISING"),e>.5&&a.push(s?"FREEZE WARNING — BETA AURA":"FREEZE WARNING"),(t>.54||r>9.2)&&a.push(s?"ORBIT UNSTABLE — GAMMA PULL":"ORBIT UNSTABLE"),p.health<18&&a.push("HEALTH CRITICAL"),!a.length&&i<.18&&e<.2&&t<.25&&a.push(s?"STABLE WINDOW — HEALTH RECOVERING":p.health>82?"CIVILIZATION DREAMING":"STABLE WINDOW"),p.focusCooldown<=0&&p.days>4&&a.length<2&&a.push("FOCUS READY — SLOW TIME"),a.length?a.slice(0,2):["STABLE WINDOW"]}function ad(i,e,t,n){if(eg.textContent=String(p.days),ig.textContent=p.runMode==="level"?"LEVEL":"SURVIVAL",rg.style.display=p.runMode==="level"?"":"none",sg.style.display=p.runMode==="level"?"":"none",p.runMode==="level"){const r=hc[p.nextLevelIndex];ag.textContent=p.currentLevel>0?`${p.currentLevel}`:"0",og.textContent=r?`${r.day}D`:"MAX"}tg.textContent=`${Math.ceil(p.health)}%`,ng.style.width=`${Math.max(0,p.health)}%`,Su.classList.toggle("flash",p.damageFlash>.05),yu.textContent=Ut[p.mode].label,bu.textContent=`MODE: ${Ut[p.mode].label}`,Eu.textContent=Ut[p.mode].effect,mg.textContent=p.focusCooldown>0?`FOCUS ${Math.ceil(p.focusCooldown)}S`:"FOCUS READY",cg.textContent=n.join(" / "),lg.style.width=`${Math.max(8,i*100)}%`,ug.style.width=`${Math.max(8,e*100)}%`,dg.style.width=`${Math.max(8,t*100)}%`,ic.style.width=`${Math.max(8,p.signal/ja*100)}%`,document.body.classList.toggle("danger-heat",p.lastThreat.damageType==="heat"),document.body.classList.toggle("danger-cold",p.lastThreat.damageType==="cold"),document.body.classList.toggle("danger-chaos",p.lastThreat.damageType==="chaos"),document.body.classList.toggle("danger-supernova",p.supernovaFlash>0),document.body.classList.toggle("low-health",p.health<20&&!p.dead),Qx.style.setProperty("--danger-alpha",String(qe.clamp(p.damageFlash+p.lastThreat.proximityIntensity*.42+p.supernovaFlash,0,.95))),p.time<10?(Fs.textContent=kl[Math.min(kl.length-1,Math.floor(p.time/2))],Fs.style.opacity=String(1-Math.max(0,p.time-8)/2)):Fs.style.opacity="0",p.toast&&p.time<p.toastUntil?(Tr.textContent=p.toast,Tr.classList.add("visible")):Tr.classList.remove("visible")}function Ga(i){if(p.dead)return;p.dead=!0,p.deathFreeze=.2,p.deathToken+=1,p.deathCause=i,p.supernovaFlash=Math.max(p.supernovaFlash,.9),p.shake=Math.max(p.shake,1.2),p.lastDamageType=i==="burned"?"heat":i==="frozen"?"cold":"chaos";const e=p.runMode==="level"?za():Ba();p.runMode==="level"?Xu(p.currentLevel):N_(p.days),p.deathWasHighScore=p.runMode==="level"?p.currentLevel>e:p.days>e;const t=p.days,n={burned:"Burned",frozen:"Frozen",scattered:"Chaos",collapse:"Collapse",impact:"Impact"}[i],r={burned:"THE DAWN CONSUMED YOU",frozen:"THE LAST CITY FROZE",scattered:t%2?"GRAVITY FORGOT YOU":"THE HIDDEN MATH WON",collapse:"NO ONE WILL REMEMBER THE ORBIT",impact:"THE SKY STRUCK BACK"},s=Object.fromEntries(Object.entries({burned:["The red sun taught the oceans to boil.","The atmosphere became a funeral flame.","The cities glowed once, then vanished."],frozen:["Warmth became a myth.","The oceans stopped remembering waves.","The last signal arrived as ice."],scattered:["Your orbit became a rumor.","Resonance completed its sentence.","The world missed itself by a fraction."],collapse:["Civilization understood too late.","The last observatory blinked twice.","History became a closed set."],impact:["The comet did not ask permission.","The sky remembered violence.","A bright stone ended the calculation."]}).map(([c,l])=>[c,l[t%l.length]]));Ua.dataset.cause=i,xg.textContent=r[i],gg.textContent=p.runMode==="level"?`Level ${p.currentLevel} ${p.currentLevel?k_(p.currentLevel):"UNREACHED"} / ${t} days survived.`:`Survival Mode: your civilization survived ${t} days.`,_g.textContent=s[i],vg.textContent=p.runMode==="level"?`Cause ${n} / Highest level ${za()}`:`Cause ${n} / High score ${Ba()}`,Ur.textContent=p.deathWasHighScore?"New high score. The dawn is annoyed.":"";const o=p.deathToken;window.setTimeout(()=>{p?.dead&&p.deathToken===o&&Ua.classList.remove("hidden")},200),Gn("death"),p.deathWasHighScore&&window.setTimeout(()=>Gn("highScore"),420)}async function sd(){if(!p||!navigator.clipboard)return;const i=`${window.location.origin}${window.location.pathname}`,e=p.runMode==="level"?`I reached Level ${p.currentLevel} after ${p.days} days in Three Suns: Chaotic Dawn ${i}`:`I survived ${p.days} days in Three Suns: Chaotic Dawn ${i}`;try{await navigator.clipboard.writeText(e),Ur.textContent="Copied survival boast."}catch{}}function _v(i){for(let e=p.anchors.length-1;e>=0;e-=1){const t=p.anchors[e];t.age+=i;const n=1-t.age/Io;t.group.rotation.y+=i*2.1,t.group.rotation.z-=i*.8,t.well.scale.setScalar(1+t.age*.62),t.halo.scale.setScalar(1.1+Math.sin(p.time*9+e)*.24+t.age*.35),t.arms.scale.setScalar(1+Math.sin(p.time*7+e)*.08);const r=t.pos.clone().lerp(p.planetPos,.5);r.z=.8+Math.sin(p.time*2.2+e)*.12;const a=[t.pos,r,p.planetPos].map(s=>s.clone());t.line.geometry.setFromPoints(a),t.line.material.opacity=qe.clamp(n,0,1)*.38,t.group.children.forEach(s=>{s.material&&(s.material.opacity=qe.clamp(n,0,1)*.78)}),t.age>=Io&&(Vn.remove(t.group),Vn.remove(t.line),p.anchors.splice(e,1))}}function vv(i){const{burn:e,cold:t,chaos:n,proximityIntensity:r=0}=p.lastThreat,a=Ut[p.mode].color;Vu.rotation.y+=i*.35,Fo.material.color.setHex(a),Fo.material.opacity=.13+Math.max(e,t,n)*.12+r*.22,mc.material.opacity=p.mode==="shield"?.86:0,Gu.material.opacity=p.mode==="hibernation"?.34:0,Fa.material.opacity=p.mode==="observatory"?.9:0,Fa.rotation.z+=i*1.3,xc.material.opacity=e*.62+r*.38,Hu.material.opacity=t*.18+(p.mode==="hibernation"?.08:0)+r*.14,Wi.material.opacity=n*.54+r*.32,Wi.rotation.z+=i*(2.4+n*6),Wi.position.x=Math.sin(p.time*41)*n*.035,Wi.position.y=Math.cos(p.time*37)*n*.035;const s=Math.max(0,1-p.health/100);Fr.material.emissiveIntensity=qe.lerp(.48,.08,s)+e*.35;const o=p.mode==="hibernation"?.55:1;pc.material.opacity=Math.max(.04,.22-s*.16)*o,ti.material.opacity*=o,ti.material.color.setHex(a)}function Mv(){p.dead||p.paused||p.planetPos.distanceTo(Nu)<1.25&&Wr()}function Yl(i){p.shake=Math.max(0,p.shake-i*.8);const e=p.shake*p.shake*(p.highQuality?.55:.22),t=p.dead?0:.18;yn.position.x=Math.sin(p.time*37)*e+Math.sin(p.time*.17)*t,yn.position.y=Math.cos(p.time*31)*e+Math.cos(p.time*.13)*t,yn.position.z=56+Math.sin(p.time*18)*e,yn.lookAt(0,0,0)}function od(){requestAnimationFrame(od);const i=Math.min(zg.getDelta(),Gg);x_();let e=i;if(Y_(),yt.active&&!p.dead&&(e*=.18),!p.dead&&p.health<20&&(e*=.94),p.paused&&!p.dead){Yl(0),window.animateVibeJamPortals&&window.animateVibeJamPortals(),Mi.render(Ft,yn);return}p.dead&&(p.deathFreeze>0?(p.deathFreeze=Math.max(0,p.deathFreeze-i),e=0):e*=.12),p.focus>0&&!p.dead&&(e*=.36,p.focus-=e/.36),p.focusCooldown>0&&(p.focusCooldown=Math.max(0,p.focusCooldown-e)),p.time+=e,nv(p.time,e),iv(),Wl(Ar,p.highQuality?.983:.94),Qa.forEach(t=>Wl(t,p.highQuality?.987:.93)),sv(e),lv(e),cv(e),Z_(),xv(e),Oa.rotation.z+=e*.45,Oa.scale.setScalar(1+Math.sin(p.time*2.1)*.08),p.dead?ti.material.opacity=.18+Math.sin(p.time*12)*.06:(p.days=Math.floor(p.time/Vg),p.grace=Math.max(0,p.grace-e),p.difficulty=.88+qe.smoothstep(p.days,10,20)*.16+Math.max(0,p.days-20)*.007+Math.max(0,p.days-60)*.009+Math.max(0,p.days-100)*.018,p.difficulty*=.85+qe.smoothstep(p.days,0,25)*.15,p.difficulty*=1+qe.smoothstep(p.days,60,110)*.1,j_(),_v(e),gv(e),mv(e),sn.position.copy(p.planetPos),window.currentSpeed=Number(p.planetVel.length().toFixed(2)),Fr.rotation.y+=e*1.3,Fr.rotation.x+=e*.27,ti.rotation.z+=e*(1.3+(100-p.health)*.012),ti.material.opacity=.42+p.health/230+Math.sin(p.time*8)*.05,No(Ar,p.planetPos,.95),p.planetVel.length()>6&&No(Ar,p.planetPos.clone().addScaledVector(p.planetVel,-.018),.46),vv(e),$_(),Mv()),zu.forEach((t,n)=>{t.rotation.z+=e*(.002+n*.0015),t.position.x=Math.sin(p.time*(.05+n*.02))*(.1+n*.08)}),Ja.rotation.z+=e*.0015,Yl(e),window.animateVibeJamPortals&&window.animateVibeJamPortals(),Mi.render(Ft,yn)}function cd(){const i=window.innerWidth,e=window.innerHeight;yn.aspect=i/e,yn.updateProjectionMatrix(),Mi.setSize(i,e,!1)}const Sv=document.querySelector("#audio-settings"),Ha=document.querySelector("#music-vol-slider"),ka=document.querySelector("#sfx-vol-slider");Ha&&(Ha.value=String(on.music));ka&&(ka.value=String(on.sfx));Ha?.addEventListener("input",()=>Q_(Number(Ha.value)));ka?.addEventListener("input",()=>ev(Number(ka.value)));document.querySelector("#music-settings-btn")?.addEventListener("click",()=>{Sv?.classList.toggle("hidden")});window.addEventListener("resize",cd);window.addEventListener("pointerdown",i=>{i.target.tagName==="INPUT"||i.target.tagName==="SELECT"||i.target.closest("button")||i.target.closest("#tutorial-box")||rv(i.clientX,i.clientY)},{passive:!0});window.addEventListener("keydown",i=>{i.target.tagName==="INPUT"||i.target.tagName==="TEXTAREA"||(i.code==="Escape"&&(yt.active?es():!yi.classList.contains("hidden")||!bi.classList.contains("hidden")?ii():ts()),i.code==="KeyR"&&or(),i.code==="KeyM"&&Qu(),i.code==="KeyP"&&tv(),i.code==="Digit1"&&wr("shield"),i.code==="Digit2"&&wr("hibernation"),i.code==="Digit3"&&wr("observatory"),i.code==="Space"&&(i.preventDefault(),ed()))});Mg.addEventListener("click",()=>or());Sg.addEventListener("click",Wr);yg.addEventListener("click",sd);bg.addEventListener("click",()=>ts(!1));Eg.addEventListener("click",()=>or());rc.addEventListener("click",Qu);Tg.addEventListener("click",Wr);Ag.addEventListener("click",sd);wg.addEventListener("click",()=>{Si.classList.add("hidden"),ac.classList.remove("hidden"),p&&!p.dead&&(p.paused=!0)});document.querySelector("#controls-close-button").addEventListener("click",ii);Rg.addEventListener("click",Wr);Sr.addEventListener("click",()=>X_((p?.runMode||bn)==="level"?"survival":"level"));Ug.addEventListener("click",es);Ig.addEventListener("click",q_);document.querySelector("#info-button").addEventListener("click",Ju);document.querySelector("#story-button").addEventListener("click",bc);document.querySelector("#leaderboard-button").addEventListener("click",G_);document.querySelector("#leaderboard-close-button").addEventListener("click",ii);document.querySelector("#lb-tab-survival").addEventListener("click",()=>Sc("survival"));document.querySelector("#lb-tab-level").addEventListener("click",()=>Sc("level"));Cg.addEventListener("click",H_);Lg.addEventListener("click",Yu);Na.addEventListener("keydown",i=>{i.code==="Enter"&&(i.preventDefault(),Yu())});document.querySelector("#pause-info-button").addEventListener("click",Ju);document.querySelector("#pause-story-button").addEventListener("click",bc);document.querySelector("#info-resume-button").addEventListener("click",ii);Ng.addEventListener("click",()=>{ii(),Zu(!0)});Fg.addEventListener("click",bc);document.querySelector("#settings-button").addEventListener("click",()=>ts(!0));document.querySelector("#story-resume-button").addEventListener("click",ii);document.querySelector("#story-restart-button").addEventListener("click",()=>{ii(),or()});document.querySelector("#story-next-button").addEventListener("click",Wr);Au.forEach(i=>{i.addEventListener("click",()=>wr(i.dataset.mode))});Og.forEach(i=>{i.addEventListener("click",()=>{i.dataset.action==="focus"&&ed(),i.dataset.action==="pause"&&ts()})});rc.textContent=Gt?"Unmute":"Mute";P_();cd();or();od();Zu(!1);
