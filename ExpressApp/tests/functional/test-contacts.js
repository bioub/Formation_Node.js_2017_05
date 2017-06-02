var chai = require('chai');
var chaiHttp = require('chai-http');

var expect = chai.expect;

var app = require('../../app');

chai.use(chaiHttp);

describe('Tests des pages contacts', () => {

    describe('Test de la liste de contacts', () => {

        it('should be accessible', (done) => {
            chai.request(app)
                .get('/contacts')
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    done();
                });
        });

    });

});