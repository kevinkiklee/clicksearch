var body = document.querySelector('body')

body.addEventListener('click', function(event) {
	if (event.metaKey || event.ctrlKey) {
		var shouldFocus = event.shiftKey

		var selectedString = window.getSelection().toString()
		var queryString = selectedString.split(' ').join('+')
		var url = 'https://www.google.com/search?q=' + queryString

		chrome.runtime.sendMessage({
			url: url,
			shouldFocus: shouldFocus
		})
	}
})
