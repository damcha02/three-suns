(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const _o="181",Cu=0,rc=1,Pu=2,_l=1,Lu=2,En=3,$n=0,Gt=1,gt=2,Rn=0,Ii=1,pt=2,ac=3,sc=4,Du=5,ai=100,Iu=101,Uu=102,Nu=103,Fu=104,Ou=200,Bu=201,zu=202,Vu=203,Ms=204,Ss=205,Gu=206,Hu=207,ku=208,Wu=209,Xu=210,qu=211,Yu=212,$u=213,Ku=214,ys=0,bs=1,Es=2,Oi=3,Ts=4,As=5,ws=6,Rs=7,vo=0,Zu=1,ju=2,qn=0,Ju=1,Qu=2,eh=3,th=4,nh=5,ih=6,rh=7,vl=300,Bi=301,zi=302,Cs=303,Ps=304,Aa=306,Ls=1e3,Tn=1001,Ds=1002,Kt=1003,ah=1004,Ur=1005,Qt=1006,Ba=1007,oi=1008,gn=1009,Ml=1010,Sl=1011,xr=1012,Mo=1013,ci=1014,An=1015,ki=1016,So=1017,yo=1018,gr=1020,yl=35902,bl=35899,El=1021,Tl=1022,cn=1023,_r=1026,vr=1027,Al=1028,bo=1029,Eo=1030,To=1031,Ao=1033,oa=33776,ca=33777,la=33778,ua=33779,Is=35840,Us=35841,Ns=35842,Fs=35843,Os=36196,Bs=37492,zs=37496,Vs=37808,Gs=37809,Hs=37810,ks=37811,Ws=37812,Xs=37813,qs=37814,Ys=37815,$s=37816,Ks=37817,Zs=37818,js=37819,Js=37820,Qs=37821,eo=36492,to=36494,no=36495,io=36283,ro=36284,ao=36285,so=36286,sh=3200,oh=3201,wo=0,ch=1,Wn="",Nt="srgb",Vi="srgb-linear",fa="linear",et="srgb",pi=7680,oc=519,lh=512,uh=513,hh=514,wl=515,dh=516,fh=517,ph=518,mh=519,oo=35044,cc="300 es",mn=2e3,pa=2001;function Rl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ma(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xh(){const i=ma("canvas");return i.style.display="block",i}const lc={};function xa(...i){const e="THREE."+i.shift();console.log(e,...i)}function Pe(...i){const e="THREE."+i.shift();console.warn(e,...i)}function ft(...i){const e="THREE."+i.shift();console.error(e,...i)}function Mr(...i){const e=i.join(" ");e in lc||(lc[e]=!0,Pe(...i))}function gh(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uc=1234567;const hr=Math.PI/180,Sr=180/Math.PI;function Cn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function Ro(i,e){return(i%e+e)%e}function _h(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function vh(i,e,t){return i!==e?(t-i)/(e-i):0}function dr(i,e,t){return(1-t)*i+t*e}function Mh(i,e,t,n){return dr(i,e,1-Math.exp(-t*n))}function Sh(i,e=1){return e-Math.abs(Ro(i,e*2)-e)}function yh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function bh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Eh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Th(i,e){return i+Math.random()*(e-i)}function Ah(i){return i*(.5-Math.random())}function wh(i){i!==void 0&&(uc=i);let e=uc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rh(i){return i*hr}function Ch(i){return i*Sr}function Ph(i){return(i&i-1)===0&&i!==0}function Lh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Dh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ih(i,e,t,n,r){const a=Math.cos,s=Math.sin,o=a(t/2),c=s(t/2),l=a((e+n)/2),u=s((e+n)/2),h=a((e-n)/2),f=s((e-n)/2),p=a((n-e)/2),x=s((n-e)/2);switch(r){case"XYX":i.set(o*u,c*h,c*f,o*l);break;case"YZY":i.set(c*f,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*f,o*u,o*l);break;case"XZX":i.set(o*u,c*x,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*x,o*l);break;case"ZYZ":i.set(c*x,c*p,o*u,o*l);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function on(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function je(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ze={DEG2RAD:hr,RAD2DEG:Sr,generateUUID:Cn,clamp:We,euclideanModulo:Ro,mapLinear:_h,inverseLerp:vh,lerp:dr,damp:Mh,pingpong:Sh,smoothstep:yh,smootherstep:bh,randInt:Eh,randFloat:Th,randFloatSpread:Ah,seededRandom:wh,degToRad:Rh,radToDeg:Ch,isPowerOfTwo:Ph,ceilPowerOfTwo:Lh,floorPowerOfTwo:Dh,setQuaternionFromProperEuler:Ih,normalize:je,denormalize:on};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],f=a[s+0],p=a[s+1],x=a[s+2],v=a[s+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=v;return}if(h!==v||c!==f||l!==p||u!==x){let m=c*f+l*p+u*x+h*v;m<0&&(f=-f,p=-p,x=-x,v=-v,m=-m);let d=1-o;if(m<.9995){const A=Math.acos(m),E=Math.sin(A);d=Math.sin(d*A)/E,o=Math.sin(o*A)/E,c=c*d+f*o,l=l*d+p*o,u=u*d+x*o,h=h*d+v*o}else{c=c*d+f*o,l=l*d+p*o,u=u*d+x*o,h=h*d+v*o;const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=a[s],f=a[s+1],p=a[s+2],x=a[s+3];return e[t]=o*x+u*h+c*p-l*f,e[t+1]=c*x+u*f+l*h-o*p,e[t+2]=l*x+u*p+o*f-c*h,e[t+3]=u*x-o*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(a/2),f=c(n/2),p=c(r/2),x=c(a/2);switch(s){case"XYZ":this._x=f*u*h+l*p*x,this._y=l*p*h-f*u*x,this._z=l*u*x+f*p*h,this._w=l*u*h-f*p*x;break;case"YXZ":this._x=f*u*h+l*p*x,this._y=l*p*h-f*u*x,this._z=l*u*x-f*p*h,this._w=l*u*h+f*p*x;break;case"ZXY":this._x=f*u*h-l*p*x,this._y=l*p*h+f*u*x,this._z=l*u*x+f*p*h,this._w=l*u*h-f*p*x;break;case"ZYX":this._x=f*u*h-l*p*x,this._y=l*p*h+f*u*x,this._z=l*u*x-f*p*h,this._w=l*u*h+f*p*x;break;case"YZX":this._x=f*u*h+l*p*x,this._y=l*p*h+f*u*x,this._z=l*u*x-f*p*h,this._w=l*u*h-f*p*x;break;case"XZY":this._x=f*u*h-l*p*x,this._y=l*p*h-f*u*x,this._z=l*u*x+f*p*h,this._w=l*u*h+f*p*x;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(a-l)*p,this._z=(s-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(a+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(a-l)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(s-r)/p,this._x=(a+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+s*o+r*l-a*c,this._y=r*u+s*c+a*o-n*l,this._z=a*u+s*l+n*c-r*o,this._w=s*u-n*o-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,a=-a,s=-s,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+a*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+a*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*r-o*n),u=2*(o*t-a*r),h=2*(a*n-s*t);return this.x=t+c*l+s*h-o*u,this.y=n+c*u+o*l-a*h,this.z=r+c*h+a*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=r*c-a*o,this.y=a*s-n*c,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return za.copy(this).projectOnVector(e),this.sub(za)}reflect(e){return this.sub(za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new P,hc=new Tr;class Fe{constructor(e,t,n,r,a,s,o,c,l){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l)}set(e,t,n,r,a,s,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=c,u[6]=n,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],x=n[8],v=r[0],m=r[3],d=r[6],A=r[1],E=r[4],w=r[7],D=r[2],T=r[5],L=r[8];return a[0]=s*v+o*A+c*D,a[3]=s*m+o*E+c*T,a[6]=s*d+o*w+c*L,a[1]=l*v+u*A+h*D,a[4]=l*m+u*E+h*T,a[7]=l*d+u*w+h*L,a[2]=f*v+p*A+x*D,a[5]=f*m+p*E+x*T,a[8]=f*d+p*w+x*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*o*l-n*a*u+n*o*c+r*a*l-r*s*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*s-o*l,f=o*c-u*a,p=l*a-s*c,x=t*h+n*f+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=h*v,e[1]=(r*l-u*n)*v,e[2]=(o*n-r*s)*v,e[3]=f*v,e[4]=(u*t-r*c)*v,e[5]=(r*a-o*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(s*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-r*l,r*c,-r*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Va.makeScale(e,t)),this}rotate(e){return this.premultiply(Va.makeRotation(-e)),this}translate(e,t){return this.premultiply(Va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Va=new Fe,dc=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fc=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uh(){const i={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===et&&(r.r=Pn(r.r),r.g=Pn(r.g),r.b=Pn(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===et&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Wn?fa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Mr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Mr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vi]:{primaries:e,whitePoint:n,transfer:fa,toXYZ:dc,fromXYZ:fc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:et,toXYZ:dc,fromXYZ:fc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}const qe=Uh();function Pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let mi;class Nh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{mi===void 0&&(mi=ma("canvas")),mi.width=e.width,mi.height=e.height;const r=mi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ma("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Pn(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pn(t[n]/255)*255):t[n]=Pn(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fh=0;class Co{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Cn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Ga(r[s].image)):a.push(Ga(r[s]))}else a=Ga(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let Oh=0;const Ha=new P;class Lt extends Wi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Tn,r=Tn,a=Qt,s=oi,o=cn,c=gn,l=Lt.DEFAULT_ANISOTROPY,u=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Cn(),this.name="",this.source=new Co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ha).x}get height(){return this.source.getSize(Ha).y}get depth(){return this.source.getSize(Ha).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ls:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case Ds:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ls:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case Ds:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=vl;Lt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,r=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],x=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,w=(p+1)/2,D=(d+1)/2,T=(u+f)/4,L=(h+v)/4,G=(x+m)/4;return E>w&&E>D?E<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(E),r=T/n,a=L/n):w>D?w<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(w),n=T/r,a=G/r):D<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(D),n=L/a,r=G/a),this.set(n,r,a,t),this}let A=Math.sqrt((m-x)*(m-x)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-x)/A,this.y=(h-v)/A,this.z=(f-u)/A,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bh extends Wi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const r={width:e,height:t,depth:n.depth},a=new Lt(r);this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Co(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends Bh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Cl extends Lt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zh extends Lt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,nn):nn.fromBufferAttribute(a,s),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(e.matrixWorld),this.union(Nr)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),Fr.subVectors(this.max,er),xi.subVectors(e.a,er),gi.subVectors(e.b,er),_i.subVectors(e.c,er),Fn.subVectors(gi,xi),On.subVectors(_i,gi),jn.subVectors(xi,_i);let t=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-jn.z,jn.y,Fn.z,0,-Fn.x,On.z,0,-On.x,jn.z,0,-jn.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-jn.y,jn.x,0];return!ka(t,xi,gi,_i,Fr)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,xi,gi,_i,Fr))?!1:(Or.crossVectors(Fn,On),t=[Or.x,Or.y,Or.z],ka(t,xi,gi,_i,Fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _n=[new P,new P,new P,new P,new P,new P,new P,new P],nn=new P,Nr=new Xi,xi=new P,gi=new P,_i=new P,Fn=new P,On=new P,jn=new P,er=new P,Fr=new P,Or=new P,Jn=new P;function ka(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){Jn.fromArray(i,a);const o=r.x*Math.abs(Jn.x)+r.y*Math.abs(Jn.y)+r.z*Math.abs(Jn.z),c=e.dot(Jn),l=t.dot(Jn),u=n.dot(Jn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Vh=new Xi,tr=new P,Wa=new P;class Ar{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vh.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);const t=tr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(tr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(Wa)),this.expandByPoint(tr.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const vn=new P,Xa=new P,Br=new P,Bn=new P,qa=new P,zr=new P,Ya=new P;class wa{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Xa.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(Xa);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Br),o=Bn.dot(this.direction),c=-Bn.dot(Br),l=Bn.lengthSq(),u=Math.abs(1-s*s);let h,f,p,x;if(u>0)if(h=s*c-o,f=s*o-c,x=a*u,h>=0)if(f>=-x)if(f<=x){const v=1/u;h*=v,f*=v,p=h*(h+s*f+2*o)+f*(s*h+f+2*c)+l}else f=a,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*c)+l;else f=-a,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-x?(h=Math.max(0,-(-s*a+o)),f=h>0?-a:Math.min(Math.max(-a,-c),a),p=-h*h+f*(f+2*c)+l):f<=x?(h=0,f=Math.min(Math.max(-a,-c),a),p=f*(f+2*c)+l):(h=Math.max(0,-(s*a+o)),f=h>0?a:Math.min(Math.max(-a,-c),a),p=-h*h+f*(f+2*c)+l);else f=s>0?-a:a,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Xa).addScaledVector(Br,f),p}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const n=vn.dot(this.direction),r=vn.dot(vn)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(a=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(a=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,n,r,a){qa.subVectors(t,e),zr.subVectors(n,e),Ya.crossVectors(qa,zr);let s=this.direction.dot(Ya),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Bn.subVectors(this.origin,e);const c=o*this.direction.dot(zr.crossVectors(Bn,zr));if(c<0)return null;const l=o*this.direction.dot(qa.cross(Bn));if(l<0||c+l>s)return null;const u=-o*Bn.dot(Ya);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,r,a,s,o,c,l,u,h,f,p,x,v,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l,u,h,f,p,x,v,m)}set(e,t,n,r,a,s,o,c,l,u,h,f,p,x,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=a,d[5]=s,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=x,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/vi.setFromMatrixColumn(e,0).length(),a=1/vi.setFromMatrixColumn(e,1).length(),s=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const f=s*u,p=s*h,x=o*u,v=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+x*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=x+p*l,t[10]=s*c}else if(e.order==="YXZ"){const f=c*u,p=c*h,x=l*u,v=l*h;t[0]=f+v*o,t[4]=x*o-p,t[8]=s*l,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=p*o-x,t[6]=v+f*o,t[10]=s*c}else if(e.order==="ZXY"){const f=c*u,p=c*h,x=l*u,v=l*h;t[0]=f-v*o,t[4]=-s*h,t[8]=x+p*o,t[1]=p+x*o,t[5]=s*u,t[9]=v-f*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const f=s*u,p=s*h,x=o*u,v=o*h;t[0]=c*u,t[4]=x*l-p,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=p*l-x,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const f=s*c,p=s*l,x=o*c,v=o*l;t[0]=c*u,t[4]=v-f*h,t[8]=x*h+p,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+x,t[10]=f-v*h}else if(e.order==="XZY"){const f=s*c,p=s*l,x=o*c,v=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=s*u,t[9]=p*h-x,t[2]=x*h-p,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gh,e,Hh)}lookAt(e,t,n){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),zn.crossVectors(n,Xt),zn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),zn.crossVectors(n,Xt)),zn.normalize(),Vr.crossVectors(Xt,zn),r[0]=zn.x,r[4]=Vr.x,r[8]=Xt.x,r[1]=zn.y,r[5]=Vr.y,r[9]=Xt.y,r[2]=zn.z,r[6]=Vr.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],x=n[2],v=n[6],m=n[10],d=n[14],A=n[3],E=n[7],w=n[11],D=n[15],T=r[0],L=r[4],G=r[8],y=r[12],S=r[1],I=r[5],B=r[9],O=r[13],Y=r[2],k=r[6],$=r[10],J=r[14],W=r[3],ne=r[7],re=r[11],_e=r[15];return a[0]=s*T+o*S+c*Y+l*W,a[4]=s*L+o*I+c*k+l*ne,a[8]=s*G+o*B+c*$+l*re,a[12]=s*y+o*O+c*J+l*_e,a[1]=u*T+h*S+f*Y+p*W,a[5]=u*L+h*I+f*k+p*ne,a[9]=u*G+h*B+f*$+p*re,a[13]=u*y+h*O+f*J+p*_e,a[2]=x*T+v*S+m*Y+d*W,a[6]=x*L+v*I+m*k+d*ne,a[10]=x*G+v*B+m*$+d*re,a[14]=x*y+v*O+m*J+d*_e,a[3]=A*T+E*S+w*Y+D*W,a[7]=A*L+E*I+w*k+D*ne,a[11]=A*G+E*B+w*$+D*re,a[15]=A*y+E*O+w*J+D*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],x=e[3],v=e[7],m=e[11],d=e[15];return x*(+a*c*h-r*l*h-a*o*f+n*l*f+r*o*p-n*c*p)+v*(+t*c*p-t*l*f+a*s*f-r*s*p+r*l*u-a*c*u)+m*(+t*l*h-t*o*p-a*s*h+n*s*p+a*o*u-n*l*u)+d*(-r*o*u-t*c*h+t*o*f+r*s*h-n*s*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],x=e[12],v=e[13],m=e[14],d=e[15],A=h*m*l-v*f*l+v*c*p-o*m*p-h*c*d+o*f*d,E=x*f*l-u*m*l-x*c*p+s*m*p+u*c*d-s*f*d,w=u*v*l-x*h*l+x*o*p-s*v*p-u*o*d+s*h*d,D=x*h*c-u*v*c-x*o*f+s*v*f+u*o*m-s*h*m,T=t*A+n*E+r*w+a*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/T;return e[0]=A*L,e[1]=(v*f*a-h*m*a-v*r*p+n*m*p+h*r*d-n*f*d)*L,e[2]=(o*m*a-v*c*a+v*r*l-n*m*l-o*r*d+n*c*d)*L,e[3]=(h*c*a-o*f*a-h*r*l+n*f*l+o*r*p-n*c*p)*L,e[4]=E*L,e[5]=(u*m*a-x*f*a+x*r*p-t*m*p-u*r*d+t*f*d)*L,e[6]=(x*c*a-s*m*a-x*r*l+t*m*l+s*r*d-t*c*d)*L,e[7]=(s*f*a-u*c*a+u*r*l-t*f*l-s*r*p+t*c*p)*L,e[8]=w*L,e[9]=(x*h*a-u*v*a-x*n*p+t*v*p+u*n*d-t*h*d)*L,e[10]=(s*v*a-x*o*a+x*n*l-t*v*l-s*n*d+t*o*d)*L,e[11]=(u*o*a-s*h*a-u*n*l+t*h*l+s*n*p-t*o*p)*L,e[12]=D*L,e[13]=(u*v*r-x*h*r+x*n*f-t*v*f-u*n*m+t*h*m)*L,e[14]=(x*o*r-s*v*r-x*n*c+t*v*c+s*n*m-t*o*m)*L,e[15]=(s*h*r-u*o*r+u*n*c-t*h*c-s*n*f+t*o*f)*L,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,c=e.z,l=a*s,u=a*o;return this.set(l*s+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*s,0,l*c-r*o,u*c+r*s,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,u=s+s,h=o+o,f=a*l,p=a*u,x=a*h,v=s*u,m=s*h,d=o*h,A=c*l,E=c*u,w=c*h,D=n.x,T=n.y,L=n.z;return r[0]=(1-(v+d))*D,r[1]=(p+w)*D,r[2]=(x-E)*D,r[3]=0,r[4]=(p-w)*T,r[5]=(1-(f+d))*T,r[6]=(m+A)*T,r[7]=0,r[8]=(x+E)*L,r[9]=(m-A)*L,r[10]=(1-(f+v))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=vi.set(r[0],r[1],r[2]).length();const s=vi.set(r[4],r[5],r[6]).length(),o=vi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],rn.copy(this);const l=1/a,u=1/s,h=1/o;return rn.elements[0]*=l,rn.elements[1]*=l,rn.elements[2]*=l,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,t.setFromRotationMatrix(rn),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s,o=mn,c=!1){const l=this.elements,u=2*a/(t-e),h=2*a/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r);let x,v;if(c)x=a/(s-a),v=s*a/(s-a);else if(o===mn)x=-(s+a)/(s-a),v=-2*s*a/(s-a);else if(o===pa)x=-s/(s-a),v=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=mn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r);let x,v;if(c)x=1/(s-a),v=s/(s-a);else if(o===mn)x=-2/(s-a),v=-(s+a)/(s-a);else if(o===pa)x=-1/(s-a),v=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=x,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vi=new P,rn=new at,Gh=new P(0,0,0),Hh=new P(1,1,1),zn=new P,Vr=new P,Xt=new P,pc=new at,mc=new Tr;class ln{constructor(e=0,t=0,n=0,r=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-We(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mc.setFromEuler(this),this.setFromQuaternion(mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class Po{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kh=0;const xc=new P,Mi=new Tr,Mn=new at,Gr=new P,nr=new P,Wh=new P,Xh=new Tr,gc=new P(1,0,0),_c=new P(0,1,0),vc=new P(0,0,1),Mc={type:"added"},qh={type:"removed"},Si={type:"childadded",child:null},$a={type:"childremoved",child:null};class wt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new P,t=new ln,n=new Tr,r=new P(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Fe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(gc,e)}rotateY(e){return this.rotateOnAxis(_c,e)}rotateZ(e){return this.rotateOnAxis(vc,e)}translateOnAxis(e,t){return xc.copy(e).applyQuaternion(this.quaternion),this.position.add(xc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gc,e)}translateY(e){return this.translateOnAxis(_c,e)}translateZ(e){return this.translateOnAxis(vc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gr.copy(e):Gr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(nr,Gr,this.up):Mn.lookAt(Gr,nr,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),Mi.setFromRotationMatrix(Mn),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mc),Si.child=e,this.dispatchEvent(Si),Si.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qh),$a.child=e,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mc),Si.child=e,this.dispatchEvent(Si),Si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,Wh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Xh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];a(e.shapes,h)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),h=s(e.shapes),f=s(e.skeletons),p=s(e.animations),x=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=r,n;function s(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}wt.DEFAULT_UP=new P(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new P,Sn=new P,Ka=new P,yn=new P,yi=new P,bi=new P,Sc=new P,Za=new P,ja=new P,Ja=new P,Qa=new tt,es=new tt,ts=new tt;class Jt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),an.subVectors(e,t),r.cross(an);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){an.subVectors(r,t),Sn.subVectors(n,t),Ka.subVectors(e,t);const s=an.dot(an),o=an.dot(Sn),c=an.dot(Ka),l=Sn.dot(Sn),u=Sn.dot(Ka),h=s*l-o*o;if(h===0)return a.set(0,0,0),null;const f=1/h,p=(l*c-o*u)*f,x=(s*u-o*c)*f;return a.set(1-p-x,x,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,n,r,a,s,o,c){return this.getBarycoord(e,t,n,r,yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,yn.x),c.addScaledVector(s,yn.y),c.addScaledVector(o,yn.z),c)}static getInterpolatedAttribute(e,t,n,r,a,s){return Qa.setScalar(0),es.setScalar(0),ts.setScalar(0),Qa.fromBufferAttribute(e,t),es.fromBufferAttribute(e,n),ts.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Qa,a.x),s.addScaledVector(es,a.y),s.addScaledVector(ts,a.z),s}static isFrontFacing(e,t,n,r){return an.subVectors(n,t),Sn.subVectors(e,t),an.cross(Sn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),an.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;yi.subVectors(r,n),bi.subVectors(a,n),Za.subVectors(e,n);const c=yi.dot(Za),l=bi.dot(Za);if(c<=0&&l<=0)return t.copy(n);ja.subVectors(e,r);const u=yi.dot(ja),h=bi.dot(ja);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(n).addScaledVector(yi,s);Ja.subVectors(e,a);const p=yi.dot(Ja),x=bi.dot(Ja);if(x>=0&&p<=x)return t.copy(a);const v=p*l-c*x;if(v<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(bi,o);const m=u*x-p*h;if(m<=0&&h-u>=0&&p-x>=0)return Sc.subVectors(a,r),o=(h-u)/(h-u+(p-x)),t.copy(r).addScaledVector(Sc,o);const d=1/(m+v+f);return s=v*d,o=f*d,t.copy(n).addScaledVector(yi,s).addScaledVector(bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function ns(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=qe.workingColorSpace){if(e=Ro(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=ns(s,a,e+1/3),this.g=ns(s,a,e),this.b=ns(s,a,e-1/3)}return qe.colorSpaceToWorking(this,r),this}setStyle(e,t=Nt){function n(a){a!==void 0&&parseFloat(a)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=Pl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return qe.workingToColorSpace(Ct.copy(this),e),Math.round(We(Ct.r*255,0,255))*65536+Math.round(We(Ct.g*255,0,255))*256+Math.round(We(Ct.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Ct.copy(this),t);const n=Ct.r,r=Ct.g,a=Ct.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let c,l;const u=(o+s)/2;if(o===s)c=0,l=0;else{const h=s-o;switch(l=u<=.5?h/(s+o):h/(2-s-o),s){case n:c=(r-a)/h+(r<a?6:0);break;case r:c=(a-n)/h+2;break;case a:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Nt){qe.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,r=Ct.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(Hr);const n=dr(Vn.h,Hr.h,t),r=dr(Vn.s,Hr.s,t),a=dr(Vn.l,Hr.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new De;De.NAMES=Pl;let Yh=0;class Nn extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=Ii,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ms,this.blendDst=Ss,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ms&&(n.blendSrc=this.blendSrc),this.blendDst!==Ss&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mt extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new P,kr=new Ue;let $h=0;class Ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$h++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oo,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=on(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=on(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=on(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=on(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=on(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),r=je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),r=je(r,this.array),a=je(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oo&&(e.usage=this.usage),e}}class Ll extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dl extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _t extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Kh=0;const jt=new at,is=new wt,Ei=new P,qt=new Xi,ir=new Xi,Et=new P;class St extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rl(e)?Dl:Ll)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Fe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return is.lookAt(e),is.updateMatrix(),this.applyMatrix4(is.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new _t(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];qt.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(qt.min,ir.min),qt.expandByPoint(Et),Et.addVectors(qt.max,ir.max),qt.expandByPoint(Et)):(qt.expandByPoint(ir.min),qt.expandByPoint(ir.max))}qt.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)Et.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Et));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Et.fromBufferAttribute(o,l),c&&(Ei.fromBufferAttribute(e,l),Et.add(Ei)),r=Math.max(r,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let G=0;G<n.count;G++)o[G]=new P,c[G]=new P;const l=new P,u=new P,h=new P,f=new Ue,p=new Ue,x=new Ue,v=new P,m=new P;function d(G,y,S){l.fromBufferAttribute(n,G),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,S),f.fromBufferAttribute(a,G),p.fromBufferAttribute(a,y),x.fromBufferAttribute(a,S),u.sub(l),h.sub(l),p.sub(f),x.sub(f);const I=1/(p.x*x.y-x.x*p.y);isFinite(I)&&(v.copy(u).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(I),o[G].add(v),o[y].add(v),o[S].add(v),c[G].add(m),c[y].add(m),c[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let G=0,y=A.length;G<y;++G){const S=A[G],I=S.start,B=S.count;for(let O=I,Y=I+B;O<Y;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const E=new P,w=new P,D=new P,T=new P;function L(G){D.fromBufferAttribute(r,G),T.copy(D);const y=o[G];E.copy(y),E.sub(D.multiplyScalar(D.dot(y))).normalize(),w.crossVectors(T,y);const I=w.dot(c[G])<0?-1:1;s.setXYZW(G,E.x,E.y,E.z,I)}for(let G=0,y=A.length;G<y;++G){const S=A[G],I=S.start,B=S.count;for(let O=I,Y=I+B;O<Y;O+=3)L(e.getX(O+0)),L(e.getX(O+1)),L(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new P,a=new P,s=new P,o=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),u.subVectors(s,a),h.subVectors(r,a),u.cross(h),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,a),h.subVectors(r,a),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let p=0,x=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*u;for(let d=0;d<u;d++)f[x++]=l[p++]}return new Ot(f,u,h)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const a=e.morphAttributes;for(const l in a){const u=[],h=a[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yc=new at,Qn=new wa,Wr=new Ar,bc=new P,Xr=new P,qr=new P,Yr=new P,rs=new P,$r=new P,Ec=new P,Kr=new P;class it extends wt{constructor(e=new St,t=new Mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){$r.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=o[c],h=a[c];u!==0&&(rs.fromBufferAttribute(h,e),s?$r.addScaledVector(rs,u):$r.addScaledVector(rs.sub(t),u))}t.add($r)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(a),Qn.copy(e.ray).recast(e.near),!(Wr.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Wr,bc)===null||Qn.origin.distanceToSquared(bc)>(e.far-e.near)**2))&&(yc.copy(a).invert(),Qn.copy(e.ray).applyMatrix4(yc),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,v=f.length;x<v;x++){const m=f[x],d=s[m.materialIndex],A=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let w=A,D=E;w<D;w+=3){const T=o.getX(w),L=o.getX(w+1),G=o.getX(w+2);r=Zr(this,d,e,n,l,u,h,T,L,G),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=x,d=v;m<d;m+=3){const A=o.getX(m),E=o.getX(m+1),w=o.getX(m+2);r=Zr(this,s,e,n,l,u,h,A,E,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let x=0,v=f.length;x<v;x++){const m=f[x],d=s[m.materialIndex],A=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let w=A,D=E;w<D;w+=3){const T=w,L=w+1,G=w+2;r=Zr(this,d,e,n,l,u,h,T,L,G),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=x,d=v;m<d;m+=3){const A=m,E=m+1,w=m+2;r=Zr(this,s,e,n,l,u,h,A,E,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Zh(i,e,t,n,r,a,s,o){let c;if(e.side===Gt?c=n.intersectTriangle(s,a,r,!0,o):c=n.intersectTriangle(r,a,s,e.side===$n,o),c===null)return null;Kr.copy(o),Kr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Kr);return l<t.near||l>t.far?null:{distance:l,point:Kr.clone(),object:i}}function Zr(i,e,t,n,r,a,s,o,c,l){i.getVertexPosition(o,Xr),i.getVertexPosition(c,qr),i.getVertexPosition(l,Yr);const u=Zh(i,e,t,n,Xr,qr,Yr,Ec);if(u){const h=new P;Jt.getBarycoord(Ec,Xr,qr,Yr,h),r&&(u.uv=Jt.getInterpolatedAttribute(r,o,c,l,h,new Ue)),a&&(u.uv1=Jt.getInterpolatedAttribute(a,o,c,l,h,new Ue)),s&&(u.normal=Jt.getInterpolatedAttribute(s,o,c,l,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new P,materialIndex:0};Jt.getNormal(Xr,qr,Yr,f.normal),u.face=f,u.barycoord=h}return u}class wr extends St{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const c=[],l=[],u=[],h=[];let f=0,p=0;x("z","y","x",-1,-1,n,t,e,s,a,0),x("z","y","x",1,-1,n,t,-e,s,a,1),x("x","z","y",1,1,e,n,t,r,s,2),x("x","z","y",1,-1,e,n,-t,r,s,3),x("x","y","z",1,-1,e,t,n,r,a,4),x("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(h,2));function x(v,m,d,A,E,w,D,T,L,G,y){const S=w/L,I=D/G,B=w/2,O=D/2,Y=T/2,k=L+1,$=G+1;let J=0,W=0;const ne=new P;for(let re=0;re<$;re++){const _e=re*I-O;for(let Be=0;Be<k;Be++){const Ye=Be*S-B;ne[v]=Ye*A,ne[m]=_e*E,ne[d]=Y,l.push(ne.x,ne.y,ne.z),ne[v]=0,ne[m]=0,ne[d]=T>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(Be/L),h.push(1-re/G),J+=1}}for(let re=0;re<G;re++)for(let _e=0;_e<L;_e++){const Be=f+_e+k*re,Ye=f+_e+k*(re+1),$e=f+(_e+1)+k*(re+1),Ke=f+(_e+1)+k*re;c.push(Be,Ye,Ke),c.push(Ye,$e,Ke),W+=6}o.addGroup(p,W,y),p+=W,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ut(i){const e={};for(let t=0;t<i.length;t++){const n=Gi(i[t]);for(const r in n)e[r]=n[r]}return e}function jh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Il(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Jh={clone:Gi,merge:Ut};var Qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qh,this.fragmentShader=ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=jh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ul extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new P,Tc=new Ue,Ac=new Ue;class Yt extends Ul{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,Tc,Ac),t.subVectors(Ac,Tc)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/c,t-=s.offsetY*n/l,r*=s.width/c,n*=s.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ti=-90,Ai=1;class td extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yt(Ti,Ai,e,t);r.layers=this.layers,this.add(r);const a=new Yt(Ti,Ai,e,t);a.layers=this.layers,this.add(a);const s=new Yt(Ti,Ai,e,t);s.layers=this.layers,this.add(s);const o=new Yt(Ti,Ai,e,t);o.layers=this.layers,this.add(o);const c=new Yt(Ti,Ai,e,t);c.layers=this.layers,this.add(c);const l=new Yt(Ti,Ai,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,c]=t;for(const l of t)this.remove(l);if(e===mn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Nl extends Lt{constructor(e=[],t=Bi,n,r,a,s,o,c,l,u){super(e,t,n,r,a,s,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nd extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Nl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wr(5,5,5),a=new Ln({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Rn});a.uniforms.tEquirect.value=t;const s=new it(r,a),o=t.minFilter;return t.minFilter===oi&&(t.minFilter=Qt),new td(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}class $t extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const id={type:"move"};class as{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,x=.005;l.inputState.pinching&&f>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(id)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Lo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=t}clone(){return new Lo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rd extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ad{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=oo,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const It=new P;class ga{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=on(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=je(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=on(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=on(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=on(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=on(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),r=je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),r=je(r,this.array),a=je(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){xa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ga(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){xa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ra extends Nn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let wi;const rr=new P,Ri=new P,Ci=new P,Pi=new Ue,ar=new Ue,Fl=new at,jr=new P,sr=new P,Jr=new P,wc=new Ue,ss=new Ue,Rc=new Ue;class Do extends wt{constructor(e=new Ra){if(super(),this.isSprite=!0,this.type="Sprite",wi===void 0){wi=new St;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ad(t,5);wi.setIndex([0,1,2,0,2,3]),wi.setAttribute("position",new ga(n,3,0,!1)),wi.setAttribute("uv",new ga(n,2,3,!1))}this.geometry=wi,this.material=e,this.center=new Ue(.5,.5),this.count=1}raycast(e,t){e.camera===null&&ft('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ri.setFromMatrixScale(this.matrixWorld),Fl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ci.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ri.multiplyScalar(-Ci.z);const n=this.material.rotation;let r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));const s=this.center;Qr(jr.set(-.5,-.5,0),Ci,s,Ri,r,a),Qr(sr.set(.5,-.5,0),Ci,s,Ri,r,a),Qr(Jr.set(.5,.5,0),Ci,s,Ri,r,a),wc.set(0,0),ss.set(1,0),Rc.set(1,1);let o=e.ray.intersectTriangle(jr,sr,Jr,!1,rr);if(o===null&&(Qr(sr.set(-.5,.5,0),Ci,s,Ri,r,a),ss.set(0,1),o=e.ray.intersectTriangle(jr,Jr,sr,!1,rr),o===null))return;const c=e.ray.origin.distanceTo(rr);c<e.near||c>e.far||t.push({distance:c,point:rr.clone(),uv:Jt.getInterpolation(rr,jr,sr,Jr,wc,ss,Rc,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Qr(i,e,t,n,r,a){Pi.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(ar.x=a*Pi.x-r*Pi.y,ar.y=r*Pi.x+a*Pi.y):ar.copy(Pi),i.copy(e),i.x+=ar.x,i.y+=ar.y,i.applyMatrix4(Fl)}class sd extends Lt{constructor(e=null,t=1,n=1,r,a,s,o,c,l=Kt,u=Kt,h,f){super(null,s,o,c,l,u,r,a,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const os=new P,od=new P,cd=new Fe;class Hn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=os.subVectors(n,t).cross(od.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(os),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cd.getNormalMatrix(e),r=this.coplanarPoint(os).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new Ar,ld=new Ue(.5,.5),ea=new P;class Io{constructor(e=new Hn,t=new Hn,n=new Hn,r=new Hn,a=new Hn,s=new Hn){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mn,n=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],c=a[2],l=a[3],u=a[4],h=a[5],f=a[6],p=a[7],x=a[8],v=a[9],m=a[10],d=a[11],A=a[12],E=a[13],w=a[14],D=a[15];if(r[0].setComponents(l-s,p-u,d-x,D-A).normalize(),r[1].setComponents(l+s,p+u,d+x,D+A).normalize(),r[2].setComponents(l+o,p+h,d+v,D+E).normalize(),r[3].setComponents(l-o,p-h,d-v,D-E).normalize(),n)r[4].setComponents(c,f,m,w).normalize(),r[5].setComponents(l-c,p-f,d-m,D-w).normalize();else if(r[4].setComponents(l-c,p-f,d-m,D-w).normalize(),t===mn)r[5].setComponents(l+c,p+f,d+m,D+w).normalize();else if(t===pa)r[5].setComponents(c,f,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){ei.center.set(0,0,0);const t=ld.distanceTo(e.center);return ei.radius=.7071067811865476+t,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ea.x=r.normal.x>0?e.max.x:e.min.x,ea.y=r.normal.y>0?e.max.y:e.min.y,ea.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class co extends Nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _a=new P,va=new P,Cc=new at,or=new wa,ta=new Ar,cs=new P,Pc=new P;class Ol extends wt{constructor(e=new St,t=new co){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)_a.fromBufferAttribute(t,r-1),va.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=_a.distanceTo(va);e.setAttribute("lineDistance",new _t(n,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(r),ta.radius+=a,e.ray.intersectsSphere(ta)===!1)return;Cc.copy(r).invert(),or.copy(e.ray).applyMatrix4(Cc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,s.start),x=Math.min(u.count,s.start+s.count);for(let v=p,m=x-1;v<m;v+=l){const d=u.getX(v),A=u.getX(v+1),E=na(this,e,or,c,d,A,v);E&&t.push(E)}if(this.isLineLoop){const v=u.getX(x-1),m=u.getX(p),d=na(this,e,or,c,v,m,x-1);d&&t.push(d)}}else{const p=Math.max(0,s.start),x=Math.min(f.count,s.start+s.count);for(let v=p,m=x-1;v<m;v+=l){const d=na(this,e,or,c,v,v+1,v);d&&t.push(d)}if(this.isLineLoop){const v=na(this,e,or,c,x-1,p,x-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function na(i,e,t,n,r,a,s){const o=i.geometry.attributes.position;if(_a.fromBufferAttribute(o,r),va.fromBufferAttribute(o,a),t.distanceSqToSegment(_a,va,cs,Pc)>n)return;cs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(cs);if(!(l<e.near||l>e.far))return{distance:l,point:Pc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Lc=new P,Dc=new P;class ud extends Ol{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)Lc.fromBufferAttribute(t,r),Dc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Lc.distanceTo(Dc);e.setAttribute("lineDistance",new _t(n,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ca extends Nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ic=new at,lo=new wa,ia=new Ar,ra=new P;class Uo extends wt{constructor(e=new St,t=new Ca){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(r),ia.radius+=a,e.ray.intersectsSphere(ia)===!1)return;Ic.copy(r).invert(),lo.copy(e.ray).applyMatrix4(Ic);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,s.start),p=Math.min(l.count,s.start+s.count);for(let x=f,v=p;x<v;x++){const m=l.getX(x);ra.fromBufferAttribute(h,m),Uc(ra,m,c,r,e,t,this)}}else{const f=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let x=f,v=p;x<v;x++)ra.fromBufferAttribute(h,x),Uc(ra,x,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Uc(i,e,t,n,r,a,s){const o=lo.distanceSqToPoint(i);if(o<t){const c=new P;lo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Pa extends Lt{constructor(e,t,n,r,a,s,o,c,l){super(e,t,n,r,a,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bl extends Lt{constructor(e,t,n=ci,r,a,s,o=Kt,c=Kt,l,u=_r,h=1){if(u!==_r&&u!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,a,s,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Co(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class zl extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class No extends St{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const a=[],s=[],o=[],c=[],l=new P,u=new Ue;s.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const p=n+h/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),s.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(s[f]/e+1)/2,u.y=(s[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)a.push(h,h+1,0);this.setIndex(a),this.setAttribute("position",new _t(s,3)),this.setAttribute("normal",new _t(o,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Rr extends St{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,f=t/c,p=[],x=[],v=[],m=[];for(let d=0;d<u;d++){const A=d*f-s;for(let E=0;E<l;E++){const w=E*h-a;x.push(w,-A,0),v.push(0,0,1),m.push(E/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let A=0;A<o;A++){const E=A+l*d,w=A+l*(d+1),D=A+1+l*(d+1),T=A+1+l*d;p.push(E,w,T),p.push(w,D,T)}this.setIndex(p),this.setAttribute("position",new _t(x,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ht extends St{constructor(e=.5,t=1,n=32,r=1,a=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:a,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let h=e;const f=(t-e)/r,p=new P,x=new Ue;for(let v=0;v<=r;v++){for(let m=0;m<=n;m++){const d=a+m/n*s;p.x=h*Math.cos(d),p.y=h*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),x.x=(p.x/t+1)/2,x.y=(p.y/t+1)/2,u.push(x.x,x.y)}h+=f}for(let v=0;v<r;v++){const m=v*(n+1);for(let d=0;d<n;d++){const A=d+m,E=A,w=A+n+1,D=A+n+2,T=A+1;o.push(E,w,T),o.push(w,D,T)}}this.setIndex(o),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Cr extends St{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(s+o,Math.PI);let l=0;const u=[],h=new P,f=new P,p=[],x=[],v=[],m=[];for(let d=0;d<=n;d++){const A=[],E=d/n;let w=0;d===0&&s===0?w=.5/t:d===n&&c===Math.PI&&(w=-.5/t);for(let D=0;D<=t;D++){const T=D/t;h.x=-e*Math.cos(r+T*a)*Math.sin(s+E*o),h.y=e*Math.cos(s+E*o),h.z=e*Math.sin(r+T*a)*Math.sin(s+E*o),x.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(T+w,1-E),A.push(l++)}u.push(A)}for(let d=0;d<n;d++)for(let A=0;A<t;A++){const E=u[d][A+1],w=u[d][A],D=u[d+1][A],T=u[d+1][A+1];(d!==0||s>0)&&p.push(E,w,T),(d!==n-1||c<Math.PI)&&p.push(w,D,T)}this.setIndex(p),this.setAttribute("position",new _t(x,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qi extends St{constructor(e=1,t=.4,n=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:a},n=Math.floor(n),r=Math.floor(r);const s=[],o=[],c=[],l=[],u=new P,h=new P,f=new P;for(let p=0;p<=n;p++)for(let x=0;x<=r;x++){const v=x/r*a,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(x/r),l.push(p/n)}for(let p=1;p<=n;p++)for(let x=1;x<=r;x++){const v=(r+1)*p+x-1,m=(r+1)*(p-1)+x-1,d=(r+1)*(p-1)+x,A=(r+1)*p+x;s.push(v,m,A),s.push(m,d,A)}this.setIndex(s),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class hd extends Nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dd extends Nn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new De(16777215),this.specular=new De(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fd extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pd extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Vl extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ls=new at,Nc=new P,Fc=new P;class md{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nc),Fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fc),t.updateMatrixWorld(),ls.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ls,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ls)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Oc=new at,cr=new P,us=new P;class xd extends md{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),cr.setFromMatrixPosition(e.matrixWorld),n.position.copy(cr),us.copy(n.position),us.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(us),n.updateMatrixWorld(),r.makeTranslation(-cr.x,-cr.y,-cr.z),Oc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oc,n.coordinateSystem,n.reversedDepth)}}class gd extends Vl{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new xd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _d extends Ul{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vd extends Vl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Md extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Sd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Bc=new at;class yd{constructor(e,t,n=0,r=1/0){this.ray=new wa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ft("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bc),this}intersectObject(e,t=!0,n=[]){return uo(e,this,n,t),n.sort(zc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)uo(e[r],this,n,t);return n.sort(zc),n}}function zc(i,e){return i.distance-e.distance}function uo(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const a=i.children;for(let s=0,o=a.length;s<o;s++)uo(a[s],e,t,!0)}}function Vc(i,e,t,n){const r=bd(n);switch(t){case El:return i*e;case Al:return i*e/r.components*r.byteLength;case bo:return i*e/r.components*r.byteLength;case Eo:return i*e*2/r.components*r.byteLength;case To:return i*e*2/r.components*r.byteLength;case Tl:return i*e*3/r.components*r.byteLength;case cn:return i*e*4/r.components*r.byteLength;case Ao:return i*e*4/r.components*r.byteLength;case oa:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case la:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Us:case Fs:return Math.max(i,16)*Math.max(e,8)/4;case Is:case Ns:return Math.max(i,8)*Math.max(e,8)/2;case Os:case Bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Hs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ks:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ws:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xs:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ys:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $s:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ks:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Zs:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case js:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Js:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case eo:case to:case no:return Math.ceil(i/4)*Math.ceil(e/4)*16;case io:case ro:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ao:case so:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bd(i){switch(i){case gn:case Ml:return{byteLength:1,components:1};case xr:case Sl:case ki:return{byteLength:2,components:1};case So:case yo:return{byteLength:2,components:4};case ci:case Mo:case An:return{byteLength:4,components:1};case yl:case bl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_o}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_o);function Gl(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Ed(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<h.length;p++){const x=h[f],v=h[p];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,x=h.length;p<x;p++){const v=h[p];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:a,update:s}}var Td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ad=`#ifdef USE_ALPHAHASH
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
#endif`,wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ld=`#ifdef USE_AOMAP
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
#endif`,Dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Id=`#ifdef USE_BATCHING
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
#endif`,Ud=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Od=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bd=`#ifdef USE_IRIDESCENCE
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
#endif`,zd=`#ifdef USE_BUMPMAP
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
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$d=`#define PI 3.141592653589793
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
} // validated`,Kd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zd=`vec3 transformedNormal = objectNormal;
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
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",nf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rf=`#ifdef USE_ENVMAP
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
#endif`,af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ff=`#ifdef USE_GRADIENTMAP
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
}`,pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gf=`uniform bool receiveShadow;
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
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bf=`PhysicalMaterial material;
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
#endif`,Ef=`uniform sampler2D dfgLUT;
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
}`,Tf=`
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
#endif`,Af=`#if defined( RE_IndirectDiffuse )
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
#endif`,wf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Df=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,If=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nf=`#if defined( USE_POINTS_UV )
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
#endif`,Ff=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Of=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`#ifdef USE_MORPHTARGETS
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
#endif`,Hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$f=`#ifdef USE_NORMALMAP
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
#endif`,Kf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ep=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,up=`float getShadowMask() {
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
}`,hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dp=`#ifdef USE_SKINNING
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
#endif`,fp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pp=`#ifdef USE_SKINNING
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
#endif`,mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_p=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vp=`#ifdef USE_TRANSMISSION
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
#endif`,Mp=`#ifdef USE_TRANSMISSION
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ap=`uniform sampler2D t2D;
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
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`#include <common>
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
}`,Dp=`#if DEPTH_PACKING == 3200
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
}`,Ip=`#define DISTANCE
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
}`,Up=`#define DISTANCE
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`uniform float scale;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,zp=`#include <common>
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
}`,Vp=`uniform vec3 diffuse;
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
}`,Gp=`#define LAMBERT
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
}`,Hp=`#define LAMBERT
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
}`,kp=`#define MATCAP
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
}`,Wp=`#define MATCAP
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
}`,Xp=`#define NORMAL
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
}`,qp=`#define NORMAL
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
}`,Yp=`#define PHONG
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
}`,$p=`#define PHONG
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
}`,Kp=`#define STANDARD
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
}`,Zp=`#define STANDARD
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
}`,jp=`#define TOON
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
}`,Jp=`#define TOON
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
}`,Qp=`uniform float size;
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
}`,e0=`uniform vec3 diffuse;
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
}`,t0=`#include <common>
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
}`,n0=`uniform vec3 color;
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
}`,i0=`uniform float rotation;
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
}`,r0=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Td,alphahash_pars_fragment:Ad,alphamap_fragment:wd,alphamap_pars_fragment:Rd,alphatest_fragment:Cd,alphatest_pars_fragment:Pd,aomap_fragment:Ld,aomap_pars_fragment:Dd,batching_pars_vertex:Id,batching_vertex:Ud,begin_vertex:Nd,beginnormal_vertex:Fd,bsdfs:Od,iridescence_fragment:Bd,bumpmap_pars_fragment:zd,clipping_planes_fragment:Vd,clipping_planes_pars_fragment:Gd,clipping_planes_pars_vertex:Hd,clipping_planes_vertex:kd,color_fragment:Wd,color_pars_fragment:Xd,color_pars_vertex:qd,color_vertex:Yd,common:$d,cube_uv_reflection_fragment:Kd,defaultnormal_vertex:Zd,displacementmap_pars_vertex:jd,displacementmap_vertex:Jd,emissivemap_fragment:Qd,emissivemap_pars_fragment:ef,colorspace_fragment:tf,colorspace_pars_fragment:nf,envmap_fragment:rf,envmap_common_pars_fragment:af,envmap_pars_fragment:sf,envmap_pars_vertex:of,envmap_physical_pars_fragment:_f,envmap_vertex:cf,fog_vertex:lf,fog_pars_vertex:uf,fog_fragment:hf,fog_pars_fragment:df,gradientmap_pars_fragment:ff,lightmap_pars_fragment:pf,lights_lambert_fragment:mf,lights_lambert_pars_fragment:xf,lights_pars_begin:gf,lights_toon_fragment:vf,lights_toon_pars_fragment:Mf,lights_phong_fragment:Sf,lights_phong_pars_fragment:yf,lights_physical_fragment:bf,lights_physical_pars_fragment:Ef,lights_fragment_begin:Tf,lights_fragment_maps:Af,lights_fragment_end:wf,logdepthbuf_fragment:Rf,logdepthbuf_pars_fragment:Cf,logdepthbuf_pars_vertex:Pf,logdepthbuf_vertex:Lf,map_fragment:Df,map_pars_fragment:If,map_particle_fragment:Uf,map_particle_pars_fragment:Nf,metalnessmap_fragment:Ff,metalnessmap_pars_fragment:Of,morphinstance_vertex:Bf,morphcolor_vertex:zf,morphnormal_vertex:Vf,morphtarget_pars_vertex:Gf,morphtarget_vertex:Hf,normal_fragment_begin:kf,normal_fragment_maps:Wf,normal_pars_fragment:Xf,normal_pars_vertex:qf,normal_vertex:Yf,normalmap_pars_fragment:$f,clearcoat_normal_fragment_begin:Kf,clearcoat_normal_fragment_maps:Zf,clearcoat_pars_fragment:jf,iridescence_pars_fragment:Jf,opaque_fragment:Qf,packing:ep,premultiplied_alpha_fragment:tp,project_vertex:np,dithering_fragment:ip,dithering_pars_fragment:rp,roughnessmap_fragment:ap,roughnessmap_pars_fragment:sp,shadowmap_pars_fragment:op,shadowmap_pars_vertex:cp,shadowmap_vertex:lp,shadowmask_pars_fragment:up,skinbase_vertex:hp,skinning_pars_vertex:dp,skinning_vertex:fp,skinnormal_vertex:pp,specularmap_fragment:mp,specularmap_pars_fragment:xp,tonemapping_fragment:gp,tonemapping_pars_fragment:_p,transmission_fragment:vp,transmission_pars_fragment:Mp,uv_pars_fragment:Sp,uv_pars_vertex:yp,uv_vertex:bp,worldpos_vertex:Ep,background_vert:Tp,background_frag:Ap,backgroundCube_vert:wp,backgroundCube_frag:Rp,cube_vert:Cp,cube_frag:Pp,depth_vert:Lp,depth_frag:Dp,distanceRGBA_vert:Ip,distanceRGBA_frag:Up,equirect_vert:Np,equirect_frag:Fp,linedashed_vert:Op,linedashed_frag:Bp,meshbasic_vert:zp,meshbasic_frag:Vp,meshlambert_vert:Gp,meshlambert_frag:Hp,meshmatcap_vert:kp,meshmatcap_frag:Wp,meshnormal_vert:Xp,meshnormal_frag:qp,meshphong_vert:Yp,meshphong_frag:$p,meshphysical_vert:Kp,meshphysical_frag:Zp,meshtoon_vert:jp,meshtoon_frag:Jp,points_vert:Qp,points_frag:e0,shadow_vert:t0,shadow_frag:n0,sprite_vert:i0,sprite_frag:r0},oe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},dn={basic:{uniforms:Ut([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ut([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new De(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ut([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ut([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ut([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new De(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ut([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ut([oe.points,oe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ut([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ut([oe.common,oe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ut([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ut([oe.sprite,oe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Ut([oe.common,oe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Ut([oe.lights,oe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};dn.physical={uniforms:Ut([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const aa={r:0,b:0,g:0},ti=new ln,a0=new at;function s0(i,e,t,n,r,a,s){const o=new De(0);let c=a===!0?0:1,l,u,h=null,f=0,p=null;function x(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?t:e).get(w)),w}function v(E){let w=!1;const D=x(E);D===null?d(o,c):D&&D.isColor&&(d(D,1),w=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,w){const D=x(w);D&&(D.isCubeTexture||D.mapping===Aa)?(u===void 0&&(u=new it(new wr(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Gi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,L,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ti.copy(w.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(a0.makeRotationFromEuler(ti)),u.material.toneMapped=qe.getTransfer(D.colorSpace)!==et,(h!==D||f!==D.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=D,f=D.version,p=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(l===void 0&&(l=new it(new Rr(2,2),new Ln({name:"BackgroundMaterial",uniforms:Gi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=D,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=qe.getTransfer(D.colorSpace)!==et,D.matrixAutoUpdate===!0&&D.updateMatrix(),l.material.uniforms.uvTransform.value.copy(D.matrix),(h!==D||f!==D.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=D,f=D.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function d(E,w){E.getRGB(aa,Il(i)),n.buffers.color.setClear(aa.r,aa.g,aa.b,w,s)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,w=1){o.set(E),c=w,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,d(o,c)},render:v,addToRenderList:m,dispose:A}}function o0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let a=r,s=!1;function o(S,I,B,O,Y){let k=!1;const $=h(O,B,I);a!==$&&(a=$,l(a.object)),k=p(S,O,B,Y),k&&x(S,O,B,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(k||s)&&(s=!1,w(S,I,B,O),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,I,B){const O=B.wireframe===!0;let Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let k=Y[I.id];k===void 0&&(k={},Y[I.id]=k);let $=k[O];return $===void 0&&($=f(c()),k[O]=$),$}function f(S){const I=[],B=[],O=[];for(let Y=0;Y<t;Y++)I[Y]=0,B[Y]=0,O[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,I,B,O){const Y=a.attributes,k=I.attributes;let $=0;const J=B.getAttributes();for(const W in J)if(J[W].location>=0){const re=Y[W];let _e=k[W];if(_e===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor)),re===void 0||re.attribute!==_e||_e&&re.data!==_e.data)return!0;$++}return a.attributesNum!==$||a.index!==O}function x(S,I,B,O){const Y={},k=I.attributes;let $=0;const J=B.getAttributes();for(const W in J)if(J[W].location>=0){let re=k[W];re===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(re=S.instanceColor));const _e={};_e.attribute=re,re&&re.data&&(_e.data=re.data),Y[W]=_e,$++}a.attributes=Y,a.attributesNum=$,a.index=O}function v(){const S=a.newAttributes;for(let I=0,B=S.length;I<B;I++)S[I]=0}function m(S){d(S,0)}function d(S,I){const B=a.newAttributes,O=a.enabledAttributes,Y=a.attributeDivisors;B[S]=1,O[S]===0&&(i.enableVertexAttribArray(S),O[S]=1),Y[S]!==I&&(i.vertexAttribDivisor(S,I),Y[S]=I)}function A(){const S=a.newAttributes,I=a.enabledAttributes;for(let B=0,O=I.length;B<O;B++)I[B]!==S[B]&&(i.disableVertexAttribArray(B),I[B]=0)}function E(S,I,B,O,Y,k,$){$===!0?i.vertexAttribIPointer(S,I,B,Y,k):i.vertexAttribPointer(S,I,B,O,Y,k)}function w(S,I,B,O){v();const Y=O.attributes,k=B.getAttributes(),$=I.defaultAttributeValues;for(const J in k){const W=k[J];if(W.location>=0){let ne=Y[J];if(ne===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),ne!==void 0){const re=ne.normalized,_e=ne.itemSize,Be=e.get(ne);if(Be===void 0)continue;const Ye=Be.buffer,$e=Be.type,Ke=Be.bytesPerElement,q=$e===i.INT||$e===i.UNSIGNED_INT||ne.gpuType===Mo;if(ne.isInterleavedBufferAttribute){const j=ne.data,fe=j.stride,Ne=ne.offset;if(j.isInstancedInterleavedBuffer){for(let Me=0;Me<W.locationSize;Me++)d(W.location+Me,j.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Me=0;Me<W.locationSize;Me++)m(W.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let Me=0;Me<W.locationSize;Me++)E(W.location+Me,_e/W.locationSize,$e,re,fe*Ke,(Ne+_e/W.locationSize*Me)*Ke,q)}else{if(ne.isInstancedBufferAttribute){for(let j=0;j<W.locationSize;j++)d(W.location+j,ne.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let j=0;j<W.locationSize;j++)m(W.location+j);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let j=0;j<W.locationSize;j++)E(W.location+j,_e/W.locationSize,$e,re,_e*Ke,_e/W.locationSize*j*Ke,q)}}else if($!==void 0){const re=$[J];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(W.location,re);break;case 3:i.vertexAttrib3fv(W.location,re);break;case 4:i.vertexAttrib4fv(W.location,re);break;default:i.vertexAttrib1fv(W.location,re)}}}}A()}function D(){G();for(const S in n){const I=n[S];for(const B in I){const O=I[B];for(const Y in O)u(O[Y].object),delete O[Y];delete I[B]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const B in I){const O=I[B];for(const Y in O)u(O[Y].object),delete O[Y];delete I[B]}delete n[S.id]}function L(S){for(const I in n){const B=n[I];if(B[S.id]===void 0)continue;const O=B[S.id];for(const Y in O)u(O[Y].object),delete O[Y];delete B[S.id]}}function G(){y(),s=!0,a!==r&&(a=r,l(a.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:G,resetDefaultState:y,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function c0(i,e,t){let n;function r(l){n=l}function a(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function s(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x];t.update(p,n,1)}function c(l,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<l.length;x++)s(l[x],u[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let x=0;for(let v=0;v<h;v++)x+=u[v]*f[v];t.update(x,n,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function l0(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(L){return!(L!==cn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const G=L===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==gn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==An&&!G)}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Pe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=x>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:w,vertexTextures:D,maxSamples:T}}function u0(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new Hn,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const x=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!r||x===null||x.length===0||a&&!m)a?u(null):l();else{const A=a?0:n,E=A*4;let w=d.clippingState||null;c.value=w,w=u(x,f,E,p);for(let D=0;D!==E;++D)w[D]=t[D];d.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,x){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,x!==!0||m===null){const d=p+v*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,w=p;E!==v;++E,w+=4)s.copy(h[E]).applyMatrix4(A,o),s.normal.toArray(m,w),m[w+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function h0(i){let e=new WeakMap;function t(s,o){return o===Cs?s.mapping=Bi:o===Ps&&(s.mapping=zi),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===Cs||o===Ps)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new nd(c.height);return l.fromEquirectangularTexture(i,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const Xn=4,Gc=[.125,.215,.35,.446,.526,.582],si=20,d0=256,lr=new _d,Hc=new De;let hs=null,ds=0,fs=0,ps=!1;const f0=new P;class kc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:s=256,position:o=f0}=a;hs=this._renderer.getRenderTarget(),ds=this._renderer.getActiveCubeFace(),fs=this._renderer.getActiveMipmapLevel(),ps=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hs,ds,fs),this._renderer.xr.enabled=ps,e.scissorTest=!1,Li(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hs=this._renderer.getRenderTarget(),ds=this._renderer.getActiveCubeFace(),fs=this._renderer.getActiveMipmapLevel(),ps=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:ki,format:cn,colorSpace:Vi,depthBuffer:!1},r=Wc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wc(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=p0(a)),this._blurMaterial=x0(a,e,t),this._ggxMaterial=m0(a,e,t)}return r}_compileMaterial(e){const t=new it(new St,e);this._renderer.compile(t,lr)}_sceneToCubeUV(e,t,n,r,a){const c=new Yt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Hc),h.toneMapping=qn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new it(new wr,new Mt({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let d=!1;const A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,d=!0):(m.color.copy(Hc),d=!0);for(let E=0;E<6;E++){const w=E%3;w===0?(c.up.set(0,l[E],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+u[E],a.y,a.z)):w===1?(c.up.set(0,0,l[E]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+u[E],a.z)):(c.up.set(0,l[E],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+u[E]));const D=this._cubeSize;Li(r,w*D,E>2?D:0,D,D),h.setRenderTarget(r),d&&h.render(v,c),h.render(e,c)}h.toneMapping=p,h.autoClear=f,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Bi||e.mapping===zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xc());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;Li(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,lr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;const c=s.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=.05+l*.95,p=h*f,{_lodMax:x}=this,v=this._sizeLods[n],m=3*v*(n>x-Xn?n-x+Xn:0),d=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=x-t,Li(a,m,d,3*v,2*v),r.setRenderTarget(a),r.render(o,lr),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=x-n,Li(e,m,d,3*v,2*v),r.setRenderTarget(e),r.render(o,lr)}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&ft("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=l;const f=l.uniforms,p=this._sizeLods[n]-1,x=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*si-1),v=a/x,m=isFinite(a)?1+Math.floor(u*v):si;m>si&&Pe(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`);const d=[];let A=0;for(let L=0;L<si;++L){const G=L/v,y=Math.exp(-G*G/2);d.push(y),L===0?A+=y:L<m&&(A+=2*y)}for(let L=0;L<d.length;L++)d[L]=d[L]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=x,f.mipInt.value=E-n;const w=this._sizeLods[r],D=3*w*(r>E-Xn?r-E+Xn:0),T=4*(this._cubeSize-w);Li(t,D,T,3*w,2*w),c.setRenderTarget(t),c.render(h,lr)}}function p0(i){const e=[],t=[],n=[];let r=i;const a=i-Xn+1+Gc.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);e.push(o);let c=1/o;s>i-Xn?c=Gc[s-i+Xn-1]:s===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,x=6,v=3,m=2,d=1,A=new Float32Array(v*x*p),E=new Float32Array(m*x*p),w=new Float32Array(d*x*p);for(let T=0;T<p;T++){const L=T%3*2/3-1,G=T>2?0:-1,y=[L,G,0,L+2/3,G,0,L+2/3,G+1,0,L,G,0,L+2/3,G+1,0,L,G+1,0];A.set(y,v*x*T),E.set(f,m*x*T);const S=[T,T,T,T,T,T];w.set(S,d*x*T)}const D=new St;D.setAttribute("position",new Ot(A,v)),D.setAttribute("uv",new Ot(E,m)),D.setAttribute("faceIndex",new Ot(w,d)),n.push(new it(D,null)),r>Xn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Wc(i,e,t){const n=new li(i,e,t);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Li(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function m0(i,e,t){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:d0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:La(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function x0(i,e,t){const n=new Float32Array(si),r=new P(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:La(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Xc(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:La(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function qc(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function La(){return`

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
	`}function g0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Cs||c===Ps,u=c===Bi||c===zi;if(l||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new kc(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new kc(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",a),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function _0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Mr("WebGLRenderer: "+n+" extension not supported."),r}}}function v0(i,e,t,n){const r={},a=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",s),delete r[f.id];const p=a.get(f);p&&(e.remove(p),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(h){const f=[],p=h.index,x=h.attributes.position;let v=0;if(p!==null){const A=p.array;v=p.version;for(let E=0,w=A.length;E<w;E+=3){const D=A[E+0],T=A[E+1],L=A[E+2];f.push(D,T,T,L,L,D)}}else if(x!==void 0){const A=x.array;v=x.version;for(let E=0,w=A.length/3-1;E<w;E+=3){const D=E+0,T=E+1,L=E+2;f.push(D,T,T,L,L,D)}}else return;const m=new(Rl(f)?Dl:Ll)(f,1);m.version=v;const d=a.get(h);d&&e.remove(d),a.set(h,m)}function u(h){const f=a.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return a.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function M0(i,e,t){let n;function r(f){n=f}let a,s;function o(f){a=f.type,s=f.bytesPerElement}function c(f,p){i.drawElements(n,p,a,f*s),t.update(p,n,1)}function l(f,p,x){x!==0&&(i.drawElementsInstanced(n,p,a,f*s,x),t.update(p,n,x))}function u(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,f,0,x);let m=0;for(let d=0;d<x;d++)m+=p[d];t.update(m,n,1)}function h(f,p,x,v){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/s,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,a,f,0,v,0,x);let d=0;for(let A=0;A<x;A++)d+=p[A]*v[A];t.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function S0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:ft("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function y0(i,e,t){const n=new WeakMap,r=new tt;function a(s,o,c){const l=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let S=function(){G.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let w=0;x===!0&&(w=1),v===!0&&(w=2),m===!0&&(w=3);let D=o.attributes.position.count*w,T=1;D>e.maxTextureSize&&(T=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const L=new Float32Array(D*T*4*h),G=new Cl(L,D,T,h);G.type=An,G.needsUpdate=!0;const y=w*4;for(let I=0;I<h;I++){const B=d[I],O=A[I],Y=E[I],k=D*T*4*I;for(let $=0;$<B.count;$++){const J=$*y;x===!0&&(r.fromBufferAttribute(B,$),L[k+J+0]=r.x,L[k+J+1]=r.y,L[k+J+2]=r.z,L[k+J+3]=0),v===!0&&(r.fromBufferAttribute(O,$),L[k+J+4]=r.x,L[k+J+5]=r.y,L[k+J+6]=r.z,L[k+J+7]=0),m===!0&&(r.fromBufferAttribute(Y,$),L[k+J+8]=r.x,L[k+J+9]=r.y,L[k+J+10]=r.z,L[k+J+11]=Y.itemSize===4?r.w:1)}}f={count:h,texture:G,size:new Ue(D,T)},n.set(o,f),o.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let x=0;for(let m=0;m<l.length;m++)x+=l[m];const v=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function b0(i,e,t,n){let r=new WeakMap;function a(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function s(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:s}}const Hl=new Lt,Yc=new Bl(1,1),kl=new Cl,Wl=new zh,Xl=new Nl,$c=[],Kc=[],Zc=new Float32Array(16),jc=new Float32Array(9),Jc=new Float32Array(4);function Yi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=$c[r];if(a===void 0&&(a=new Float32Array(r),$c[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Da(i,e){let t=Kc[e];t===void 0&&(t=new Int32Array(e),Kc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function E0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function T0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function A0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function w0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function R0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;Jc.set(n),i.uniformMatrix2fv(this.addr,!1,Jc),bt(t,n)}}function C0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;jc.set(n),i.uniformMatrix3fv(this.addr,!1,jc),bt(t,n)}}function P0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;Zc.set(n),i.uniformMatrix4fv(this.addr,!1,Zc),bt(t,n)}}function L0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function D0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function I0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function U0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function N0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function F0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function O0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function B0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function z0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Yc.compareFunction=wl,a=Yc):a=Hl,t.setTexture2D(e||a,r)}function V0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Wl,r)}function G0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Xl,r)}function H0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||kl,r)}function k0(i){switch(i){case 5126:return E0;case 35664:return T0;case 35665:return A0;case 35666:return w0;case 35674:return R0;case 35675:return C0;case 35676:return P0;case 5124:case 35670:return L0;case 35667:case 35671:return D0;case 35668:case 35672:return I0;case 35669:case 35673:return U0;case 5125:return N0;case 36294:return F0;case 36295:return O0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return G0;case 36289:case 36303:case 36311:case 36292:return H0}}function W0(i,e){i.uniform1fv(this.addr,e)}function X0(i,e){const t=Yi(e,this.size,2);i.uniform2fv(this.addr,t)}function q0(i,e){const t=Yi(e,this.size,3);i.uniform3fv(this.addr,t)}function Y0(i,e){const t=Yi(e,this.size,4);i.uniform4fv(this.addr,t)}function $0(i,e){const t=Yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function K0(i,e){const t=Yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Z0(i,e){const t=Yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function j0(i,e){i.uniform1iv(this.addr,e)}function J0(i,e){i.uniform2iv(this.addr,e)}function Q0(i,e){i.uniform3iv(this.addr,e)}function em(i,e){i.uniform4iv(this.addr,e)}function tm(i,e){i.uniform1uiv(this.addr,e)}function nm(i,e){i.uniform2uiv(this.addr,e)}function im(i,e){i.uniform3uiv(this.addr,e)}function rm(i,e){i.uniform4uiv(this.addr,e)}function am(i,e,t){const n=this.cache,r=e.length,a=Da(t,r);yt(n,a)||(i.uniform1iv(this.addr,a),bt(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Hl,a[s])}function sm(i,e,t){const n=this.cache,r=e.length,a=Da(t,r);yt(n,a)||(i.uniform1iv(this.addr,a),bt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Wl,a[s])}function om(i,e,t){const n=this.cache,r=e.length,a=Da(t,r);yt(n,a)||(i.uniform1iv(this.addr,a),bt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Xl,a[s])}function cm(i,e,t){const n=this.cache,r=e.length,a=Da(t,r);yt(n,a)||(i.uniform1iv(this.addr,a),bt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||kl,a[s])}function lm(i){switch(i){case 5126:return W0;case 35664:return X0;case 35665:return q0;case 35666:return Y0;case 35674:return $0;case 35675:return K0;case 35676:return Z0;case 5124:case 35670:return j0;case 35667:case 35671:return J0;case 35668:case 35672:return Q0;case 35669:case 35673:return em;case 5125:return tm;case 36294:return nm;case 36295:return im;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return am;case 35679:case 36299:case 36307:return sm;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return cm}}class um{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=k0(t.type)}}class hm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lm(t.type)}}class dm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const ms=/(\w+)(\])?(\[|\.)?/g;function Qc(i,e){i.seq.push(e),i.map[e.id]=e}function fm(i,e,t){const n=i.name,r=n.length;for(ms.lastIndex=0;;){const a=ms.exec(n),s=ms.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===r){Qc(t,l===void 0?new um(o,i,e):new hm(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new dm(o),Qc(t,h)),t=h}}}class ha{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);fm(a,s,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function el(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const pm=37297;let mm=0;function xm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const tl=new Fe;function gm(i){qe._getMatrix(tl,qe.workingColorSpace,i);const e=`mat3( ${tl.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case fa:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function nl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+xm(i.getShaderSource(e),o)}else return a}function _m(i,e){const t=gm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vm(i,e){let t;switch(e){case Ju:t="Linear";break;case Qu:t="Reinhard";break;case eh:t="Cineon";break;case th:t="ACESFilmic";break;case ih:t="AgX";break;case rh:t="Neutral";break;case nh:t="Custom";break;default:Pe("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sa=new P;function Mm(){qe.getLuminanceCoefficients(sa);const i=sa.x.toFixed(4),e=sa.y.toFixed(4),t=sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function ym(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function ur(i){return i!==""}function il(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Em=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(i){return i.replace(Em,Am)}const Tm=new Map;function Am(i,e){let t=Oe[e];if(t===void 0){const n=Tm.get(e);if(n!==void 0)t=Oe[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ho(t)}const wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function al(i){return i.replace(wm,Rm)}function Rm(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function sl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Cm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_l?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function Pm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bi:case zi:e="ENVMAP_TYPE_CUBE";break;case Aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lm(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===zi&&(e="ENVMAP_MODE_REFRACTION"),e}function Dm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vo:e="ENVMAP_BLENDING_MULTIPLY";break;case Zu:e="ENVMAP_BLENDING_MIX";break;case ju:e="ENVMAP_BLENDING_ADD";break}return e}function Im(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Um(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=Cm(t),l=Pm(t),u=Lm(t),h=Dm(t),f=Im(t),p=Sm(t),x=ym(a),v=r.createProgram();let m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ur).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ur).join(`
`),d.length>0&&(d+=`
`)):(m=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),d=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==qn?vm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,_m("linearToOutputTexel",t.outputColorSpace),Mm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),s=ho(s),s=il(s,t),s=rl(s,t),o=ho(o),o=il(o,t),o=rl(o,t),s=al(s),o=al(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=A+m+s,w=A+d+o,D=el(r,r.VERTEX_SHADER,E),T=el(r,r.FRAGMENT_SHADER,w);r.attachShader(v,D),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function L(I){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(v)||"",O=r.getShaderInfoLog(D)||"",Y=r.getShaderInfoLog(T)||"",k=B.trim(),$=O.trim(),J=Y.trim();let W=!0,ne=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,D,T);else{const re=nl(r,D,"vertex"),_e=nl(r,T,"fragment");ft("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+re+`
`+_e)}else k!==""?Pe("WebGLProgram: Program Info Log:",k):($===""||J==="")&&(ne=!1);ne&&(I.diagnostics={runnable:W,programLog:k,vertexShader:{log:$,prefix:m},fragmentShader:{log:J,prefix:d}})}r.deleteShader(D),r.deleteShader(T),G=new ha(r,v),y=bm(r,v)}let G;this.getUniforms=function(){return G===void 0&&L(this),G};let y;this.getAttributes=function(){return y===void 0&&L(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,pm)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=T,this}let Nm=0;class Fm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Om(e),t.set(e,n)),n}}class Om{constructor(e){this.id=Nm++,this.code=e,this.usedTimes=0}}function Bm(i,e,t,n,r,a,s){const o=new Po,c=new Fm,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,S,I,B,O){const Y=B.fog,k=O.geometry,$=y.isMeshStandardMaterial?B.environment:null,J=(y.isMeshStandardMaterial?t:e).get(y.envMap||$),W=J&&J.mapping===Aa?J.image.height:null,ne=x[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&Pe("WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const re=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,_e=re!==void 0?re.length:0;let Be=0;k.morphAttributes.position!==void 0&&(Be=1),k.morphAttributes.normal!==void 0&&(Be=2),k.morphAttributes.color!==void 0&&(Be=3);let Ye,$e,Ke,q;if(ne){const Je=dn[ne];Ye=Je.vertexShader,$e=Je.fragmentShader}else Ye=y.vertexShader,$e=y.fragmentShader,c.update(y),Ke=c.getVertexShaderID(y),q=c.getFragmentShaderID(y);const j=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Ne=O.isInstancedMesh===!0,Me=O.isBatchedMesh===!0,Ve=!!y.map,At=!!y.matcap,ze=!!J,ct=!!y.aoMap,R=!!y.lightMap,Ge=!!y.bumpMap,He=!!y.normalMap,rt=!!y.displacementMap,xe=!!y.emissiveMap,ut=!!y.metalnessMap,ye=!!y.roughnessMap,Ie=y.anisotropy>0,b=y.clearcoat>0,g=y.dispersion>0,F=y.iridescence>0,X=y.sheen>0,Z=y.transmission>0,H=Ie&&!!y.anisotropyMap,ve=b&&!!y.clearcoatMap,ce=b&&!!y.clearcoatNormalMap,be=b&&!!y.clearcoatRoughnessMap,ge=F&&!!y.iridescenceMap,Q=F&&!!y.iridescenceThicknessMap,ie=X&&!!y.sheenColorMap,we=X&&!!y.sheenRoughnessMap,Te=!!y.specularMap,he=!!y.specularColorMap,Ce=!!y.specularIntensityMap,C=Z&&!!y.transmissionMap,le=Z&&!!y.thicknessMap,ae=!!y.gradientMap,se=!!y.alphaMap,ee=y.alphaTest>0,K=!!y.alphaHash,pe=!!y.extensions;let Le=qn;y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Le=i.toneMapping);const st={shaderID:ne,shaderType:y.type,shaderName:y.name,vertexShader:Ye,fragmentShader:$e,defines:y.defines,customVertexShaderID:Ke,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Me,batchingColor:Me&&O._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&O.instanceColor!==null,instancingMorph:Ne&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Vi,alphaToCoverage:!!y.alphaToCoverage,map:Ve,matcap:At,envMap:ze,envMapMode:ze&&J.mapping,envMapCubeUVHeight:W,aoMap:ct,lightMap:R,bumpMap:Ge,normalMap:He,displacementMap:f&&rt,emissiveMap:xe,normalMapObjectSpace:He&&y.normalMapType===ch,normalMapTangentSpace:He&&y.normalMapType===wo,metalnessMap:ut,roughnessMap:ye,anisotropy:Ie,anisotropyMap:H,clearcoat:b,clearcoatMap:ve,clearcoatNormalMap:ce,clearcoatRoughnessMap:be,dispersion:g,iridescence:F,iridescenceMap:ge,iridescenceThicknessMap:Q,sheen:X,sheenColorMap:ie,sheenRoughnessMap:we,specularMap:Te,specularColorMap:he,specularIntensityMap:Ce,transmission:Z,transmissionMap:C,thicknessMap:le,gradientMap:ae,opaque:y.transparent===!1&&y.blending===Ii&&y.alphaToCoverage===!1,alphaMap:se,alphaTest:ee,alphaHash:K,combine:y.combine,mapUv:Ve&&v(y.map.channel),aoMapUv:ct&&v(y.aoMap.channel),lightMapUv:R&&v(y.lightMap.channel),bumpMapUv:Ge&&v(y.bumpMap.channel),normalMapUv:He&&v(y.normalMap.channel),displacementMapUv:rt&&v(y.displacementMap.channel),emissiveMapUv:xe&&v(y.emissiveMap.channel),metalnessMapUv:ut&&v(y.metalnessMap.channel),roughnessMapUv:ye&&v(y.roughnessMap.channel),anisotropyMapUv:H&&v(y.anisotropyMap.channel),clearcoatMapUv:ve&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:ce&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(y.sheenRoughnessMap.channel),specularMapUv:Te&&v(y.specularMap.channel),specularColorMapUv:he&&v(y.specularColorMap.channel),specularIntensityMapUv:Ce&&v(y.specularIntensityMap.channel),transmissionMapUv:C&&v(y.transmissionMap.channel),thicknessMapUv:le&&v(y.thicknessMap.channel),alphaMapUv:se&&v(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(He||Ie),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(Ve||se),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:fe,skinning:O.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Be,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ve&&y.map.isVideoTexture===!0&&qe.getTransfer(y.map.colorSpace)===et,decodeVideoTextureEmissive:xe&&y.emissiveMap.isVideoTexture===!0&&qe.getTransfer(y.emissiveMap.colorSpace)===et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===gt,flipSided:y.side===Gt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:pe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&y.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}function d(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)S.push(I),S.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(A(S,y),E(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function A(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function E(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function w(y){const S=x[y.type];let I;if(S){const B=dn[S];I=Jh.clone(B.uniforms)}else I=y.uniforms;return I}function D(y,S){let I;for(let B=0,O=u.length;B<O;B++){const Y=u[B];if(Y.cacheKey===S){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new Um(i,S,y,a),u.push(I)),I}function T(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function L(y){c.remove(y)}function G(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:w,acquireProgram:D,releaseProgram:T,releaseShaderCache:L,programs:u,dispose:G}}function zm(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,c){i.get(s)[o]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function Vm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ol(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cl(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(h,f,p,x,v,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:x,renderOrder:h.renderOrder,z:v,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=x,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function o(h,f,p,x,v,m){const d=s(h,f,p,x,v,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function c(h,f,p,x,v,m){const d=s(h,f,p,x,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||Vm),n.length>1&&n.sort(f||ol),r.length>1&&r.sort(f||ol)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:c,finish:u,sort:l}}function Gm(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new cl,i.set(n,[s])):r>=a.length?(s=new cl,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Hm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new De};break;case"SpotLight":t={position:new P,direction:new P,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function km(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Wm=0;function Xm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qm(i){const e=new Hm,t=km(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const r=new P,a=new at,s=new at;function o(l){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,x=0,v=0,m=0,d=0,A=0,E=0,w=0,D=0,T=0,L=0;l.sort(Xm);for(let y=0,S=l.length;y<S;y++){const I=l[y],B=I.color,O=I.intensity,Y=I.distance,k=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=B.r*O,h+=B.g*O,f+=B.b*O;else if(I.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(I.sh.coefficients[$],O);L++}else if(I.isDirectionalLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,W=t.get(I);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=I.shadow.matrix,A++}n.directional[p]=$,p++}else if(I.isSpotLight){const $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(B).multiplyScalar(O),$.distance=Y,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,n.spot[v]=$;const J=I.shadow;if(I.map&&(n.spotLightMap[D]=I.map,D++,J.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[v]=J.matrix,I.castShadow){const W=t.get(I);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=k,w++}v++}else if(I.isRectAreaLight){const $=e.get(I);$.color.copy(B).multiplyScalar(O),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=$,m++}else if(I.isPointLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){const J=I.shadow,W=t.get(I);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,n.pointShadow[x]=W,n.pointShadowMap[x]=k,n.pointShadowMatrix[x]=I.shadow.matrix,E++}n.point[x]=$,x++}else if(I.isHemisphereLight){const $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(O),$.groundColor.copy(I.groundColor).multiplyScalar(O),n.hemi[d]=$,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const G=n.hash;(G.directionalLength!==p||G.pointLength!==x||G.spotLength!==v||G.rectAreaLength!==m||G.hemiLength!==d||G.numDirectionalShadows!==A||G.numPointShadows!==E||G.numSpotShadows!==w||G.numSpotMaps!==D||G.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=x,n.hemi.length=d,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=w+D-T,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=L,G.directionalLength=p,G.pointLength=x,G.spotLength=v,G.rectAreaLength=m,G.hemiLength=d,G.numDirectionalShadows=A,G.numPointShadows=E,G.numSpotShadows=w,G.numSpotMaps=D,G.numLightProbes=L,n.version=Wm++)}function c(l,u){let h=0,f=0,p=0,x=0,v=0;const m=u.matrixWorldInverse;for(let d=0,A=l.length;d<A;d++){const E=l[d];if(E.isDirectionalLight){const w=n.directional[h];w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),h++}else if(E.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const w=n.rectArea[x];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(m),s.identity(),a.copy(E.matrixWorld),a.premultiply(m),s.extractRotation(a),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),x++}else if(E.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const w=n.hemi[v];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function ll(i){const e=new qm(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function a(u){t.push(u)}function s(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:s}}function Ym(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new ll(i),e.set(r,[o])):a>=s.length?(o=new ll(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const $m=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Km=`uniform sampler2D shadow_pass;
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
}`;function Zm(i,e,t){let n=new Io;const r=new Ue,a=new Ue,s=new tt,o=new fd({depthPacking:oh}),c=new pd,l={},u=t.maxTextureSize,h={[$n]:Gt,[Gt]:$n,[gt]:gt},f=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:$m,fragmentShader:Km}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new St;x.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new it(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_l;let d=this.type;this.render=function(T,L,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const y=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Rn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=d!==En&&this.type===En,Y=d===En&&this.type!==En;for(let k=0,$=T.length;k<$;k++){const J=T[k],W=J.shadow;if(W===void 0){Pe("WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ne=W.getFrameExtents();if(r.multiply(ne),a.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/ne.x),r.x=a.x*ne.x,W.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/ne.y),r.y=a.y*ne.y,W.mapSize.y=a.y)),W.map===null||O===!0||Y===!0){const _e=this.type!==En?{minFilter:Kt,magFilter:Kt}:{};W.map!==null&&W.map.dispose(),W.map=new li(r.x,r.y,_e),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const re=W.getViewportCount();for(let _e=0;_e<re;_e++){const Be=W.getViewport(_e);s.set(a.x*Be.x,a.y*Be.y,a.x*Be.z,a.y*Be.w),B.viewport(s),W.updateMatrices(J,_e),n=W.getFrustum(),w(L,G,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===En&&A(W,G),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(y,S,I)};function A(T,L){const G=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new li(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(L,null,G,f,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(L,null,G,p,v,null)}function E(T,L,G,y){let S=null;const I=G.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)S=I;else if(S=G.isPointLight===!0?c:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const B=S.uuid,O=L.uuid;let Y=l[B];Y===void 0&&(Y={},l[B]=Y);let k=Y[O];k===void 0&&(k=S.clone(),Y[O]=k,L.addEventListener("dispose",D)),S=k}if(S.visible=L.visible,S.wireframe=L.wireframe,y===En?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:h[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,G.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=i.properties.get(S);B.light=G}return S}function w(T,L,G,y,S){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===En)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld);const O=e.update(T),Y=T.material;if(Array.isArray(Y)){const k=O.groups;for(let $=0,J=k.length;$<J;$++){const W=k[$],ne=Y[W.materialIndex];if(ne&&ne.visible){const re=E(T,ne,y,S);T.onBeforeShadow(i,T,L,G,O,re,W),i.renderBufferDirect(G,null,O,re,T,W),T.onAfterShadow(i,T,L,G,O,re,W)}}}else if(Y.visible){const k=E(T,Y,y,S);T.onBeforeShadow(i,T,L,G,O,k,null),i.renderBufferDirect(G,null,O,k,T,null),T.onAfterShadow(i,T,L,G,O,k,null)}}const B=T.children;for(let O=0,Y=B.length;O<Y;O++)w(B[O],L,G,y,S)}function D(T){T.target.removeEventListener("dispose",D);for(const G in l){const y=l[G],S=T.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const jm={[ys]:bs,[Es]:ws,[Ts]:Rs,[Oi]:As,[bs]:ys,[ws]:Es,[Rs]:Ts,[As]:Oi};function Jm(i,e){function t(){let C=!1;const le=new tt;let ae=null;const se=new tt(0,0,0,0);return{setMask:function(ee){ae!==ee&&!C&&(i.colorMask(ee,ee,ee,ee),ae=ee)},setLocked:function(ee){C=ee},setClear:function(ee,K,pe,Le,st){st===!0&&(ee*=Le,K*=Le,pe*=Le),le.set(ee,K,pe,Le),se.equals(le)===!1&&(i.clearColor(ee,K,pe,Le),se.copy(le))},reset:function(){C=!1,ae=null,se.set(-1,0,0,0)}}}function n(){let C=!1,le=!1,ae=null,se=null,ee=null;return{setReversed:function(K){if(le!==K){const pe=e.get("EXT_clip_control");K?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),le=K;const Le=ee;ee=null,this.setClear(Le)}},getReversed:function(){return le},setTest:function(K){K?j(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(K){ae!==K&&!C&&(i.depthMask(K),ae=K)},setFunc:function(K){if(le&&(K=jm[K]),se!==K){switch(K){case ys:i.depthFunc(i.NEVER);break;case bs:i.depthFunc(i.ALWAYS);break;case Es:i.depthFunc(i.LESS);break;case Oi:i.depthFunc(i.LEQUAL);break;case Ts:i.depthFunc(i.EQUAL);break;case As:i.depthFunc(i.GEQUAL);break;case ws:i.depthFunc(i.GREATER);break;case Rs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=K}},setLocked:function(K){C=K},setClear:function(K){ee!==K&&(le&&(K=1-K),i.clearDepth(K),ee=K)},reset:function(){C=!1,ae=null,se=null,ee=null,le=!1}}}function r(){let C=!1,le=null,ae=null,se=null,ee=null,K=null,pe=null,Le=null,st=null;return{setTest:function(Je){C||(Je?j(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(Je){le!==Je&&!C&&(i.stencilMask(Je),le=Je)},setFunc:function(Je,un,tn){(ae!==Je||se!==un||ee!==tn)&&(i.stencilFunc(Je,un,tn),ae=Je,se=un,ee=tn)},setOp:function(Je,un,tn){(K!==Je||pe!==un||Le!==tn)&&(i.stencilOp(Je,un,tn),K=Je,pe=un,Le=tn)},setLocked:function(Je){C=Je},setClear:function(Je){st!==Je&&(i.clearStencil(Je),st=Je)},reset:function(){C=!1,le=null,ae=null,se=null,ee=null,K=null,pe=null,Le=null,st=null}}}const a=new t,s=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,p=[],x=null,v=!1,m=null,d=null,A=null,E=null,w=null,D=null,T=null,L=new De(0,0,0),G=0,y=!1,S=null,I=null,B=null,O=null,Y=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,J=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),$=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),$=J>=2);let ne=null,re={};const _e=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),Ye=new tt().fromArray(_e),$e=new tt().fromArray(Be);function Ke(C,le,ae,se){const ee=new Uint8Array(4),K=i.createTexture();i.bindTexture(C,K),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pe=0;pe<ae;pe++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(le+pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return K}const q={};q[i.TEXTURE_2D]=Ke(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),j(i.DEPTH_TEST),s.setFunc(Oi),Ge(!1),He(rc),j(i.CULL_FACE),ct(Rn);function j(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function fe(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function Ne(C,le){return h[C]!==le?(i.bindFramebuffer(C,le),h[C]=le,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=le),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=le),!0):!1}function Me(C,le){let ae=p,se=!1;if(C){ae=f.get(le),ae===void 0&&(ae=[],f.set(le,ae));const ee=C.textures;if(ae.length!==ee.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let K=0,pe=ee.length;K<pe;K++)ae[K]=i.COLOR_ATTACHMENT0+K;ae.length=ee.length,se=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,se=!0);se&&i.drawBuffers(ae)}function Ve(C){return x!==C?(i.useProgram(C),x=C,!0):!1}const At={[ai]:i.FUNC_ADD,[Iu]:i.FUNC_SUBTRACT,[Uu]:i.FUNC_REVERSE_SUBTRACT};At[Nu]=i.MIN,At[Fu]=i.MAX;const ze={[Ou]:i.ZERO,[Bu]:i.ONE,[zu]:i.SRC_COLOR,[Ms]:i.SRC_ALPHA,[Xu]:i.SRC_ALPHA_SATURATE,[ku]:i.DST_COLOR,[Gu]:i.DST_ALPHA,[Vu]:i.ONE_MINUS_SRC_COLOR,[Ss]:i.ONE_MINUS_SRC_ALPHA,[Wu]:i.ONE_MINUS_DST_COLOR,[Hu]:i.ONE_MINUS_DST_ALPHA,[qu]:i.CONSTANT_COLOR,[Yu]:i.ONE_MINUS_CONSTANT_COLOR,[$u]:i.CONSTANT_ALPHA,[Ku]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(C,le,ae,se,ee,K,pe,Le,st,Je){if(C===Rn){v===!0&&(fe(i.BLEND),v=!1);return}if(v===!1&&(j(i.BLEND),v=!0),C!==Du){if(C!==m||Je!==y){if((d!==ai||w!==ai)&&(i.blendEquation(i.FUNC_ADD),d=ai,w=ai),Je)switch(C){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pt:i.blendFunc(i.ONE,i.ONE);break;case ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ft("WebGLState: Invalid blending: ",C);break}else switch(C){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ac:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sc:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",C);break}A=null,E=null,D=null,T=null,L.set(0,0,0),G=0,m=C,y=Je}return}ee=ee||le,K=K||ae,pe=pe||se,(le!==d||ee!==w)&&(i.blendEquationSeparate(At[le],At[ee]),d=le,w=ee),(ae!==A||se!==E||K!==D||pe!==T)&&(i.blendFuncSeparate(ze[ae],ze[se],ze[K],ze[pe]),A=ae,E=se,D=K,T=pe),(Le.equals(L)===!1||st!==G)&&(i.blendColor(Le.r,Le.g,Le.b,st),L.copy(Le),G=st),m=C,y=!1}function R(C,le){C.side===gt?fe(i.CULL_FACE):j(i.CULL_FACE);let ae=C.side===Gt;le&&(ae=!ae),Ge(ae),C.blending===Ii&&C.transparent===!1?ct(Rn):ct(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),s.setFunc(C.depthFunc),s.setTest(C.depthTest),s.setMask(C.depthWrite),a.setMask(C.colorWrite);const se=C.stencilWrite;o.setTest(se),se&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),xe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(C){S!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),S=C)}function He(C){C!==Cu?(j(i.CULL_FACE),C!==I&&(C===rc?i.cullFace(i.BACK):C===Pu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),I=C}function rt(C){C!==B&&($&&i.lineWidth(C),B=C)}function xe(C,le,ae){C?(j(i.POLYGON_OFFSET_FILL),(O!==le||Y!==ae)&&(i.polygonOffset(le,ae),O=le,Y=ae)):fe(i.POLYGON_OFFSET_FILL)}function ut(C){C?j(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function ye(C){C===void 0&&(C=i.TEXTURE0+k-1),ne!==C&&(i.activeTexture(C),ne=C)}function Ie(C,le,ae){ae===void 0&&(ne===null?ae=i.TEXTURE0+k-1:ae=ne);let se=re[ae];se===void 0&&(se={type:void 0,texture:void 0},re[ae]=se),(se.type!==C||se.texture!==le)&&(ne!==ae&&(i.activeTexture(ae),ne=ae),i.bindTexture(C,le||q[C]),se.type=C,se.texture=le)}function b(){const C=re[ne];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(C){C("WebGLState:",C)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(C){C("WebGLState:",C)}}function X(){try{i.texSubImage2D(...arguments)}catch(C){C("WebGLState:",C)}}function Z(){try{i.texSubImage3D(...arguments)}catch(C){C("WebGLState:",C)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(C){C("WebGLState:",C)}}function ve(){try{i.compressedTexSubImage3D(...arguments)}catch(C){C("WebGLState:",C)}}function ce(){try{i.texStorage2D(...arguments)}catch(C){C("WebGLState:",C)}}function be(){try{i.texStorage3D(...arguments)}catch(C){C("WebGLState:",C)}}function ge(){try{i.texImage2D(...arguments)}catch(C){C("WebGLState:",C)}}function Q(){try{i.texImage3D(...arguments)}catch(C){C("WebGLState:",C)}}function ie(C){Ye.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Ye.copy(C))}function we(C){$e.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),$e.copy(C))}function Te(C,le){let ae=l.get(le);ae===void 0&&(ae=new WeakMap,l.set(le,ae));let se=ae.get(C);se===void 0&&(se=i.getUniformBlockIndex(le,C.name),ae.set(C,se))}function he(C,le){const se=l.get(le).get(C);c.get(le)!==se&&(i.uniformBlockBinding(le,se,C.__bindingPointIndex),c.set(le,se))}function Ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ne=null,re={},h={},f=new WeakMap,p=[],x=null,v=!1,m=null,d=null,A=null,E=null,w=null,D=null,T=null,L=new De(0,0,0),G=0,y=!1,S=null,I=null,B=null,O=null,Y=null,Ye.set(0,0,i.canvas.width,i.canvas.height),$e.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:j,disable:fe,bindFramebuffer:Ne,drawBuffers:Me,useProgram:Ve,setBlending:ct,setMaterial:R,setFlipSided:Ge,setCullFace:He,setLineWidth:rt,setPolygonOffset:xe,setScissorTest:ut,activeTexture:ye,bindTexture:Ie,unbindTexture:b,compressedTexImage2D:g,compressedTexImage3D:F,texImage2D:ge,texImage3D:Q,updateUBOMapping:Te,uniformBlockBinding:he,texStorage2D:ce,texStorage3D:be,texSubImage2D:X,texSubImage3D:Z,compressedTexSubImage2D:H,compressedTexSubImage3D:ve,scissor:ie,viewport:we,reset:Ce}}function Qm(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ue,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(b,g){return p?new OffscreenCanvas(b,g):ma("canvas")}function v(b,g,F){let X=1;const Z=Ie(b);if((Z.width>F||Z.height>F)&&(X=F/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const H=Math.floor(X*Z.width),ve=Math.floor(X*Z.height);h===void 0&&(h=x(H,ve));const ce=g?x(H,ve):h;return ce.width=H,ce.height=ve,ce.getContext("2d").drawImage(b,0,0,H,ve),Pe("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+H+"x"+ve+")."),ce}else return"data"in b&&Pe("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function m(b){return b.generateMipmaps}function d(b){i.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(b,g,F,X,Z=!1){if(b!==null){if(i[b]!==void 0)return i[b];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let H=g;if(g===i.RED&&(F===i.FLOAT&&(H=i.R32F),F===i.HALF_FLOAT&&(H=i.R16F),F===i.UNSIGNED_BYTE&&(H=i.R8)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(H=i.R8UI),F===i.UNSIGNED_SHORT&&(H=i.R16UI),F===i.UNSIGNED_INT&&(H=i.R32UI),F===i.BYTE&&(H=i.R8I),F===i.SHORT&&(H=i.R16I),F===i.INT&&(H=i.R32I)),g===i.RG&&(F===i.FLOAT&&(H=i.RG32F),F===i.HALF_FLOAT&&(H=i.RG16F),F===i.UNSIGNED_BYTE&&(H=i.RG8)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(H=i.RG8UI),F===i.UNSIGNED_SHORT&&(H=i.RG16UI),F===i.UNSIGNED_INT&&(H=i.RG32UI),F===i.BYTE&&(H=i.RG8I),F===i.SHORT&&(H=i.RG16I),F===i.INT&&(H=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(H=i.RGB8UI),F===i.UNSIGNED_SHORT&&(H=i.RGB16UI),F===i.UNSIGNED_INT&&(H=i.RGB32UI),F===i.BYTE&&(H=i.RGB8I),F===i.SHORT&&(H=i.RGB16I),F===i.INT&&(H=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),F===i.UNSIGNED_INT&&(H=i.RGBA32UI),F===i.BYTE&&(H=i.RGBA8I),F===i.SHORT&&(H=i.RGBA16I),F===i.INT&&(H=i.RGBA32I)),g===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(H=i.R11F_G11F_B10F)),g===i.RGBA){const ve=Z?fa:qe.getTransfer(X);F===i.FLOAT&&(H=i.RGBA32F),F===i.HALF_FLOAT&&(H=i.RGBA16F),F===i.UNSIGNED_BYTE&&(H=ve===et?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function w(b,g){let F;return b?g===null||g===ci||g===gr?F=i.DEPTH24_STENCIL8:g===An?F=i.DEPTH32F_STENCIL8:g===xr&&(F=i.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ci||g===gr?F=i.DEPTH_COMPONENT24:g===An?F=i.DEPTH_COMPONENT32F:g===xr&&(F=i.DEPTH_COMPONENT16),F}function D(b,g){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Kt&&b.minFilter!==Qt?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function T(b){const g=b.target;g.removeEventListener("dispose",T),G(g),g.isVideoTexture&&u.delete(g)}function L(b){const g=b.target;g.removeEventListener("dispose",L),S(g)}function G(b){const g=n.get(b);if(g.__webglInit===void 0)return;const F=b.source,X=f.get(F);if(X){const Z=X[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(b),Object.keys(X).length===0&&f.delete(F)}n.remove(b)}function y(b){const g=n.get(b);i.deleteTexture(g.__webglTexture);const F=b.source,X=f.get(F);delete X[g.__cacheKey],s.memory.textures--}function S(b){const g=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let Z=0;Z<g.__webglFramebuffer[X].length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[X][Z]);else i.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)i.deleteFramebuffer(g.__webglFramebuffer[X]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=b.textures;for(let X=0,Z=F.length;X<Z;X++){const H=n.get(F[X]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),s.memory.textures--),n.remove(F[X])}n.remove(b)}let I=0;function B(){I=0}function O(){const b=I;return b>=r.maxTextures&&Pe("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),I+=1,b}function Y(b){const g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function k(b,g){const F=n.get(b);if(b.isVideoTexture&&ut(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){const X=b.image;if(X===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,b,g);return}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function $(b,g){const F=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){q(F,b,g);return}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function J(b,g){const F=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){q(F,b,g);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function W(b,g){const F=n.get(b);if(b.version>0&&F.__version!==b.version){j(F,b,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}const ne={[Ls]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[Ds]:i.MIRRORED_REPEAT},re={[Kt]:i.NEAREST,[ah]:i.NEAREST_MIPMAP_NEAREST,[Ur]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[Ba]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},_e={[lh]:i.NEVER,[mh]:i.ALWAYS,[uh]:i.LESS,[wl]:i.LEQUAL,[hh]:i.EQUAL,[ph]:i.GEQUAL,[dh]:i.GREATER,[fh]:i.NOTEQUAL};function Be(b,g){if(g.type===An&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Qt||g.magFilter===Ba||g.magFilter===Ur||g.magFilter===oi||g.minFilter===Qt||g.minFilter===Ba||g.minFilter===Ur||g.minFilter===oi)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,ne[g.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ne[g.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ne[g.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,re[g.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,re[g.minFilter]),g.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,_e[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Kt||g.minFilter!==Ur&&g.minFilter!==oi||g.type===An&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ye(b,g){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",T));const X=g.source;let Z=f.get(X);Z===void 0&&(Z={},f.set(X,Z));const H=Y(g);if(H!==b.__cacheKey){Z[H]===void 0&&(Z[H]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,F=!0),Z[H].usedTimes++;const ve=Z[b.__cacheKey];ve!==void 0&&(Z[b.__cacheKey].usedTimes--,ve.usedTimes===0&&y(g)),b.__cacheKey=H,b.__webglTexture=Z[H].texture}return F}function $e(b,g,F){return Math.floor(Math.floor(b/F)/g)}function Ke(b,g,F,X){const H=b.updateRanges;if(H.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,F,X,g.data);else{H.sort((Q,ie)=>Q.start-ie.start);let ve=0;for(let Q=1;Q<H.length;Q++){const ie=H[ve],we=H[Q],Te=ie.start+ie.count,he=$e(we.start,g.width,4),Ce=$e(ie.start,g.width,4);we.start<=Te+1&&he===Ce&&$e(we.start+we.count-1,g.width,4)===he?ie.count=Math.max(ie.count,we.start+we.count-ie.start):(++ve,H[ve]=we)}H.length=ve+1;const ce=i.getParameter(i.UNPACK_ROW_LENGTH),be=i.getParameter(i.UNPACK_SKIP_PIXELS),ge=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Q=0,ie=H.length;Q<ie;Q++){const we=H[Q],Te=Math.floor(we.start/4),he=Math.ceil(we.count/4),Ce=Te%g.width,C=Math.floor(Te/g.width),le=he,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),i.pixelStorei(i.UNPACK_SKIP_ROWS,C),t.texSubImage2D(i.TEXTURE_2D,0,Ce,C,le,ae,F,X,g.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ce),i.pixelStorei(i.UNPACK_SKIP_PIXELS,be),i.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function q(b,g,F){let X=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=i.TEXTURE_3D);const Z=Ye(b,g),H=g.source;t.bindTexture(X,b.__webglTexture,i.TEXTURE0+F);const ve=n.get(H);if(H.version!==ve.__version||Z===!0){t.activeTexture(i.TEXTURE0+F);const ce=qe.getPrimaries(qe.workingColorSpace),be=g.colorSpace===Wn?null:qe.getPrimaries(g.colorSpace),ge=g.colorSpace===Wn||ce===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Q=v(g.image,!1,r.maxTextureSize);Q=ye(g,Q);const ie=a.convert(g.format,g.colorSpace),we=a.convert(g.type);let Te=E(g.internalFormat,ie,we,g.colorSpace,g.isVideoTexture);Be(X,g);let he;const Ce=g.mipmaps,C=g.isVideoTexture!==!0,le=ve.__version===void 0||Z===!0,ae=H.dataReady,se=D(g,Q);if(g.isDepthTexture)Te=w(g.format===vr,g.type),le&&(C?t.texStorage2D(i.TEXTURE_2D,1,Te,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Te,Q.width,Q.height,0,ie,we,null));else if(g.isDataTexture)if(Ce.length>0){C&&le&&t.texStorage2D(i.TEXTURE_2D,se,Te,Ce[0].width,Ce[0].height);for(let ee=0,K=Ce.length;ee<K;ee++)he=Ce[ee],C?ae&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,he.width,he.height,ie,we,he.data):t.texImage2D(i.TEXTURE_2D,ee,Te,he.width,he.height,0,ie,we,he.data);g.generateMipmaps=!1}else C?(le&&t.texStorage2D(i.TEXTURE_2D,se,Te,Q.width,Q.height),ae&&Ke(g,Q,ie,we)):t.texImage2D(i.TEXTURE_2D,0,Te,Q.width,Q.height,0,ie,we,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){C&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,Te,Ce[0].width,Ce[0].height,Q.depth);for(let ee=0,K=Ce.length;ee<K;ee++)if(he=Ce[ee],g.format!==cn)if(ie!==null)if(C){if(ae)if(g.layerUpdates.size>0){const pe=Vc(he.width,he.height,g.format,g.type);for(const Le of g.layerUpdates){const st=he.data.subarray(Le*pe/he.data.BYTES_PER_ELEMENT,(Le+1)*pe/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,Le,he.width,he.height,1,ie,st)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,Q.depth,ie,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Te,he.width,he.height,Q.depth,0,he.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,Q.depth,ie,we,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Te,he.width,he.height,Q.depth,0,ie,we,he.data)}else{C&&le&&t.texStorage2D(i.TEXTURE_2D,se,Te,Ce[0].width,Ce[0].height);for(let ee=0,K=Ce.length;ee<K;ee++)he=Ce[ee],g.format!==cn?ie!==null?C?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,he.width,he.height,ie,he.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Te,he.width,he.height,0,he.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?ae&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,he.width,he.height,ie,we,he.data):t.texImage2D(i.TEXTURE_2D,ee,Te,he.width,he.height,0,ie,we,he.data)}else if(g.isDataArrayTexture)if(C){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,Te,Q.width,Q.height,Q.depth),ae)if(g.layerUpdates.size>0){const ee=Vc(Q.width,Q.height,g.format,g.type);for(const K of g.layerUpdates){const pe=Q.data.subarray(K*ee/Q.data.BYTES_PER_ELEMENT,(K+1)*ee/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,ie,we,pe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ie,we,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,Q.width,Q.height,Q.depth,0,ie,we,Q.data);else if(g.isData3DTexture)C?(le&&t.texStorage3D(i.TEXTURE_3D,se,Te,Q.width,Q.height,Q.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ie,we,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Te,Q.width,Q.height,Q.depth,0,ie,we,Q.data);else if(g.isFramebufferTexture){if(le)if(C)t.texStorage2D(i.TEXTURE_2D,se,Te,Q.width,Q.height);else{let ee=Q.width,K=Q.height;for(let pe=0;pe<se;pe++)t.texImage2D(i.TEXTURE_2D,pe,Te,ee,K,0,ie,we,null),ee>>=1,K>>=1}}else if(Ce.length>0){if(C&&le){const ee=Ie(Ce[0]);t.texStorage2D(i.TEXTURE_2D,se,Te,ee.width,ee.height)}for(let ee=0,K=Ce.length;ee<K;ee++)he=Ce[ee],C?ae&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ie,we,he):t.texImage2D(i.TEXTURE_2D,ee,Te,ie,we,he);g.generateMipmaps=!1}else if(C){if(le){const ee=Ie(Q);t.texStorage2D(i.TEXTURE_2D,se,Te,ee.width,ee.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie,we,Q)}else t.texImage2D(i.TEXTURE_2D,0,Te,ie,we,Q);m(g)&&d(X),ve.__version=H.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function j(b,g,F){if(g.image.length!==6)return;const X=Ye(b,g),Z=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+F);const H=n.get(Z);if(Z.version!==H.__version||X===!0){t.activeTexture(i.TEXTURE0+F);const ve=qe.getPrimaries(qe.workingColorSpace),ce=g.colorSpace===Wn?null:qe.getPrimaries(g.colorSpace),be=g.colorSpace===Wn||ve===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const ge=g.isCompressedTexture||g.image[0].isCompressedTexture,Q=g.image[0]&&g.image[0].isDataTexture,ie=[];for(let K=0;K<6;K++)!ge&&!Q?ie[K]=v(g.image[K],!0,r.maxCubemapSize):ie[K]=Q?g.image[K].image:g.image[K],ie[K]=ye(g,ie[K]);const we=ie[0],Te=a.convert(g.format,g.colorSpace),he=a.convert(g.type),Ce=E(g.internalFormat,Te,he,g.colorSpace),C=g.isVideoTexture!==!0,le=H.__version===void 0||X===!0,ae=Z.dataReady;let se=D(g,we);Be(i.TEXTURE_CUBE_MAP,g);let ee;if(ge){C&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ce,we.width,we.height);for(let K=0;K<6;K++){ee=ie[K].mipmaps;for(let pe=0;pe<ee.length;pe++){const Le=ee[pe];g.format!==cn?Te!==null?C?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,0,0,Le.width,Le.height,Te,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,Ce,Le.width,Le.height,0,Le.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,0,0,Le.width,Le.height,Te,he,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,Ce,Le.width,Le.height,0,Te,he,Le.data)}}}else{if(ee=g.mipmaps,C&&le){ee.length>0&&se++;const K=Ie(ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ce,K.width,K.height)}for(let K=0;K<6;K++)if(Q){C?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ie[K].width,ie[K].height,Te,he,ie[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ce,ie[K].width,ie[K].height,0,Te,he,ie[K].data);for(let pe=0;pe<ee.length;pe++){const st=ee[pe].image[K].image;C?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,0,0,st.width,st.height,Te,he,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,Ce,st.width,st.height,0,Te,he,st.data)}}else{C?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Te,he,ie[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ce,Te,he,ie[K]);for(let pe=0;pe<ee.length;pe++){const Le=ee[pe];C?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,0,0,Te,he,Le.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,Ce,Te,he,Le.image[K])}}}m(g)&&d(i.TEXTURE_CUBE_MAP),H.__version=Z.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function fe(b,g,F,X,Z,H){const ve=a.convert(F.format,F.colorSpace),ce=a.convert(F.type),be=E(F.internalFormat,ve,ce,F.colorSpace),ge=n.get(g),Q=n.get(F);if(Q.__renderTarget=g,!ge.__hasExternalTextures){const ie=Math.max(1,g.width>>H),we=Math.max(1,g.height>>H);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,H,be,ie,we,g.depth,0,ve,ce,null):t.texImage2D(Z,H,be,ie,we,0,ve,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),xe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Z,Q.__webglTexture,0,rt(g)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Z,Q.__webglTexture,H),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(b,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,b),g.depthBuffer){const X=g.depthTexture,Z=X&&X.isDepthTexture?X.type:null,H=w(g.stencilBuffer,Z),ve=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=rt(g);xe(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,H,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,H,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,H,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,b)}else{const X=g.textures;for(let Z=0;Z<X.length;Z++){const H=X[Z],ve=a.convert(H.format,H.colorSpace),ce=a.convert(H.type),be=E(H.internalFormat,ve,ce,H.colorSpace),ge=rt(g);F&&xe(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,be,g.width,g.height):xe(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,be,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,be,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(b,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(g.depthTexture);X.__renderTarget=g,(!X.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k(g.depthTexture,0);const Z=X.__webglTexture,H=rt(g);if(g.depthTexture.format===_r)xe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(g.depthTexture.format===vr)xe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ve(b){const g=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){const X=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=X}if(b.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const X=b.texture.mipmaps;X&&X.length>0?Me(g.__webglFramebuffer[0],b):Me(g.__webglFramebuffer,b)}else if(F){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=i.createRenderbuffer(),Ne(g.__webglDepthbuffer[X],b,!1);else{const Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=g.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,H)}}else{const X=b.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ne(g.__webglDepthbuffer,b,!1);else{const Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,H)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function At(b,g,F){const X=n.get(b);g!==void 0&&fe(X.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ve(b)}function ze(b){const g=b.texture,F=n.get(b),X=n.get(g);b.addEventListener("dispose",L);const Z=b.textures,H=b.isWebGLCubeRenderTarget===!0,ve=Z.length>1;if(ve||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=g.version,s.memory.textures++),H){F.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[ce]=[];for(let be=0;be<g.mipmaps.length;be++)F.__webglFramebuffer[ce][be]=i.createFramebuffer()}else F.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let ce=0;ce<g.mipmaps.length;ce++)F.__webglFramebuffer[ce]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ve)for(let ce=0,be=Z.length;ce<be;ce++){const ge=n.get(Z[ce]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),s.memory.textures++)}if(b.samples>0&&xe(b)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ce=0;ce<Z.length;ce++){const be=Z[ce];F.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ce]);const ge=a.convert(be.format,be.colorSpace),Q=a.convert(be.type),ie=E(be.internalFormat,ge,Q,be.colorSpace,b.isXRRenderTarget===!0),we=rt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,we,ie,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,F.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Be(i.TEXTURE_CUBE_MAP,g);for(let ce=0;ce<6;ce++)if(g.mipmaps&&g.mipmaps.length>0)for(let be=0;be<g.mipmaps.length;be++)fe(F.__webglFramebuffer[ce][be],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be);else fe(F.__webglFramebuffer[ce],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(g)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ce=0,be=Z.length;ce<be;ce++){const ge=Z[ce],Q=n.get(ge);let ie=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ie=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,Q.__webglTexture),Be(ie,ge),fe(F.__webglFramebuffer,b,ge,i.COLOR_ATTACHMENT0+ce,ie,0),m(ge)&&d(ie)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ce=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,X.__webglTexture),Be(ce,g),g.mipmaps&&g.mipmaps.length>0)for(let be=0;be<g.mipmaps.length;be++)fe(F.__webglFramebuffer[be],b,g,i.COLOR_ATTACHMENT0,ce,be);else fe(F.__webglFramebuffer,b,g,i.COLOR_ATTACHMENT0,ce,0);m(g)&&d(ce),t.unbindTexture()}b.depthBuffer&&Ve(b)}function ct(b){const g=b.textures;for(let F=0,X=g.length;F<X;F++){const Z=g[F];if(m(Z)){const H=A(b),ve=n.get(Z).__webglTexture;t.bindTexture(H,ve),d(H),t.unbindTexture()}}}const R=[],Ge=[];function He(b){if(b.samples>0){if(xe(b)===!1){const g=b.textures,F=b.width,X=b.height;let Z=i.COLOR_BUFFER_BIT;const H=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(b),ce=g.length>1;if(ce)for(let ge=0;ge<g.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const be=b.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ge=0;ge<g.length;ge++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[ge]);const Q=n.get(g[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,F,X,0,0,F,X,Z,i.NEAREST),c===!0&&(R.length=0,Ge.length=0,R.push(i.COLOR_ATTACHMENT0+ge),b.depthBuffer&&b.resolveDepthBuffer===!1&&(R.push(H),Ge.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let ge=0;ge<g.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,ve.__webglColorRenderbuffer[ge]);const Q=n.get(g[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const g=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function rt(b){return Math.min(r.maxSamples,b.samples)}function xe(b){const g=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ut(b){const g=s.render.frame;u.get(b)!==g&&(u.set(b,g),b.update())}function ye(b,g){const F=b.colorSpace,X=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Vi&&F!==Wn&&(qe.getTransfer(F)===et?(X!==cn||Z!==gn)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",F)),g}function Ie(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=k,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=W,this.rebindTextures=At,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=xe}function ex(i,e){function t(n,r=Wn){let a;const s=qe.getTransfer(r);if(n===gn)return i.UNSIGNED_BYTE;if(n===So)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ml)return i.BYTE;if(n===Sl)return i.SHORT;if(n===xr)return i.UNSIGNED_SHORT;if(n===Mo)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===ki)return i.HALF_FLOAT;if(n===El)return i.ALPHA;if(n===Tl)return i.RGB;if(n===cn)return i.RGBA;if(n===_r)return i.DEPTH_COMPONENT;if(n===vr)return i.DEPTH_STENCIL;if(n===Al)return i.RED;if(n===bo)return i.RED_INTEGER;if(n===Eo)return i.RG;if(n===To)return i.RG_INTEGER;if(n===Ao)return i.RGBA_INTEGER;if(n===oa||n===ca||n===la||n===ua)if(s===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===oa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===oa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ca)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Is||n===Us||n===Ns||n===Fs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Is)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Us)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ns)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Os||n===Bs||n===zs)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Os||n===Bs)return s===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===zs)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vs||n===Gs||n===Hs||n===ks||n===Ws||n===Xs||n===qs||n===Ys||n===$s||n===Ks||n===Zs||n===js||n===Js||n===Qs)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Vs)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gs)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hs)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ks)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ws)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xs)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qs)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ys)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$s)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ks)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zs)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===js)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Js)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qs)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eo||n===to||n===no)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===eo)return s===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===to)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===no)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===io||n===ro||n===ao||n===so)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===io)return a.COMPRESSED_RED_RGTC1_EXT;if(n===ro)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ao)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===so)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nx=`
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

}`;class ix{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new zl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ln({vertexShader:tx,fragmentShader:nx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new Rr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rx extends Wi{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,x=null;const v=typeof XRWebGLBinding<"u",m=new ix,d={},A=t.getContextAttributes();let E=null,w=null;const D=[],T=[],L=new Ue;let G=null;const y=new Yt;y.viewport=new tt;const S=new Yt;S.viewport=new tt;const I=[y,S],B=new Md;let O=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=D[q];return j===void 0&&(j=new as,D[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=D[q];return j===void 0&&(j=new as,D[q]=j),j.getGripSpace()},this.getHand=function(q){let j=D[q];return j===void 0&&(j=new as,D[q]=j),j.getHandSpace()};function k(q){const j=T.indexOf(q.inputSource);if(j===-1)return;const fe=D[j];fe!==void 0&&(fe.update(q.inputSource,q.frame,l||s),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function $(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",J);for(let q=0;q<D.length;q++){const j=T[q];j!==null&&(T[q]=null,D[q].disconnect(j))}O=null,Y=null,m.reset();for(const q in d)delete d[q];e.setRenderTarget(E),p=null,f=null,h=null,r=null,w=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(G),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",$),r.addEventListener("inputsourceschange",J),A.xrCompatible!==!0&&await t.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ne=null,Me=null;A.depth&&(Me=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=A.stencil?vr:_r,Ne=A.stencil?gr:ci);const Ve={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:a};h=this.getBinding(),f=h.createProjectionLayer(Ve),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new li(f.textureWidth,f.textureHeight,{format:cn,type:gn,depthTexture:new Bl(f.textureWidth,f.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const fe={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new li(p.framebufferWidth,p.framebufferHeight,{format:cn,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(o),Ke.setContext(r),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(q){for(let j=0;j<q.removed.length;j++){const fe=q.removed[j],Ne=T.indexOf(fe);Ne>=0&&(T[Ne]=null,D[Ne].disconnect(fe))}for(let j=0;j<q.added.length;j++){const fe=q.added[j];let Ne=T.indexOf(fe);if(Ne===-1){for(let Ve=0;Ve<D.length;Ve++)if(Ve>=T.length){T.push(fe),Ne=Ve;break}else if(T[Ve]===null){T[Ve]=fe,Ne=Ve;break}if(Ne===-1)break}const Me=D[Ne];Me&&Me.connect(fe)}}const W=new P,ne=new P;function re(q,j,fe){W.setFromMatrixPosition(j.matrixWorld),ne.setFromMatrixPosition(fe.matrixWorld);const Ne=W.distanceTo(ne),Me=j.projectionMatrix.elements,Ve=fe.projectionMatrix.elements,At=Me[14]/(Me[10]-1),ze=Me[14]/(Me[10]+1),ct=(Me[9]+1)/Me[5],R=(Me[9]-1)/Me[5],Ge=(Me[8]-1)/Me[0],He=(Ve[8]+1)/Ve[0],rt=At*Ge,xe=At*He,ut=Ne/(-Ge+He),ye=ut*-Ge;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ye),q.translateZ(ut),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Me[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Ie=At+ut,b=ze+ut,g=rt-ye,F=xe+(Ne-ye),X=ct*ze/b*Ie,Z=R*ze/b*Ie;q.projectionMatrix.makePerspective(g,F,X,Z,Ie,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function _e(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let j=q.near,fe=q.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),B.near=S.near=y.near=j,B.far=S.far=y.far=fe,(O!==B.near||Y!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),O=B.near,Y=B.far),B.layers.mask=q.layers.mask|6,y.layers.mask=B.layers.mask&3,S.layers.mask=B.layers.mask&5;const Ne=q.parent,Me=B.cameras;_e(B,Ne);for(let Ve=0;Ve<Me.length;Ve++)_e(Me[Ve],Ne);Me.length===2?re(B,y,S):B.projectionMatrix.copy(y.projectionMatrix),Be(q,B,Ne)};function Be(q,j,fe){fe===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Sr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(q){return d[q]};let Ye=null;function $e(q,j){if(u=j.getViewerPose(l||s),x=j,u!==null){const fe=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let Ne=!1;fe.length!==B.cameras.length&&(B.cameras.length=0,Ne=!0);for(let ze=0;ze<fe.length;ze++){const ct=fe[ze];let R=null;if(p!==null)R=p.getViewport(ct);else{const He=h.getViewSubImage(f,ct);R=He.viewport,ze===0&&(e.setRenderTargetTextures(w,He.colorTexture,He.depthStencilTexture),e.setRenderTarget(w))}let Ge=I[ze];Ge===void 0&&(Ge=new Yt,Ge.layers.enable(ze),Ge.viewport=new tt,I[ze]=Ge),Ge.matrix.fromArray(ct.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(ct.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(R.x,R.y,R.width,R.height),ze===0&&(B.matrix.copy(Ge.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ne===!0&&B.cameras.push(Ge)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const ze=h.getDepthInformation(fe[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,r.renderState)}if(Me&&Me.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let ze=0;ze<fe.length;ze++){const ct=fe[ze].camera;if(ct){let R=d[ct];R||(R=new zl,d[ct]=R);const Ge=h.getCameraImage(ct);R.sourceTexture=Ge}}}}for(let fe=0;fe<D.length;fe++){const Ne=T[fe],Me=D[fe];Ne!==null&&Me!==void 0&&Me.update(Ne,j,l||s)}Ye&&Ye(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),x=null}const Ke=new Gl;Ke.setAnimationLoop($e),this.setAnimationLoop=function(q){Ye=q},this.dispose=function(){}}}const ni=new ln,ax=new at;function sx(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Il(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,A,E,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(m,d):d.isMeshToonMaterial?(a(m,d),h(m,d)):d.isMeshPhongMaterial?(a(m,d),u(m,d)):d.isMeshStandardMaterial?(a(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,w)):d.isMeshMatcapMaterial?(a(m,d),x(m,d)):d.isMeshDepthMaterial?a(m,d):d.isMeshDistanceMaterial?(a(m,d),v(m,d)):d.isMeshNormalMaterial?a(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,A,E):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Gt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Gt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=e.get(d),E=A.envMap,w=A.envMapRotation;E&&(m.envMap.value=E,ni.copy(w),ni.x*=-1,ni.y*=-1,ni.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),m.envMapRotation.value.setFromMatrix4(ax.makeRotationFromEuler(ni)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,A,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=E*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Gt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ox(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,E){const w=E.program;n.uniformBlockBinding(A,w)}function l(A,E){let w=r[A.id];w===void 0&&(x(A),w=u(A),r[A.id]=w,A.addEventListener("dispose",m));const D=E.program;n.updateUBOMapping(A,D);const T=e.render.frame;a[A.id]!==T&&(f(A),a[A.id]=T)}function u(A){const E=h();A.__bindingPointIndex=E;const w=i.createBuffer(),D=A.__size,T=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,D,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,w),w}function h(){for(let A=0;A<o;A++)if(s.indexOf(A)===-1)return s.push(A),A;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const E=r[A.id],w=A.uniforms,D=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,L=w.length;T<L;T++){const G=Array.isArray(w[T])?w[T]:[w[T]];for(let y=0,S=G.length;y<S;y++){const I=G[y];if(p(I,T,y,D)===!0){const B=I.__offset,O=Array.isArray(I.value)?I.value:[I.value];let Y=0;for(let k=0;k<O.length;k++){const $=O[k],J=v($);typeof $=="number"||typeof $=="boolean"?(I.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,B+Y,I.__data)):$.isMatrix3?(I.__data[0]=$.elements[0],I.__data[1]=$.elements[1],I.__data[2]=$.elements[2],I.__data[3]=0,I.__data[4]=$.elements[3],I.__data[5]=$.elements[4],I.__data[6]=$.elements[5],I.__data[7]=0,I.__data[8]=$.elements[6],I.__data[9]=$.elements[7],I.__data[10]=$.elements[8],I.__data[11]=0):($.toArray(I.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,E,w,D){const T=A.value,L=E+"_"+w;if(D[L]===void 0)return typeof T=="number"||typeof T=="boolean"?D[L]=T:D[L]=T.clone(),!0;{const G=D[L];if(typeof T=="number"||typeof T=="boolean"){if(G!==T)return D[L]=T,!0}else if(G.equals(T)===!1)return G.copy(T),!0}return!1}function x(A){const E=A.uniforms;let w=0;const D=16;for(let L=0,G=E.length;L<G;L++){const y=Array.isArray(E[L])?E[L]:[E[L]];for(let S=0,I=y.length;S<I;S++){const B=y[S],O=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,k=O.length;Y<k;Y++){const $=O[Y],J=v($),W=w%D,ne=W%J.boundary,re=W+ne;w+=ne,re!==0&&D-re<J.storage&&(w+=D-re),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=w,w+=J.storage}}}const T=w%D;return T>0&&(w+=D-T),A.__size=w,A.__cache={},this}function v(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pe("WebGLRenderer: Unsupported uniform value type.",A),E}function m(A){const E=A.target;E.removeEventListener("dispose",m);const w=s.indexOf(E.__bindingPointIndex);s.splice(w,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete a[E.id]}function d(){for(const A in r)i.deleteBuffer(r[A]);s=[],r={},a={}}return{bind:c,update:l,dispose:d}}const cx=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let bn=null;function lx(){return bn===null&&(bn=new sd(cx,32,32,Eo,ki),bn.minFilter=Qt,bn.magFilter=Qt,bn.wrapS=Tn,bn.wrapT=Tn,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class ux{constructor(e={}){const{canvas:t=xh(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;const x=new Set([Ao,To,bo]),v=new Set([gn,ci,xr,gr,So,yo]),m=new Uint32Array(4),d=new Int32Array(4);let A=null,E=null;const w=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let L=!1;this._outputColorSpace=Nt;let G=0,y=0,S=null,I=-1,B=null;const O=new tt,Y=new tt;let k=null;const $=new De(0);let J=0,W=t.width,ne=t.height,re=1,_e=null,Be=null;const Ye=new tt(0,0,W,ne),$e=new tt(0,0,W,ne);let Ke=!1;const q=new Io;let j=!1,fe=!1;const Ne=new at,Me=new P,Ve=new tt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function ct(){return S===null?re:1}let R=n;function Ge(M,U){return t.getContext(M,U)}try{const M={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_o}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",pe,!1),R===null){const U="webgl2";if(R=Ge(U,M),R===null)throw Ge(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw M("WebGLRenderer: "+M.message),M}let He,rt,xe,ut,ye,Ie,b,g,F,X,Z,H,ve,ce,be,ge,Q,ie,we,Te,he,Ce,C,le;function ae(){He=new _0(R),He.init(),Ce=new ex(R,He),rt=new l0(R,He,e,Ce),xe=new Jm(R,He),rt.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),ut=new S0(R),ye=new zm,Ie=new Qm(R,He,xe,ye,rt,Ce,ut),b=new h0(T),g=new g0(T),F=new Ed(R),C=new o0(R,F),X=new v0(R,F,ut,C),Z=new b0(R,X,F,ut),we=new y0(R,rt,Ie),ge=new u0(ye),H=new Bm(T,b,g,He,rt,C,ge),ve=new sx(T,ye),ce=new Gm,be=new Ym(He),ie=new s0(T,b,g,xe,Z,p,c),Q=new Zm(T,Z,rt),le=new ox(R,ut,rt,xe),Te=new c0(R,He,ut),he=new M0(R,He,ut),ut.programs=H.programs,T.capabilities=rt,T.extensions=He,T.properties=ye,T.renderLists=ce,T.shadowMap=Q,T.state=xe,T.info=ut}ae();const se=new rx(T,R);this.xr=se,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=He.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=He.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(M){M!==void 0&&(re=M,this.setSize(W,ne,!1))},this.getSize=function(M){return M.set(W,ne)},this.setSize=function(M,U,z=!0){if(se.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,ne=U,t.width=Math.floor(M*re),t.height=Math.floor(U*re),z===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(W*re,ne*re).floor()},this.setDrawingBufferSize=function(M,U,z){W=M,ne=U,re=z,t.width=Math.floor(M*z),t.height=Math.floor(U*z),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(O)},this.getViewport=function(M){return M.copy(Ye)},this.setViewport=function(M,U,z,V){M.isVector4?Ye.set(M.x,M.y,M.z,M.w):Ye.set(M,U,z,V),xe.viewport(O.copy(Ye).multiplyScalar(re).round())},this.getScissor=function(M){return M.copy($e)},this.setScissor=function(M,U,z,V){M.isVector4?$e.set(M.x,M.y,M.z,M.w):$e.set(M,U,z,V),xe.scissor(Y.copy($e).multiplyScalar(re).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(M){xe.setScissorTest(Ke=M)},this.setOpaqueSort=function(M){_e=M},this.setTransparentSort=function(M){Be=M},this.getClearColor=function(M){return M.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,z=!0){let V=0;if(M){let N=!1;if(S!==null){const te=S.texture.format;N=x.has(te)}if(N){const te=S.texture.type,ue=v.has(te),me=ie.getClearColor(),de=ie.getClearAlpha(),Ae=me.r,Re=me.g,Se=me.b;ue?(m[0]=Ae,m[1]=Re,m[2]=Se,m[3]=de,R.clearBufferuiv(R.COLOR,0,m)):(d[0]=Ae,d[1]=Re,d[2]=Se,d[3]=de,R.clearBufferiv(R.COLOR,0,d))}else V|=R.COLOR_BUFFER_BIT}U&&(V|=R.DEPTH_BUFFER_BIT),z&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ie.dispose(),ce.dispose(),be.dispose(),ye.dispose(),b.dispose(),g.dispose(),Z.dispose(),C.dispose(),le.dispose(),H.dispose(),se.dispose(),se.removeEventListener("sessionstart",jo),se.removeEventListener("sessionend",Jo),Kn.stop()};function ee(M){M.preventDefault(),xa("WebGLRenderer: Context Lost."),L=!0}function K(){xa("WebGLRenderer: Context Restored."),L=!1;const M=ut.autoReset,U=Q.enabled,z=Q.autoUpdate,V=Q.needsUpdate,N=Q.type;ae(),ut.autoReset=M,Q.enabled=U,Q.autoUpdate=z,Q.needsUpdate=V,Q.type=N}function pe(M){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Le(M){const U=M.target;U.removeEventListener("dispose",Le),st(U)}function st(M){Je(M),ye.remove(M)}function Je(M){const U=ye.get(M).programs;U!==void 0&&(U.forEach(function(z){H.releaseProgram(z)}),M.isShaderMaterial&&H.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,z,V,N,te){U===null&&(U=At);const ue=N.isMesh&&N.matrixWorld.determinant()<0,me=bu(M,U,z,V,N);xe.setMaterial(V,ue);let de=z.index,Ae=1;if(V.wireframe===!0){if(de=X.getWireframeAttribute(z),de===void 0)return;Ae=2}const Re=z.drawRange,Se=z.attributes.position;let ke=Re.start*Ae,Qe=(Re.start+Re.count)*Ae;te!==null&&(ke=Math.max(ke,te.start*Ae),Qe=Math.min(Qe,(te.start+te.count)*Ae)),de!==null?(ke=Math.max(ke,0),Qe=Math.min(Qe,de.count)):Se!=null&&(ke=Math.max(ke,0),Qe=Math.min(Qe,Se.count));const mt=Qe-ke;if(mt<0||mt===1/0)return;C.setup(N,V,me,z,de);let xt,nt=Te;if(de!==null&&(xt=F.get(de),nt=he,nt.setIndex(xt)),N.isMesh)V.wireframe===!0?(xe.setLineWidth(V.wireframeLinewidth*ct()),nt.setMode(R.LINES)):nt.setMode(R.TRIANGLES);else if(N.isLine){let Ee=V.linewidth;Ee===void 0&&(Ee=1),xe.setLineWidth(Ee*ct()),N.isLineSegments?nt.setMode(R.LINES):N.isLineLoop?nt.setMode(R.LINE_LOOP):nt.setMode(R.LINE_STRIP)}else N.isPoints?nt.setMode(R.POINTS):N.isSprite&&nt.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Mr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))nt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ee=N._multiDrawStarts,ht=N._multiDrawCounts,Xe=N._multiDrawCount,kt=de?F.get(de).bytesPerElement:1,fi=ye.get(V).currentProgram.getUniforms();for(let Wt=0;Wt<Xe;Wt++)fi.setValue(R,"_gl_DrawID",Wt),nt.render(Ee[Wt]/kt,ht[Wt])}else if(N.isInstancedMesh)nt.renderInstances(ke,mt,N.count);else if(z.isInstancedBufferGeometry){const Ee=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ht=Math.min(z.instanceCount,Ee);nt.renderInstances(ke,mt,ht)}else nt.render(ke,mt)};function un(M,U,z){M.transparent===!0&&M.side===gt&&M.forceSinglePass===!1?(M.side=Gt,M.needsUpdate=!0,Ir(M,U,z),M.side=$n,M.needsUpdate=!0,Ir(M,U,z),M.side=gt):Ir(M,U,z)}this.compile=function(M,U,z=null){z===null&&(z=M),E=be.get(z),E.init(U),D.push(E),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(E.pushLight(N),N.castShadow&&E.pushShadow(N))}),M!==z&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(E.pushLight(N),N.castShadow&&E.pushShadow(N))}),E.setupLights();const V=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const te=N.material;if(te)if(Array.isArray(te))for(let ue=0;ue<te.length;ue++){const me=te[ue];un(me,z,N),V.add(me)}else un(te,z,N),V.add(te)}),E=D.pop(),V},this.compileAsync=function(M,U,z=null){const V=this.compile(M,U,z);return new Promise(N=>{function te(){if(V.forEach(function(ue){ye.get(ue).currentProgram.isReady()&&V.delete(ue)}),V.size===0){N(M);return}setTimeout(te,10)}He.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let tn=null;function yu(M){tn&&tn(M)}function jo(){Kn.stop()}function Jo(){Kn.start()}const Kn=new Gl;Kn.setAnimationLoop(yu),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(M){tn=M,se.setAnimationLoop(M),M===null?Kn.stop():Kn.start()},se.addEventListener("sessionstart",jo),se.addEventListener("sessionend",Jo),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(U),U=se.getCamera()),M.isScene===!0&&M.onBeforeRender(T,M,U,S),E=be.get(M,D.length),E.init(U),D.push(E),Ne.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Ne,mn,U.reversedDepth),fe=this.localClippingEnabled,j=ge.init(this.clippingPlanes,fe),A=ce.get(M,w.length),A.init(),w.push(A),se.enabled===!0&&se.isPresenting===!0){const te=T.xr.getDepthSensingMesh();te!==null&&Fa(te,U,-1/0,T.sortObjects)}Fa(M,U,0,T.sortObjects),A.finish(),T.sortObjects===!0&&A.sort(_e,Be),ze=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ze&&ie.addToRenderList(A,M),this.info.render.frame++,j===!0&&ge.beginShadows();const z=E.state.shadowsArray;Q.render(z,M,U),j===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=A.opaque,N=A.transmissive;if(E.setupLights(),U.isArrayCamera){const te=U.cameras;if(N.length>0)for(let ue=0,me=te.length;ue<me;ue++){const de=te[ue];ec(V,N,M,de)}ze&&ie.render(M);for(let ue=0,me=te.length;ue<me;ue++){const de=te[ue];Qo(A,M,de,de.viewport)}}else N.length>0&&ec(V,N,M,U),ze&&ie.render(M),Qo(A,M,U);S!==null&&y===0&&(Ie.updateMultisampleRenderTarget(S),Ie.updateRenderTargetMipmap(S)),M.isScene===!0&&M.onAfterRender(T,M,U),C.resetDefaultState(),I=-1,B=null,D.pop(),D.length>0?(E=D[D.length-1],j===!0&&ge.setGlobalState(T.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?A=w[w.length-1]:A=null};function Fa(M,U,z,V){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){V&&Ve.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ne);const ue=Z.update(M),me=M.material;me.visible&&A.push(M,ue,me,z,Ve.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||q.intersectsObject(M))){const ue=Z.update(M),me=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ve.copy(M.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ve.copy(ue.boundingSphere.center)),Ve.applyMatrix4(M.matrixWorld).applyMatrix4(Ne)),Array.isArray(me)){const de=ue.groups;for(let Ae=0,Re=de.length;Ae<Re;Ae++){const Se=de[Ae],ke=me[Se.materialIndex];ke&&ke.visible&&A.push(M,ue,ke,z,Ve.z,Se)}}else me.visible&&A.push(M,ue,me,z,Ve.z,null)}}const te=M.children;for(let ue=0,me=te.length;ue<me;ue++)Fa(te[ue],U,z,V)}function Qo(M,U,z,V){const{opaque:N,transmissive:te,transparent:ue}=M;E.setupLightsView(z),j===!0&&ge.setGlobalState(T.clippingPlanes,z),V&&xe.viewport(O.copy(V)),N.length>0&&Dr(N,U,z),te.length>0&&Dr(te,U,z),ue.length>0&&Dr(ue,U,z),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function ec(M,U,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;E.state.transmissionRenderTarget[V.id]===void 0&&(E.state.transmissionRenderTarget[V.id]=new li(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?ki:gn,minFilter:oi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const te=E.state.transmissionRenderTarget[V.id],ue=V.viewport||O;te.setSize(ue.z*T.transmissionResolutionScale,ue.w*T.transmissionResolutionScale);const me=T.getRenderTarget(),de=T.getActiveCubeFace(),Ae=T.getActiveMipmapLevel();T.setRenderTarget(te),T.getClearColor($),J=T.getClearAlpha(),J<1&&T.setClearColor(16777215,.5),T.clear(),ze&&ie.render(z);const Re=T.toneMapping;T.toneMapping=qn;const Se=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),j===!0&&ge.setGlobalState(T.clippingPlanes,V),Dr(M,z,V),Ie.updateMultisampleRenderTarget(te),Ie.updateRenderTargetMipmap(te),He.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Qe=0,mt=U.length;Qe<mt;Qe++){const xt=U[Qe],{object:nt,geometry:Ee,material:ht,group:Xe}=xt;if(ht.side===gt&&nt.layers.test(V.layers)){const kt=ht.side;ht.side=Gt,ht.needsUpdate=!0,tc(nt,z,V,Ee,ht,Xe),ht.side=kt,ht.needsUpdate=!0,ke=!0}}ke===!0&&(Ie.updateMultisampleRenderTarget(te),Ie.updateRenderTargetMipmap(te))}T.setRenderTarget(me,de,Ae),T.setClearColor($,J),Se!==void 0&&(V.viewport=Se),T.toneMapping=Re}function Dr(M,U,z){const V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,te=M.length;N<te;N++){const ue=M[N],{object:me,geometry:de,group:Ae}=ue;let Re=ue.material;Re.allowOverride===!0&&V!==null&&(Re=V),me.layers.test(z.layers)&&tc(me,U,z,de,Re,Ae)}}function tc(M,U,z,V,N,te){M.onBeforeRender(T,U,z,V,N,te),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(T,U,z,V,M,te),N.transparent===!0&&N.side===gt&&N.forceSinglePass===!1?(N.side=Gt,N.needsUpdate=!0,T.renderBufferDirect(z,U,V,N,M,te),N.side=$n,N.needsUpdate=!0,T.renderBufferDirect(z,U,V,N,M,te),N.side=gt):T.renderBufferDirect(z,U,V,N,M,te),M.onAfterRender(T,U,z,V,N,te)}function Ir(M,U,z){U.isScene!==!0&&(U=At);const V=ye.get(M),N=E.state.lights,te=E.state.shadowsArray,ue=N.state.version,me=H.getParameters(M,N.state,te,U,z),de=H.getProgramCacheKey(me);let Ae=V.programs;V.environment=M.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(M.isMeshStandardMaterial?g:b).get(M.envMap||V.environment),V.envMapRotation=V.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ae===void 0&&(M.addEventListener("dispose",Le),Ae=new Map,V.programs=Ae);let Re=Ae.get(de);if(Re!==void 0){if(V.currentProgram===Re&&V.lightsStateVersion===ue)return ic(M,me),Re}else me.uniforms=H.getUniforms(M),M.onBeforeCompile(me,T),Re=H.acquireProgram(me,de),Ae.set(de,Re),V.uniforms=me.uniforms;const Se=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Se.clippingPlanes=ge.uniform),ic(M,me),V.needsLights=Tu(M),V.lightsStateVersion=ue,V.needsLights&&(Se.ambientLightColor.value=N.state.ambient,Se.lightProbe.value=N.state.probe,Se.directionalLights.value=N.state.directional,Se.directionalLightShadows.value=N.state.directionalShadow,Se.spotLights.value=N.state.spot,Se.spotLightShadows.value=N.state.spotShadow,Se.rectAreaLights.value=N.state.rectArea,Se.ltc_1.value=N.state.rectAreaLTC1,Se.ltc_2.value=N.state.rectAreaLTC2,Se.pointLights.value=N.state.point,Se.pointLightShadows.value=N.state.pointShadow,Se.hemisphereLights.value=N.state.hemi,Se.directionalShadowMap.value=N.state.directionalShadowMap,Se.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Se.spotShadowMap.value=N.state.spotShadowMap,Se.spotLightMatrix.value=N.state.spotLightMatrix,Se.spotLightMap.value=N.state.spotLightMap,Se.pointShadowMap.value=N.state.pointShadowMap,Se.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Re,V.uniformsList=null,Re}function nc(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=ha.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function ic(M,U){const z=ye.get(M);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function bu(M,U,z,V,N){U.isScene!==!0&&(U=At),Ie.resetTextureUnits();const te=U.fog,ue=V.isMeshStandardMaterial?U.environment:null,me=S===null?T.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Vi,de=(V.isMeshStandardMaterial?g:b).get(V.envMap||ue),Ae=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Re=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Se=!!z.morphAttributes.position,ke=!!z.morphAttributes.normal,Qe=!!z.morphAttributes.color;let mt=qn;V.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(mt=T.toneMapping);const xt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,nt=xt!==void 0?xt.length:0,Ee=ye.get(V),ht=E.state.lights;if(j===!0&&(fe===!0||M!==B)){const Dt=M===B&&V.id===I;ge.setState(V,M,Dt)}let Xe=!1;V.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==ht.state.version||Ee.outputColorSpace!==me||N.isBatchedMesh&&Ee.batching===!1||!N.isBatchedMesh&&Ee.batching===!0||N.isBatchedMesh&&Ee.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ee.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ee.instancing===!1||!N.isInstancedMesh&&Ee.instancing===!0||N.isSkinnedMesh&&Ee.skinning===!1||!N.isSkinnedMesh&&Ee.skinning===!0||N.isInstancedMesh&&Ee.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ee.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ee.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ee.instancingMorph===!1&&N.morphTexture!==null||Ee.envMap!==de||V.fog===!0&&Ee.fog!==te||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ge.numPlanes||Ee.numIntersection!==ge.numIntersection)||Ee.vertexAlphas!==Ae||Ee.vertexTangents!==Re||Ee.morphTargets!==Se||Ee.morphNormals!==ke||Ee.morphColors!==Qe||Ee.toneMapping!==mt||Ee.morphTargetsCount!==nt)&&(Xe=!0):(Xe=!0,Ee.__version=V.version);let kt=Ee.currentProgram;Xe===!0&&(kt=Ir(V,U,N));let fi=!1,Wt=!1,Qi=!1;const dt=kt.getUniforms(),zt=Ee.uniforms;if(xe.useProgram(kt.program)&&(fi=!0,Wt=!0,Qi=!0),V.id!==I&&(I=V.id,Wt=!0),fi||B!==M){xe.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),dt.setValue(R,"projectionMatrix",M.projectionMatrix),dt.setValue(R,"viewMatrix",M.matrixWorldInverse);const Vt=dt.map.cameraPosition;Vt!==void 0&&Vt.setValue(R,Me.setFromMatrixPosition(M.matrixWorld)),rt.logarithmicDepthBuffer&&dt.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&dt.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),B!==M&&(B=M,Wt=!0,Qi=!0)}if(N.isSkinnedMesh){dt.setOptional(R,N,"bindMatrix"),dt.setOptional(R,N,"bindMatrixInverse");const Dt=N.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),dt.setValue(R,"boneTexture",Dt.boneTexture,Ie))}N.isBatchedMesh&&(dt.setOptional(R,N,"batchingTexture"),dt.setValue(R,"batchingTexture",N._matricesTexture,Ie),dt.setOptional(R,N,"batchingIdTexture"),dt.setValue(R,"batchingIdTexture",N._indirectTexture,Ie),dt.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&dt.setValue(R,"batchingColorTexture",N._colorsTexture,Ie));const Zt=z.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&we.update(N,z,kt),(Wt||Ee.receiveShadow!==N.receiveShadow)&&(Ee.receiveShadow=N.receiveShadow,dt.setValue(R,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(zt.envMap.value=de,zt.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(zt.envMapIntensity.value=U.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=lx()),Wt&&(dt.setValue(R,"toneMappingExposure",T.toneMappingExposure),Ee.needsLights&&Eu(zt,Qi),te&&V.fog===!0&&ve.refreshFogUniforms(zt,te),ve.refreshMaterialUniforms(zt,V,re,ne,E.state.transmissionRenderTarget[M.id]),ha.upload(R,nc(Ee),zt,Ie)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ha.upload(R,nc(Ee),zt,Ie),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&dt.setValue(R,"center",N.center),dt.setValue(R,"modelViewMatrix",N.modelViewMatrix),dt.setValue(R,"normalMatrix",N.normalMatrix),dt.setValue(R,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Dt=V.uniformsGroups;for(let Vt=0,Oa=Dt.length;Vt<Oa;Vt++){const Zn=Dt[Vt];le.update(Zn,kt),le.bind(Zn,kt)}}return kt}function Eu(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Tu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(M,U,z){const V=ye.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),ye.get(M.texture).__webglTexture=U,ye.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const z=ye.get(M);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const Au=R.createFramebuffer();this.setRenderTarget=function(M,U=0,z=0){S=M,G=U,y=z;let V=!0,N=null,te=!1,ue=!1;if(M){const de=ye.get(M);if(de.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(R.FRAMEBUFFER,null),V=!1;else if(de.__webglFramebuffer===void 0)Ie.setupRenderTarget(M);else if(de.__hasExternalTextures)Ie.rebindTextures(M,ye.get(M.texture).__webglTexture,ye.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Se=M.depthTexture;if(de.__boundDepthTexture!==Se){if(Se!==null&&ye.has(Se)&&(M.width!==Se.image.width||M.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(M)}}const Ae=M.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ue=!0);const Re=ye.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?N=Re[U][z]:N=Re[U],te=!0):M.samples>0&&Ie.useMultisampledRTT(M)===!1?N=ye.get(M).__webglMultisampledFramebuffer:Array.isArray(Re)?N=Re[z]:N=Re,O.copy(M.viewport),Y.copy(M.scissor),k=M.scissorTest}else O.copy(Ye).multiplyScalar(re).floor(),Y.copy($e).multiplyScalar(re).floor(),k=Ke;if(z!==0&&(N=Au),xe.bindFramebuffer(R.FRAMEBUFFER,N)&&V&&xe.drawBuffers(M,N),xe.viewport(O),xe.scissor(Y),xe.setScissorTest(k),te){const de=ye.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,de.__webglTexture,z)}else if(ue){const de=U;for(let Ae=0;Ae<M.textures.length;Ae++){const Re=ye.get(M.textures[Ae]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ae,Re.__webglTexture,z,de)}}else if(M!==null&&z!==0){const de=ye.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,de.__webglTexture,z)}I=-1},this.readRenderTargetPixels=function(M,U,z,V,N,te,ue,me=0){if(!(M&&M.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(de=de[ue]),de){xe.bindFramebuffer(R.FRAMEBUFFER,de);try{const Ae=M.textures[me],Re=Ae.format,Se=Ae.type;if(!rt.textureFormatReadable(Re)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Se)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-V&&z>=0&&z<=M.height-N&&(M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+me),R.readPixels(U,z,V,N,Ce.convert(Re),Ce.convert(Se),te))}finally{const Ae=S!==null?ye.get(S).__webglFramebuffer:null;xe.bindFramebuffer(R.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(M,U,z,V,N,te,ue,me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(de=de[ue]),de)if(U>=0&&U<=M.width-V&&z>=0&&z<=M.height-N){xe.bindFramebuffer(R.FRAMEBUFFER,de);const Ae=M.textures[me],Re=Ae.format,Se=Ae.type;if(!rt.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ke),R.bufferData(R.PIXEL_PACK_BUFFER,te.byteLength,R.STREAM_READ),M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+me),R.readPixels(U,z,V,N,Ce.convert(Re),Ce.convert(Se),0);const Qe=S!==null?ye.get(S).__webglFramebuffer:null;xe.bindFramebuffer(R.FRAMEBUFFER,Qe);const mt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await gh(R,mt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ke),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,te),R.deleteBuffer(ke),R.deleteSync(mt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,z=0){const V=Math.pow(2,-z),N=Math.floor(M.image.width*V),te=Math.floor(M.image.height*V),ue=U!==null?U.x:0,me=U!==null?U.y:0;Ie.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,ue,me,N,te),xe.unbindTexture()};const wu=R.createFramebuffer(),Ru=R.createFramebuffer();this.copyTextureToTexture=function(M,U,z=null,V=null,N=0,te=null){te===null&&(N!==0?(Mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=N,N=0):te=0);let ue,me,de,Ae,Re,Se,ke,Qe,mt;const xt=M.isCompressedTexture?M.mipmaps[te]:M.image;if(z!==null)ue=z.max.x-z.min.x,me=z.max.y-z.min.y,de=z.isBox3?z.max.z-z.min.z:1,Ae=z.min.x,Re=z.min.y,Se=z.isBox3?z.min.z:0;else{const Zt=Math.pow(2,-N);ue=Math.floor(xt.width*Zt),me=Math.floor(xt.height*Zt),M.isDataArrayTexture?de=xt.depth:M.isData3DTexture?de=Math.floor(xt.depth*Zt):de=1,Ae=0,Re=0,Se=0}V!==null?(ke=V.x,Qe=V.y,mt=V.z):(ke=0,Qe=0,mt=0);const nt=Ce.convert(U.format),Ee=Ce.convert(U.type);let ht;U.isData3DTexture?(Ie.setTexture3D(U,0),ht=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ie.setTexture2DArray(U,0),ht=R.TEXTURE_2D_ARRAY):(Ie.setTexture2D(U,0),ht=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const Xe=R.getParameter(R.UNPACK_ROW_LENGTH),kt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),fi=R.getParameter(R.UNPACK_SKIP_PIXELS),Wt=R.getParameter(R.UNPACK_SKIP_ROWS),Qi=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,xt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,xt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ae),R.pixelStorei(R.UNPACK_SKIP_ROWS,Re),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Se);const dt=M.isDataArrayTexture||M.isData3DTexture,zt=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const Zt=ye.get(M),Dt=ye.get(U),Vt=ye.get(Zt.__renderTarget),Oa=ye.get(Dt.__renderTarget);xe.bindFramebuffer(R.READ_FRAMEBUFFER,Vt.__webglFramebuffer),xe.bindFramebuffer(R.DRAW_FRAMEBUFFER,Oa.__webglFramebuffer);for(let Zn=0;Zn<de;Zn++)dt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.get(M).__webglTexture,N,Se+Zn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.get(U).__webglTexture,te,mt+Zn)),R.blitFramebuffer(Ae,Re,ue,me,ke,Qe,ue,me,R.DEPTH_BUFFER_BIT,R.NEAREST);xe.bindFramebuffer(R.READ_FRAMEBUFFER,null),xe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||ye.has(M)){const Zt=ye.get(M),Dt=ye.get(U);xe.bindFramebuffer(R.READ_FRAMEBUFFER,wu),xe.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ru);for(let Vt=0;Vt<de;Vt++)dt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Zt.__webglTexture,N,Se+Vt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Zt.__webglTexture,N),zt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Dt.__webglTexture,te,mt+Vt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Dt.__webglTexture,te),N!==0?R.blitFramebuffer(Ae,Re,ue,me,ke,Qe,ue,me,R.COLOR_BUFFER_BIT,R.NEAREST):zt?R.copyTexSubImage3D(ht,te,ke,Qe,mt+Vt,Ae,Re,ue,me):R.copyTexSubImage2D(ht,te,ke,Qe,Ae,Re,ue,me);xe.bindFramebuffer(R.READ_FRAMEBUFFER,null),xe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else zt?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(ht,te,ke,Qe,mt,ue,me,de,nt,Ee,xt.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(ht,te,ke,Qe,mt,ue,me,de,nt,xt.data):R.texSubImage3D(ht,te,ke,Qe,mt,ue,me,de,nt,Ee,xt):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,te,ke,Qe,ue,me,nt,Ee,xt.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,te,ke,Qe,xt.width,xt.height,nt,xt.data):R.texSubImage2D(R.TEXTURE_2D,te,ke,Qe,ue,me,nt,Ee,xt);R.pixelStorei(R.UNPACK_ROW_LENGTH,Xe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,kt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,fi),R.pixelStorei(R.UNPACK_SKIP_ROWS,Wt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Qi),te===0&&U.generateMipmaps&&R.generateMipmap(ht),xe.unbindTexture()},this.initRenderTarget=function(M){ye.get(M).__webglFramebuffer===void 0&&Ie.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ie.setTextureCube(M,0):M.isData3DTexture?Ie.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ie.setTexture2DArray(M,0):Ie.setTexture2D(M,0),xe.unbindTexture()},this.resetState=function(){G=0,y=0,S=null,xe.reset(),C.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}window.THREE={Box3:Xi,BufferAttribute:Ot,BufferGeometry:St,CanvasTexture:Pa,CircleGeometry:No,DoubleSide:gt,Group:$t,Mesh:it,MeshBasicMaterial:Mt,MeshPhongMaterial:dd,PlaneGeometry:Rr,Points:Uo,PointsMaterial:Ca,TorusGeometry:qi,Vector3:P};const hx=document.querySelector("#game-canvas"),dx=document.querySelector("#danger-vignette"),fx=document.querySelector("#days"),px=document.querySelector("#health"),mx=document.querySelector("#health-fill"),ql=document.querySelector(".health-bar"),Yl=document.querySelector("#high-score"),xx=document.querySelector("#warnings"),gx=document.querySelector("#heat-meter"),_x=document.querySelector("#cold-meter"),vx=document.querySelector("#chaos-meter"),Fo=document.querySelector("#signal-meter"),xs=document.querySelector("#hint-line"),fr=document.querySelector("#toast-line"),$l=document.querySelector("#mode-readout"),Kl=document.querySelector("#mode-name"),Zl=document.querySelector("#mode-effect"),Mx=document.querySelector("#focus-status"),Ma=document.querySelector("#death-screen"),Sx=document.querySelector("#death-title"),yx=document.querySelector("#death-stats"),bx=document.querySelector("#death-message"),Ex=document.querySelector("#death-high-score"),Tx=document.querySelector("#restart-button"),Ax=document.querySelector("#next-button"),wx=document.querySelector("#share-button"),Oo=document.querySelector("#share-status"),Pr=document.querySelector("#pause-menu"),Rx=document.querySelector("#resume-button"),Cx=document.querySelector("#pause-restart-button"),Bo=document.querySelector("#mute-button"),Px=document.querySelector("#pause-next-button"),Lx=document.querySelector("#pause-copy-button"),Dx=document.querySelector("#controls-button"),ul=document.querySelector("#controls-text"),Ix=document.querySelector("#portal-badge"),$i=document.querySelector("#info-screen"),Ki=document.querySelector("#story-screen"),jl=document.querySelector("#tutorial-box"),Ux=document.querySelector("#tutorial-title"),Nx=document.querySelector("#tutorial-text"),Fx=document.querySelector("#tutorial-got-it"),Ox=document.querySelector("#tutorial-skip"),Bx=document.querySelector("#info-tutorial-button"),zx=document.querySelector("#info-story-button"),Jl=[...document.querySelectorAll("[data-mode]")],Vx=[...document.querySelectorAll("[data-action]")],ui=new ux({canvas:hx,antialias:!0,alpha:!1,powerPreference:"high-performance"});ui.setPixelRatio(Math.min(window.devicePixelRatio,2));ui.setClearColor(131850,1);const Bt=new rd;Bt.fog=new Lo(131850,.018);const xn=new Yt(55,1,.1,220);xn.position.set(0,0,56);const hl=new yd,gs=new Ue,Gx=new Hn(new P(0,0,1),0),ii=new P,Hx=new Sd,kx=1.5,Wx=.033,fo=2.8,Xx=3,qx=1.15,Yx=8,$x=3,zo=100,Kx=28,dl=.6,Zx=.999,jx=.9994,Jx=.9,fl=1.28,Qx=2.65,eg=1.15,tg=1.5,ng=30,ig=23,Ql=4,eu="three-suns-tutorial-complete",yr=new URLSearchParams(window.location.search),Vo=yr.get("portal")==="true"||yr.get("portal")==="1",tu=["username","color","speed","hp","team","avatar_url","speed_x","speed_y","speed_z","rotation_x","rotation_y","rotation_z"],Dn=Object.fromEntries(tu.flatMap(i=>yr.has(i)?[[i,yr.get(i)]]:[])),po={x:-24,y:12,z:0},rg={x:90,y:-50,z:0},nu=new P(18.4,-12.2,0),Ft={shield:{label:"SHIELD",toast:"SHIELD MODE",effect:"SHIELD: solar aura resistance ↑ cold risk ↑",heatDamage:.35,heatBuildup:.5,coldDamage:1.25,coldBuildup:1.25,chaosDamage:1,chaosBuildup:1,regen:1,anchorCost:1,anchorPull:1,color:16765802},hibernation:{label:"SLEEP",toast:"SLEEP MODE",effect:"SLEEP: deep cold resistance ↑ signal regen ↑ chaos risk ↑",heatDamage:1,heatBuildup:1,coldDamage:.35,coldBuildup:.5,chaosDamage:1.25,chaosBuildup:1.25,regen:1.35,anchorCost:1,anchorPull:1,color:10414079},observatory:{label:"OBSERVE",toast:"OBSERVATORY MODE",effect:"OBSERVE: clearer omens ↑ anchor cost ↓ aura protection ↓",heatDamage:1.15,heatBuildup:1.15,coldDamage:1.15,coldBuildup:1.15,chaosDamage:1.15,chaosBuildup:1.15,regen:1,anchorCost:.75,anchorPull:1.12,color:16777215}},pl=["Click/tap to place gravity anchors","Signal limits anchors","Switch modes: 1 Shield, 2 Sleep, 3 Observe","Space / FOCUS slows the dawn","Touching a sun is fatal — modes only reduce aura damage"];Dn.username&&(window.selfUsername=Dn.username);Dn.speed&&(window.currentSpeed=Number.parseFloat(Dn.speed)||void 0);const wn={red:new De(16724559),blue:new De(12185599),gold:new De(16761933),violet:new De(11761663)};let _,Pt,ot=null,sn=localStorage.getItem("threesuns_muted")==="true",hn=!0;const lt={active:!1,index:0,timer:0},Lr=[{title:"THIS IS YOUR WORLD",text:"Keep it alive.",highlight:"planet",duration:3},{title:"READ THE SUNS",text:"Touching a sun kills instantly. Auras damage health.",highlight:"sun",duration:4},{title:"PLACE AN ANCHOR",text:"Click or tap anywhere to place a gravity anchor.",highlight:"planet",waitFor:"anchor"},{title:"ANCHORS COST SIGNAL",text:"Signal limits anchor spam and refills while you fly well.",highlight:"signal",duration:3.2},{title:"SWITCH SURVIVAL MODES",text:"Use Shield for solar heat, Sleep for deep cold, Observe for clearer omens and cheaper anchors.",highlight:"modes",waitFor:"mode"},{title:"FOCUS SLOWS TIME",text:"Press Space or tap FOCUS to bend a dangerous moment.",highlight:"focus",waitFor:"focus"},{title:"DO NOT CAMP THE VOID",text:"Stay close enough for warmth, far enough to survive. The outer dark will freeze you if you camp outside.",highlight:"sun",duration:4.2},{title:"SURVIVE THE DAWN",text:"Survive as many days as possible.",highlight:"planet",duration:3.2}];function iu(i,e=!0){const n=document.createElement("canvas");n.width=128,n.height=128;const r=n.getContext("2d"),a=r.createRadialGradient(128/2,128/2,2,128/2,128/2,128/2);a.addColorStop(0,i),a.addColorStop(e?.36:.55,i),a.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=a,r.fillRect(0,0,128,128);const s=new Pa(n);return s.colorSpace=Nt,s}function ru(i="surface"){const t=document.createElement("canvas");t.width=256,t.height=256;const n=t.getContext("2d");if(n.fillStyle=i==="clouds"?"rgba(0,0,0,0)":"#123f73",n.fillRect(0,0,256,256),i==="clouds")for(let a=0;a<120;a+=1){const s=Math.random()*256,o=Math.random()*256,c=18+Math.random()*46,l=2+Math.random()*7;n.fillStyle=`rgba(255,255,255,${.05+Math.random()*.11})`,n.beginPath(),n.ellipse(s,o,c,l,Math.random()*Math.PI,0,Math.PI*2),n.fill()}else{const a=n.createLinearGradient(0,0,256,256);a.addColorStop(0,"#1b6fa8"),a.addColorStop(.55,"#113c76"),a.addColorStop(1,"#081a3f"),n.fillStyle=a,n.fillRect(0,0,256,256);for(let s=0;s<34;s+=1){const o=Math.random()*256,c=Math.random()*256,l=10+Math.random()*24;n.fillStyle=Math.random()>.35?"#2d7742":"#8b7045",n.beginPath();for(let u=0;u<Math.PI*2;u+=Math.PI/8){const h=l*(.62+Math.random()*.68),f=o+Math.cos(u)*h,p=c+Math.sin(u)*h*(.45+Math.random()*.6);u===0?n.moveTo(f,p):n.lineTo(f,p)}n.closePath(),n.globalAlpha=.58,n.fill(),n.globalAlpha=1}for(let s=0;s<80;s+=1)n.fillStyle="rgba(255,226,142,0.55)",n.fillRect(Math.random()*256,Math.random()*256,1,1)}const r=new Pa(t);return r.colorSpace=Nt,r}const ag=iu("rgba(255,255,255,1)"),sg=ru("surface"),og=ru("clouds");function di(i,e,t=1){const n=new Ra({map:ag,color:i,transparent:!0,opacity:t,blending:pt,depthWrite:!1}),r=new Do(n);return r.scale.set(e,e,1),r}function cg(i,e="#d7c4ff"){const t=document.createElement("canvas");t.width=512,t.height=128;const n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.fillStyle=e,n.font="700 34px Arial, sans-serif",n.textAlign="center",n.shadowColor="rgba(179, 119, 255, 0.8)",n.shadowBlur=18,n.fillText(i,t.width/2,72);const r=new Pa(t);r.colorSpace=Nt;const a=new Ra({map:r,transparent:!0,opacity:.72,depthWrite:!1}),s=new Do(a);return s.scale.set(8,2,1),s}function lg(i){const{id:e,name:t,color:n,size:r,phase:a,heat:s,pull:o,deathCause:c,dangerType:l}=i,u=new $t,h=new it(new Cr(r,32,24),new Mt({color:n})),f=di(n,r*5.8,.43),p=new gd(n,2.55,68,1.45);u.add(f,h,p);const x=[],v=new Mt({color:n,transparent:!0,opacity:.22,blending:pt,side:gt,depthWrite:!1});for(let T=0;T<3;T+=1){const L=new it(new Ht(1,1.025,96),v.clone());L.userData.offset=T/3,u.add(L),x.push(L)}const m=r,d=m+dl*.72,A=m*2.35,E=m*4+dl,w=new it(new Ht(d-.06,d,72),new Mt({color:n,transparent:!0,opacity:.18,blending:pt,side:gt,depthWrite:!1})),D=new it(new Ht(E-.06,E,72),new Mt({color:n,transparent:!0,opacity:.09,blending:pt,side:gt,depthWrite:!1}));return u.add(w,D),Bt.add(u),{id:e,name:t,color:n,size:r,visualRadius:m,killRadius:d,dangerRadius:A,auraRadius:E,phase:a,heat:s,pull:o,deathCause:c,dangerType:l,group:u,core:h,glow:f,rings:x,killRing:w,dangerRing:D,pos:new P,vel:new P,worldPos:new P,lastDistance:1/0}}function au(i,e,t){const n=new Float32Array(i*3),r=new Float32Array(i*3),a=new St;a.setAttribute("position",new Ot(n,3)),a.setAttribute("color",new Ot(r,3));const s=new Ca({size:t,vertexColors:!0,transparent:!0,opacity:.72,blending:pt,depthWrite:!1}),o=new Uo(a,s);return Bt.add(o),{capacity:i,index:0,color:new De(e),geometry:a,positions:n,colorsArray:r,points:o}}function mo(i,e,t=1){const n=i.index%i.capacity;i.positions[n*3]=e.x,i.positions[n*3+1]=e.y,i.positions[n*3+2]=e.z;const r=Ze.clamp(t,.08,1);i.colorsArray[n*3]=i.color.r*r,i.colorsArray[n*3+1]=i.color.g*r,i.colorsArray[n*3+2]=i.color.b*r,i.index+=1,i.geometry.attributes.position.needsUpdate=!0,i.geometry.attributes.color.needsUpdate=!0}function ml(i,e){for(let t=0;t<i.colorsArray.length;t+=1)i.colorsArray[t]*=e;i.geometry.attributes.color.needsUpdate=!0}function _s(i,e,t,n,r=112,a=70){const s=new Uo(new St,new Ca({color:14277887,size:e,transparent:!0,opacity:t,depthWrite:!1})),o=new Float32Array(i*3);for(let c=0;c<i;c+=1)o[c*3]=(Math.random()-.5)*r,o[c*3+1]=(Math.random()-.5)*a,o[c*3+2]=n-Math.random()*22;return s.geometry.setAttribute("position",new Ot(o,3)),Bt.add(s),s}const su=[_s(320,.045,.54,-46),_s(240,.075,.44,-34,96,62),_s(90,.12,.34,-24,74,48)],ug=iu("rgba(119,68,180,1)"),Ia=new $t;for(let i=0;i<3;i+=1){const e=new Do(new Ra({map:ug,color:i===1?2578538:4991602,transparent:!0,opacity:i===2?.04:.065,blending:pt,depthWrite:!1}));e.position.set((i-1)*22,i===1?-9:7,-42-i*4),e.scale.set(42+i*16,24+i*7,1),Ia.add(e)}Bt.add(Ia);const hg=new vd(7239082,.34);Bt.add(hg);const dg=[{id:"alpha",name:"red",color:wn.red,size:1.95,phase:.2,heat:1.22,pull:13.2,deathCause:"burned",dangerType:"heat"},{id:"beta",name:"blue",color:wn.blue,size:1.55,phase:2.5,heat:.72,pull:10.8,deathCause:"frozen",dangerType:"cold"},{id:"gamma",name:"gold",color:wn.gold,size:1.78,phase:4.1,heat:1,pull:13.8,deathCause:"scattered",dangerType:"chaos"}],Tt=dg.map(lg),en=new $t,br=new it(new Cr(.58,32,18),new hd({map:sg,color:16777215,roughness:.72,metalness:.02,emissive:464425,emissiveIntensity:.46})),ou=new it(new Cr(.596,32,18),new Mt({map:og,transparent:!0,opacity:.42,blending:pt,depthWrite:!1})),Yn=new it(new qi(.86,.024,8,96),new Mt({color:10485716,transparent:!0,opacity:.85,blending:pt}));Yn.rotation.x=Math.PI/2.45;const Go=di(9240534,2.8,.22),xo=di(8900607,2.15,.18),Ho=new it(new qi(1.04,.018,8,96),new Mt({color:16765802,transparent:!0,opacity:0,blending:pt}));Ho.rotation.x=Math.PI/2.2;const cu=di(10414079,2.35,0),Sa=new it(new Ht(1.08,1.1,72,1,0,Math.PI*1.35),new Mt({color:16777215,transparent:!0,opacity:0,blending:pt,side:gt}));Sa.rotation.x=Math.PI/2.55;const ko=new it(new Ht(.64,.67,9),new Mt({color:16739118,transparent:!0,opacity:0,blending:pt,wireframe:!0}));ko.rotation.x=Math.PI/2.7;const lu=di(10414079,2,0),Di=new it(new qi(1.16,.012,8,96),new Mt({color:14203135,transparent:!0,opacity:0,blending:pt}));Di.rotation.x=Math.PI/2.05;en.add(br,ou,Yn,Go,xo,Ho,cu,Sa,ko,lu,Di);Bt.add(en);if(Dn.color)try{const i=new De(Dn.color);br.material.color.lerp(i,.45),Yn.material.color.copy(i),Go.material.color.copy(i)}catch{}const fg=new $t;Bt.add(fg);const In=new $t;Bt.add(In);const Un=new $t;Bt.add(Un);const Wo=new $t;Wo.position.copy(nu);const ya=new it(new Ht(.55,.62,48),new Mt({color:5898175,transparent:!0,opacity:.34,blending:pt,side:gt}));ya.rotation.x=Math.PI/2;const Xo=cg("VIBE JAM","#9fffd4");Xo.position.set(0,1.1,0);Xo.scale.set(3.2,.8,1);Wo.add(ya,Xo,di(5898175,1.45,.12));Bt.add(Wo);const Ni=[],Fi=[],qo=[],pn=new it(new Ht(.9,1.02,96),new Mt({color:16777215,transparent:!0,opacity:0,blending:pt,side:gt,depthWrite:!1}));pn.rotation.x=Math.PI/2;pn.visible=!1;Un.add(pn);for(let i=0;i<3;i+=1){const e=new it(new Ht(.62,.65,96),new Mt({color:wn.violet,transparent:!0,opacity:0,blending:pt,side:gt}));e.rotation.x=Math.PI/2,e.visible=!1,Un.add(e),qo.push({ring:e,age:99,delay:i*.15})}const Ua=Tt.map(i=>au(170,i.color,.12)),pr=au(220,10485716,.1);function pg(i){const e=new $t;e.position.copy(i);const t=new it(new Ht(.42,.46,48),new Mt({color:wn.violet,transparent:!0,opacity:.45,blending:pt,side:gt})),n=new it(new Ht(.86,.88,48),new Mt({color:wn.violet,transparent:!0,opacity:.26,blending:pt,side:gt})),r=new ud(new St().setFromPoints([new P(-1.02,0,0),new P(-.55,0,0),new P(.55,0,0),new P(1.02,0,0),new P(0,-1.02,0),new P(0,-.55,0),new P(0,.55,0),new P(0,1.02,0)]),new co({color:wn.violet,transparent:!0,opacity:.42,blending:pt}));t.rotation.x=Math.PI/2,n.rotation.x=Math.PI/2;const a=new Ol(new St().setFromPoints([i,i]),new co({color:wn.violet,transparent:!0,opacity:.45,blending:pt}));return e.add(t,n,r,di(8208895,1.8,.12)),In.add(e),In.add(a),{pos:i.clone(),age:0,group:e,well:t,halo:n,arms:r,line:a}}function Yo(){if(Pt||!window.AudioContext&&!window.webkitAudioContext)return Pt;const i=window.AudioContext||window.webkitAudioContext;try{const e=new i,t=e.createGain();t.gain.value=.045,t.connect(e.destination),Pt={ctx:e,master:t}}catch{Pt=null}return Pt}function kn(i,e=.09,t="sine",n=.8){if(_?.muted)return;const r=Yo();if(!r)return;r.ctx.state==="suspended"&&r.ctx.resume().catch(()=>{});const a=r.ctx.createOscillator(),s=r.ctx.createGain();a.type=t,a.frequency.setValueAtTime(i,r.ctx.currentTime),a.frequency.exponentialRampToValueAtTime(Math.max(40,i*.55),r.ctx.currentTime+e),s.gain.setValueAtTime(0,r.ctx.currentTime),s.gain.linearRampToValueAtTime(n,r.ctx.currentTime+.012),s.gain.exponentialRampToValueAtTime(.001,r.ctx.currentTime+e),a.connect(s).connect(r.master),a.start(),a.stop(r.ctx.currentTime+e+.02)}function Hi(i){i==="anchor"?kn(440,.11,"triangle",.75):i==="danger"?kn(210,.16,"square",.42):i==="nearMiss"?kn(760,.12,"sine",.55):i==="death"?kn(_?.deathCause==="frozen"?90:70,.55,"sawtooth",.6):i==="highScore"&&(kn(520,.08,"triangle",.45),window.setTimeout(()=>kn(780,.12,"sine",.42),90))}function mg(){if(ot||!Pt)return;const i=Pt.ctx,e=i.createGain();e.gain.value=0,e.connect(Pt.master);const t=i.createBiquadFilter();t.type="lowpass",t.frequency.value=1800,t.Q.value=.7,t.connect(e);const n=i.createGain();n.gain.value=.65,n.connect(t);const r=i.createOscillator();r.type="sine",r.frequency.value=55,r.start(),r.connect(n);const a=i.createOscillator();a.type="triangle",a.frequency.value=82,a.start(),a.connect(n);const s=i.createOscillator();s.type="sine",s.frequency.value=.07,s.start();const o=i.createGain();o.gain.value=2.5,s.connect(o),o.connect(r.frequency),o.connect(a.frequency);const c=i.createGain();c.gain.value=0,c.connect(t);const l=i.createOscillator();l.type="sine",l.frequency.value=220,l.start(),l.connect(c);const u=i.createDelay(.5);u.delayTime.value=.26;const h=i.createGain();h.gain.value=.34,n.connect(u),u.connect(h),h.connect(u);const f=i.createGain();f.gain.value=.18,u.connect(f),f.connect(e);const p=i.createGain();p.gain.value=0,p.connect(e);const x=i.createOscillator();x.type="sawtooth",x.frequency.value=38,x.start(),x.connect(p);const v=i.createGain();v.gain.value=0,v.connect(e);const m=i.createOscillator();m.type="sine",m.frequency.value=62,m.start(),m.connect(v),ot={musicMaster:e,filter:t,droneGain:n,drone1:r,drone2:a,lfo:s,lfoGain:o,harmGain:c,harm:l,delayOut:f,collapseGain:p,collapseOsc:x,heartGain:v,heartOsc:m,lastHeartbeat:0},sn||e.gain.setTargetAtTime(.9,i.currentTime+.1,1.8)}function xg(){if(!Pt)return;if(!ot){mg();return}const i=Pt.ctx;i.state==="suspended"&&i.resume().catch(()=>{});const e=i.currentTime,t=_?.lastThreat||{proximityIntensity:0},n=Ze.clamp(t.proximityIntensity||0,0,1),r=(_?.focus||0)>0,a=_?.dead||!1,s=sn?0:a?.5:.9+n*1.1;ot.musicMaster.gain.setTargetAtTime(s,e,a?3.5:.6);const o=r?500+n*300:1400+n*1600;if(ot.filter.frequency.setTargetAtTime(o,e,.25),ot.lfo.frequency.setTargetAtTime(.05+n*.28,e,.8),ot.lfoGain.gain.setTargetAtTime(2+n*9,e,.5),ot.harmGain.gain.setTargetAtTime(r?.08:n*.55,e,.7),_){const c=(r?165:220)+Math.sin(_.time*.09)*12;ot.harm.frequency.setTargetAtTime(c,e,2)}if(ot.collapseGain.gain.setTargetAtTime(a?.45:0,e,a?2.5:.4),!a&&n>.6&&_){const c=.55-n*.28;_.time-ot.lastHeartbeat>c&&(ot.lastHeartbeat=_.time,ot.heartGain.gain.cancelScheduledValues(e),ot.heartGain.gain.setValueAtTime(0,e),ot.heartGain.gain.linearRampToValueAtTime(.55*n,e+.025),ot.heartGain.gain.exponentialRampToValueAtTime(.001,e+.2))}else n<=.6&&ot.heartGain.gain.setTargetAtTime(0,e,.15)}function gg(){if(en.userData.portalContinuity=Dn,!!window.initVibeJamPortals)try{window.initVibeJamPortals({scene:Bt,getPlayer:()=>en,spawnPoint:po,exitPosition:rg}),window.setTimeout(_g,0)}catch(i){console.warn("[Three Suns] Vibe Jam portal init skipped:",i)}}function _g(){Bt.traverse(i=>{!i.isGroup||i.userData.threeSunsTamed||!i.children.some(t=>t.geometry?.type==="TorusGeometry"&&t.geometry.parameters?.radius===15)||(i.userData.threeSunsTamed=!0,i.scale.setScalar(.08),i.children.forEach(t=>{t.material&&(t.material.opacity=Math.min(t.material.opacity??.5,.34))}))})}function vg(){const i=new URLSearchParams(window.location.search);return tu.forEach(e=>{!i.has(e)&&Dn[e]&&i.set(e,Dn[e])}),i.set("portal","true"),i.set("ref",`${window.location.origin}${window.location.pathname}`),i.set("speed",String(window.currentSpeed||1)),i.set("hp",String(Math.ceil(_?.health??100))),i.set("speed_x",String(Number(_?.planetVel?.x||0).toFixed(2))),i.set("speed_y",String(Number(_?.planetVel?.y||0).toFixed(2))),i.set("speed_z","0"),i.set("rotation_x",String(Number(en.rotation.x).toFixed(2))),i.set("rotation_y",String(Number(en.rotation.y).toFixed(2))),i.set("rotation_z",String(Number(en.rotation.z).toFixed(2))),`https://vibej.am/portal/2026?${i.toString()}`}function Zi(){window.location.href=vg()}function ri(i,e){const t=Number.parseFloat(yr.get(i));return Number.isFinite(t)?t:e}function fn(i,e){return i+Math.random()*(e-i)}function ba(){const i=Math.random()*Math.PI*2;return new P(Math.cos(i),Math.sin(i),0)}function Ea(i){return i.pull*Jx*(i.id==="gamma"?Qx:1)}function da(i=null,e=Tt){const t=new Set(e),n=Tt.filter(r=>!t.has(r)).map(r=>({sun:r,pos:r.pos.clone()}));for(let r=0;r<e.length;r+=1){const a=e[r];let s=null;for(let l=0;l<140;l+=1){const u=Math.random()*Math.PI*2,h=fn(a.id==="gamma"?6:7.8,17),f=new P(Math.cos(u)*h+fn(-3.2,3.2),Math.sin(u)*h*.76+fn(-2.2,2.2),0),p=n.every(v=>f.distanceTo(v.pos)>Math.max(a.killRadius+v.sun.killRadius+5.2,(a.auraRadius+v.sun.auraRadius)*.72)),x=!i||f.distanceTo(i)>Math.max(a.auraRadius+3.2,a.killRadius+6);if(p&&x){s=f;break}}if(!s){const l=i&&i.lengthSq()>.001?Math.atan2(-i.y,-i.x):Math.random()*Math.PI*2;for(let u=0;u<18;u+=1){const h=l+u/18*Math.PI*2+r*1.65,f=new P(Math.cos(h)*16.5,Math.sin(h)*12.25,0),p=n.every(v=>f.distanceTo(v.pos)>Math.max(a.killRadius+v.sun.killRadius+5.2,(a.auraRadius+v.sun.auraRadius)*.72)),x=!i||f.distanceTo(i)>Math.max(a.auraRadius+3.2,a.killRadius+6);if(p&&x){s=f;break}}}s||(s=ba().multiplyScalar(fn(14.4,17.3)));const o=new P(-s.y,s.x,0).normalize().multiplyScalar(fn(.16,.46)*fl),c=ba().multiplyScalar(fn(.02,.16)*fl);a.pos.copy(s),a.vel.copy(o.add(c)),a.group.position.copy(a.pos),a.worldPos.copy(a.pos),n.push({sun:a,pos:s})}}function Mg(i){da();let e=null;for(let u=0;u<140;u+=1){const h=new P(fn(-17,17),fn(-10.8,10.8),0);if(Tt.every(p=>{const x=Math.max(p.auraRadius+1.2,p.size*3.8);return h.distanceTo(p.pos)>x})){e=h;break}}if(!e){const u=Tt.reduce((h,f)=>h.add(f.pos),new P).multiplyScalar(-1);u.lengthSq()<.001&&u.copy(ba()),u.normalize(),e=u.multiplyScalar(14.8)}let t=Tt[0],n=-1/0;for(const u of Tt){const h=Math.max(e.distanceToSquared(u.pos),1),f=Ea(u)/h;f>n&&(n=f,t=u)}const r=t.pos.clone().sub(e),a=Math.max(r.length(),1),s=Math.random()<.5?-1:1,o=new P(-r.y,r.x,0).normalize().multiplyScalar(s),c=Math.sqrt(Ea(t)/a)*fn(.78,1.12),l=o.multiplyScalar(c).add(ba().multiplyScalar(fn(.08,.36))).add(i.clone().multiplyScalar(Vo?.25:.08));return po.x=e.x,po.y=e.y,{planetPos:e,planetVel:l}}function ji(){const i=Ze.clamp(ri("speed",1),.4,3.2),e=Vo?new P(Ze.clamp(ri("speed_x",.7*i),-2.8,2.8),Ze.clamp(ri("speed_y",.25*i),-2.8,2.8),0):new P(2.2,1.08,0),t=Mg(e);_={time:0,days:0,difficulty:.88,health:Ze.clamp(ri("hp",100),35,100),signal:zo,mode:"shield",paused:!1,muted:sn,highQuality:hn,dead:!1,deathCause:"",deathWasHighScore:!1,focus:0,focusCooldown:0,shake:0,damageFlash:0,supernovaFlash:0,supernovaCooldown:0,voidExposure:0,grace:$x,lastDangerCue:-99,lastNearMiss:-99,lastModeBlock:-99,nearMissArmed:!1,prevNearest:1/0,flashOmen:"",flashOmenUntil:0,toast:"",toastUntil:0,critical:{burned:0,frozen:0,scattered:0,collapse:0},lastProximityWarn:-99,lastDamageType:"",lastThreat:{burn:0,cold:0,chaos:0,safe:!0,proximityIntensity:0,damageType:""},anchors:[],planetPos:t.planetPos,planetVel:t.planetVel},en.rotation.set(ri("rotation_x",0),ri("rotation_y",0),ri("rotation_z",0));for(const n of[...In.children])In.remove(n);for(const n of[...Ua,pr])n.positions.fill(0),n.colorsArray.fill(0),n.geometry.attributes.position.needsUpdate=!0,n.geometry.attributes.color.needsUpdate=!0,n.index=0;for(const n of[...Ni])Un.remove(n.mesh);Ni.length=0;for(const n of[...Fi])Un.remove(n.mesh);Fi.length=0,Ma.classList.add("hidden"),Ma.removeAttribute("data-cause"),Pr.classList.add("hidden"),$i.classList.add("hidden"),Ki.classList.add("hidden"),Oo.textContent="",Yl.textContent=String(Er()),mr(_.mode),_u(0,0,0,["omens quiet"])}function Er(){return Number.parseInt(localStorage.getItem("three-suns-high-score")||"0",10)||0}function Sg(i){i>Er()&&localStorage.setItem("three-suns-high-score",String(i)),Yl.textContent=String(Er())}function uu(){ql.classList.remove("tutorial-highlight"),Fo.classList.remove("tutorial-highlight"),document.querySelector("#mode-controls")?.classList.remove("tutorial-highlight"),document.querySelector("#mode-info")?.classList.remove("tutorial-highlight"),document.querySelector("#mobile-controls")?.classList.remove("tutorial-highlight"),pn.visible=!1,pn.material.opacity=0}function hu(){if(!lt.active)return;const i=Lr[lt.index];Ux.textContent=i.title,Nx.textContent=i.text,jl.classList.remove("hidden"),uu(),i.highlight==="signal"&&Fo.classList.add("tutorial-highlight"),i.highlight==="modes"&&(document.querySelector("#mode-controls")?.classList.add("tutorial-highlight"),document.querySelector("#mobile-controls")?.classList.add("tutorial-highlight")),i.highlight==="focus"&&(document.querySelector("#mode-info")?.classList.add("tutorial-highlight"),document.querySelector("#mobile-controls")?.classList.add("tutorial-highlight"))}function du(i=!1){!_||_.dead||!i&&(Vo||localStorage.getItem(eu))||($i.classList.add("hidden"),Ki.classList.add("hidden"),Pr.classList.add("hidden"),_.paused=!1,_.grace=Math.max(_.grace,4),_.health=Math.max(_.health,70),lt.active=!0,lt.index=0,lt.timer=0,hu())}function Na(){lt.active&&(lt.active=!1,jl.classList.add("hidden"),uu(),localStorage.setItem(eu,"true"),_&&!_.dead&&(_.grace=Math.max(_.grace,2),_.flashOmen="SURVIVE THE DAWN",_.flashOmenUntil=_.time+1.4))}function $o(){if(lt.active){if(lt.index>=Lr.length-1){Na();return}lt.index+=1,lt.timer=0,hu()}}function Ta(i){if(!lt.active)return;Lr[lt.index].waitFor===i&&$o()}function yg(i){if(!lt.active||!_||_.dead)return;_.grace=Math.max(_.grace,.35),_.health=Math.max(_.health,45),_.voidExposure=Math.min(_.voidExposure,1.5),lt.timer+=i;const e=Lr[lt.index];e.duration&&lt.timer>=e.duration&&$o()}function bg(){if(!lt.active)return;const i=Lr[lt.index];if(i.highlight!=="planet"&&i.highlight!=="sun")return;const e=Tt.reduce((r,a)=>!r||a.lastDistance<r.lastDistance?a:r,null),t=i.highlight==="planet"?_.planetPos:e?.pos;if(!t)return;const n=i.highlight==="planet"?2.3:e.auraRadius;pn.visible=!0,pn.position.copy(t),pn.scale.setScalar(n*(1+Math.sin(_.time*4.8)*.08)),pn.material.color.setHex(i.highlight==="planet"?10485716:e.color.getHex()),pn.material.opacity=.34+Math.sin(_.time*5.6)*.12}function mr(i){if(!(!Ft[i]||!_)){if(_.mode=i,document.body.classList.remove("mode-shield","mode-hibernation","mode-observatory"),document.body.classList.add(`mode-${i}`),$l.textContent=Ft[i].label,Kl.textContent=`MODE: ${Ft[i].label}`,Zl.textContent=Ft[i].effect,Jl.forEach(e=>e.classList.toggle("active",e.dataset.mode===i)),hi(Ft[i].toast,1.1),fu(Ft[i].color,.75),ot&&Pt&&!sn){const e=Pt.ctx.currentTime;ot.musicMaster.gain.cancelScheduledValues(e),ot.musicMaster.gain.setValueAtTime(ot.musicMaster.gain.value,e),ot.musicMaster.gain.linearRampToValueAtTime(2.2,e+.07),ot.musicMaster.gain.setTargetAtTime(.9,e+.07,.45)}_.flashOmen=gu(_.lastThreat.burn,_.lastThreat.cold,_.lastThreat.chaos,_.lastThreat.nearest||1/0,_.lastThreat.speed||0)[0],_.flashOmenUntil=_.mode==="observatory"?_.time+.15:_.time,Ta("mode")}}function hi(i,e=.9){_&&(_.toast=i,_.toastUntil=_.time+e,fr.textContent=i,fr.classList.add("visible"))}function fu(i,e=.7){qo.forEach(t=>{t.age=-t.delay,t.ring.visible=!0,t.ring.position.copy(_.planetPos),t.ring.material.color.setHex(i),t.duration=e})}function Ko(i){!_||_.dead||(_.paused=typeof i=="boolean"?i:!_.paused,Pr.classList.toggle("hidden",!_.paused))}function pu(){_&&(lt.active&&Na(),Ki.classList.add("hidden"),Pr.classList.add("hidden"),$i.classList.remove("hidden"),_.dead||(_.paused=!0))}function Zo(){_&&($i.classList.add("hidden"),Pr.classList.add("hidden"),Ki.classList.remove("hidden"),_.dead||(_.paused=!0))}function Ji(){$i.classList.add("hidden"),Ki.classList.add("hidden"),localStorage.setItem("threesuns_seen_info","true"),_&&!_.dead&&(_.paused=!1)}function mu(){if(sn=!sn,_&&(_.muted=sn),localStorage.setItem("threesuns_muted",String(sn)),Bo.textContent=sn?"Unmute":"Mute",ot&&Pt){const i=Pt.ctx.currentTime;ot.musicMaster.gain.setTargetAtTime(sn?0:.9,i,.3)}}function Eg(){hn=!hn,_&&(_.highQuality=hn),ui.setPixelRatio(hn?Math.min(window.devicePixelRatio,2):1),Ia.visible=hn,Ua.forEach(i=>{i.points.visible=hn}),pr.points.material.opacity=hn?.72:.38,su[2].visible=hn,hi(hn?"LOW FX OFF":"LOW FX ON",1)}function Tg(i,e=0){const t=_?.difficulty||1;_&&e>0&&!_.dead&&Tt.forEach(n=>{const r=new P;for(const s of Tt){if(s===n)continue;const o=s.pos.clone().sub(n.pos),c=Math.max(o.lengthSq(),18);r.addScaledVector(o.normalize(),Ea(s)*.046/c)}const a=Math.max(0,n.pos.length()-14.5);a>0&&r.addScaledVector(n.pos.clone().normalize(),-a*.018),n.vel.addScaledVector(r,e),n.vel.length()>3&&n.vel.setLength(3),n.vel.multiplyScalar(jx),n.pos.addScaledVector(n.vel,e),n.pos.z=Math.sin(i*.34+n.phase)*.65}),Tt.forEach((n,r)=>{const a=n.phase;n.group.position.copy(n.pos),n.worldPos.copy(n.pos),n.core.rotation.y+=.01+r*.004,n.glow.material.opacity=.28+Math.sin(i*2.2+a)*.08,n.rings.forEach(c=>{const l=(i*(.32+r*.07+t*.025)+c.userData.offset+Math.sin(i*.18+a)*.08)%1,u=n.size*(2.4+l*(7.6+t*.8));c.scale.set(u,u,u),c.rotation.z=i*(.1+r*.03),c.material.opacity=(1-l)*(.16+t*.04)}),mo(Ua[r],n.pos,.75);const o=n.lastDistance>n.killRadius&&n.lastDistance<=n.dangerRadius?1-Ze.smoothstep(n.lastDistance,n.killRadius,n.dangerRadius):0;n.killRing.rotation.z=i*.22+a,n.killRing.material.opacity=(.13+Math.sin(i*1.8+a)*.05)*(1+o*2.8),n.dangerRing.rotation.z=-(i*.1+a),n.dangerRing.material.opacity=.075+Math.sin(i*1.1+a+1.5)*.03})}function Ag(){if(!_||_.dead||lt.active||_.supernovaCooldown>0)return;const i=new Set,e=new Map(Tt.map(c=>[c,new Set]));for(let c=0;c<Tt.length;c+=1)for(let l=c+1;l<Tt.length;l+=1){const u=Tt[c],h=Tt[l],f=u.pos.distanceTo(h.pos),p=u.size+h.size+eg;f<=p&&(i.add(u),i.add(h),e.get(u).add(h),e.get(h).add(u))}if(!i.size)return;const t=i.values().next().value,n=[],r=[t],a=new Set;for(;r.length;){const c=r.pop();a.has(c)||(a.add(c),n.push(c),e.get(c).forEach(l=>r.push(l)))}const s=n.reduce((c,l)=>c.add(l.pos),new P).multiplyScalar(1/n.length),o=n.reduce((c,l,u)=>{for(let h=u+1;h<n.length;h+=1)c=Math.min(c,l.pos.distanceTo(n[h].pos));return c},1/0);Pg(s,o,n)}function wg(i,e){if(_.dead||_.paused)return;Yo(),Pt?.ctx.state==="suspended"&&Pt.ctx.resume().catch(()=>{});const t=Ft[_.mode],n=Kx*t.anchorCost;if(_.signal<n){_.flashOmen="SIGNAL TOO FAINT",_.flashOmenUntil=_.time+.75,Hi("danger");return}const r=ui.domElement.getBoundingClientRect();if(gs.x=(i-r.left)/r.width*2-1,gs.y=-((e-r.top)/r.height)*2+1,hl.setFromCamera(gs,xn),hl.ray.intersectPlane(Gx,ii),ii.x=Ze.clamp(ii.x,-25,25),ii.y=Ze.clamp(ii.y,-16,16),ii.z=0,_.anchors.length>=Xx){const a=_.anchors.shift();In.remove(a.group),In.remove(a.line)}_.signal=Math.max(0,_.signal-n),_.anchors.push(pg(ii)),_.flashOmen="ANCHOR SINGS BRIEFLY",_.flashOmenUntil=_.time+.75,Ta("anchor"),Hi("anchor")}function xu(){if(!(_.dead||_.paused)){if(_.focusCooldown>0){Ta("focus"),hi("FOCUS RECHARGING",.8);return}Yo(),_.focus=qx,_.focusCooldown=Yx,_.flashOmen="TIME DILATED",_.flashOmenUntil=_.time+1.1,hi("FOCUS ACTIVE",1.1),fu(Ft[_.mode].color,.85),Ta("focus"),kn(180,.34,"sine",.9)}}function Rg(i){_.lastNearMiss=_.time,_.flashOmen="NEAR MISS: THE SUN BLINKED FIRST",_.flashOmenUntil=_.time+1.2;const e=new it(new Ht(.9,1.02,72),new Mt({color:16777215,transparent:!0,opacity:.8,blending:pt,side:gt}));e.position.copy(i),e.rotation.x=Math.PI/2,Un.add(e),Ni.push({mesh:e,age:0}),Hi("nearMiss")}function Cg(i){for(let e=Ni.length-1;e>=0;e-=1){const t=Ni[e];t.age+=i;const n=1-t.age/.7;t.mesh.scale.setScalar(1+t.age*5.8),t.mesh.material.opacity=Math.max(0,n)*.72,t.age>=.7&&(Un.remove(t.mesh),Ni.splice(e,1))}}function Pg(i,e,t=Tt){if(!_||_.dead||_.supernovaCooldown>0)return;const n=t.length>=3,r=n?1.25:1;_.supernovaCooldown=2.6,_.supernovaFlash=r,_.shake=Math.max(_.shake,n?1.65:1.25),_.flashOmen=n?"THREE DAWNS SHATTERED":"BINARY IMPACT",_.flashOmenUntil=_.time+1.15,hi(n?"THREE NEW DAWNS IGNITE":"TWIN STARS REIGNITE",1.8);const a=new it(new Ht(.8,1.08,112),new Mt({color:16312831,transparent:!0,opacity:.95,blending:pt,side:gt,depthWrite:!1}));a.position.copy(i),a.rotation.x=Math.PI/2,Un.add(a),Fi.push({mesh:a,age:0,power:r});const s=_.planetPos.distanceTo(i);if(s<(n?6.5:5.4)){da(_.planetPos,t),go(e<1.3?"collapse":"scattered");return}const o=1-Ze.smoothstep(s,n?6.5:5.4,n?30:25);if(o>0){const c=Ze.lerp(12,n?78:56,o**1.25);if(_.health=Math.max(0,_.health-c),_.damageFlash=Math.max(_.damageFlash,.9),_.lastDamageType="chaos",_.health<=0){da(_.planetPos,t),go("collapse");return}}da(_.planetPos,t),_.grace=Math.max(_.grace,tg),_.nearMissArmed=!1,_.prevNearest=1/0,kn(52,.58,"sawtooth",.85)}function Lg(i){_&&(_.supernovaFlash=Math.max(0,_.supernovaFlash-i*1.15),_.supernovaCooldown=Math.max(0,_.supernovaCooldown-i));for(let e=Fi.length-1;e>=0;e-=1){const t=Fi[e];t.age+=i;const n=1-t.age/1.15;t.mesh.scale.setScalar(1+t.age*23*(t.power||1)),t.mesh.material.opacity=Math.max(0,n)*.95,t.mesh.material.color.lerp(wn.gold,i*1.8),t.age>=1.15&&(Un.remove(t.mesh),Fi.splice(e,1))}}function Dg(i){qo.forEach(e=>{if(!e.ring.visible||(e.age+=i,e.age<0))return;const t=e.duration||.85,n=1-e.age/t;e.ring.position.copy(_.planetPos),e.ring.scale.setScalar(1+e.age*4.4),e.ring.material.opacity=Math.max(0,n)*.58,e.age>=t&&(e.ring.visible=!1,e.ring.material.opacity=0)})}const vs=new P,xl=new P;function Ig(i){const e=_.planetPos,t=_.planetVel,n=new P;let r=1/0,a=null,s=null,o=1/0,c=0,l=0,u=0,h=0,f="",p=0;en.position.copy(e),en.updateMatrixWorld(),en.getWorldPosition(xl);for(const O of Tt){O.group.updateMatrixWorld(),O.group.getWorldPosition(vs),O.worldPos.copy(vs);const Y=vs.clone().sub(xl),k=Math.max(Y.length(),1e-4),$=Y.divideScalar(k);O.lastDistance=k,k<r&&(r=k,a=O),k<=O.killRadius&&k<o&&(s=O,o=k);const J=Math.max(k*k,3.8),W=Ea(O)*_.difficulty/J;if(n.addScaledVector($,W),k<=O.auraRadius){const re=Ze.clamp((O.auraRadius-k)/Math.max(.001,O.auraRadius-O.killRadius),0,1)**1.35,_e=Ft[_.mode],Be=O.dangerType==="heat"?_e.heatDamage:O.dangerType==="cold"?_e.coldDamage:_e.chaosDamage,Ye=O.dangerType==="heat"?34:O.dangerType==="cold"?20:27,$e=Ze.lerp(1.2,Ye,re)*Be,Ke=Ze.clamp(re*Be,0,1.4);O.dangerType==="heat"?c=Math.max(c,Ke):O.dangerType==="cold"?l=Math.max(l,Ke):u=Math.max(u,Ke),h+=$e,$e>p&&(p=$e,f=O.dangerType)}}for(const O of _.anchors){const Y=O.age/fo,k=Math.sin((1-Y)*Math.PI*.5)**.75,$=O.pos.clone().sub(e),J=Math.max($.length(),.001),W=Math.max(J,1.35)**1.9;n.addScaledVector($.divideScalar(J),Ze.clamp(15*Ft[_.mode].anchorPull*k/W,0,5))}const x=e.clone().multiplyScalar(-.006-Math.max(0,e.length()-20)*.0015);n.add(x),n.length()>8&&n.setLength(8),t.addScaledVector(n,i);const v=Math.min(18.5,10.6+_.difficulty*2.6);t.length()>v&&t.setLength(v),t.multiplyScalar(Zx),e.addScaledVector(t,i);const m=t.length(),d=Ft[_.mode],A=h>0,E=e.length()>ng||r>ig;_.voidExposure=E?_.voidExposure+i:Math.max(0,_.voidExposure-i*1.8);const w=Ze.clamp((_.voidExposure-Ql)/11,0,1),D=Ze.clamp((_.voidExposure-1.2)/10,0,1),T=w>0?1.5+17*w**1.35:0,L=_.grace>0?.28:1;if(A){const O=h*L*i;_.health=Math.max(0,_.health-O),_.damageFlash=Math.max(_.damageFlash,Ze.clamp(O*.09+p*.012,.18,.85)),_.lastDamageType=f,_.shake=Math.max(_.shake,Ze.clamp(Math.max(c,l,u)*.7,0,.85)),_.time-_.lastProximityWarn>.7&&(_.lastProximityWarn=_.time,_.flashOmen=f==="heat"?"HEAT RISING":f==="cold"?"FREEZE WARNING":"ORBIT UNSTABLE",_.flashOmenUntil=_.time+.7)}if(T>0){const O=T*L*i;_.health=Math.max(0,_.health-O),_.damageFlash=Math.max(_.damageFlash,Ze.clamp(.16+w*.55,.16,.72)),_.lastDamageType="cold",l=Math.max(l,.28+w*.82),_.time-_.lastProximityWarn>1.1&&(_.lastProximityWarn=_.time,_.flashOmen=_.voidExposure>8?"NO SUNLIGHT DETECTED":"VOID COLD RISING",_.flashOmenUntil=_.time+.9)}else D>0&&(l=Math.max(l,D*.42));!A&&!E&&(_.health=Ze.clamp(_.health+4.2*d.regen*i,0,100)),_.damageFlash=Math.max(0,_.damageFlash-i*1.8);const G=!A&&!E,y=(5.8+(G?7.2:1.3)+(_.health>72?2.2:0))*d.regen*1.2;_.signal=Ze.clamp(_.signal+y*i,0,zo),E&&!f&&(f="cold");const S=Math.max(c,l,u,D*.72),I=Ze.smoothstep(m,8.8,13.2)*.34;u=Math.max(u,I),_.lastThreat={burn:c,cold:l,chaos:u,safe:G,nearest:r,speed:m,proximityIntensity:S,damageType:f},_.time-_.lastModeBlock>1.25&&(_.mode==="shield"&&c>.5?(_.lastModeBlock=_.time,hi("SOLAR AURA HELD",.75)):_.mode==="hibernation"&&l>.5&&(_.lastModeBlock=_.time,hi("DEEP COLD HELD",.75))),_.prevNearest<(a?.killRadius??2.5)+.75&&(_.nearMissArmed=!0),_.nearMissArmed&&r>(a?.killRadius??2.5)+2.1&&r>_.prevNearest&&_.time-_.lastNearMiss>2.3&&(_.nearMissArmed=!1,Rg(e)),_.prevNearest=r,A&&_.time-_.lastDangerCue>3.2&&(_.lastDangerCue=_.time,Hi("danger"));let B=null;s?B=s.deathCause:_.health<=0&&(B=_.lastDamageType==="heat"?"burned":_.lastDamageType==="cold"?"frozen":_.lastDamageType==="chaos"?"scattered":"collapse"),B&&lt.active&&(B=null,_.health=Math.max(_.health,45),_.damageFlash=Math.max(_.damageFlash,.35),s&&_.planetVel.addScaledVector(_.planetPos.clone().sub(s.pos).normalize(),1.8)),B&&go(B),_u(c,l,u,gu(c,l,u,r,m))}function gu(i,e,t,n,r){if(_.flashOmen&&_.time<_.flashOmenUntil)return[_.flashOmen];const a=[],s=_.mode==="observatory";return _.grace>0&&a.push("CIVILIZATION DREAMING"),_.voidExposure>Ql&&a.push(_.voidExposure>8?"NO SUNLIGHT DETECTED":"VOID COLD RISING"),i>.55&&a.push(s?"HEAT RISING — ALPHA AURA":"HEAT RISING"),e>.5&&a.push(s?"FREEZE WARNING — BETA AURA":"FREEZE WARNING"),(t>.54||r>9.2)&&a.push(s?"ORBIT UNSTABLE — GAMMA PULL":"ORBIT UNSTABLE"),_.health<18&&a.push("HEALTH CRITICAL"),!a.length&&i<.18&&e<.2&&t<.25&&a.push(s?"STABLE WINDOW — HEALTH RECOVERING":_.health>82?"CIVILIZATION DREAMING":"STABLE WINDOW"),_.focusCooldown<=0&&_.days>4&&a.length<2&&a.push("FOCUS READY — SLOW TIME"),a.length?a.slice(0,2):["STABLE WINDOW"]}function _u(i,e,t,n){fx.textContent=String(_.days),px.textContent=`${Math.ceil(_.health)}%`,mx.style.width=`${Math.max(0,_.health)}%`,ql.classList.toggle("flash",_.damageFlash>.05),$l.textContent=Ft[_.mode].label,Kl.textContent=`MODE: ${Ft[_.mode].label}`,Zl.textContent=Ft[_.mode].effect,Mx.textContent=_.focusCooldown>0?`FOCUS ${Math.ceil(_.focusCooldown)}S`:"FOCUS READY",xx.textContent=n.join(" / "),gx.style.width=`${Math.max(8,i*100)}%`,_x.style.width=`${Math.max(8,e*100)}%`,vx.style.width=`${Math.max(8,t*100)}%`,Fo.style.width=`${Math.max(8,_.signal/zo*100)}%`,document.body.classList.toggle("danger-heat",_.lastThreat.damageType==="heat"),document.body.classList.toggle("danger-cold",_.lastThreat.damageType==="cold"),document.body.classList.toggle("danger-chaos",_.lastThreat.damageType==="chaos"),document.body.classList.toggle("danger-supernova",_.supernovaFlash>0),dx.style.setProperty("--danger-alpha",String(Ze.clamp(_.damageFlash+_.lastThreat.proximityIntensity*.28+_.supernovaFlash,0,.95))),_.time<10?(xs.textContent=pl[Math.min(pl.length-1,Math.floor(_.time/2))],xs.style.opacity=String(1-Math.max(0,_.time-8)/2)):xs.style.opacity="0",_.toast&&_.time<_.toastUntil?(fr.textContent=_.toast,fr.classList.add("visible")):fr.classList.remove("visible")}function go(i){if(_.dead)return;_.dead=!0,_.deathCause=i;const e=Er();Sg(_.days),_.deathWasHighScore=_.days>e;const t=_.days,n={burned:"Burned",frozen:"Frozen",scattered:"Chaos",collapse:"Collapse"}[i],r={burned:"THE DAWN CONSUMED YOU",frozen:"THE LAST CITY FROZE",scattered:t%2?"GRAVITY FORGOT YOU":"THE HIDDEN MATH WON",collapse:"NO ONE WILL REMEMBER THE ORBIT"},s=Object.fromEntries(Object.entries({burned:["The red sun taught the oceans to boil.","The atmosphere became a funeral flame.","The cities glowed once, then vanished."],frozen:["Warmth became a myth.","The oceans stopped remembering waves.","The last signal arrived as ice."],scattered:["Your orbit became a rumor.","Resonance completed its sentence.","The world missed itself by a fraction."],collapse:["Civilization understood too late.","The last observatory blinked twice.","History became a closed set."]}).map(([o,c])=>[o,c[t%c.length]]));Ma.dataset.cause=i,Sx.textContent=r[i],yx.textContent=`Your civilization survived ${t} days.`,bx.textContent=s[i],Ex.textContent=`Cause ${n} / High score ${Er()}`,Oo.textContent=_.deathWasHighScore?"New high score. The dawn is annoyed.":"",Ma.classList.remove("hidden"),Hi("death"),_.deathWasHighScore&&window.setTimeout(()=>Hi("highScore"),420)}async function vu(){if(!_||!navigator.clipboard)return;const i=`${window.location.origin}${window.location.pathname}`,e=`I survived ${_.days} days in Three Suns: Chaotic Dawn ☀️☀️☀️ ${i}`;try{await navigator.clipboard.writeText(e),Oo.textContent="Copied survival boast."}catch{}}function Ug(i){for(let e=_.anchors.length-1;e>=0;e-=1){const t=_.anchors[e];t.age+=i;const n=1-t.age/fo;t.group.rotation.y+=i*2.1,t.group.rotation.z-=i*.8,t.well.scale.setScalar(1+t.age*.62),t.halo.scale.setScalar(1.1+Math.sin(_.time*9+e)*.24+t.age*.35),t.arms.scale.setScalar(1+Math.sin(_.time*7+e)*.08);const r=t.pos.clone().lerp(_.planetPos,.5);r.z=.9+Math.sin(_.time*3+e)*.25;const a=[t.pos,r,_.planetPos].map(s=>s.clone());t.line.geometry.setFromPoints(a),t.line.material.opacity=Ze.clamp(n,0,1)*.38,t.group.children.forEach(s=>{s.material&&(s.material.opacity=Ze.clamp(n,0,1)*.78)}),t.age>=fo&&(In.remove(t.group),In.remove(t.line),_.anchors.splice(e,1))}}function Ng(i){const{burn:e,cold:t,chaos:n,proximityIntensity:r=0}=_.lastThreat,a=Ft[_.mode].color;ou.rotation.y+=i*.35,xo.material.color.setHex(a),xo.material.opacity=.13+Math.max(e,t,n)*.12+r*.22,Ho.material.opacity=_.mode==="shield"?.86:0,cu.material.opacity=_.mode==="hibernation"?.34:0,Sa.material.opacity=_.mode==="observatory"?.9:0,Sa.rotation.z+=i*1.3,ko.material.opacity=e*.62+r*.38,lu.material.opacity=t*.18+(_.mode==="hibernation"?.08:0)+r*.14,Di.material.opacity=n*.54+r*.32,Di.rotation.z+=i*(2.4+n*6),Di.position.x=Math.sin(_.time*41)*n*.035,Di.position.y=Math.cos(_.time*37)*n*.035;const s=Math.max(0,1-_.health/100);br.material.emissiveIntensity=Ze.lerp(.48,.08,s)+e*.35;const o=_.mode==="hibernation"?.55:1;Go.material.opacity=Math.max(.04,.22-s*.16)*o,Yn.material.opacity*=o,Yn.material.color.setHex(a)}function Fg(){_.dead||_.paused||_.planetPos.distanceTo(nu)<1.25&&Zi()}function gl(i){_.shake=Math.max(0,_.shake-i*.8);const e=_.shake*_.shake*(_.highQuality?.55:.22);xn.position.x=Math.sin(_.time*37)*e,xn.position.y=Math.cos(_.time*31)*e,xn.position.z=56+Math.sin(_.time*18)*e,xn.lookAt(0,0,0)}function Mu(){requestAnimationFrame(Mu);const i=Math.min(Hx.getDelta(),Wx);xg();let e=i;if(yg(i),lt.active&&!_.dead&&(e*=.18),_.paused&&!_.dead){gl(0),window.animateVibeJamPortals&&window.animateVibeJamPortals(),ui.render(Bt,xn);return}_.dead&&(e*=.12),_.focus>0&&!_.dead&&(e*=.36,_.focus-=e/.36),_.focusCooldown>0&&(_.focusCooldown=Math.max(0,_.focusCooldown-e)),_.time+=e,Tg(_.time,e),Ag(),ml(pr,_.highQuality?.983:.94),Ua.forEach(t=>ml(t,_.highQuality?.987:.93)),Cg(e),Lg(e),Dg(e),ya.rotation.z+=e*.45,ya.scale.setScalar(1+Math.sin(_.time*2.1)*.08),_.dead?Yn.material.opacity=.18+Math.sin(_.time*12)*.06:(_.days=Math.floor(_.time/kx),_.grace=Math.max(0,_.grace-e),_.difficulty=.88+Ze.smoothstep(_.days,10,20)*.16+Math.max(0,_.days-20)*.007+Math.max(0,_.days-60)*.009+Math.max(0,_.days-100)*.018,_.difficulty*=.85+Ze.smoothstep(_.days,0,25)*.15,_.difficulty*=1+Ze.smoothstep(_.days,60,110)*.1,Ug(e),Ig(e),en.position.copy(_.planetPos),window.currentSpeed=Number(_.planetVel.length().toFixed(2)),br.rotation.y+=e*1.3,br.rotation.x+=e*.27,Yn.rotation.z+=e*(1.3+(100-_.health)*.012),Yn.material.opacity=.42+_.health/230+Math.sin(_.time*8)*.05,mo(pr,_.planetPos,.95),_.planetVel.length()>6&&mo(pr,_.planetPos.clone().addScaledVector(_.planetVel,-.018),.46),Ng(e),bg(),Fg()),su.forEach((t,n)=>{t.rotation.z+=e*(.002+n*.0015),t.position.x=Math.sin(_.time*(.05+n*.02))*(.1+n*.08)}),Ia.rotation.z+=e*.0015,gl(e),window.animateVibeJamPortals&&window.animateVibeJamPortals(),ui.render(Bt,xn)}function Su(){const i=window.innerWidth,e=window.innerHeight;xn.aspect=i/e,xn.updateProjectionMatrix(),ui.setSize(i,e,!1)}window.addEventListener("resize",Su);window.addEventListener("pointerdown",i=>{i.target.closest("button")||i.target.closest("#tutorial-box")||wg(i.clientX,i.clientY)},{passive:!0});window.addEventListener("keydown",i=>{i.code==="Escape"&&(lt.active?Na():!$i.classList.contains("hidden")||!Ki.classList.contains("hidden")?Ji():Ko()),i.code==="KeyR"&&ji(),i.code==="KeyM"&&mu(),i.code==="KeyP"&&Eg(),i.code==="Digit1"&&mr("shield"),i.code==="Digit2"&&mr("hibernation"),i.code==="Digit3"&&mr("observatory"),i.code==="Space"&&(i.preventDefault(),xu())});Tx.addEventListener("click",ji);Ax.addEventListener("click",Zi);wx.addEventListener("click",vu);Rx.addEventListener("click",()=>Ko(!1));Cx.addEventListener("click",ji);Bo.addEventListener("click",mu);Px.addEventListener("click",Zi);Lx.addEventListener("click",vu);Dx.addEventListener("click",()=>{ul.hidden=!ul.hidden});Ix.addEventListener("click",Zi);Ox.addEventListener("click",Na);Fx.addEventListener("click",$o);document.querySelector("#info-button").addEventListener("click",pu);document.querySelector("#story-button").addEventListener("click",Zo);document.querySelector("#pause-info-button").addEventListener("click",pu);document.querySelector("#pause-story-button").addEventListener("click",Zo);document.querySelector("#info-resume-button").addEventListener("click",Ji);Bx.addEventListener("click",()=>{Ji(),du(!0)});zx.addEventListener("click",Zo);document.querySelector("#info-restart-button").addEventListener("click",()=>{Ji(),ji()});document.querySelector("#info-next-button").addEventListener("click",Zi);document.querySelector("#story-resume-button").addEventListener("click",Ji);document.querySelector("#story-restart-button").addEventListener("click",()=>{Ji(),ji()});document.querySelector("#story-next-button").addEventListener("click",Zi);Jl.forEach(i=>{i.addEventListener("click",()=>mr(i.dataset.mode))});Vx.forEach(i=>{i.addEventListener("click",()=>{i.dataset.action==="focus"&&xu(),i.dataset.action==="pause"&&Ko()})});Bo.textContent=sn?"Unmute":"Mute";gg();Su();ji();Mu();du(!1);
