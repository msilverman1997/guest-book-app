// index.js

// var express = require('express');
// var expect = require('chai').expect;
// var request = require('supertest');
// const app = require('./server.js')

var chai = require('chai');
var chaiHttp = require('chai-http');
const app = require('../server.js');

chai.use(chaiHttp);
chai.should();

// This is just for organisation and reporting
describe('Guest API', done => {

    var guestId;

    after(() => {
        console.log("Tests are done");
    })

    it('Should create a new guest', done => {
        chai.request(app)
        .post('/api/guests')
        .send({
            first_name: 'Test',
            last_name: 'Identity',
            phone_number: '000-000-0000',
            message: 'Not a real person!'
        })
        .end((err, res) => {
            if(err) done(err);
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        })
    })

    it('Should get all Guests', done => { 
        chai.request(app)
        .get('/api/guests')
        .end((err, res) => {
            if(err) done(err);
            res.should.have.status(200);
            res.body.guests.should.be.a('array');
            guestId = res.body.guests[res.body.guests.length-1].id;
            done();
        });
    });

    it('should delete guest with id', done => {
        const url = '/api/guests/' + guestId;
        chai.request(app)
        .delete(url)
        .end((err, res) => {
            if(err) done(err);
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        })
    })

  });