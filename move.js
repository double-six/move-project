
			// var oDiv1=document.getElementById("box1")
			// var oDiv2=document.getElementById("box2")
			// let timerA
			function move(obj,name,target) {
				clearInterval(obj.timerA)
				obj.timerA = setInterval(function() {
					if(speed>0){
						speed=math.ceil(speed)
					}else{
						speed=Math.floor(speed)
					}
					if (parseInt(getComputedStyle(obj)[name]) == target) {
						clearInterval(obj.timerA)
					} else {
						var speed=(target-parseInt(getComputedStyle(obj)[name]))/10
						obj.style[name] = parseInt(getComputedStyle(obj)[name]) + speed+ 'px'
					}
				}, 30)
			}
