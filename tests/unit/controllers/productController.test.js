const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { productService } = require('../../../src/services');
const { productController } = require('../../../src/controllers');
const mocks = require('../mocks/productMocks');
const sinonChai = require('sinon-chai');
const responses = require('../mocks/productResponses');

chai.use(sinonChai);
chai.use(chaiHttp);

const { expect } = chai;

describe('1 - Testes da camada controller no endpoint "/products"', function () {
  describe('1 - Testa o retorno da função "getAllProducts"', function () {
    afterEach(async () => {
      // arrange
      productService.getAllProducts.restore();
    });

    it('1 - A função responde status 200 e retorna todos os produtos do banco', async function () {
      // arrange
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, 'getAllProducts')
        .resolves(res.status(200)
          .json(mocks.database));

      // act
      await productController.getAllProducts(req, res);

      //assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mocks.database);
    });
  });

  describe('2 - Testa o retorno da função "getProductById"', function () {
    afterEach(async () => {
      // arrange
      productService.getProductById.restore();
    });

    it('1 - A função responde status 200 e retorna o produto correspondente', async function () {
      // arrange
      const req = { params: { id: 1 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productService, 'getProductById')
        .resolves(responses.productById1);

      // act
      await productController.getProductById(req, res);

      // assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(responses.productById1);
    });
  });

  describe('3 - Testa o retorno da função "registerNewProduct"', function () {
    afterEach(async () => {
      // arrange
      productService.registerNewProduct.restore();
    });

    it('1 - A função response status 201 e o objeto com o produto cadastrado', async function () {
      // arrange
      const req = { body: {name: 'ProdutoX' } };
      const res = {};
      const next = function() {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productService, 'registerNewProduct')
        .resolves(4);

      // act
      await productController.registerNewProduct(req, res, next);

      // assert
      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith({ id: 4, name: 'ProdutoX' });
    });
  });
});