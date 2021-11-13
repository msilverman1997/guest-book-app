// index.js

var express = require('express');
var expect = require('chai').expect;
var request = require('supertest');

function createApp() {
    app = express();
  
    var router = express.Router();
    router.route('/').get(function(req, res) {
      return res.json({goodCall: true});
    });
  
    app.use(router);
  
    return app;
  }

// This is just for organisation and reporting
describe('Our application', function() {
    var app;

    before(done => {
        app = createApp();

        app.listen(5000, (err) => {
            if(err) return done(err);
            return done();
        })
    });

    after(() => {
        console.log("Test are done");
    })

    it('should send back a JSON object with goodCall set to true', function() {
        request(app)
          .get('/api/guests')
          .set('Content-Type', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, function(err, res) {
            if (err) { return done(err); }
            callStatus = res.body.goodCall;
            expect(callStatus).to.equal(true);
            // Done
            done();
          });
      });

    // This is the name of the test
    it('should understand basic mathematical principles', function(done) {
  
      // We want this test to pass.
      if (5 == 5) {
        // If the behavior is as expected, call done with no argument.
        done();
      } else {
        // Otherwise, call done with an error.
        done(new Error("Not sure what's happened."));
      }
  
    });
  
  });