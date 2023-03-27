const chai = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const mocks = require('../mocks/productMocks');
const responses = require('../mocks/productResponses');
const connection = require('../../../src/db/connection');

const { expect } = chai;

describe('2 - Testes da camada models no endpoint "/products"', function () {
  describe('1 - Testa o retorno da função "getAllProducts"', function() {
    beforeEach(() => {
      // arrange
      sinon.stub(connection, 'execute').resolves([mocks.productTable]);
    });

    afterEach(() => {
      // arrange
      connection.execute.restore();
    });

    it('1 - A função retona um array com todos os produtos cadastrados no banco', async function () {
      // act
      const allProducts = await productModel.getAllProducts();
      // assert
      expect(allProducts).to.deep.equals(mocks.productTable);
    });
  });

  describe('2 - Testa o retorno da função "getProductsById"', function () {
    beforeEach(() => {
      // arrange
      sinon.stub(connection, 'execute').resolves([mocks.productTable]);
    });

    afterEach(() => {
      // arrange
      connection.execute.restore();
    });

    it('1 - A função retorna o objeto correto de acordo com o id fornecido', async function () {
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

  describe('3 - Testa o retorno da função "registerNewProduct"', function () {
    beforeEach(() => {
      // arrange
      sinon.stub(connection, 'execute').resolves([{ insertId: 4}]);
    });

    afterEach(() => {
      // arrange
      connection.execute.restore();
    });

    it('1 - A função retorna o id do novo produto cadastrado no banco', async function () {
      // act
      const newProductId = await productModel.registerNewProduct(mocks.newProduct);
      // assert
      expect(newProductId).to.be.deep.equal(4);
    });
  });

  describe('4 - Testa o retorno da função "updateProductById"', function () {
    beforeEach(() => {
      // arrange
      sinon.stub(connection, 'execute').resolves();
    });

    afterEach(async function () {
      //arrange
      connection.execute.restore();
    });

    it('', async function () {

    });
  });
});
