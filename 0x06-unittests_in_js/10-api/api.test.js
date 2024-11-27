const request = require('request');
const { expect } = require('chai');

describe('Available payments', () => {
  let server;

  before((done) => {
    server = require('./api');
    done();
  });

  after((done) => {
    server.close(() => {
      done();
    });
  });

  it('Correct response structure for /available_payments', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});

describe('Login', () => {
  let server;

  before((done) => {
    server = require('./api');
    done();
  });

  after((done) => {
    server.close(() => {
      done();
    });
  });

  it('Correct response message for /login', (done) => {
    const userData = { userName: 'Betty' };
    request.post('http://localhost:7865/login', { json: userData }, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
