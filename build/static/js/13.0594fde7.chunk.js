(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[13],{304:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var i=n(12),a=n(13),o=n(14),s=n(15),r=n(16),u=n(300),h={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},l={type:"change"},c={type:"start"},d={type:"end"},p=function(t){function e(t,n,a){var r;return Object(i.a)(this,e),(r=Object(o.a)(this,Object(s.a)(e).call(this))).object=void 0,r.domElement=void 0,r.window=void 0,r.enabled=void 0,r.target=void 0,r.enableZoom=void 0,r.zoomSpeed=void 0,r.minDistance=void 0,r.maxDistance=void 0,r.enableRotate=void 0,r.rotateSpeed=void 0,r.enablePan=void 0,r.keyPanSpeed=void 0,r.autoRotate=void 0,r.autoRotateSpeed=void 0,r.minZoom=void 0,r.maxZoom=void 0,r.minPolarAngle=void 0,r.maxPolarAngle=void 0,r.minAzimuthAngle=void 0,r.maxAzimuthAngle=void 0,r.enableKeys=void 0,r.keys=void 0,r.mouseButtons=void 0,r.enableDamping=void 0,r.dampingFactor=void 0,r.spherical=void 0,r.sphericalDelta=void 0,r.scale=void 0,r.target0=void 0,r.position0=void 0,r.zoom0=void 0,r.state=void 0,r.panOffset=void 0,r.zoomChanged=void 0,r.rotateStart=void 0,r.rotateEnd=void 0,r.rotateDelta=void 0,r.panStart=void 0,r.panEnd=void 0,r.panDelta=void 0,r.dollyStart=void 0,r.dollyEnd=void 0,r.dollyDelta=void 0,r.updateLastPosition=void 0,r.updateOffset=void 0,r.updateQuat=void 0,r.updateLastQuaternion=void 0,r.updateQuatInverse=void 0,r.panLeftV=void 0,r.panUpV=void 0,r.panInternalOffset=void 0,r.onContextMenu=void 0,r.onMouseUp=void 0,r.onMouseDown=void 0,r.onMouseMove=void 0,r.onMouseWheel=void 0,r.onTouchStart=void 0,r.onTouchEnd=void 0,r.onTouchMove=void 0,r.onKeyDown=void 0,r.object=t,r.domElement=void 0!==n?n:document,r.window=void 0!==a?a:window,r.enabled=!0,r.target=new u.A,r.minDistance=0,r.maxDistance=1/0,r.minZoom=0,r.maxZoom=1/0,r.minPolarAngle=0,r.maxPolarAngle=Math.PI,r.minAzimuthAngle=-1/0,r.maxAzimuthAngle=1/0,r.enableDamping=!1,r.dampingFactor=.25,r.enableZoom=!0,r.zoomSpeed=1,r.enableRotate=!0,r.rotateSpeed=1,r.enablePan=!0,r.keyPanSpeed=7,r.autoRotate=!1,r.autoRotateSpeed=2,r.enableKeys=!0,r.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},r.mouseButtons={ORBIT:u.i.LEFT,ZOOM:u.i.MIDDLE,PAN:u.i.RIGHT},r.target0=r.target.clone(),r.position0=r.object.position.clone(),r.zoom0=r.object.zoom,r.updateOffset=new u.A,r.updateQuat=(new u.q).setFromUnitVectors(t.up,new u.A(0,1,0)),r.updateQuatInverse=r.updateQuat.clone().inverse(),r.updateLastPosition=new u.A,r.updateLastQuaternion=new u.q,r.state=h.NONE,r.scale=1,r.spherical=new u.u,r.sphericalDelta=new u.u,r.panOffset=new u.A,r.zoomChanged=!1,r.rotateStart=new u.z,r.rotateEnd=new u.z,r.rotateDelta=new u.z,r.panStart=new u.z,r.panEnd=new u.z,r.panDelta=new u.z,r.dollyStart=new u.z,r.dollyEnd=new u.z,r.dollyDelta=new u.z,r.panLeftV=new u.A,r.panUpV=new u.A,r.panInternalOffset=new u.A,r.onMouseDown=function(t){if(!1!==r.enabled){if(t.preventDefault(),t.button===r.mouseButtons.ORBIT){if(!1===r.enableRotate)return;r.rotateStart.set(t.clientX,t.clientY),r.state=h.ROTATE}else if(t.button===r.mouseButtons.ZOOM){if(!1===r.enableZoom)return;r.dollyStart.set(t.clientX,t.clientY),r.state=h.DOLLY}else if(t.button===r.mouseButtons.PAN){if(!1===r.enablePan)return;r.panStart.set(t.clientX,t.clientY),r.state=h.PAN}r.state!==h.NONE&&(document.addEventListener("mousemove",r.onMouseMove,!1),document.addEventListener("mouseup",r.onMouseUp,!1),r.dispatchEvent(c))}},r.onMouseMove=function(t){if(!1!==r.enabled)if(t.preventDefault(),r.state===h.ROTATE){if(!1===r.enableRotate)return;r.rotateEnd.set(t.clientX,t.clientY),r.rotateDelta.subVectors(r.rotateEnd,r.rotateStart);var e=r.domElement===document?r.domElement.body:r.domElement;r.rotateLeft(2*Math.PI*r.rotateDelta.x/e.clientWidth*r.rotateSpeed),r.rotateUp(2*Math.PI*r.rotateDelta.y/e.clientHeight*r.rotateSpeed),r.rotateStart.copy(r.rotateEnd),r.update()}else if(r.state===h.DOLLY){if(!1===r.enableZoom)return;r.dollyEnd.set(t.clientX,t.clientY),r.dollyDelta.subVectors(r.dollyEnd,r.dollyStart),r.dollyDelta.y>0?r.dollyIn(r.getZoomScale()):r.dollyDelta.y<0&&r.dollyOut(r.getZoomScale()),r.dollyStart.copy(r.dollyEnd),r.update()}else if(r.state===h.PAN){if(!1===r.enablePan)return;r.panEnd.set(t.clientX,t.clientY),r.panDelta.subVectors(r.panEnd,r.panStart),r.pan(r.panDelta.x,r.panDelta.y),r.panStart.copy(r.panEnd),r.update()}},r.onMouseUp=function(t){!1!==r.enabled&&(document.removeEventListener("mousemove",r.onMouseMove,!1),document.removeEventListener("mouseup",r.onMouseUp,!1),r.dispatchEvent(d),r.state=h.NONE)},r.onMouseWheel=function(t){!1===r.enabled||!1===r.enableZoom||r.state!==h.NONE&&r.state!==h.ROTATE||(t.preventDefault(),t.stopPropagation(),t.deltaY<0?r.dollyOut(r.getZoomScale()):t.deltaY>0&&r.dollyIn(r.getZoomScale()),r.update(),r.dispatchEvent(c),r.dispatchEvent(d))},r.onKeyDown=function(t){if(!1!==r.enabled&&!1!==r.enableKeys&&!1!==r.enablePan)switch(t.keyCode){case r.keys.UP:r.pan(0,r.keyPanSpeed),r.update();break;case r.keys.BOTTOM:r.pan(0,-r.keyPanSpeed),r.update();break;case r.keys.LEFT:r.pan(r.keyPanSpeed,0),r.update();break;case r.keys.RIGHT:r.pan(-r.keyPanSpeed,0),r.update()}},r.onTouchStart=function(t){if(!1!==r.enabled){switch(t.touches.length){case 1:if(!1===r.enableRotate)return;r.rotateStart.set(t.touches[0].pageX,t.touches[0].pageY),r.state=h.TOUCH_ROTATE;break;case 2:if(!1===r.enableZoom)return;var e=t.touches[0].pageX-t.touches[1].pageX,n=t.touches[0].pageY-t.touches[1].pageY,i=Math.sqrt(e*e+n*n);r.dollyStart.set(0,i),r.state=h.TOUCH_DOLLY;break;case 3:if(!1===r.enablePan)return;r.panStart.set(t.touches[0].pageX,t.touches[0].pageY),r.state=h.TOUCH_PAN;break;default:r.state=h.NONE}r.state!==h.NONE&&r.dispatchEvent(c)}},r.onTouchMove=function(t){if(!1!==r.enabled)switch(t.preventDefault(),t.stopPropagation(),t.touches.length){case 1:if(!1===r.enableRotate)return;if(r.state!==h.TOUCH_ROTATE)return;r.rotateEnd.set(t.touches[0].pageX,t.touches[0].pageY),r.rotateDelta.subVectors(r.rotateEnd,r.rotateStart);var e=r.domElement===document?r.domElement.body:r.domElement;r.rotateLeft(2*Math.PI*r.rotateDelta.x/e.clientWidth*r.rotateSpeed),r.rotateUp(2*Math.PI*r.rotateDelta.y/e.clientHeight*r.rotateSpeed),r.rotateStart.copy(r.rotateEnd),r.update();break;case 2:if(!1===r.enableZoom)return;if(r.state!==h.TOUCH_DOLLY)return;var n=t.touches[0].pageX-t.touches[1].pageX,i=t.touches[0].pageY-t.touches[1].pageY,a=Math.sqrt(n*n+i*i);r.dollyEnd.set(0,a),r.dollyDelta.subVectors(r.dollyEnd,r.dollyStart),r.dollyDelta.y>0?r.dollyOut(r.getZoomScale()):r.dollyDelta.y<0&&r.dollyIn(r.getZoomScale()),r.dollyStart.copy(r.dollyEnd),r.update();break;case 3:if(!1===r.enablePan)return;if(r.state!==h.TOUCH_PAN)return;r.panEnd.set(t.touches[0].pageX,t.touches[0].pageY),r.panDelta.subVectors(r.panEnd,r.panStart),r.pan(r.panDelta.x,r.panDelta.y),r.panStart.copy(r.panEnd),r.update();break;default:r.state=h.NONE}},r.onTouchEnd=function(t){!1!==r.enabled&&(r.dispatchEvent(d),r.state=h.NONE)},r.onContextMenu=function(t){t.preventDefault()},r.domElement.addEventListener("contextmenu",r.onContextMenu,!1),r.domElement.addEventListener("mousedown",r.onMouseDown,!1),r.domElement.addEventListener("wheel",r.onMouseWheel,!1),r.domElement.addEventListener("touchstart",r.onTouchStart,!1),r.domElement.addEventListener("touchend",r.onTouchEnd,!1),r.domElement.addEventListener("touchmove",r.onTouchMove,!1),r.window.addEventListener("keydown",r.onKeyDown,!1),r.update(),r}return Object(r.a)(e,t),Object(a.a)(e,[{key:"update",value:function(){var t=this.object.position;return this.updateOffset.copy(t).sub(this.target),this.updateOffset.applyQuaternion(this.updateQuat),this.spherical.setFromVector3(this.updateOffset),this.autoRotate&&this.state===h.NONE&&this.rotateLeft(this.getAutoRotationAngle()),this.spherical.theta+=this.sphericalDelta.theta,this.spherical.phi+=this.sphericalDelta.phi,this.spherical.theta=Math.max(this.minAzimuthAngle,Math.min(this.maxAzimuthAngle,this.spherical.theta)),this.spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this.spherical.phi)),this.spherical.makeSafe(),this.spherical.radius*=this.scale,this.spherical.radius=Math.max(this.minDistance,Math.min(this.maxDistance,this.spherical.radius)),this.target.add(this.panOffset),this.updateOffset.setFromSpherical(this.spherical),this.updateOffset.applyQuaternion(this.updateQuatInverse),t.copy(this.target).add(this.updateOffset),this.object.lookAt(this.target),!0===this.enableDamping?(this.sphericalDelta.theta*=1-this.dampingFactor,this.sphericalDelta.phi*=1-this.dampingFactor):this.sphericalDelta.set(0,0,0),this.scale=1,this.panOffset.set(0,0,0),!!(this.zoomChanged||this.updateLastPosition.distanceToSquared(this.object.position)>1e-6||8*(1-this.updateLastQuaternion.dot(this.object.quaternion))>1e-6)&&(this.dispatchEvent(l),this.updateLastPosition.copy(this.object.position),this.updateLastQuaternion.copy(this.object.quaternion),this.zoomChanged=!1,!0)}},{key:"panLeft",value:function(t,e){this.panLeftV.setFromMatrixColumn(e,0),this.panLeftV.multiplyScalar(-t),this.panOffset.add(this.panLeftV)}},{key:"panUp",value:function(t,e){this.panUpV.setFromMatrixColumn(e,1),this.panUpV.multiplyScalar(t),this.panOffset.add(this.panUpV)}},{key:"pan",value:function(t,e){var n=this.domElement===document?this.domElement.body:this.domElement;if(this.object instanceof u.o){var i=this.object.position;this.panInternalOffset.copy(i).sub(this.target);var a=this.panInternalOffset.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this.panLeft(2*t*a/n.clientHeight,this.object.matrix),this.panUp(2*e*a/n.clientHeight,this.object.matrix)}else this.object instanceof u.n?(this.panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this.panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}},{key:"dollyIn",value:function(t){this.object instanceof u.o?this.scale/=t:this.object instanceof u.n?(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom*t)),this.object.updateProjectionMatrix(),this.zoomChanged=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}},{key:"dollyOut",value:function(t){this.object instanceof u.o?this.scale*=t:this.object instanceof u.n?(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/t)),this.object.updateProjectionMatrix(),this.zoomChanged=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}},{key:"getAutoRotationAngle",value:function(){return 2*Math.PI/60/60*this.autoRotateSpeed}},{key:"getZoomScale",value:function(){return Math.pow(.95,this.zoomSpeed)}},{key:"rotateLeft",value:function(t){this.sphericalDelta.theta-=t}},{key:"rotateUp",value:function(t){this.sphericalDelta.phi-=t}},{key:"getPolarAngle",value:function(){return this.spherical.phi}},{key:"getAzimuthalAngle",value:function(){return this.spherical.theta}},{key:"dispose",value:function(){this.domElement.removeEventListener("contextmenu",this.onContextMenu,!1),this.domElement.removeEventListener("mousedown",this.onMouseDown,!1),this.domElement.removeEventListener("wheel",this.onMouseWheel,!1),this.domElement.removeEventListener("touchstart",this.onTouchStart,!1),this.domElement.removeEventListener("touchend",this.onTouchEnd,!1),this.domElement.removeEventListener("touchmove",this.onTouchMove,!1),document.removeEventListener("mousemove",this.onMouseMove,!1),document.removeEventListener("mouseup",this.onMouseUp,!1),this.window.removeEventListener("keydown",this.onKeyDown,!1)}},{key:"reset",value:function(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(l),this.update(),this.state=h.NONE}},{key:"center",get:function(){return console.warn("THREE.OrbitControls: .center has been renamed to .target"),this.target}},{key:"noZoom",get:function(){return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(t){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!t}}]),e}(u.g)},306:function(t,e){var n,i,a=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function r(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(t){n=o}try{i="function"===typeof clearTimeout?clearTimeout:s}catch(t){i=s}}();var u,h=[],l=!1,c=-1;function d(){l&&u&&(l=!1,u.length?h=u.concat(h):c=-1,h.length&&p())}function p(){if(!l){var t=r(d);l=!0;for(var e=h.length;e;){for(u=h,h=[];++c<e;)u&&u[c].run();c=-1,e=h.length}u=null,l=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function f(){}a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new m(t,e)),1!==h.length||l||r(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=f,a.addListener=f,a.once=f,a.off=f,a.removeListener=f,a.removeAllListeners=f,a.emit=f,a.prependListener=f,a.prependOnceListener=f,a.listeners=function(t){return[]},a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},310:function(t,e,n){"use strict";var i=n(89);function a(t,e,n){return(a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var a=[null];a.push.apply(a,e);var o=new(Function.bind.apply(t,a));return n&&Object(i.a)(o,n.prototype),o}).apply(null,arguments)}function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s=n(12),r=n(13),u=n(300),h=n(304),l=n(318),c=n.n(l);n.d(e,"a",(function(){return d}));var d=function(){function t(e){var n=this;Object(s.a)(this,t),this._scene=void 0,this._camera=void 0,this._renderer=void 0,this._ambientLight=void 0,this._directionalLight=void 0,this._controls=void 0,this._stats=void 0,this._options=void 0,this._animateSign=void 0,this.onWindowResize=function(){n._camera.aspect=window.innerWidth/window.innerHeight,n._camera.updateProjectionMatrix(),n.render(),n._renderer.setSize(window.innerWidth,window.innerHeight)},this.animate=function(){n.render(),n._animateSign=requestAnimationFrame(n.animate),n._stats.update(),n._controls.update()},this.initObject=function(t){var e;t.mesh instanceof Array?(e=n._scene).add.apply(e,o(t.mesh)):n._scene.add(t.mesh);(t.animate||t.definedAnimate)&&(t.animate&&t.animate(t.mesh),cancelAnimationFrame(n._animateSign),n.animate=function(){t.definedAnimate&&t.definedAnimate({Mesh:t.mesh,Camera:n._camera,Scene:n._scene}),n.render(),n._animateSign=requestAnimationFrame(n.animate),n._stats.update(),n._controls.update(),t.update&&t.update(t.mesh)},n.animate())},this.removeObject=function(t){n._scene.remove(t)},this.destroy=function(){cancelAnimationFrame(n._animateSign)},this._options=e,this._scene=new u.s,this._camera=a(u.o,o(this._options.cameraOption||[45,window.innerWidth/window.innerHeight,.1,2e3])),this._renderer=new u.B(this._options.rendererOption||{}),this._ambientLight=new u.a(this._options.ambientLight||4210752),this._directionalLight=new u.e(this._options.directionalLight||16711680),this._controls=new h.a(this._camera,this._renderer.domElement),this._stats=new c.a,this._animateSign=0,this.init()}return Object(r.a)(t,[{key:"init",value:function(){var t;t=this._options.cameraPosition?this._options.cameraPosition:[-40,40,40],this._camera.position.set(t[0],t[1],t[2]),this._renderer.setClearColor(this._options.rendererColor||2632756),this._renderer.setSize(window.innerWidth,window.innerHeight),this._renderer.setPixelRatio(window.devicePixelRatio),this._options.node.appendChild(this._renderer.domElement),this.initLight(),this.initControls(),this.initStats(),this.animate(),window.onresize=this.onWindowResize}},{key:"initLight",value:function(){this._scene.add(this._ambientLight);var t=this._options.directionalLightPosition||[0,0,1];this._directionalLight.position.set(t[0],t[1],t[2]),this._directionalLight.intensity=this._options.lightIntensity||.6,this._scene.add(this._directionalLight)}},{key:"initControls",value:function(){var t=this._options.controls||{};this._controls.minDistance=t.minDistance||0,this._controls.maxDistance=t.maxDistance||1/0,this._controls.minPolarAngle=t.minPolarAngle||0,this._controls.maxPolarAngle=t.maxPolarAngle||Math.PI,this._controls.enablePan=t.enablePan||!0,this._controls.enableZoom=t.enablePan||!0,this._controls.enableDamping=t.enableDamping||!0,this._controls.dampingFactor=t.dampingFactor||.25,this._controls.autoRotate=t.autoRotate||!1}},{key:"initStats",value:function(){this._stats.showPanel(1),this._options.node.appendChild(this._stats.dom)}},{key:"render",value:function(){this._renderer.render(this._scene,this._camera)}}]),t}()},539:function(t,e,n){"use strict";(function(t){var n=function(){this._tweens={},this._tweensAddedDuringUpdate={}};n.prototype={getAll:function(){return Object.keys(this._tweens).map(function(t){return this._tweens[t]}.bind(this))},removeAll:function(){this._tweens={}},add:function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},remove:function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},update:function(t,e){var n=Object.keys(this._tweens);if(0===n.length)return!1;for(t=void 0!==t?t:i.now();n.length>0;){this._tweensAddedDuringUpdate={};for(var a=0;a<n.length;a++){var o=this._tweens[n[a]];o&&!1===o.update(t)&&(o._isPlaying=!1,e||delete this._tweens[n[a]])}n=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var i=new n;i.Group=n,i._nextId=0,i.nextId=function(){return i._nextId++},"undefined"===typeof self&&"undefined"!==typeof t&&t.hrtime?i.now=function(){var e=t.hrtime();return 1e3*e[0]+e[1]/1e6}:"undefined"!==typeof self&&void 0!==self.performance&&void 0!==self.performance.now?i.now=self.performance.now.bind(self.performance):void 0!==Date.now?i.now=Date.now:i.now=function(){return(new Date).getTime()},i.Tween=function(t,e){this._isPaused=!1,this._pauseStart=null,this._object=t,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._repeatDelayTime=void 0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=i.Easing.Linear.None,this._interpolationFunction=i.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onRepeatCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._group=e||i,this._id=i.nextId()},i.Tween.prototype={getId:function(){return this._id},isPlaying:function(){return this._isPlaying},isPaused:function(){return this._isPaused},to:function(t,e){return this._valuesEnd=Object.create(t),void 0!==e&&(this._duration=e),this},duration:function(t){return this._duration=t,this},start:function(t){for(var e in this._group.add(this),this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._startTime=void 0!==t?"string"===typeof t?i.now()+parseFloat(t):t:i.now(),this._startTime+=this._delayTime,this._valuesEnd){if(this._valuesEnd[e]instanceof Array){if(0===this._valuesEnd[e].length)continue;this._valuesEnd[e]=[this._object[e]].concat(this._valuesEnd[e])}void 0!==this._object[e]&&("undefined"===typeof this._valuesStart[e]&&(this._valuesStart[e]=this._object[e]),this._valuesStart[e]instanceof Array===!1&&(this._valuesStart[e]*=1),this._valuesStartRepeat[e]=this._valuesStart[e]||0)}return this},stop:function(){return this._isPlaying?(this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,null!==this._onStopCallback&&this._onStopCallback(this._object),this.stopChainedTweens(),this):this},end:function(){return this.update(1/0),this},pause:function(t){return this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=void 0===t?i.now():t,this._group.remove(this),this)},resume:function(t){return this._isPaused&&this._isPlaying?(this._isPaused=!1,this._startTime+=(void 0===t?i.now():t)-this._pauseStart,this._pauseStart=0,this._group.add(this),this):this},stopChainedTweens:function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop()},group:function(t){return this._group=t,this},delay:function(t){return this._delayTime=t,this},repeat:function(t){return this._repeat=t,this},repeatDelay:function(t){return this._repeatDelayTime=t,this},yoyo:function(t){return this._yoyo=t,this},easing:function(t){return this._easingFunction=t,this},interpolation:function(t){return this._interpolationFunction=t,this},chain:function(){return this._chainedTweens=arguments,this},onStart:function(t){return this._onStartCallback=t,this},onUpdate:function(t){return this._onUpdateCallback=t,this},onRepeat:function(t){return this._onRepeatCallback=t,this},onComplete:function(t){return this._onCompleteCallback=t,this},onStop:function(t){return this._onStopCallback=t,this},update:function(t){var e,n,i;if(t<this._startTime)return!0;for(e in!1===this._onStartCallbackFired&&(null!==this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),n=(t-this._startTime)/this._duration,n=0===this._duration||n>1?1:n,i=this._easingFunction(n),this._valuesEnd)if(void 0!==this._valuesStart[e]){var a=this._valuesStart[e]||0,o=this._valuesEnd[e];o instanceof Array?this._object[e]=this._interpolationFunction(o,i):("string"===typeof o&&(o="+"===o.charAt(0)||"-"===o.charAt(0)?a+parseFloat(o):parseFloat(o)),"number"===typeof o&&(this._object[e]=a+(o-a)*i))}if(null!==this._onUpdateCallback&&this._onUpdateCallback(this._object,n),1===n){if(this._repeat>0){for(e in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat){if("string"===typeof this._valuesEnd[e]&&(this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(this._valuesEnd[e])),this._yoyo){var s=this._valuesStartRepeat[e];this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=s}this._valuesStart[e]=this._valuesStartRepeat[e]}return this._yoyo&&(this._reversed=!this._reversed),void 0!==this._repeatDelayTime?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,null!==this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}null!==this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var r=0,u=this._chainedTweens.length;r<u;r++)this._chainedTweens[r].start(this._startTime+this._duration);return!1}return!0}},i.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1}},Back:{In:function(t){var e=1.70158;return t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)}},Bounce:{In:function(t){return 1-i.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*i.Easing.Bounce.In(2*t):.5*i.Easing.Bounce.Out(2*t-1)+.5}}},i.Interpolation={Linear:function(t,e){var n=t.length-1,a=n*e,o=Math.floor(a),s=i.Interpolation.Utils.Linear;return e<0?s(t[0],t[1],a):e>1?s(t[n],t[n-1],n-a):s(t[o],t[o+1>n?n:o+1],a-o)},Bezier:function(t,e){for(var n=0,a=t.length-1,o=Math.pow,s=i.Interpolation.Utils.Bernstein,r=0;r<=a;r++)n+=o(1-e,a-r)*o(e,r)*t[r]*s(a,r);return n},CatmullRom:function(t,e){var n=t.length-1,a=n*e,o=Math.floor(a),s=i.Interpolation.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(o=Math.floor(a=n*(1+e))),s(t[(o-1+n)%n],t[o],t[(o+1)%n],t[(o+2)%n],a-o)):e<0?t[0]-(s(t[0],t[0],t[1],t[1],-a)-t[0]):e>1?t[n]-(s(t[n],t[n],t[n-1],t[n-1],a-n)-t[n]):s(t[o?o-1:0],t[o],t[n<o+1?n:o+1],t[n<o+2?n:o+2],a-o)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=i.Interpolation.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var i=e;i>1;i--)n*=i;return t[e]=n,n}}(),CatmullRom:function(t,e,n,i,a){var o=.5*(n-t),s=.5*(i-e),r=a*a;return(2*e-2*n+o+s)*(a*r)+(-3*e+3*n-2*o-s)*r+o*a+e}}},i.version="18.5.0",e.a=i}).call(this,n(306))},540:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return randomColor}));var randomColor=function randomColor(){for(var arrHex=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],strHex="0x",index,i=0;i<6;i++)index=Math.round(15*Math.random()),strHex+=arrHex[index];return eval(strHex)}},557:function(t,e,n){"use strict";n.r(e);var i=n(12),a=n(13),o=n(14),s=n(15),r=n(16),u=n(0),h=n.n(u),l=n(567),c=n(343),d=n(300),p=n(539),m=n(540),f=n(310),v=[{text:"\u6b64\u9879\u76ee\u4e3a\u7b80\u5355\u7684\u521b\u5efa\u7269\u4f53",animation:"jiggle"},{text:"\u968f\u673a\u4f4d\u7f6e\u521b\u5efa\u968f\u673a\u5927\u5c0f\u7684\u7403\u4f53",animation:"fade up"},{text:"\u8bd5\u8bd5\u5427",animation:"fade up"}],_=function(t){return h.a.createElement(l.a,{animation:t.animation,duration:t.duration,visible:t.visible},h.a.createElement("p",{className:"text-center"},t.text))},b=function(t){return h.a.createElement(c.a,{inverted:!0,color:"violet",className:"float-button",onClick:function(){return y(t)}},"\u521b\u9020\u4e00\u4e2a\u7403\u4f53")},y=function(t){var e=Object(m.a)(),n=new d.k({color:e,wireframe:!1,wireframeLinewidth:1}),i=new d.t(.5*Math.random(),20,20),a=new d.j(i,n);a.position.set(10*Math.random()-5,10*Math.random()-5,5*Math.random()),a.castShadow=!0,t.canvas.initObject({mesh:a,animate:function(t){new p.a.Tween(t.position).to({z:Math.floor((Math.random()>.5?-10:10)*Math.random())},300).repeat(0).start()},update:function(){p.a.update()}})},g=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(n=Object(o.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(r)))).state={visible:!1,duration:800,text:"",animation:"",index:0,buttonType:"",initCanvas:null},n.readRemarks=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,a=n.state.duration;t>=v.length?i():n.state.visible?(n.setState({visible:!1,duration:a/2}),setTimeout((function(){return n.readRemarks(t,e,i)}),a/1.5)):(n.setState({visible:!0,text:v[t].text,animation:v[t].animation,index:t,duration:2*a}),setTimeout((function(){return n.readRemarks(t+1,e,i)}),4*a))},n}return Object(r.a)(e,t),Object(a.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=document.getElementById("Canvas-Container");this.readRemarks(0,v,(function(){t.setState({visible:!1});var n={node:e,rendererOption:{antialias:!0},controls:{autoRotate:!0}};setTimeout((function(){var e=new f.a(n);t.setState({buttonType:"grid",initCanvas:e})}),t.state.duration)}))}},{key:"render",value:function(){var t;switch(this.state.buttonType){case"grid":t=h.a.createElement(b,{canvas:this.state.initCanvas});break;default:t=""}return h.a.createElement(h.a.Fragment,null,h.a.createElement(_,this.state),h.a.createElement("div",{id:"Canvas-Container"}),t)}}]),e}(u.Component);e.default=g}}]);
//# sourceMappingURL=13.0594fde7.chunk.js.map