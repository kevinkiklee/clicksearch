# ClickSearch
**Chrome Extension for quickly searching highlighted text with `Cmd`+`Click`**

Highlight any text on the page, and `Cmd`+`Click` to search the selected text in a new tab.  Use `Cmd`+`Shft`+`Click` to autofocus the new tab.

## Description

Highlighting some text, then right-clicking and selecting `Search Google for...` is an action I have conducted repeatedly throughout the day, every single day for probably a decade at this point.  I wanted to simplify the process by writing a small Chrome extension.

I am conscious of the effects of the extension bloats, and I have taken care to write the code in the simplest way possible.  There is one more major functionality I would like to add (adding a keyboard shortcut), but all other changes will be related to maintenance and refactoring only.

This extension will always be free and open source forever.  If anyone has any ideas making the extension smaller, please don't hesitate to contribute.

Also, the final name of the extension may change in the future.

## Installation
The extension has not been published yet.  For testing, using this extension requires activating the developer mode.

* Clone this repository
* Navigate to `chrome://extensions/`
* Check the `Developer mode` checkbox
* Click `Load unpacked extenssion...`
* Navigate to the cloned copy of the repo

## Tasks
- [ ] Limit the click detection to the highlighted text only
- [ ] Add a keyboard shortcut
- [ ] Minify for production
- [ ] Publish to Chrome extension store
