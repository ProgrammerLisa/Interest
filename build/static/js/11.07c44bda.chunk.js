(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[11],{301:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var o=n(12),i=n(13),a=n(14),s=n(15),r=n(16),c=n(298),d={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},h={type:"change"},l={type:"start"},u={type:"end"},p=function(t){function e(t,n,i){var r;return Object(o.a)(this,e),(r=Object(a.a)(this,Object(s.a)(e).call(this))).object=void 0,r.domElement=void 0,r.window=void 0,r.enabled=void 0,r.target=void 0,r.enableZoom=void 0,r.zoomSpeed=void 0,r.minDistance=void 0,r.maxDistance=void 0,r.enableRotate=void 0,r.rotateSpeed=void 0,r.enablePan=void 0,r.keyPanSpeed=void 0,r.autoRotate=void 0,r.autoRotateSpeed=void 0,r.minZoom=void 0,r.maxZoom=void 0,r.minPolarAngle=void 0,r.maxPolarAngle=void 0,r.minAzimuthAngle=void 0,r.maxAzimuthAngle=void 0,r.enableKeys=void 0,r.keys=void 0,r.mouseButtons=void 0,r.enableDamping=void 0,r.dampingFactor=void 0,r.spherical=void 0,r.sphericalDelta=void 0,r.scale=void 0,r.target0=void 0,r.position0=void 0,r.zoom0=void 0,r.state=void 0,r.panOffset=void 0,r.zoomChanged=void 0,r.rotateStart=void 0,r.rotateEnd=void 0,r.rotateDelta=void 0,r.panStart=void 0,r.panEnd=void 0,r.panDelta=void 0,r.dollyStart=void 0,r.dollyEnd=void 0,r.dollyDelta=void 0,r.updateLastPosition=void 0,r.updateOffset=void 0,r.updateQuat=void 0,r.updateLastQuaternion=void 0,r.updateQuatInverse=void 0,r.panLeftV=void 0,r.panUpV=void 0,r.panInternalOffset=void 0,r.onContextMenu=void 0,r.onMouseUp=void 0,r.onMouseDown=void 0,r.onMouseMove=void 0,r.onMouseWheel=void 0,r.onTouchStart=void 0,r.onTouchEnd=void 0,r.onTouchMove=void 0,r.onKeyDown=void 0,r.object=t,r.domElement=void 0!==n?n:document,r.window=void 0!==i?i:window,r.enabled=!0,r.target=new c.A,r.minDistance=0,r.maxDistance=1/0,r.minZoom=0,r.maxZoom=1/0,r.minPolarAngle=0,r.maxPolarAngle=Math.PI,r.minAzimuthAngle=-1/0,r.maxAzimuthAngle=1/0,r.enableDamping=!1,r.dampingFactor=.25,r.enableZoom=!0,r.zoomSpeed=1,r.enableRotate=!0,r.rotateSpeed=1,r.enablePan=!0,r.keyPanSpeed=7,r.autoRotate=!1,r.autoRotateSpeed=2,r.enableKeys=!0,r.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},r.mouseButtons={ORBIT:c.i.LEFT,ZOOM:c.i.MIDDLE,PAN:c.i.RIGHT},r.target0=r.target.clone(),r.position0=r.object.position.clone(),r.zoom0=r.object.zoom,r.updateOffset=new c.A,r.updateQuat=(new c.q).setFromUnitVectors(t.up,new c.A(0,1,0)),r.updateQuatInverse=r.updateQuat.clone().inverse(),r.updateLastPosition=new c.A,r.updateLastQuaternion=new c.q,r.state=d.NONE,r.scale=1,r.spherical=new c.u,r.sphericalDelta=new c.u,r.panOffset=new c.A,r.zoomChanged=!1,r.rotateStart=new c.z,r.rotateEnd=new c.z,r.rotateDelta=new c.z,r.panStart=new c.z,r.panEnd=new c.z,r.panDelta=new c.z,r.dollyStart=new c.z,r.dollyEnd=new c.z,r.dollyDelta=new c.z,r.panLeftV=new c.A,r.panUpV=new c.A,r.panInternalOffset=new c.A,r.onMouseDown=function(t){if(!1!==r.enabled){if(t.preventDefault(),t.button===r.mouseButtons.ORBIT){if(!1===r.enableRotate)return;r.rotateStart.set(t.clientX,t.clientY),r.state=d.ROTATE}else if(t.button===r.mouseButtons.ZOOM){if(!1===r.enableZoom)return;r.dollyStart.set(t.clientX,t.clientY),r.state=d.DOLLY}else if(t.button===r.mouseButtons.PAN){if(!1===r.enablePan)return;r.panStart.set(t.clientX,t.clientY),r.state=d.PAN}r.state!==d.NONE&&(document.addEventListener("mousemove",r.onMouseMove,!1),document.addEventListener("mouseup",r.onMouseUp,!1),r.dispatchEvent(l))}},r.onMouseMove=function(t){if(!1!==r.enabled)if(t.preventDefault(),r.state===d.ROTATE){if(!1===r.enableRotate)return;r.rotateEnd.set(t.clientX,t.clientY),r.rotateDelta.subVectors(r.rotateEnd,r.rotateStart);var e=r.domElement===document?r.domElement.body:r.domElement;r.rotateLeft(2*Math.PI*r.rotateDelta.x/e.clientWidth*r.rotateSpeed),r.rotateUp(2*Math.PI*r.rotateDelta.y/e.clientHeight*r.rotateSpeed),r.rotateStart.copy(r.rotateEnd),r.update()}else if(r.state===d.DOLLY){if(!1===r.enableZoom)return;r.dollyEnd.set(t.clientX,t.clientY),r.dollyDelta.subVectors(r.dollyEnd,r.dollyStart),r.dollyDelta.y>0?r.dollyIn(r.getZoomScale()):r.dollyDelta.y<0&&r.dollyOut(r.getZoomScale()),r.dollyStart.copy(r.dollyEnd),r.update()}else if(r.state===d.PAN){if(!1===r.enablePan)return;r.panEnd.set(t.clientX,t.clientY),r.panDelta.subVectors(r.panEnd,r.panStart),r.pan(r.panDelta.x,r.panDelta.y),r.panStart.copy(r.panEnd),r.update()}},r.onMouseUp=function(t){!1!==r.enabled&&(document.removeEventListener("mousemove",r.onMouseMove,!1),document.removeEventListener("mouseup",r.onMouseUp,!1),r.dispatchEvent(u),r.state=d.NONE)},r.onMouseWheel=function(t){!1===r.enabled||!1===r.enableZoom||r.state!==d.NONE&&r.state!==d.ROTATE||(t.preventDefault(),t.stopPropagation(),t.deltaY<0?r.dollyOut(r.getZoomScale()):t.deltaY>0&&r.dollyIn(r.getZoomScale()),r.update(),r.dispatchEvent(l),r.dispatchEvent(u))},r.onKeyDown=function(t){if(!1!==r.enabled&&!1!==r.enableKeys&&!1!==r.enablePan)switch(t.keyCode){case r.keys.UP:r.pan(0,r.keyPanSpeed),r.update();break;case r.keys.BOTTOM:r.pan(0,-r.keyPanSpeed),r.update();break;case r.keys.LEFT:r.pan(r.keyPanSpeed,0),r.update();break;case r.keys.RIGHT:r.pan(-r.keyPanSpeed,0),r.update()}},r.onTouchStart=function(t){if(!1!==r.enabled){switch(t.touches.length){case 1:if(!1===r.enableRotate)return;r.rotateStart.set(t.touches[0].pageX,t.touches[0].pageY),r.state=d.TOUCH_ROTATE;break;case 2:if(!1===r.enableZoom)return;var e=t.touches[0].pageX-t.touches[1].pageX,n=t.touches[0].pageY-t.touches[1].pageY,o=Math.sqrt(e*e+n*n);r.dollyStart.set(0,o),r.state=d.TOUCH_DOLLY;break;case 3:if(!1===r.enablePan)return;r.panStart.set(t.touches[0].pageX,t.touches[0].pageY),r.state=d.TOUCH_PAN;break;default:r.state=d.NONE}r.state!==d.NONE&&r.dispatchEvent(l)}},r.onTouchMove=function(t){if(!1!==r.enabled)switch(t.preventDefault(),t.stopPropagation(),t.touches.length){case 1:if(!1===r.enableRotate)return;if(r.state!==d.TOUCH_ROTATE)return;r.rotateEnd.set(t.touches[0].pageX,t.touches[0].pageY),r.rotateDelta.subVectors(r.rotateEnd,r.rotateStart);var e=r.domElement===document?r.domElement.body:r.domElement;r.rotateLeft(2*Math.PI*r.rotateDelta.x/e.clientWidth*r.rotateSpeed),r.rotateUp(2*Math.PI*r.rotateDelta.y/e.clientHeight*r.rotateSpeed),r.rotateStart.copy(r.rotateEnd),r.update();break;case 2:if(!1===r.enableZoom)return;if(r.state!==d.TOUCH_DOLLY)return;var n=t.touches[0].pageX-t.touches[1].pageX,o=t.touches[0].pageY-t.touches[1].pageY,i=Math.sqrt(n*n+o*o);r.dollyEnd.set(0,i),r.dollyDelta.subVectors(r.dollyEnd,r.dollyStart),r.dollyDelta.y>0?r.dollyOut(r.getZoomScale()):r.dollyDelta.y<0&&r.dollyIn(r.getZoomScale()),r.dollyStart.copy(r.dollyEnd),r.update();break;case 3:if(!1===r.enablePan)return;if(r.state!==d.TOUCH_PAN)return;r.panEnd.set(t.touches[0].pageX,t.touches[0].pageY),r.panDelta.subVectors(r.panEnd,r.panStart),r.pan(r.panDelta.x,r.panDelta.y),r.panStart.copy(r.panEnd),r.update();break;default:r.state=d.NONE}},r.onTouchEnd=function(t){!1!==r.enabled&&(r.dispatchEvent(u),r.state=d.NONE)},r.onContextMenu=function(t){t.preventDefault()},r.domElement.addEventListener("contextmenu",r.onContextMenu,!1),r.domElement.addEventListener("mousedown",r.onMouseDown,!1),r.domElement.addEventListener("wheel",r.onMouseWheel,!1),r.domElement.addEventListener("touchstart",r.onTouchStart,!1),r.domElement.addEventListener("touchend",r.onTouchEnd,!1),r.domElement.addEventListener("touchmove",r.onTouchMove,!1),r.window.addEventListener("keydown",r.onKeyDown,!1),r.update(),r}return Object(r.a)(e,t),Object(i.a)(e,[{key:"update",value:function(){var t=this.object.position;return this.updateOffset.copy(t).sub(this.target),this.updateOffset.applyQuaternion(this.updateQuat),this.spherical.setFromVector3(this.updateOffset),this.autoRotate&&this.state===d.NONE&&this.rotateLeft(this.getAutoRotationAngle()),this.spherical.theta+=this.sphericalDelta.theta,this.spherical.phi+=this.sphericalDelta.phi,this.spherical.theta=Math.max(this.minAzimuthAngle,Math.min(this.maxAzimuthAngle,this.spherical.theta)),this.spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this.spherical.phi)),this.spherical.makeSafe(),this.spherical.radius*=this.scale,this.spherical.radius=Math.max(this.minDistance,Math.min(this.maxDistance,this.spherical.radius)),this.target.add(this.panOffset),this.updateOffset.setFromSpherical(this.spherical),this.updateOffset.applyQuaternion(this.updateQuatInverse),t.copy(this.target).add(this.updateOffset),this.object.lookAt(this.target),!0===this.enableDamping?(this.sphericalDelta.theta*=1-this.dampingFactor,this.sphericalDelta.phi*=1-this.dampingFactor):this.sphericalDelta.set(0,0,0),this.scale=1,this.panOffset.set(0,0,0),!!(this.zoomChanged||this.updateLastPosition.distanceToSquared(this.object.position)>1e-6||8*(1-this.updateLastQuaternion.dot(this.object.quaternion))>1e-6)&&(this.dispatchEvent(h),this.updateLastPosition.copy(this.object.position),this.updateLastQuaternion.copy(this.object.quaternion),this.zoomChanged=!1,!0)}},{key:"panLeft",value:function(t,e){this.panLeftV.setFromMatrixColumn(e,0),this.panLeftV.multiplyScalar(-t),this.panOffset.add(this.panLeftV)}},{key:"panUp",value:function(t,e){this.panUpV.setFromMatrixColumn(e,1),this.panUpV.multiplyScalar(t),this.panOffset.add(this.panUpV)}},{key:"pan",value:function(t,e){var n=this.domElement===document?this.domElement.body:this.domElement;if(this.object instanceof c.o){var o=this.object.position;this.panInternalOffset.copy(o).sub(this.target);var i=this.panInternalOffset.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this.panLeft(2*t*i/n.clientHeight,this.object.matrix),this.panUp(2*e*i/n.clientHeight,this.object.matrix)}else this.object instanceof c.n?(this.panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this.panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}},{key:"dollyIn",value:function(t){this.object instanceof c.o?this.scale/=t:this.object instanceof c.n?(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom*t)),this.object.updateProjectionMatrix(),this.zoomChanged=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}},{key:"dollyOut",value:function(t){this.object instanceof c.o?this.scale*=t:this.object instanceof c.n?(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/t)),this.object.updateProjectionMatrix(),this.zoomChanged=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}},{key:"getAutoRotationAngle",value:function(){return 2*Math.PI/60/60*this.autoRotateSpeed}},{key:"getZoomScale",value:function(){return Math.pow(.95,this.zoomSpeed)}},{key:"rotateLeft",value:function(t){this.sphericalDelta.theta-=t}},{key:"rotateUp",value:function(t){this.sphericalDelta.phi-=t}},{key:"getPolarAngle",value:function(){return this.spherical.phi}},{key:"getAzimuthalAngle",value:function(){return this.spherical.theta}},{key:"dispose",value:function(){this.domElement.removeEventListener("contextmenu",this.onContextMenu,!1),this.domElement.removeEventListener("mousedown",this.onMouseDown,!1),this.domElement.removeEventListener("wheel",this.onMouseWheel,!1),this.domElement.removeEventListener("touchstart",this.onTouchStart,!1),this.domElement.removeEventListener("touchend",this.onTouchEnd,!1),this.domElement.removeEventListener("touchmove",this.onTouchMove,!1),document.removeEventListener("mousemove",this.onMouseMove,!1),document.removeEventListener("mouseup",this.onMouseUp,!1),this.window.removeEventListener("keydown",this.onKeyDown,!1)}},{key:"reset",value:function(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(h),this.update(),this.state=d.NONE}},{key:"center",get:function(){return console.warn("THREE.OrbitControls: .center has been renamed to .target"),this.target}},{key:"noZoom",get:function(){return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(t){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!t}}]),e}(c.g)},305:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(306),i=n(307),a=n(12),s=n(13),r=n(298),c=n(301),d=n(314),h=n.n(d),l=function(){function t(e){var n=this;Object(a.a)(this,t),this._scene=void 0,this._camera=void 0,this._renderer=void 0,this._ambientLight=void 0,this._directionalLight=void 0,this._controls=void 0,this._stats=void 0,this._options=void 0,this._animateSign=void 0,this.onWindowResize=function(){n._camera.aspect=window.innerWidth/window.innerHeight,n._camera.updateProjectionMatrix(),n.render(),n._renderer.setSize(window.innerWidth,window.innerHeight)},this.animate=function(){n.render(),n._animateSign=requestAnimationFrame(n.animate),n._stats.update(),n._controls.update()},this.initObject=function(t){var e;t.mesh instanceof Array?(e=n._scene).add.apply(e,Object(i.a)(t.mesh)):n._scene.add(t.mesh);(t.animate||t.definedAnimate)&&(t.animate&&t.animate(t.mesh),cancelAnimationFrame(n._animateSign),n.animate=function(){t.definedAnimate&&t.definedAnimate({Mesh:t.mesh,Camera:n._camera,Scene:n._scene}),n.render(),n._animateSign=requestAnimationFrame(n.animate),n._stats.update(),n._controls.update(),t.update&&t.update(t.mesh)},n.animate())},this.removeObject=function(t){n._scene.remove(t)},this.destroy=function(){cancelAnimationFrame(n._animateSign)},this._options=e,this._scene=new r.s,this._camera=Object(o.a)(r.o,Object(i.a)(this._options.cameraOption||[45,window.innerWidth/window.innerHeight,.1,2e3])),this._renderer=new r.B(this._options.rendererOption||{}),this._ambientLight=new r.a(this._options.ambientLight||4210752),this._directionalLight=new r.e(this._options.directionalLight||16711680),this._controls=new c.a(this._camera,this._renderer.domElement),this._stats=new h.a,this._animateSign=0,this.init()}return Object(s.a)(t,[{key:"init",value:function(){var t;t=this._options.cameraPosition?this._options.cameraPosition:[-40,40,40],this._camera.position.set(t[0],t[1],t[2]),this._renderer.setClearColor(this._options.rendererColor||2632756),this._renderer.setSize(window.innerWidth,window.innerHeight),this._renderer.setPixelRatio(window.devicePixelRatio),this._options.node.appendChild(this._renderer.domElement),this.initLight(),this.initControls(),this.initStats(),this.animate(),window.onresize=this.onWindowResize}},{key:"initLight",value:function(){this._scene.add(this._ambientLight);var t=this._options.directionalLightPosition||[0,0,1];this._directionalLight.position.set(t[0],t[1],t[2]),this._directionalLight.intensity=this._options.lightIntensity||.6,this._scene.add(this._directionalLight)}},{key:"initControls",value:function(){var t=this._options.controls||{};this._controls.minDistance=t.minDistance||0,this._controls.maxDistance=t.maxDistance||1/0,this._controls.minPolarAngle=t.minPolarAngle||0,this._controls.maxPolarAngle=t.maxPolarAngle||Math.PI,this._controls.enablePan=t.enablePan||!0,this._controls.enableZoom=t.enablePan||!0,this._controls.enableDamping=t.enableDamping||!0,this._controls.dampingFactor=t.dampingFactor||.25,this._controls.autoRotate=t.autoRotate||!1}},{key:"initStats",value:function(){this._stats.showPanel(1),this._options.node.appendChild(this._stats.dom)}},{key:"render",value:function(){this._renderer.render(this._scene,this._camera)}}]),t}()},306:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n(86);function i(t,e,n){return(i=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var i=[null];i.push.apply(i,e);var a=new(Function.bind.apply(t,i));return n&&Object(o.a)(a,n.prototype),a}).apply(null,arguments)}},307:function(t,e,n){"use strict";function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",(function(){return o}))},327:function(t,e,n){t.exports=n.p+"static/media/disturb.f1b4c29e.jpg"},502:function(t,e,n){"use strict";n.r(e);var o=n(12),i=n(13),a=n(14),s=n(15),r=n(16),c=n(0),d=n.n(c),h=n(305),l=n(298),u=n(327),p=n.n(u),m=function(t){function e(){var t,n;Object(o.a)(this,e);for(var i=arguments.length,r=new Array(i),c=0;c<i;c++)r[c]=arguments[c];return(n=Object(a.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(r)))).initCanvas=function(t){var e={node:t,rendererOption:{antialias:!0},cameraOption:[45,window.innerWidth/window.innerHeight,1,2e3],cameraPosition:[0,400,0],directionalLight:16777215,directionalLightPosition:[0,1,0],lightIntensity:1.5};return new h.a(e)},n.initObjectCube=function(){return{mesh:[n.objectOptions(new l.t(60,20,20),[-400,0,200]),n.objectOptions(new l.h(60,0),[-200,0,200]),n.objectOptions(new l.m(60,0),[0,0,200]),n.objectOptions(new l.v(60,0),[200,0,200]),n.objectOptions(new l.p(100,100,1,1),[-400,0,0]),n.objectOptions(new l.b(100,100,100,1,1,1),[-200,0,0]),n.objectOptions(new l.c(50,20,0,2*Math.PI),[0,0,0]),n.objectOptions(new l.r(10,50,10,5,0,2*Math.PI),[200,0,0]),n.objectOptions(new l.d(20,60,100,40,5),[400,0,0]),n.objectOptions(new l.x(50,20,20,20),[-200,0,-200]),n.objectOptions(new l.y(50,10,50,20,3,5),[0,0,-200])],definedAnimate:function(t){var e=1e-4*Date.now();t.Camera.position.x=800*Math.cos(e),t.Camera.position.z=800*Math.sin(e),t.Camera.lookAt(t.Scene.position),t.Mesh.forEach((function(t){t.rotation.x=5*e,t.rotation.y=2.5*e}))}}},n.objectOptions=function(t,e){var n=new l.j;return(new l.w).load(p.a,(function(e){n.material=new l.l({map:e,side:l.f}),n.geometry=t})),n.position.set(e[0],e[1],e[2]),n},n}return Object(r.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=document.getElementById("Sweet-Kingdom"),e=this.initCanvas(t),n=this.initObjectCube();e.initObject(n)}},{key:"render",value:function(){return d.a.createElement("div",{id:"Sweet-Kingdom"})}}]),e}(c.Component);e.default=m}}]);
//# sourceMappingURL=11.07c44bda.chunk.js.map