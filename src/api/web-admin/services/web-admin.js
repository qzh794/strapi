'use strict';

/**
 * web-admin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web-admin.web-admin');
