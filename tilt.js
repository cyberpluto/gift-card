const card = document.querySelector('#card')
let isHover = false
const tiltCard = (event) => {
	const cardWidth = event.target.clientWidth
	const cardHeight = event.target.clientHeight
	const range = 30
	const isLeft = event.offsetX < cardWidth / 2
	const isRight = event.offsetX > cardWidth / 2
	const isTop = event.offsetY < cardHeight / 2
	const isBottom = event.offsetY > cardHeight / 2
	const xRotation = `${((2 * range) / cardHeight) * event.offsetY - range}deg`
	const yRotation = `${((-2 * range) / cardWidth) * event.offsetX + range}deg`
	card.style.transform = `rotateX(${xRotation}) rotateY(${yRotation})`
}
const handleMouseMove = debounce((event) => {
	// debugger
	console.log('MOVE is hover', isHover)
	if (isHover) {
		console.log('MOVE', event?.offsetX, event?.offsetY)
		tiltCard(event)
	}
}, 1)
const handleMouseEnter = () => {
	isHover = true
	console.log('ENTER')
}
const handleMouseLeave = (event) => {
	isHover = false
	console.log('LEAVE', isHover)
	// card.style.transition = `0.3s`
	// card.style.transform = `rotateX(0deg) rotateY(0deg)`
	// setTimeout(() => (card.style.transition = `0.3s`), 200)
	// setTimeout(() => (card.style.transform = `rotateX(0deg) rotateY(0deg)`), 500)
}
card.addEventListener('mouseenter', handleMouseEnter)
card.addEventListener('mousemove', handleMouseMove)
card.addEventListener('mouseleave', handleMouseLeave)
// const removeMouseOverListener = () => {
// 	console.log('leave')
// 	card.removeEventListener('mouseover', handleMouseOver)
// }
// debugger
function debounce(func, wait, immediate) {
	var timeout
	return function () {
		var context = this,
			args = arguments
		var later = function () {
			timeout = null
			if (!immediate) func.apply(context, args)
		}
		var callNow = immediate && !timeout
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
		if (callNow) func.apply(context, args)
	}
}
