'use strict';

var should = require('chai').should();
var paycore = require('../');

describe('Library', function() {
  it('should export primatives', function() {
    should.exist(paycore.crypto);
    should.exist(paycore.encoding);
    should.exist(paycore.util);
    should.exist(paycore.errors);
    should.exist(paycore.Address);
    should.exist(paycore.Block);
    should.exist(paycore.MerkleBlock);
    should.exist(paycore.BlockHeader);
    should.exist(paycore.HDPrivateKey);
    should.exist(paycore.HDPublicKey);
    should.exist(paycore.Networks);
    should.exist(paycore.Opcode);
    should.exist(paycore.PrivateKey);
    should.exist(paycore.PublicKey);
    should.exist(paycore.Script);
    should.exist(paycore.Transaction);
    should.exist(paycore.URI);
    should.exist(paycore.Unit);
  });
});
