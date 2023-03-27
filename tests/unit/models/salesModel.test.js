const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const salesMocks = require('../mocks/salesMocks');
const salesResponses = require('../mocks/salesResponses');
const connection = require('../../../src/db/connection');

const { expect } = chai;

chai.use(chaiHttp);

describe('3 - Testes da camada Models no endpoint "/sales"', function () {
  describe('1 - testa o retorno da função "getAllSales"', function () {
    beforeEach(() => {
      // arrange
      sinon.stub(connection, 'execute').resolves([salesMocks.getAllProductsmock]);
    });

    afterEach(() => {
      // arrange
      connection.execute.restore();
    });

    it('1 - A função retona um array com todas vendas cadastradas no banco', async function () {
      // act
      const response = await salesModel.getAllSales();
      // assert
      expect(response).to.be.deep.equal(salesResponses.getAllProductsResponse);
    });
  });

  describe('2 - testa o retorno da função "getSaleById"', function () {
    afterEach(() => {
      // arrange
      connection.execute.restore();
    });

    it('1 - A função retona um array com todas vendas correspondentes ao id passado registradas no banco', async function () {
      // arrange && // act && // assert
      sinon.stub(connection, 'execute').resolves([salesMocks.getProductById1]);
      const product1 = await salesModel.getSaleById(1);
      expect(product1).to.be.deep.equal(salesResponses.getProductById1Response);

      // restore
      connection.execute.restore();

      // arrange && // act && // assert
      sinon.stub(connection, 'execute').resolves([salesMocks.getProductById2]);
      const product2 = await salesModel.getSaleById(2);
      expect(product2).to.be.deep.equal(salesResponses.getProductById2Response);

      // restore
      connection.execute.restore();

      sinon.stub(connection, 'execute').resolves([salesMocks.getProductById404]);
      const product404 = await salesModel.getSaleById(999);
      expect(product404).to.be.deep.equal(salesResponses.getProductById404);
    });
  });

  // describe('1 - A função retona um', function () {
  //   afterEach(() => {
  //     connection.execute.restore();
  //   });

  //   it('', async function () {
  //     sinon.stub(connection, 'execute').resolves();
  //   });
  // });
});