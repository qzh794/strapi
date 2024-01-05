'use strict';

/**
 * web-admin controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::web-admin.web-admin');
