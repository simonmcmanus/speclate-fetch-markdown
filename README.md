# speclate-fetch-markdown

[![Greenkeeper badge](https://badges.greenkeeper.io/simonmcmanus/speclate-fetch-markdown.svg)](https://greenkeeper.io/)


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