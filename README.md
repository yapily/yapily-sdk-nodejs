# Yapily Node.js SDK
[![GitHub version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=gh&type=6&v=0.0.274&x2=0)](http://badge.fury.io/gh/boennemann%2Fbadges)

This SDK was generated using [Swagger Code Generator](https://github.com/swagger-api/swagger-codegen). The SDK can be used as a module in your code and the examples demonstrate how to connect
to financial institutions integrated with Yapily.

## Requirements

To connect to the Yapily API, you will need to register your 
application at [https://dashboard.yapily.com]().

These application credentials will be used to authorise all
your API requests.

## Installation

The SDK can be installed from [npm](https://www.npmjs.com/package/@yapily/yapily-api) and can be included in your 
project by adding it to your dependencies

#### npm

```bash
npm install @yapily/yapily-api
```

## Usage

Sample usage of the SDK can be seen in the `examples` folder. To run any of the examples, follow the steps below:

### Configure the application credentials

Go to constants.js and fill in the following credentials. The more complex exmples will require you to define all of these 
variables and will not work unless they are set.

```javascript
module.exports = {
    "APPLICATION_ID" : "{{APPLICATION_ID}}",
    "APPLICATION_SECRET" : "{{APPLICATION_SECRET}}",
    "APPLICATION_USER_ID": "node-sdk@yapily.com",
    "INSTITUTION_ID": "{{INSTITUTION_ID}}",
    "CALLBACK_URL": "{{CALLBACK_URL}}"
}
```

### Choose the example you wish to run

All of the examples can be found in one of the following subdirectories in the `examples` folder:

- Accounts
- Application
- Consents
- Institutions
- Users

You must first install the dependencies for each example in the parents directory by running `npm install` 
e.g. to run one of the `accounts` demos, first run: 

```
cd examples/accounts && npm install
```

### Run the example

Finally, run the example e.g. to run the `GetAccountDetailsWithNewConsent.js` demo, run:

```
node GetAccountDetailsWithNewConsent.js
```

## Further information

For more information on how to get connected, visit the [Yapily Knowledge Base](https://kb.yapily.com).

###### [Website](https://yapily.com) | [Legal](https://yapily.com/legal-policies) | [Contact Us](mailto:info@yapily.com) 
