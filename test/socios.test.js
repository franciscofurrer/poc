const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const app = require('../app'); // Importamos la app de Express

describe('Pruebas sobre la API de Socios', () => { 
    
    it('Debería retornar una lista de socios y un status 200', (done) => { 
        request(app)
            .get('/api/socios')
            .end((err, res) => {
                // Usamos Chai para las aserciones
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('array');
                expect(res.body).to.have.lengthOf(2);
                expect(res.body[0]).to.have.property('nombre').eql('Juan Pérez');
                
                // Finalizamos la prueba asíncrona
                done(); 
            });
    });

});
