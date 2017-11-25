var body = document.querySelector('body')

body.addEventListener('click', function(event) {
  if (event.metaKey || event.ctrlKey) {
    var selectedString = window.getSelection().toString()

    if (selectedString) {
      var shouldFocus = event.shiftKey
      var queryString = encodeURIComponent(selectedString)
      var url = 'https://www.google.com/search?q=' + queryString

      chrome.runtime.sendMessage({
        url: url,
        active: shouldFocus
      })
    }
  }
})
