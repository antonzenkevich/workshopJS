const frisby = require('frisby')

describe('API Test', function() {
    it('GET request', function() {
        return frisby
        .get("http://jsonplaceholder.typicode.com/posts/1")
        .expect('status', 200)
        .inspectJSON()
    })

    it("DELETE Request", function() {
        return frisby
        .del("http://jsonplaceholder.typicode.com/posts/1")
        .expect('status', 200)
        .inspectJSON()
    })

    it('should have a JSON Content-Type header', function() {
        return frisby
        .get("http://jsonplaceholder.typicode.com/posts/1")
        .expect('header', 'Content-Type', 'application/json; charset=utf-8')
    })

    it('POST Request', function() {
        return frisby
        .get("http://jsonplaceholder.typicode.com/posts/1")
        .inspectJSON()
        .put("http://jsonplaceholder.typicode.com/posts/1", {
            "userId": 101,
            "title": "WORKSHOP"
        })
        .expect('status', 200)
        .inspectJSON()
    })
})