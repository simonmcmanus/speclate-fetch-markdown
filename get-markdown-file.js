'use strict'

var superagent = require('superagent')

module.exports = function (markdownUrl, callback) {
    superagent
    .get(markdownUrl)
    .end(function (error, data) {
        if (error) {
        throw error
        }
        callback(null, data.text)
    })
}