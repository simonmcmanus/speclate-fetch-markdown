# speclate-fetch-markdown


Given an object:

```js

var fetchMarkdown = require('speclate-fetch-markdown');

var markdownLookups = {
    contact: 'https://raw.githubusercontent.com/lnug/feedback/master/ORGANISERS.md'
};

fetchMarkdown(markdownLookups, function() {
    //speclate.site.markup(spec, callback)
});

```