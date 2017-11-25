chrome.runtime.onMessage.addListener(function(request) {
  chrome.tabs.query({ active: true }, function(tabs) {
    chrome.tabs.create({
      url: request.url,
      active: request.active,
      index: tabs[0].index + 1
    })
  })
})
