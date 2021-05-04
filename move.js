//move链式运动1.3
function move(obj, name, target, fn) {
	clearInterval(obj.timerA)
	obj.timerA = setInterval(function() {
		if (name == "opacity") {
			nowSet = getComputedStyle(obj)[name] * 100
		} else {
			nowSet = parseInt(getComputedStyle(obj)[name])
		}
		let speed = (target - nowSet) / 10

		//三元运算符
		speed = (speed > 0) ? Math.ceil(speed) : Math.floor(speed)
		if (nowSet == target) {
			clearInterval(obj.timerA)
			if (fn) {
				fn()
			}
		} else {
			if (name == "opacity") {
				obj.style[name] = (nowSet + speed) / 100
			} else {
				obj.style[name] = nowSet + speed + 'px'
			}
		}
	}, 30)
}
