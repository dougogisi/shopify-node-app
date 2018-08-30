const env = process.env.NODE_ENV;
const production = require('./production');
const development = require('./development');

// You should put any global variables in here.
const config = {
  SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY || '9c8ba7aa11e69ce7cc11ebdb34b488da',
  SHOPIFY_SHARED_SECRET: process.env.SHOPIFY_SHARED_SECRET || '2538d3d4ac8ffc2750696c6bd90000d4',
  APP_NAME: 'Web hooks',
  APP_STORE_NAME: 'Web hooks',
  APP_SCOPE: 'read_products,write_products,read_customers,write_customers',
  DATABASE_NAME: 'shopify_node_app',
};

if (env !== 'PRODUCTION') {
  module.exports = Object.assign({}, config, development);
} else {
  module.exports = Object.assign({}, config, production);
}
