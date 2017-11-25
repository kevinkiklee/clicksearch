# QuickSearch

[![Screencast](http://img.youtube.com/vi/lyFejfKJWZQ/0.jpg)](http://www.youtube.com/watch?v=lyFejfKJWZQ)

**Chrome extension for quickly searching highlighted text**

[Chrome Web Store](https://chrome.google.com/webstore/detail/clicksearch/ffkkikfngfopgdacpankegfcjkcnkjle?hl=en-US&gl=US)

[Screencast](http://www.youtube.com/watch?v=lyFejfKJWZQ)

* Highlight any text on the page.
* `Cmd/Ctrl`+`Click` to search the selected text in a new tab.
* `Cmd/Ctrl`+`Shft`+`Click` to autofocus the new tab.

## Description

Highlighting some text, then right-clicking and selecting `Search Google for...` is an action I have conducted repeatedly throughout the day, every single day for probably a decade at this point.  I wanted to simplify the process by writing a small Chrome extension.

There is one major functionality I would like to add (adding a keyboard shortcut), but all other changes will be related to maintenance and refactoring only.  This extension will always be free and open source forever.  If anyone has any ideas making the extension smaller, please don't hesitate to contribute.

## Tasks.
- [ ] Implement unit and integration tests.
- [ ] Add a keyboard shortcut.
- [ ] Minify for production.
- [x] Publish to Chrome extension store.
- [x] Create a screencast

## Development
For development, using this extension requires activating the developer mode.

* Clone this repository.
* Navigate to `chrome://extensions/`.
* Check the `Developer mode` checkbox.
* Click `Load unpacked extenssion...`.
* Navigate to the cloned copy of the repo.

## Build

* Run `npm run build`.
* The following files will be zipped:
  1. `background.js`
  2. `content.js`
  3. `manifest.json`
  4. `/icons`
* `quicksearch.zip` is ready to be deployed to Chrome Web Store.
