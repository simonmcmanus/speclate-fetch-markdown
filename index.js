'use strict'

var fs = require('fs')
var marked = require('marked')
var async = require('async')
var getMarkdownFile = require('./get-markdown-file.js')

/**
 * pages: { pageName: 'http://markdown.com/markdown.md'}
 */
module.exports = function (pages, callback) {
    async.eachOf(pages, function(markdownFile, pageName, next) {
        getMarkdownFile(markdownFile, function(err, markdown) {

            var comment = '<!-- THIS PAGE IS FETCHED FROM ' + markdownFile + ' using speclate-fetch-markdown -->\n\n';
            var out = comment + '<div class="markdown">\n' + marked(markdown) + '\n</div>';
            var filePath = './pages/' + pageName + '.html';

            fs.writeFile('./pages/' + pageName + '/' + pageName + '.html', out, 'utf8', function(err) {
                if(err) {
                    return next(err)
                }
                console.log('Fetched page: ', filePath)
                next()
            });
        });
    }, callback);
}