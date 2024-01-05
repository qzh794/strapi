'use strict';

/**
 * web-admin router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::web-admin.web-admin');
