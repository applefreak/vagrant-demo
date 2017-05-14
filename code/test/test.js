const should = require('should')
const server = require('../index')
const request = require('supertest')(server)

describe('Web Server Functionalities', () => {
  describe('GET /', () => {
    it('should return status 200', done => {
      request
      	.get('/')
      	.expect(200, done)
    })

    it('should return content-type of text/html', done => {
      request
      	.get('/')
      	.expect('content-type', /text\/html/, done)
    })

    it('should have "Sup Peepz" in HTML content', done => {
      request
      	.get('/')
      	.end((err, res) => {
      		res.text.should.match(/Sup Peepz/)
      		done()
      	})
    })

    it('should embed a Giphy GIF', done => {
      request
      	.get('/')
      	.end((err, res) => {
      		res.text.should.match(/giphy\.com/)
      		done()
      	})
    })
  })
})

