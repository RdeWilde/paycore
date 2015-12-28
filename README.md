Paycore
=======

Infrastructure to build Paycoin and blockchain-based applications for the next generation of financial technology.

**Note:** If you're looking for the Paycore Library please see: https://github.com/bitpay/paycore-lib

## Getting Started

Before you begin you'll need to have Node.js v0.12 installed. There are several options for installation. One method is to use [nvm](https://github.com/creationix/nvm) to easily switch between different versions, or download directly from [Node.js](https://nodejs.org/).

```bash
npm install -g paycore
```

Spin up a full node and join the network:

```bash
npm install -g paycore
paycored
```

You can then view the Insight block explorer at the default location: `http://localhost:3001/insight`, and your configuration file will be found in your home directory at `~/.paycore`.

Create a transaction:
```js
var paycore = require('paycore');
var transaction = new paycore.Transaction();
var transaction.from(unspent).to(address, amount);
transaction.sign(privateKey);
```

To get community assistance and ask for help with implementation questions, please use our community forums.

## Security

We're using Paycore in production, as are many others, but please use common sense when doing anything related to finances! We take no responsibility for your implementation decisions.

If you find a security issue, please email security@paycoin.org.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/bitpay/paycore/blob/master/CONTRIBUTING.md) file.

This will generate files named `paycore.js` and `paycore.min.js`.

You can also use our pre-generated files, provided for each release along with a PGP signature by one of the project's maintainers. To get them, checkout a release commit (for example, https://github.com/bitpay/paycore/commit/e33b6e3ba6a1e5830a079e02d949fce69ea33546 for v0.12.6).

## License

Code released under [the MIT license](https://github.com/bitpay/paycore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Paycore is a trademark maintained by BitPay, Inc.
