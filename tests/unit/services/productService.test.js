const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const { productService } = require('../../../src/services');
const mocks = require('../mocks/mocks');
const responses = require('../mocks/responses');
const createError = require('http-errors');

const { expect } = chai;

chai.use(chaiHttp);

describe('3 - Testes da camada services', function () {
  describe('1 - Testa o retorno da função "getAllProducts"', function () {
    beforeEach(() => {
      // arrange
      sinon.stub(productModel, 'getAllProducts').resolves(mocks.database);
    });

    afterEach(() => {
      // arrange
      productModel.getAllProducts.restore();
    });

    it('1 - A função retorna todos os produtos do banco', async function () {
      // act
      const allProducts = await productService.getAllProducts();
      // assert
      expect(allProducts).to.deep.equals(responses.database);
    });
  });

  describe('2 - Testa o retorno da função "getProductById"', function () {
    afterEach(async () => {
      // arrange
      productModel.getProductById.restore();
    });

    it('1 - A função retorna o objeto correto de acordo com o id fornecido', async function () {
      // arrange
      sinon.stub(productModel, 'getProductById').resolves(responses.productById1);
      // act
      const productById = await productService.getProductById(1);
      // assert
      expect(productById).to.deep.equals(responses.productById1);
    });

    it('2 - A função retorna Lança um erro "404" se o objeto não for encontrado', async function () {
      // arrange
      sinon.stub(productModel, 'getProductById').resolves(undefined);
      const expectedError = createError(404, 'Product not found');
      // act
      let test;
      try {
        await productService.getProductById(999);
      } catch (error) {
        test = error;
      }
      // assert
      expect(test[0]).to.be.equal(expectedError[0]);
    });
  });

  describe('3 - Testa o retorno da função "registerNewProduct"', function () {
    beforeEach(async () => {
      // arrange
      sinon.stub(productModel, 'registerNewProduct').resolves(4);
      sinon.stub(productModel, 'getProductById').resolves(mocks.database[3]);
    });

    afterEach(async () => {
      // arrange
      productModel.registerNewProduct.restore();
      productModel.getProductById.restore();
    });

    it('1 - A função retorna o novo produto cadastrado no banco', async function () {
      // act
      const productById = await productService.registerNewProduct(mocks.newProduct);
      // assert
      expect(productById).to.deep.equals(4);
    });
  });
});
