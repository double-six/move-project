
			function move(obj,name,target,fn) {
				clearInterval(obj.timerA)
				obj.timerA = setInterval(function() {
					let nowSet=parseInt(getComputedStyle(obj)[name])
					let speed=(target-nowSet)/10
					if(speed>0){
						//向上取整(整数位+1，省去小数部分)
						speed=Math.ceil(speed)
					}else{
						//向下取整(省去小数部分)
						speed=Math.floor(speed)
					}
					if (nowSet == target) {
						clearInterval(obj.timerA)
						if(fn){
							fn()
						}
					} else {
						// var speed=(target-nowSet)/10
						obj.style[name] = nowSet + speed+ 'px'
					}
				}, 30)
			}
