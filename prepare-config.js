require('dotenv/config');
const fs = require('fs');

const productionDevelopmentTest = (prod, dev, test) => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return prod;
    case 'development':
      return dev;
    case 'test':
      return test;
    default:
      throw 'Undefined environment';
  }
};

const configFile = productionDevelopmentTest('prod-config.json', 'dev-config.json', 'test-config.json');
const configData = JSON.parse(fs.readFileSync(configFile).toString());

fs.writeFileSync("faucet-sensitive.json", JSON.stringify({
  FAUCET_ADDRESS: process.env.FAUCET_ADDRESS || configData.FAUCET_ADDRESS,
  FAUCET_PRIVATE_KEY: process.env.FAUCET_PRIVATE_KEY || configData.FAUCET_PRIVATE_KEY,
}, null, 2))
fs.writeFileSync(configFile, JSON.stringify({
  ...configData,
  RSK_NODE: process.env.RSK_NODE || configData.RSK_NODE,
  API_URL: process.env.API_URL || configData.API_URL,
  SECRET_VERIFY_CAPTCHA: process.env.SECRET_VERIFY_CAPTCHA || configData.SECRET_VERIFY_CAPTCHA,
  SITE_KEY_CAPTCHA: process.env.SITE_KEY_CAPTCHA || configData.SITE_KEY_CAPTCHA,
  FAUCET_ADDRESS: process.env.FAUCET_ADDRESS || configData.FAUCET_ADDRESS,
  FAUCET_PRIVATE_KEY: process.env.FAUCET_PRIVATE_KEY || configData.FAUCET_PRIVATE_KEY,
  GAS_PRICE: Number(process.env.GAS_PRICE || configData.GAS_PRICE),
  GAS_LIMIT: Number(process.env.GAS_LIMIT || configData.GAS_LIMIT),
  VALUE_TO_DISPENSE: Number(process.env.VALUE_TO_DISPENSE || configData.VALUE_TO_DISPENSE),
}, null, 2))
