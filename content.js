/* eslint-disable no-console */
console.log('CONTENT SCRIPT!!!')

var body = document.querySelector('body')

body.addEventListener('click', function(event) {
	if (event.metaKey) {
		console.log('META!!!')
	}
})
