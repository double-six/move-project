
			function move(obj,name,target) {
				clearInterval(obj.timerA)
				obj.timerA = setInterval(function() {
					let nowSet=parseInt(getComputedStyle(obj)[name])
					let speed=(target-nowSet)/10
					if(speed>0){
						speed=Math.ceil(speed)
					}else{
						speed=Math.floor(speed)
					}
					if (nowSet == target) {
						clearInterval(obj.timerA)
					} else {
						// var speed=(target-nowSet)/10
						obj.style[name] = nowSet + speed+ 'px'
					}
				}, 30)
			}
