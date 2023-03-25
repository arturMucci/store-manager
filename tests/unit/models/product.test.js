const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const mocks = require('../mocks');
const responses = require('../mocks/responses');
const { productModel } = require('../../../src/models');
const connection = require('../../../src/db/connection');

const { expect } = chai;

chai.use(chaiHttp);

describe('Testes da camada models', function () {
  describe('testa a função "getAllProducts"', function() {
    afterEach(() => {
      connection.execute.restore();
    });

    it('testa o retorno da função', async function () {
      // arrange
      sinon.stub(connection, 'execute').resolves([mocks.database]);
      // act
      const allProducts = await productModel.getAllProducts();
      // assert
      expect(allProducts).to.deep.equals(mocks.database);
    });
  });

  describe('testa a função getProductsById', function () {
    beforeEach(() => {
      // arrange
      sinon.stub(connection, 'execute').resolves([mocks.database]);
    });

    afterEach(() => {
      // arrange
      connection.execute.restore();
    });

    it('testa o retorno da função', async function () {
      // act
      const productById1 = await productModel.getProductById(1);
      // assert
      expect(productById1).to.be.deep.equal(responses.productById1);
      // const productById2 = await productModel.getProductById(2);
      // expect(productById2).to.be.deep.equal(responses.productById2);
      // const productById2 = await productModel.getProductById(3);
      // expect(productById2).to.be.deep.equal(responses.productById2);
    });
  });
});